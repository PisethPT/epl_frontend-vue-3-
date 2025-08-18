<script setup>
import { defineProps } from 'vue';
import { useApiConfig } from '@/stores/apiConfig';
import { ElMessageBox } from 'element-plus';
import 
{
    ArrowRightBold,
    Edit,
    Plus,
} from '@element-plus/icons-vue'

const props = defineProps({
    team: {
        type: Object,
        required: true,
        default: () => ({
            id: 0,
            name: '',
            clubCrest: '',
            city: '',
            founded: 0,
            homeStadium: '',
            headCoach: '',
            teamThemeColor: '',
            websiteUrl: '',
        })
    }
});
const apiConfigStore = useApiConfig();
const TEAM_LOGOS_DIR = apiConfigStore.TEAM_LOGOS_DIR;

function showTeamDetails(team)
{
    const name = team?.name || 'N/A'
    const city = team?.city || 'N/A'
    const founded = team?.founded || 'N/A'
    const stadium = team?.homeStadium || 'N/A'
    const coach = team?.headCoach || 'N/A'
    const logoUrl = `${TEAM_LOGOS_DIR}${team?.clubCrest}`

    ElMessageBox.alert(
        `
        <div class="flex flex-row gap-3">
          <div class="block">
            <img src="${logoUrl}" alt="Club Crest" class="w-24 h-24 object-contain mx-auto my-4" />
          </div>
          <div class="block text-left">
            <h3 class="text-lg font-bold">${name}</h3>
            <p class="text-sm text-gray-600">City: ${city}</p>
            <p class="text-sm text-gray-600">Founded: ${founded}</p>
            <p class="text-sm text-gray-600">Stadium: ${stadium}</p>
            <p class="text-sm text-gray-600">Coach: ${coach}</p>
          </div>
        </div>
        `,
        {
            title: 'Team Detail',
            draggable: true,
            dangerouslyUseHTMLString: true,
            showClose: true,
            center: false,
            closeOnHashChange: true,
        }
    ).catch((err) =>
    {
        if (err !== 'cancel' && err !== 'close') console.error(err)
    })
}
</script>

<template>
    <el-card
        class="!bg-gradient-to-br from-[#28002b] to-[#330d36] !border-0 !rounded-2xl w-[90vw] sm:w-[45vw]  md:w-[45vw] lg:w-[30vw] xl:w-[23.5vw] m-2">
        <div class="flex items-center gap-4">
            <div class="rounded-[14px] mt-2 px-1" :style="{ backgroundColor: team.teamThemeColor }">
                <img :src="TEAM_LOGOS_DIR + team.clubCrest" alt="Club Crest" class="w-12 h-12 object-contain mx-auto" />
            </div>
            <div class="flex justify-between items-center w-full">
                <h3 class="text-lg font-bold text-center text-white text-wrap">{{ team.name }}</h3>
                <el-icon>
                    <ArrowRightBold class="text-white text-xs hover:cursor-pointer" @click="showTeamDetails(team)" />
                </el-icon>
            </div>
        </div>

        <div class="flex justify-between gap-3 mt-4 ">
            <a href="#"
                class="!bg-[#4b1254] text-white rounded-3xl text-xs py-2 px-6 hover:!bg-[#1e0021b9] w-full text-center hover:cursor-pointer">
                Follow
            </a>
            <a :href="team.websiteUrl" target="_blank"
                class="!bg-[#4b1254] text-white rounded-3xl text-xs py-2 px-6 hover:!bg-[#1e0021b9] w-full text-center hover:cursor-pointer">
                Visit website
                <el-icon>
                    <Edit />
                </el-icon>
            </a>
        </div>
    </el-card>
</template>
