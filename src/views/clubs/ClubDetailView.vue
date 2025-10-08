<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useTeamStore } from '@/stores';
import TeamInfoCard from '@/components/TeamInfoCard.vue';
import { PLApps } from '@/stores/plApp';
import { ArrowDown, ArrowRightBold, ArrowUp } from '@element-plus/icons-vue';

const route = useRoute();
const teamStore = useTeamStore();
const clubId = ref(route.params.id);
const clubDetails = ref(null);
const isPrevious = ref(true);
const isPreviousActive = ref('#1e0021');
const isUpcomingActive = ref('');
const dataTable = ref([
    {
        pos: 1,
        isUp: true,
        team: {
            id: 12,
            name: 'Liverpool',
            clubCrest: 'liv.png',
        },
        pi: 3,
        w: 3,
        gd: 4,
        pts: 9,
    },
    {
        pos: 2,
        isUp: true,
        team: {
            id: 6,
            name: 'Chelsea',
            clubCrest: 'che.png',
        },
        pi: 3,
        w: 2,
        gd: 6,
        pts: 7,
    },
    {
        pos: 3,
        isUp: false,
        team: {
            id: 1,
            name: 'Arsenal',
            clubCrest: 'ars.png',
        },
        pi: 3,
        w: 2,
        gd: 5,
        pts: 6,
    },
    {
        pos: 4,
        isUp: false,
        team: {
            id: 19,
            name: 'Tottenham Hotspur',
            clubCrest: 'tot.svg',
        },
        pi: 3,
        w: 2,
        gd: 4,
        pts: 6,
    },
    {
        pos: 5,
        isUp: true,
        team: {
            id: 8,
            name: 'Everton',
            clubCrest: 'eve.png',
        },
        pi: 3,
        w: 2,
        gd: 2,
        pts: 6,
    },
    {
        pos: 6,
        isUp: true,
        team: {
            id: 10,
            name: 'Sunderland',
            clubCrest: 'sun.svg',
        },
        pi: 3,
        w: 2,
        gd: 2,
        pts: 6,
    },
    {
        pos: 7,
        isUp: true,
        team: {
            id: 1,
            name: 'Bournemouth',
            clubCrest: 'bou.png',
        },
        pi: 3,
        w: 2,
        gd: 0,
        pts: 6,
    },
    {
        pos: 8,
        isUp: true,
        team: {
            id: 1,
            name: 'Crystal Palace',
            clubCrest: 'cry.png',
        },
        pi: 3,
        w: 1,
        gd: 3,
        pts: 5,
    },
    {
        pos: 9,
        isUp: true,
        team: {
            id: 15,
            name: 'Manchester United',
            clubCrest: 'mun.png',
        },
        pi: 3,
        w: 1,
        gd: 0,
        pts: 4,
    },
]);

// return class for the 3rd row (index 2) OR use row.pos to match value
const tableRowClassName = ({ row, rowIndex }) =>
{
    if (rowIndex === 2 || row.pos === 3) return 'warning-row'
    return ''
}

onMounted(async () =>
{
    await fetchClubDetails();
})

const fetchClubDetails = async () =>
{
    try
    {
        const response = await teamStore.getTeamById(clubId.value);
        clubDetails.value = response;
        console.log('Club Details:', clubDetails.value);
    } catch (error)
    {
        console.error('Error fetching club details:', error);
    }
};

function toggleMatchView(view)
{
    if (view === 'previous')
    {
        isPrevious.value = true;
        isPreviousActive.value = '#1e0021';
        isUpcomingActive.value = '';
    } else if (view === 'upcoming')
    {
        isPrevious.value = false;
        isPreviousActive.value = '';
        isUpcomingActive.value = '#1e0021';
    }
}

</script>

