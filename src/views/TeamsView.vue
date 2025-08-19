<script setup>
import { ref, onMounted, onUpdated, computed } from 'vue';
import TeamCard from '@/components/TeamCard.vue';
import { useTeamStore } from "@/stores/teamStore";
import { ElMessage } from 'element-plus';
import
{
    ArrowRightBold,
    Edit,
    Plus,
    Search,
} from '@element-plus/icons-vue'

const teamStore = useTeamStore();
const query = ref('');
const loading = ref(false);

onMounted(async () =>
{
    try
    {
        await teamStore.getTeams();
    } catch (error)
    {
        console.log('error: ' + error);
        ElMessage.error('error on mount: ' + error);
    } finally
    {
        loading.value = false;
    }
});

const teams = computed(() => teamStore.searchTeams(query.value));
</script>

<template>
    <div class="content-center">
        <h1
            class="text-white text-5xl font-bold !bg-gradient-to-br from-[#28002b] to-[#330d36] px-3 py-4 mx-3 my-6 rounded-2xl">
            Clubs
        </h1>
        <div class="flex justify-between flex-wrap">
            <h1 class="ml-5 font-bold text-2xl text-white">2025/26 Season Clubs</h1>
            <!-- <el-input v-model="query" class="!sm:w-full" style="width: 500px; min-width: auto; margin: 10px 20px; background: #37003c!important;"
                size="small" placeholder="Search ..." :prefix-icon="Search" clearable /> -->
        </div>
        <div class="flex justify-center w-full flex-wrap">
            <div v-for="team in teams" :key="team.id">
                <TeamCard :team="team"></TeamCard>
            </div>
        </div>
    </div>

    <div class="content-center">
        <h1 class="m-3 font-bold text-2xl text-white">All-time Premier League Clubs</h1>
        <el-card
            class="!bg-gradient-to-br from-[#28002b] to-[#330d36] !rounded-2xl !border-0 mb-4 mx-3 custom-card overflow-hidden">
            <template #header>
                <div class="flex items-center justify-between">
                    <h2 class="text-white font-bold text-sm w-1/3">Clubs</h2>
                    <div class="flex justify-between w-1/3">
                        <h2 class="text-white font-bold text-sm w-1/3">Stadium</h2>
                        <h2 class="text-white font-bold text-sm w-1/3">Website</h2>
                        <h2 class="text-white font-bold text-sm w-1/3">Follow</h2>
                    </div>
                </div>
            </template>

            <div class="divide-y divide-[#4b1254]">
                <div v-for="team in teams" :key="team.id"
                    class="flex items-center justify-between py-3 px-2 transition">
                    <div class="flex items-center gap-2 w-1/3">
                        <div class="rounded-[14px] px-[2px] min-w-12 min-h-12" :style="{ backgroundColor: team.teamThemeColor }">
                            <img :src="teamStore.TEAM_LOGO_DIR + team.clubCrest" alt="Club Crest"
                                class="w-12 h-12 p-1 object-contain mx-auto" />
                        </div>
                        <div class="flex gap-2 items-center w-full">
                            <h3 class="text-md font-bold text-center text-white text-wrap">{{ team.name }}</h3>
                            <el-icon>
                                <ArrowRightBold class="text-white text-xs hover:cursor-pointer" />
                            </el-icon>
                        </div>
                    </div>
                    <div class="flex w-1/3 gap-4 float-end">
                        <span class="text-white w-1/3 text-xs">{{ team.homeStadium }}</span>
                        <div class="text-white w-1/3">
                            <a :href="team.websiteUrl" target="_blank"
                                class="text-xs border-1 text-white rounded-3xl py-2 px-6 hover:bg-white hover:text-black w-full text-center hover:cursor-pointer">
                                Visit website
                                <el-icon>
                                    <Edit />
                                </el-icon>
                            </a>
                        </div>
                        <div class="text-white w-1/3">
                            <a :href="team.websiteUrl" target="_blank"
                                class="text-xs border-1 text-white rounded-3xl py-2 px-6 hover:bg-white hover:text-black w-full text-center hover:cursor-pointer">
                                Follow
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </el-card>
    </div>
</template>


<style scoped>
html,
body {
    background: #1e0021 !important;
}
</style>