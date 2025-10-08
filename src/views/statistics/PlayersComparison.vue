<script setup>
import { ref } from 'vue';
import { useApiConfig } from '@/stores/apiConfig';
import { ArrowRight, Plus } from '@element-plus/icons-vue';

const apiConfig = useApiConfig();
</script>

<template>
    <div class="mx-4 my-4">
        <h2 class="text-white md:text-3xl text-xl font-bold mb-4">Player Comparison</h2>

        <div class="flex flex-col gap-4 lg:w-1/2">
            <div class="flex flex-2 gap-4">
                <div class="bg-[#28002b] flex flex-col gap-2 items-center justify-center rounded-xl flex-1 p-5 h-27">
                    <button
                        class="flex items-center justify-center rounded-full bg-[#3e003f] w-10 h-10 hover:bg-[#55005a] cursor-pointer">
                        <el-icon>
                            <Plus class="text-white" />
                        </el-icon>
                    </button>
                    <span class="text-white text-xs">Click + to add player</span>
                </div>
                <div class="bg-[#28002b] flex flex-col gap-2 items-center justify-center rounded-xl flex-1 p-5 h-27">
                    <button
                        class="flex items-center justify-center rounded-full bg-[#3e003f] w-10 h-10 hover:bg-[#55005a] cursor-pointer">
                        <el-icon>
                            <Plus class="text-white" />
                        </el-icon>
                    </button>
                    <span class="text-white text-xs">Click + to add player</span>
                </div>
            </div>
            <div class="flex-2">
                <div class="flex bg-[#28002b] rounded-lg p-3 flex-2">
                    <a href="#"
                        class="hover:cursor-pointer hover:underline text-wrap text-center flex items-center justify-between w-full">
                        <span class="text-white text-sm">Some statistics are not available prior to the 2006/07 season.
                            Click here to more
                            details.</span>
                        <el-icon>
                            <ArrowRight class="text-lg text-white" />
                        </el-icon>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="mx-4 my-4">
        <h2 class="text-white md:text-3xl text-xl font-bold mb-4">Popular player comparisons</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            <div v-for="card in 4" class="bg-[#28002b] flex flex-col rounded-2xl w-full h-142">
                <div class="w-full h-auto">
                    <div class="mx-4 my-4 grid grid-cols-2 gap-2">
                        <div class="bg-[#3e003f] rounded-2xl h-45 w-full p-2">
                            <div class="flex flex-col gap-1">
                                <div
                                    class="bg-[#ff0000] flex justify-center rounded-2xl h-27 w-full overflow-hidden pt-2">
                                    <img :src="apiConfig.PLAYER_LOGOS_DIR + 'oleksandr_zinchenko.png'" alt="Club Crest"
                                        class="w-25 h-25 object-contain mx-auto" />
                                </div>
                                <div class="grid grid-rows-2 gap-3">
                                    <span class="text-white text-[11px] sm:text-xs md:text-sm lg:text-[12px] font-bold text-center whitespace-nowrap p-0">Oleksandr Zinchenko</span>
                                    <div class="flex justify-between mt-auto">
                                        <div class="flex gap-1 items-center">
                                            <img :src="apiConfig.TEAM_LOGOS_DIR + 'ars.png'" alt=""
                                                class="w-4 h-4 object-contain">
                                            <span class="text-white text-[10px]">Arsenal</span>
                                        </div>
                                        <span class="text-white text-[10px]">FWD</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bg-[#3e003f] rounded-2xl h-45 w-full p-2">
                            <div class="flex flex-col gap-1">
                                <div
                                    class="bg-[#480024] flex justify-center rounded-2xl h-27 w-full overflow-hidden pt-2">
                                    <img :src="apiConfig.PLAYER_LOGOS_DIR + 'emiliano_buendía.png'" alt="Club Crest"
                                        class="w-25 h-25 object-contain mx-auto" />
                                </div>
                                <div class="grid grid-rows-2 gap-3">
                                    <span class="text-white text-[11px] sm:text-xs md:text-sm lg:text-[12px] font-bold text-center whitespace-nowrap p-0">Emiliano Buendía </span>
                                    <div class="flex justify-between mt-auto">
                                        <div class="flex gap-1 items-center">
                                            <img :src="apiConfig.TEAM_LOGOS_DIR + 'avl.png'" alt=""
                                                class="w-4 h-4 object-contain">
                                            <span class="text-white text-[10px]">Aston Villa</span>
                                        </div>
                                        <span class="text-white text-[10px]">FWD</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col gap-5">
                    <div class="flex justify-between px-5">
                        <span class="text-white font-bold text-md">2025/26</span>
                        <span class="text-white font-normal text-md">Session</span>
                        <span class="text-white font-bold text-md">2025/26</span>
                    </div>

                    <div class="grid grid-cols-[50px_1fr_50px]">
                        <span class="text-white font-bold text-md border-[#ff0000] border-l-4 ps-4">7.43</span>
                        <span class="text-white font-normal text-md text-center">Expected goals</span>
                        <span class="text-white font-bold text-md text-end border-transparent border-r-4 pe-4">2.73</span>
                    </div>

                     <div class="grid grid-cols-[50px_1fr_50px]">
                        <span class="text-white font-bold text-md border-transparent border-l-4 ps-4">1</span>
                        <span class="text-white font-normal text-md text-center">Assist</span>
                        <span class="text-white font-bold text-md text-end border-[#480024] border-r-4 pe-4">N/A</span>
                    </div>

                    <div class="grid grid-cols-[50px_1fr_50px]">
                        <span class="text-white font-bold text-md border-[#ff0000] border-l-4 ps-4">8</span>
                        <span class="text-white font-normal text-md text-center">Goals</span>
                        <span class="text-white font-bold text-md text-end border-transparent border-r-4 pe-4">2</span>
                    </div>
                    <div class="grid grid-cols-[50px_1fr_50px]">
                        <span class="text-white font-bold text-md border-[#ff0000] border-l-4 ps-4">6</span>
                        <span class="text-white font-normal text-md text-center">Appearances</span>
                        <span class="text-white font-bold text-md text-end border-[#480024] border-r-4 pe-4">6</span>
                    </div>
                    <div class="grid grid-cols-[50px_1fr_50px]">
                        <span class="text-white font-bold text-md border-[#ff0000] border-l-4 ps-4">1.33</span>
                        <span class="text-white font-normal text-md text-center">Goal Involvements</span>
                        <span class="text-white font-bold text-md text-end border-transparent border-r-4 pe-4">0.33</span>
                    </div>

                </div>

                <div class="w-full px-4 py-4 mt-auto">
                    <button class="bg-white text-xs text-[#28002b] rounded-2xl w-full h-8 cursor-pointer">View full comparison </button>
                </div>
            </div>
        </div>
    </div>

</template>