<template>

    <!-- currently match -->
    <div class="flex justify-start items-center gap-2 w-full p-5 flex-wrap">
        <h2 class="text-sm font-bold text-white">Mon 1 Sep</h2>
        <div class="flex justify-center items-center gap-2 !bg-[#28002b] rounded-md px-2 py-1 w-auto">
            <span class="text-white font-semibold text-sm text-center">FT</span>
            <div class="flex flex-row items-center justify-start gap-2">
                <span class="text-white font-semibold text-sm text-center truncate">Aston Villa</span>
                <img :src="teamStore.TEAM_LOGOS_DIR + 'avl.png'" alt="Club Logo" class="h-5 w-5" />
            </div>
            <div class="!bg-[#1e0021] h-6 w-auto flex justify-center items-center px-3 rounded-md">
                <span class="text-white font-bold text-sm text-center">2 - 1</span>
            </div>
            <div class="flex flex-row items-center gap-2 justify-start">
                <img :src="teamStore.TEAM_LOGOS_DIR + 'cry.png'" alt="Opponent Logo" class="h-5 w-5" />
                <span class="text-white font-semibold text-sm text-center truncate">Crystal Palace</span>
            </div>
        </div>
        <button class="!bg-[#28002b] text-white text-sm rounded-md px-2 py-[6px] cursor-pointer">View all
            Matches</button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-4 py-4 px-3">
        <div class="flex flex-wrap gap-4 h-fit">
            <!-- team info card -->
            <TeamInfoCard v-if="clubDetails" :team="clubDetails" />

            <!-- club info -->
            <div v-if="clubDetails"
                class="!bg-[#28002b] rounded-2xl min-h-[80px] w-full p-5 flex flex-row justify-start items-center gap-20">
                <div class="flex justify-between flex-col gap-2">
                    <span class="text-xs text-gray-300">Est.</span>
                    <h3 v-if="clubDetails.founded" class="text-sm font-bold text-white">{{ clubDetails.founded }}</h3>
                </div>
                <div class="flex justify-between flex-col gap-2">
                    <span class="text-xs text-gray-300">Stadium</span>
                    <h3 v-if="clubDetails.homeStadium" class="text-sm font-bold text-white">{{ clubDetails.homeStadium
                    }}</h3>
                </div>
            </div>

            <!-- best news -->
            <div class="!bg-[#28002b] rounded-2xl h-[315px] w-full p-4">
                <div class="flex items-center justify-start flex-nowrap gap-2 w-full overflow-x-auto scrollbar-none">
                    <div class="relative h-full min-w-[180px] rounded-lg overflow-hidden">
                        <div class="absolute text-[10px] text-white bg-purple-600 px-2 rounded-lg left-1 top-1">New
                        </div>
                        <img src="/src/assets/club_best_news/arsenal_best_15_player.jpg" alt="" class="w-fit h-auto" />
                        <div class="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent">
                            <span class="absolute bottom-2 left-2 text-sm text-white font-bold">Arsenal Best 15
                                Players</span>
                        </div>
                    </div>

                    <div class="relative h-full min-w-[180px] rounded-lg overflow-hidden">
                        <div class="absolute text-[10px] text-white bg-purple-600 px-2 rounded-lg left-1 top-1">New
                        </div>
                        <img src="/src/assets/club_best_news/arsenal_best_skill_2025.jpg" alt="" class="w-fit h-auto" />
                        <div class="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent">
                            <span class="absolute bottom-2 left-2 text-sm text-white font-bold">Arsenal Best Skills of
                                24/25</span>
                        </div>
                    </div>

                    <div class="relative h-full min-w-[180px] rounded-lg overflow-hidden">
                        <div class="absolute text-[10px] text-white bg-purple-600 px-2 rounded-lg left-1 top-1">New
                        </div>
                        <img src="/src/assets/club_best_news/arsenal_best_assist.jpg" alt="" class="w-fit h-auto" />
                        <div class="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent">
                            <span class="absolute bottom-2 left-2 text-sm text-white font-bold">Arsenal Best Assists of
                                24/25</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-wrap gap-4 h-fit">
            <!-- nav bar -->
            <nav class=" text-white p-4 rounded-2xl w-full overflow-x-auto">
                <ul class="flex space-x-4 min-w-max w-full">
                    <li>
                        <a href="#"
                            class="font-bold active:font-bold border-b-4 pb-1 border-white rounded-b-md transition-all no-underline">
                            Overview
                        </a>
                    </li>
                    <li><a href="#"
                            class="font-bold active:font-bold hover:border-b-4 pb-1 hover:border-white hover:rounded-t-md rounded-b-md transition-all no-underline">News</a>
                    </li>
                    <li><a href="#"
                            class="font-bold active:font-bold hover:border-b-4 pb-1 hover:border-white hover:rounded-t-md rounded-b-md transition-all no-underline">Videos</a>
                    </li>
                    <li><a href="#"
                            class="font-bold active:font-bold hover:border-b-4 pb-1 hover:border-white hover:rounded-t-md rounded-b-md transition-all no-underline">Squad</a>
                    </li>
                    <li><a href="#"
                            class="font-bold active:font-bold hover:border-b-4 pb-1 hover:border-white hover:rounded-t-md rounded-b-md transition-all no-underline">Stats</a>
                    </li>
                    <li><a href="#"
                            class="font-bold active:font-bold hover:border-b-4 pb-1 hover:border-white hover:rounded-t-md rounded-b-md transition-all no-underline">Stadium</a>
                    </li>
                    <li><a href="#"
                            class="font-bold active:font-bold hover:border-b-4 pb-1 hover:border-white hover:rounded-t-md rounded-b-md transition-all no-underline">Tickets</a>
                    </li>
                    <li><a href="#"
                            class="font-bold active:font-bold hover:border-b-4 pb-1 hover:border-white hover:rounded-t-md rounded-b-md transition-all no-underline">Directory</a>
                    </li>
                </ul>

            </nav>

            <!-- next match -->
            <div class="!bg-[#28002b] rounded-2xl h-[205px] w-full p-4">
                <div class="font-bold text-md text-white">Next Match</div>
                <div class="flex justify-center flex-col items-center h-[70%] w-full">
                    <div class="mt-4 flex items-center justify-between w-full max-w-xl mx-auto">
                        <div class="flex flex-row items-center w-2/5 justify-end gap-2">
                            <span class="text-white font-semibold text-xs text-center truncate">{{ clubDetails ?
                                clubDetails.name : '' }}</span>
                            <img :src="clubDetails ? teamStore.TEAM_LOGOS_DIR + clubDetails.clubCrest : ''"
                                alt="Club Logo" class="h-5 w-5" />
                        </div>
                        <div class="flex flex-col items-center w-1/5">
                            <span class="text-gray-300 text-lg font-bold">12:30</span>
                        </div>
                        <div class="flex flex-row items-center gap-2 w-2/5 justify-start">
                            <img :src="teamStore.TEAM_LOGOS_DIR + 'nf.svg'" alt="Opponent Logo" class="h-5 w-5" />
                            <span class="text-white font-semibold text-xs text-center truncate">Nottingham Forest</span>
                        </div>
                    </div>

                    <div class="flex justify-center items-center w-full max-w-xl mx-auto mt-2">
                        <span class="text-gray-400 text-xs">Premier League • Sat 13 Sep</span>
                    </div>
                </div>
            </div>

            <!-- last starting 11 -->
            <div class="relative !bg-[#28002b] rounded-2xl h-[680px] w-full z-10 overflow-hidden">
                <div
                    class="absolute left-1/2 -bottom-20 -translate-x-1/2 w-38 h-38 rounded-full border-2 border-[#4b1254]">
                </div>
                <div class="w-full p-4">
                    <div class="flex justify-between">
                        <span class="font-bold text-md text-white">Last Starting 11</span>
                        <button
                            class="font-bold text-xs text-white !bg-[#37003c] px-3 py-2 rounded-2xl cursor-pointer">See
                            all
                            <el-icon>
                                <ArrowRightBold class="text-white text-xs hover:cursor-pointer" />
                            </el-icon>
                        </button>
                    </div>

                    <div
                        class="flex justify-center flex-col items-center h-auto w-full bg-[#37003c] rounded-2xl mt-4 p-3">
                        <div class="flex items-center justify-between w-full max-w-xl mx-auto p-2">
                            <div class="flex flex-row items-center w-2/5 justify-end gap-2">
                                <span class="text-white font-semibold text-xs text-center truncate">Liverpool</span>
                                <img :src="teamStore.TEAM_LOGOS_DIR + 'liv.png'" alt="Club Logo" class="h-5 w-5" />
                            </div>
                            <div class="flex flex-col justify-center items-center gap-1 w-1/5">
                                <div class="bg-[#1e0021] h-6 w-auto flex justify-center items-center px-3 rounded-sm">
                                    <span class="text-white font-bold text-sm text-center">1 - 0</span>
                                </div>
                                <span class="text-gray-300 text-xs font-bold">FT</span>
                            </div>
                            <div class="flex flex-row items-center gap-2 w-2/5 justify-start">
                                <img :src="clubDetails ? teamStore.TEAM_LOGOS_DIR + clubDetails.clubCrest : ''"
                                    alt="Opponent Logo" class="h-5 w-5" />
                                <span class="text-white font-semibold text-xs text-center truncate">{{ clubDetails ?
                                    clubDetails.name : '' }}</span>
                            </div>
                        </div>

                        <div class="flex justify-center items-center w-full max-w-xl mx-auto">
                            <span class="text-gray-400 text-xs">Matchweek 3 • Sun 31 Aug</span>
                        </div>
                    </div>

                    <div class="flex mt-6 flex-row gap-1">
                        <span class="text-sm text-gray-400">Manager</span>
                        <span class="text-sm text-white font-bold">Mikel Arteta</span>
                    </div>
                </div>

                <div
                    class="flex justify-between items-center flex-col w-full h-auto border-t-2 border-t-[#4b1254] mt-3">
                    <div
                        class="flex items-center flex-col w-70 h-28 border-b-2 border-r-2 border-l-2 border-[#4b1254] bg-[#28002b]">
                        <div class="w-22 h-9 border-b-2 border-r-2 border-l-2 border-[#4b1254]"></div>

                        <div class="relative w-full">
                            <div
                                class="absolute left-1/2 -translate-x-1/2 w-30 h-30 rounded-full border-2 border-[#4b1254] -z-1">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="flex flex-wrap gap-4 h-fit mt-[71px]">
            <!-- team form -->
            <div class="!bg-[#28002b] rounded-2xl h-[205px] w-full p-4">
                <div class="flex justify-between">
                    <span class="font-bold text-md text-white">Team Form <el-icon>
                            <ArrowRightBold class="text-white text-xs hover:cursor-pointer" />
                        </el-icon></span>
                    <div class="!bg-[#37003c] flex justify-center items-center gap-0 px-1 py-1 rounded-sm">
                        <button v-on:click="toggleMatchView('previous')" :style="{ backgroundColor: isPreviousActive }"
                            class="font-bold text-xs text-white  px-3 py-2 rounded-sm cursor-pointer">Previous
                        </button>
                        <button v-on:click="toggleMatchView('upcoming')" :style="{ backgroundColor: isUpcomingActive }"
                            class="font-bold text-xs text-white  px-3 py-2 rounded-sm cursor-pointer">Upcoming
                        </button>
                    </div>
                </div>

                <div class="flex flex-row items-center gap-2 w-2/5 justify-start">
                    <img :src="clubDetails ? teamStore.TEAM_LOGOS_DIR + clubDetails.clubCrest : ''" alt="Opponent Logo"
                        class="h-5 w-5" />
                    <span class="text-white font-semibold text-xs text-center truncate">{{ clubDetails ?
                        clubDetails.name : '' }}</span>
                </div>

                <div class="flex justify-start items-center gap-2 w-full overflow-x-auto scrollbar-none">
                    <div v-if="isPrevious" class="flex flex-row gap-4 p-2">
                        <div class="flex justify-center items-center flex-col rounded-sm w-25 gap-1">
                            <span class="text-gray-500 font-bold text-[10px] text-center">MW 1</span>
                            <img :src="teamStore.TEAM_LOGOS_DIR + 'mun.png'" alt="Opponent Logo" class="h-10 w-10" />
                            <span class="text-gray-500 font-bold text-[10px]  text-center">MUN (A)</span>
                            <span
                                class="text-white font-bold text-xs text-center w-full bg-green-600 rounded-br-lg rounded-bl-lg">0
                                - 1</span>
                        </div>

                        <div class="flex justify-center items-center flex-col rounded-sm w-25 gap-1">
                            <span class="text-gray-500 font-bold text-[10px] text-center">MW 2</span>
                            <img :src="teamStore.TEAM_LOGOS_DIR + 'leed.svg'" alt="Opponent Logo" class="h-10 w-10" />
                            <span class="text-gray-500 font-bold text-[10px]  text-center">LEE (H)</span>
                            <span
                                class="text-white font-bold text-xs text-center w-full bg-green-600 rounded-br-lg rounded-bl-lg">5
                                - 0</span>
                        </div>

                        <div class="flex justify-center items-center flex-col rounded-sm w-25 gap-1">
                            <span class="text-gray-500 font-bold text-[10px] text-center">MW 3</span>
                            <img :src="teamStore.TEAM_LOGOS_DIR + 'liv.png'" alt="Opponent Logo" class="h-10 w-10" />
                            <span class="text-gray-500 font-bold text-[10px]  text-center">LIV (A)</span>
                            <span
                                class="text-white font-bold text-xs text-center w-full bg-red-600 rounded-br-lg rounded-bl-lg">1
                                - 0</span>
                        </div>
                    </div>

                    <div v-else class="flex flex-row gap-4 p-2">
                        <div class="flex justify-center items-center flex-col rounded-sm w-25 gap-1">
                            <span class="text-gray-500 font-bold text-[10px] text-center">MW 4</span>
                            <img :src="teamStore.TEAM_LOGOS_DIR + 'nf.svg'" alt="Opponent Logo" class="h-10 w-10" />
                            <span class="text-gray-500 font-bold text-[10px]  text-center">NFO (H)</span>
                            <span
                                class="text-white font-bold text-xs text-center w-full bg-[#4b1254] rounded-br-lg rounded-bl-lg">13
                                Sep</span>
                        </div>

                        <div class="flex justify-center items-center flex-col rounded-sm w-25 gap-1">
                            <span class="text-gray-500 font-bold text-[10px] text-center">MW 5</span>
                            <img :src="teamStore.TEAM_LOGOS_DIR + 'mci.png'" alt="Opponent Logo" class="h-10 w-10" />
                            <span class="text-gray-500 font-bold text-[10px]  text-center">MCI (H)</span>
                            <span
                                class="text-white font-bold text-xs text-center w-full bg-[#4b1254] rounded-br-lg rounded-bl-lg">21
                                Sep</span>
                        </div>

                        <div class="flex justify-center items-center flex-col rounded-sm w-25 gap-1">
                            <span class="text-gray-500 font-bold text-[10px] text-center">MW 6</span>
                            <img :src="teamStore.TEAM_LOGOS_DIR + 'new.png'" alt="Opponent Logo" class="h-10 w-10" />
                            <span class="text-gray-500 font-bold text-[10px]  text-center">NEW (A)</span>
                            <span
                                class="text-white font-bold text-xs text-center w-full bg-[#4b1254] rounded-br-lg rounded-bl-lg">28
                                Sep</span>
                        </div>
                        <div class="flex justify-center items-center flex-col rounded-sm w-25 gap-1">
                            <span class="text-gray-500 font-bold text-[10px] text-center">MW 7</span>
                            <img :src="teamStore.TEAM_LOGOS_DIR + 'sou.png'" alt="Opponent Logo" class="h-10 w-10" />
                            <span class="text-gray-500 font-bold text-[10px]  text-center">SOU (H)</span>
                            <span
                                class="text-white font-bold text-xs text-center w-full bg-[#4b1254] rounded-br-lg rounded-bl-lg">04
                                Oct</span>
                        </div>
                        <div class="flex justify-center items-center flex-col rounded-sm w-25 gap-1">
                            <span class="text-gray-500 font-bold text-[10px] text-center">MW 8</span>
                            <img :src="teamStore.TEAM_LOGOS_DIR + 'ful.png'" alt="Opponent Logo" class="h-10 w-10" />
                            <span class="text-gray-500 font-bold text-[10px]  text-center">FUL (A)</span>
                            <span
                                class="text-white font-bold text-xs text-center w-full bg-[#4b1254] rounded-br-lg rounded-bl-lg">18
                                Oct</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- table -->
            <div class="bg-[#28002b] rounded-2xl h-[800px] w-full flex flex-col">
                <!-- header -->
                <div class="flex justify-between p-4">
                    <span class="font-bold text-md text-white flex items-center gap-1">
                        Table
                        <ArrowRightBold class="text-white text-xs hover:cursor-pointer" />
                    </span>
                </div>

                <!-- title -->
                <div class="flex justify-start items-center w-full px-4 text-5xl text-white font-bold">
                    3<sup>rd</sup>
                </div>

                <!-- subtitle -->
                <div class="flex justify-end items-center gap-1 w-full px-4 text-gray-400 font-bold">
                    <ArrowDown class="text-pink-600 text-sm bg-[#4b1254] rounded-full w-4 h-4" />
                    <span class="text-white text-xs">Down 1 place from MW2</span>
                </div>

                <!-- custom table -->
                <div class="flex-1 overflow-y-auto mt-4 mx-4 rounded-lg">
                    <!-- header row -->
                    <div
                        class="grid grid-cols-[70px_200px_1fr] text-[#6a7282] font-normal text-sm border-b border-[#3a0040]">
                        <!-- Pos -->
                        <div class="sticky left-0 bg-[#28002b] z-10 p-3 text-center">Pos</div>
                        <!-- Team -->
                        <div class="sticky left-[70px] bg-[#28002b] z-10 p-3">Team</div>
                        <!-- Stats -->
                        <div class="flex justify-end gap-8 p-3 pr-6">
                            <span>PI</span>
                            <span>W</span>
                            <span>GD</span>
                            <span>Pts</span>
                        </div>
                    </div>

                    <!-- body rows -->
                    <div v-for="row in dataTable" :key="row.pos"
                        class="relative grid grid-cols-[70px_200px_1fr] items-center text-white text-sm hover:bg-[#3a0040] rounded-lg transition h-[59px] mt-2"
                        :class="row.team.name === 'Arsenal' ? 'bg-[#3a0040]' : ''">
                        <!-- Pos -->
                        <div
                            class="sticky left-0 z-10 p-3 font-bold text-center flex items-center justify-center gap-1">
                            {{ row.pos }}
                            <ArrowUp v-if="row.isUp" class="text-green-600 w-3 h-3" />
                            <ArrowDown v-else class="text-red-600 w-3 h-3" />
                        </div>

                        <!-- Team -->
                        <div class="sticky left-[70px] z-10 p-3 font-bold flex items-center gap-2">
                            <img :src="row.team.clubCrest ? teamStore.TEAM_LOGOS_DIR + row.team.clubCrest : ''"
                                class="w-5 h-5 object-contain" alt="" />
                            <span>{{ row.team.name }}</span>
                        </div>

                        <!-- Stats -->
                        <div class="flex justify-end gap-11 p-3 pr-6">
                            <span>{{ row.pi }}</span>
                            <span>{{ row.w }}</span>
                            <span>{{ row.gd }}</span>
                            <span class="font-bold">{{ row.pts }}</span>
                        </div>

                        <!-- left indicator bar -->
                        <div v-if="row.pos <= 4" class="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-r-lg z-10">
                        </div>

                        <div v-else-if="row.pos == 5"
                            class="absolute left-0 top-0 h-full w-1 bg-orange-500 rounded-r-lg z-10"></div>

                    </div>
                </div>
            </div>

        </div>
    </div>

    <div class="flex gap-4 px-3 mt-4 mb-10">
        <div class="hidden lg:block lg:w-1/3">
        </div>
        <div class="flex flex-wrap justify-center gap-4 h-[110px] flex-1 lg:max-w-2/3">
            <img class=" rounded-2xl w-full lg:w-[75%]"
                src="/src/assets/sponsors/PL2526-ClubKits-Referral-Promos-_0000s_0000_ARS.webp" alt="" />
        </div>
    </div>

    <div class="flex gap-4 px-3 pt-4">
        <div class="hidden lg:block lg:w-1/3">
        </div>
        <div class="flex flex-wrap gap-4 h-fit flex-1 lg:max-w-2/3">
            <div class="flex justify-between items-center w-full">
                <span class="font-bold text-md text-white">Top Performers</span>
                <button class="font-bold text-xs text-white !bg-[#37003c] px-3 py-2 rounded-2xl cursor-pointer">See
                    all
                    <el-icon>
                        <ArrowRightBold class="text-white text-xs hover:cursor-pointer" />
                    </el-icon>
                </button>
            </div>

            <div class="flex flex-wrap gap-4 w-full h-full">
                <div class="flex flex-col !bg-[#28002b] rounded-2xl h-auto flex-1 min-w-[370px] p-4 gap-3">
                    <span class="font-bold text-md text-white">Top Goal Scorer<el-icon>
                            <ArrowRightBold class="text-white text-xs hover:cursor-pointer" />
                        </el-icon></span>
                    <div class="flex justify-start gap-3">
                        <div class="flex justify-center items-end rounded-2xl w-[85px] h-[85px] overflow-hidden"
                            :style="{ backgroundColor: clubDetails?.teamThemeColor || '#37003c' }">
                            <img src="/src/assets/players/jurriën_timber.png" alt="" class="w-19 h-auto object-cover">
                        </div>
                        <div class="flex flex-col items-start gap-0">
                            <h4 class="text-sm text-white font-bold">Jurriën</h4>
                            <h3 class="text-lg text-white font-bold">Timber</h3>
                            <h2 class="text-3xl text-white font-bold">2</h2>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col !bg-[#28002b] rounded-2xl h-auto flex-1 min-w-[370px] p-4 gap-3">
                    <span class="font-bold text-md text-white">Most Assists<el-icon>
                            <ArrowRightBold class="text-white text-xs hover:cursor-pointer" />
                        </el-icon></span>
                    <div class="flex justify-start gap-3">
                        <div class="flex justify-center items-end rounded-2xl w-[85px] h-[85px] overflow-hidden"
                            :style="{ backgroundColor: clubDetails?.teamThemeColor || '#37003c' }">
                            <img src="/src/assets/players/ricardo_calafiori.png" alt=""
                                class="w-19 h-auto object-cover">
                        </div>
                        <div class="flex flex-col items-start gap-0">
                            <h4 class="text-sm text-white font-bold">Riccardo</h4>
                            <h3 class="text-lg text-white font-bold">Calafiori</h3>
                            <h2 class="text-3xl text-white font-bold">2</h2>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col !bg-[#28002b] rounded-2xl h-auto flex-1 min-w-[370px] p-4 gap-3 flex-wrap">
                    <span class="font-bold text-md text-white">Most Successful Passes<el-icon>
                            <ArrowRightBold class="text-white text-xs hover:cursor-pointer" />
                        </el-icon></span>
                    <div class="flex justify-start gap-3">
                        <div class="flex justify-center items-end rounded-2xl w-[85px] h-[85px] overflow-hidden"
                            :style="{ backgroundColor: clubDetails?.teamThemeColor || '#37003c' }">
                            <img src="/src/assets/players/gabriel_magalhães.png" alt=""
                                class="w-19 h-auto object-cover">
                        </div>
                        <div class="flex flex-col items-start gap-0">
                            <h4 class="text-sm text-white font-bold">Gabriel</h4>
                            <h3 class="text-lg text-white font-bold">Magalhães</h3>
                            <h2 class="text-3xl text-white font-bold">143</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="flex gap-4 px-3 py-4">
        <div class="hidden lg:block lg:w-1/3">
        </div>
        <div
            class="flex items-start flex-wrap gap-4 !bg-[#28002b] rounded-2xl h-[auto] flex-1 lg:max-w-2/3 p-4 overflow-hidden">
            <div class="flex justify-between items-center w-full h-auto">
                <div class="flex justify-start items-center gap-2">
                    <div class="flex justify-center items-end rounded-xl w-[40px] h-[40px] p-1 overflow-hidden"
                        :style="{ backgroundColor: clubDetails?.teamThemeColor || '#37003c' }">
                        <img :src="clubDetails ? teamStore.TEAM_LOGOS_DIR + clubDetails.clubCrest : ''" alt="Club Logo"
                            class="w-full h-full object-contain">
                    </div>
                    <span class="font-bold text-md text-white">Form the clubs</span>
                </div>
                <button class="font-bold text-xs text-white !bg-[#37003c] px-3 py-2 rounded-2xl cursor-pointer">See
                    all
                    <el-icon>
                        <ArrowRightBold class="text-white text-xs hover:cursor-pointer" />
                    </el-icon>
                </button>
            </div>

            <div class="flex flex-wrap gap-4 w-full h-[205px]  overflow-auto">
                <div class="flex flex-col gap-2 flex-1 min-w-[370px]">
                    <div class="flex justify-center items-center rounded-2xl h-full p-4 gap-3"
                        :style="{ backgroundColor: clubDetails?.teamThemeColor || '#37003c' }">
                        <img :src="clubDetails ? teamStore.TEAM_LOGOS_DIR + clubDetails.clubCrest : ''" alt=""
                            class="w-23 h-auto object-cover">
                    </div>
                    <span class="text-sm text-white font-bold">
                        Rice score anm Madueke assists in England win
                    </span>
                </div>

                <div class="flex flex-col gap-2 flex-1 min-w-[370px]">
                    <div class="flex justify-center items-center rounded-2xl h-full p-4 gap-3"
                        :style="{ backgroundColor: clubDetails?.teamThemeColor || '#37003c' }">
                        <img :src="clubDetails ? teamStore.TEAM_LOGOS_DIR + clubDetails.clubCrest : ''" alt=""
                            class="w-23 h-auto object-cover">
                    </div>
                    <span class="text-sm text-white font-bold">
                        41 photos from our 4-1 win over London city
                    </span>
                </div>

                <div class="flex flex-col gap-2 flex-1 min-w-[370px]">
                    <div class="flex justify-center items-center rounded-2xl h-full p-4 gap-3"
                        :style="{ backgroundColor: clubDetails?.teamThemeColor || '#37003c' }">
                        <img :src="clubDetails ? teamStore.TEAM_LOGOS_DIR + clubDetails.clubCrest : ''" alt=""
                            class="w-23 h-auto object-cover">
                    </div>
                    <span class="text-sm text-white font-bold">
                        Renee Reflects on opening day win
                    </span>
                </div>
            </div>
        </div>
    </div>

    <div class="flex gap-4 px-3">
        <div class="hidden lg:block lg:w-1/3">
        </div>
        <div class="flex flex-col items-start gap-2 !bg-[#28002b] rounded-2xl h-auto flex-1 lg:max-w-2/3 p-4">
            <div v-for="app in PLApps" :key="app.id"
                class="flex justify-between items-center w-full px-3 py-2 rounded-xl hover:!bg-[#37003c]">
                <span class="font-bold text-md text-white">{{ app.title }}</span>
                <el-icon>
                    <ArrowRightBold class="text-white text-xs hover:cursor-pointer" />
                </el-icon>
            </div>

        </div>
    </div>
</template>

<style scoped>
nav::-webkit-scrollbar {
    height: 6px;
}

nav::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
}

nav::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 3px;
}

nav::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.6);
}

nav {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.4) rgba(255, 255, 255, 0.1);
}

.custom-scrollbar::-webkit-scrollbar {
    height: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
}

.scrollbar::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.6);
}

.custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.4) rgba(255, 255, 255, 0.1);
}

.scrollbar-none::-webkit-scrollbar {
    display: none;
}

.scrollbar-none {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>