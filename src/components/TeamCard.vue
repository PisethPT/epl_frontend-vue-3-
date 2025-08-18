<script setup>
import { defineProps } from 'vue';
import { useApiConfig } from '@/stores/apiConfig';
import { ElMessageBox } from 'element-plus';
import 
{
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
    <el-card class="w-80 m-2 hover:shadow-pink-900 hover:cursor-pointer hover:shadow-2xl"
        @click="showTeamDetails(team)">
        <div v-if="team.websiteUrl" class="bg-gray-100 text-gray-900 rounded-md absolute py-1 px-2 hover:bg-gray-200">
            <a :href="team.websiteUrl" target="_blank" class="text-xs text-center">
                <el-icon>
                    <Plus />
                </el-icon>
                Follow
            </a>
        </div>
        <img :src="TEAM_LOGOS_DIR + team.clubCrest" alt="Club Crest" class="w-24 h-24 object-contain mx-auto my-4" />
        <h3 class="text-lg font-bold text-center">{{ team.name }}</h3>
        <p class="text-sm text-center text-gray-600">City: {{ team.city }}</p>
        <p class="text-sm text-center text-gray-600">Founded: {{ team.founded }}</p>
        <p class="text-sm text-center text-gray-600">Stadium: {{ team.homeStadium }}</p>
        <p class="text-sm text-center text-gray-600">Coach: {{ team.headCoach }}</p>
    </el-card>
</template>
