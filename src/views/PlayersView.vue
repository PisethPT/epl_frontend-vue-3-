<script setup>
import { ref, onMounted } from 'vue';
import { usePlayerStore } from '@/stores';
import nationalityData from '../assets/nationality.json';
import { ElMessage } from 'element-plus';
import
{
    ArrowRightBold,
    Search,
} from '@element-plus/icons-vue'

const playersStore = usePlayerStore();
const players = ref([]);
const query = ref('');
const loading = ref(false);

onMounted(async () =>
{
    try
    {
        await playersStore.getPlayers();
        players.value = playersStore.players;
    } catch (error)
    {
        console.log('error: ' + error);
        ElMessage.error('error on mount: ' + error);
    } finally
    {
        loading.value = false;
    }
});

</script>

<template>
    <div class="content-center">
        <h1
            class="text-white text-5xl font-bold !bg-gradient-to-br from-[#28002b] to-[#330d36] px-3 py-4 mx-3 my-6 rounded-2xl">
            Players
        </h1>
        <!-- <div class="flex justify-center flex-row m-2 flex-wrap gap-2">
            <el-input v-model="query" style="width: 500px; min-width: auto;" size="large" placeholder="Search ..."
                :suffix-icon="Search" />
        </div> -->

        <el-card
            class="!bg-gradient-to-br from-[#28002b] to-[#330d36] !rounded-2xl !border-0 mb-4 mx-3 custom-card overflow-hidden">
            <template #header>
                <div class="flex items-center justify-between">
                    <div class="flex justify-between w-2/4">
                        <h2 class="text-white font-bold text-sm w-1/2">Players</h2>

                        <div class="flex justify-evenly gap-2 ml-[60px] w-4/3">
                            <h2 class="text-white font-bold text-sm">Clubs</h2>
                            <h2 class="text-white font-bold text-sm ml-5">Position</h2>
                            <h2 class="text-white font-bold text-sm">Nationality</h2>
                        </div>
                    </div>
                    <div class="w-1/4 flex justify-end mr-[50px]">
                        <h2 class="text-white font-bold text-sm ">Follow</h2>
                    </div>
                </div>
            </template>

            <div class="divide-y divide-[#4b1254]">
                <div v-for="player in players" :key="player.id"
                    class="flex items-center justify-between py-3 px-2 transition">
                    <div class="flex justify-between w-2/4">
                        <div class="flex items-center gap-2 w-1/2">
                            <div class="rounded-[14px] px-[2px] min-w-12 min-h-12 text-center"
                                :style="{ backgroundColor: player.teamThemeColor }">
                                <img :src="playersStore.PLAYER_PHOTO_DIR + player.photo" alt="Club Crest"
                                    class="w-12 h-12 p-1 object-contain mx-auto" />
                            </div>
                            <div class="flex gap-2 items-center w-full">
                                <h3 class="text-md font-bold text-center text-white text-wrap">{{ player.firstName }} {{
                                    player.lastName
                                }}</h3>
                                <el-icon>
                                    <ArrowRightBold class="text-white text-xs hover:cursor-pointer" />
                                </el-icon>
                            </div>
                        </div>

                        <div class="flex justify-evenly w-2/3">
                            <div class="w-1/3 flex gap-2 items-center">
                                <div class="text-center">
                                    <img :src="playersStore.TEAM_LOGOS_DIR + player.teamClubCrest" alt=""
                                        class="w-7 h-7 object-contain mx-auto">
                                </div>
                                <span class="text-white text-xs text-center">{{ player.teamName }}</span>
                            </div>
                            <div class="w-1/3 flex items-center">
                                <span class="text-white text-xs text-end">{{ player.position }}</span>
                            </div>
                            <div class="flex items-center gap-2 w-1/3">
                                <div class="text-center">
                                    <img v-if="player.nationality"
                                        :src="nationalityData.nationalities.find((nat) => nat.name === player.nationality)?.icon"
                                        :alt="player.nationality" class="w-7 h-7 object-contain mx-auto">
                                </div>
                                <span class="text-white text-xs text-center">{{ player.nationality }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="w-1/4 flex justify-end">
                        <a v-if="player.socialMedia != ''" :href="player.socialMedia" target="_blank"
                            class=" text-xs border-1 text-white rounded-3xl py-2 px-6 hover:bg-white hover:text-black text-center hover:cursor-pointer">
                            Follow
                        </a>
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