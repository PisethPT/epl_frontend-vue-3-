<script setup>
import { ref } from 'vue';
import { useApiConfig } from '@/stores/apiConfig';
import PageTitleBase from '@/components/PageTitleBase.vue';
import
{
    Edit,
    ArrowRightBold,
    ArrowLeft,
    ArrowRight,
} from '@element-plus/icons-vue';
import SponsorBar from '@/components/SponsorBar.vue';
import BaseFilter from '@/components/BaseFilter.vue';

const title = ref('Matches');
const apiConfig = useApiConfig();
const sponsorImage = ref('/src/assets/sponsors/unmissable.webp');
const filters = ref([
    {
        id: 1,
        label: 'Premier League',
        tag: 'leagues',
    },
    {
        id: 2,
        label: '2025/26',
        tag: 'seasons',
    },
    {
        id: 3,
        label: 'MW11',
        tag: 'allMatchweeks',
    },
    {
        id: 4,
        label: 'Home & Alway',
        tag: 'homeAndAlway',
    },
]);


</script>

<template class="content-center">
    <SponsorBar :sponsorImage="sponsorImage" />
    <h1
        class="text-white text-5xl font-bold !bg-gradient-to-r from-[#943bff] to-[#25f1ff] px-4 py-4 mx-3 my-6 rounded-t-2xl sm:rounded-2xl md:rounded-2xl xl:rounded-2xl">
        {{ title }}
    </h1>


    <BaseFilter :isReset="true" :filters="filters" />

    <div class="flex flex-1 flex-col gap-4 mt-4">
        <div class="flex justify-center items-center w-full gap-10">
            <button
                class="flex items-center justify-center rounded-full bg-[#4b1254] w-10 h-10 hover:bg-[#6c0472] cursor-pointer">
                <el-icon>
                    <ArrowLeft class="text-white" />
                </el-icon>
            </button>
            <div class="flex justify-center items-center flex-col">
                <span class="text-white text-xl font-bold">Matchweek 11</span>
                <span class="text-white text-sm">Sat 8 Nov - Sun 9 Nov</span>
            </div>
            <button
                class="flex items-center justify-center rounded-full bg-[#4b1254] w-10 h-10 hover:bg-[#6c0472] cursor-pointer">
                <el-icon>
                    <ArrowRight class="text-white" />
                </el-icon>
            </button>
        </div>
    </div>
    <div class="!bg-gradient-to-br from-[#28002b] to-[#330d36] py-4 mx-3 my-6 rounded-2xl h-fit">
        <!-- tomorrow's matches -->
        <section class="mb-4">
            <div class="flex justify-between mx-4">
                <span class="font-bold text-md text-white">Sat 27 Sep</span>
                <button
                    class="font-bold !text-center text-xs text-white !bg-[#37003c] px-3 py-2 rounded-2xl cursor-pointer ">See
                    all
                    <el-icon>
                        <ArrowRightBold class="text-white text-center text-xs hover:cursor-pointer" />
                    </el-icon>
                </button>
            </div>

            <div v-for="value in 6" class="overflow-y-auto scrollbar-none hover:bg-[#330d36] mt-2">
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3x">
                    <div></div>
                    <router-link
                        :to="{ name: 'matches-detail', params: { matchId: '2562003', matchTitle: 'fulham-fc-vs-arsenal-fc' }, query: { tab: 'recap' } }"
                        class="flex flex-col justify-center items-center cursor-pointer">
                        <div
                            class="flex justify-center items-center gap-3 mb-2 border-b-2 border-[#37003c] py-3 w-[80%]">
                            <div class="text-white font-bold text-sm">Spurs</div>
                            <img :src="apiConfig.TEAM_LOGOS_DIR + 'tot.svg'" alt="Fulham"
                                class="w-8 h-8 object-contain" />
                            <span class="text-white font-bold text-lg">18:30</span>
                            <img :src="apiConfig.TEAM_LOGOS_DIR + 'menu.svg'" alt="menu"
                                class="w-8 h-8 object-contain" />
                            <div class="text-white font-bold text-sm">Man Utd</div>
                        </div>
                    </router-link>
                    <div class="flex md:justify-end justify-center items-center md:mr-5 cursor-pointer">
                        <a href="#" class="flex justify-center items-center bg-white rounded-sm w-14 h-6">
                            <img src="/src/assets/others/truevisi.png" alt="" class="w-9 object-contain" />
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Sun 28 Sep's matches -->
        <section class="mb-4">
            <div class="flex justify-between mx-4">
                <span class="font-bold text-md text-white">Sun 28 Sep</span>
                <button
                    class="font-bold !text-center text-xs text-white !bg-[#37003c] px-3 py-2 rounded-2xl cursor-pointer ">See
                    all
                    <el-icon>
                        <ArrowRightBold class="text-white text-center text-xs hover:cursor-pointer" />
                    </el-icon>
                </button>
            </div>

            <div v-for="value in 3" class="overflow-y-auto scrollbar-none hover:bg-[#330d36] mt-2">
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3x">
                    <div></div>
                    <router-link
                        :to="{ name: 'matches-detail', params: { matchId: '2562003', matchTitle: 'fulham-fc-vs-arsenal-fc' }, query: { tab: 'recap' } }"
                        class="flex flex-col justify-center items-center cursor-pointer">
                        <div
                            class="flex justify-center items-center gap-3 mb-2 border-b-2 border-[#37003c] py-3 w-[80%]">
                            <div class="text-white font-bold text-sm">Fulham</div>
                            <img :src="apiConfig.TEAM_LOGOS_DIR + 'ful.png'" alt="Fulham"
                                class="w-8 h-8 object-contain" />
                            <span class="text-white font-bold text-lg">18:30</span>
                            <img :src="apiConfig.TEAM_LOGOS_DIR + 'ars.png'" alt="Arsenal"
                                class="w-8 h-8 object-contain" />
                            <div class="text-white font-bold text-sm">Arsenal</div>
                        </div>
                    </router-link>
                    <div class="flex md:justify-end justify-center items-center md:mr-5 cursor-pointer">
                        <a href="#" class="flex justify-center items-center bg-white rounded-sm w-14 h-6">
                            <img src="/src/assets/others/truevisi.png" alt="" class="w-9 object-contain" />
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Tue 30 Sep's matches -->
        <section class="mb-4">
            <div class="flex justify-between mx-4">
                <span class="font-bold text-md text-white">Tue 30 Sep</span>
                <button
                    class="font-bold !text-center text-xs text-white !bg-[#37003c] px-3 py-2 rounded-2xl cursor-pointer ">See
                    all
                    <el-icon>
                        <ArrowRightBold class="text-white text-center text-xs hover:cursor-pointer" />
                    </el-icon>
                </button>
            </div>

            <div v-for="value in 1" class="overflow-y-auto scrollbar-none hover:bg-[#330d36] mt-2">
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3x">
                    <div></div>
                    <router-link
                        :to="{ name: 'matches-detail', params: { matchId: '2562003', matchTitle: 'fulham-fc-vs-arsenal-fc' }, query: { tab: 'recap' } }"
                        class="flex flex-col justify-center items-center cursor-pointer">
                        <div
                            class="flex justify-center items-center gap-3 mb-2 border-b-2 border-[#37003c] py-3 w-[80%]">
                            <div class="text-white font-bold text-sm">Fulham</div>
                            <img :src="apiConfig.TEAM_LOGOS_DIR + 'ful.png'" alt="Fulham"
                                class="w-8 h-8 object-contain" />
                            <span class="text-white font-bold text-lg">18:30</span>
                            <img :src="apiConfig.TEAM_LOGOS_DIR + 'ars.png'" alt="Arsenal"
                                class="w-8 h-8 object-contain" />
                            <div class="text-white font-bold text-sm">Arsenal</div>
                        </div>
                    </router-link>
                    <div class="flex md:justify-end justify-center items-center md:mr-5 cursor-pointer">
                        <a href="#" class="flex justify-center items-center bg-white rounded-sm w-14 h-6">
                            <img src="/src/assets/others/truevisi.png" alt="" class="w-9 object-contain" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <div class="!bg-gradient-to-br from-[#28002b] to-[#330d36] py-4 mx-3 my-13 rounded-2xl h-fit">
        <div class="flex justify-between mx-4">
            <div>
                <span class="font-bold text-md text-white">Possible Premier League Fixtures Changes in 2025/26</span>
                <p class="text-sm text-gray-400">Fixtures</p>
            </div>
            <a href="#">
                <img src="/src/assets/others/PUMA-ball-lead-image.webp" alt=""
                    class="w-[195px] rounded-2xl object-contain" />
            </a>
        </div>
    </div>
</template>


<style scoped>
html,
body {
    background: #1e0021 !important;
}

.scrollbar-none::-webkit-scrollbar {
    display: none;
}

.scrollbar-none {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>