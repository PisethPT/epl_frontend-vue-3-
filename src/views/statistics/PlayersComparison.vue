<script setup>
import { ref } from 'vue';
import { ArrowRight, Plus } from '@element-plus/icons-vue';
import BasePlayerComparison from '@/components/BasePlayerComparison.vue';

const fwdComparison = ref({
    playerOne: {
        info: {
            name: 'Haaland',
            photo: '223094.png',
            shortPosition: 'FWD',
        },
        club: {
            name: 'Manchester City',
            clubCrest: 'mci.png',
            clubTheme: '#7ab2e1',
        },
        sessions: '2025/26',
    },
    playerTwo: {
        info: {
            name: 'Wood',
            photo: '60689.png',
            shortPosition: 'FWD',
        },
        club: {
            name: 'Nottingham Forest',
            clubCrest: 'nf.svg',
            clubTheme: '#eb0024',
        },
        sessions: '2025/26',
    },
    comparisonsFields: [
        {
            label: 'Expected Goals',
            playerOnePoint: '7.43',
            playerTwoPoint: '2.73',
            playerOneMark: true,
            playerTwoMark: false,
        },
        {
            label: 'Assists',
            playerOnePoint: '1',
            playerTwoPoint: 'N/A',
            playerOneMark: false,
            playerTwoMark: true,
        },
        {
            label: 'Goals',
            playerOnePoint: '8',
            playerTwoPoint: '2',
            playerOneMark: true,
            playerTwoMark: false,
        },
        {
            label: 'Appearances',
            playerOnePoint: '6',
            playerTwoPoint: '6',
            playerOneMark: true,
            playerTwoMark: true,
        },
        {
            label: 'GoalInvolvements',
            playerOnePoint: '1.33',
            playerTwoPoint: '0.33',
            playerOneMark: true,
            playerTwoMark: false,
        },
    ],
});

const midComparison = ref({
    playerOne: {
        info: {
            name: 'Ødegaard',
            photo: 'martin_qdegaard.png',
            shortPosition: 'MID',
        },
        club: {
            name: 'Arsenal',
            clubCrest: 'ars.png',
            clubTheme: '#ff0000',
        },
        sessions: '2025/26',
    },
    playerTwo: {
        info: {
            name: 'Eze',
            photo: '232413.png',
            shortPosition: 'MID',
        },
        club: {
            name: 'Arsenal',
            clubCrest: 'ars.png',
            clubTheme: '#ff0000',
        },
        sessions: '2025/26',
    },
    comparisonsFields: [
        {
            label: 'Expected Goals',
            playerOnePoint: '0.14',
            playerTwoPoint: '0.24',
            playerOneMark: false,
            playerTwoMark: true,
        },
        {
            label: 'Total Passes',
            playerOnePoint: '93',
            playerTwoPoint: '77',
            playerOneMark: true,
            playerTwoMark: false,
        },
        {
            label: 'Total Tackles',
            playerOnePoint: '2',
            playerTwoPoint: '2',
            playerOneMark: true,
            playerTwoMark: true,
        },
        {
            label: 'Goals',
            playerOnePoint: 'N/A',
            playerTwoPoint: 'N/A',
            playerOneMark: true,
            playerTwoMark: true,
        },
        {
            label: 'Assists',
            playerOnePoint: 'N/A',
            playerTwoPoint: '2',
            playerOneMark: false,
            playerTwoMark: true,
        },
        {
            label: 'GoalInvolvements',
            playerOnePoint: 'N/A',
            playerTwoPoint: 'N/A',
            playerOneMark: true,
            playerTwoMark: true,
        },
    ],
});

const defComparison1 = ref({
    playerOne: {
        info: {
            name: 'Milenkovic',
            photo: '227444.png',
            shortPosition: 'DEF',
        },
        club: {
            name: 'Nottingham Forest',
            clubCrest: 'nf.svg',
            clubTheme: '#eb0024',
        },
        sessions: '2025/26',
    },
    playerTwo: {
        info: {
            name: 'van Dijk',
            photo: '97032.png',
            shortPosition: 'DEF',
        },
        club: {
            name: 'Liverpool',
            clubCrest: 'liv.png',
            clubTheme: '#ffffff',
        },
        sessions: '2025/26',
    },
    comparisonsFields: [
        {
            label: 'Clean Sheets',
            playerOnePoint: 'N/A',
            playerTwoPoint: '2',
            playerOneMark: false,
            playerTwoMark: true,
        },
        {
            label: 'Goals Conceded',
            playerOnePoint: '10',
            playerTwoPoint: '7',
            playerOneMark: true,
            playerTwoMark: false,
        },
        {
            label: 'Total Tackles',
            playerOnePoint: '2',
            playerTwoPoint: '3',
            playerOneMark: false,
            playerTwoMark: true,
        },
        {
            label: 'Clearances',
            playerOnePoint: '28',
            playerTwoPoint: '55',
            playerOneMark: false,
            playerTwoMark: true,
        }
    ],
});

const defComparison2 = ref({
    playerOne: {
        info: {
            name: 'Aina',
            photo: '159506.png',
            shortPosition: 'DEF',
        },
        club: {
            name: 'Nottingham Forest',
            clubCrest: 'nf.svg',
            clubTheme: '#eb0024',
        },
        sessions: '2025/26',
    },
    playerTwo: {
        info: {
            name: 'Muñoz',
            photo: '247348.png',
            shortPosition: 'DEF',
        },
        club: {
            name: 'Crystal Palace',
            clubCrest: 'cry.png',
            clubTheme: '#ee2e24',
        },
        sessions: '2025/26',
    },
    comparisonsFields: [
        {
            label: 'Clean Sheets',
            playerOnePoint: 'N/A',
            playerTwoPoint: '3',
            playerOneMark: false,
            playerTwoMark: true,
        },
        {
            label: 'Goals Conceded',
            playerOnePoint: '5',
            playerTwoPoint: '3',
            playerOneMark: true,
            playerTwoMark: false,
        },
        {
            label: 'Total Tackles',
            playerOnePoint: '6',
            playerTwoPoint: '12',
            playerOneMark: false,
            playerTwoMark: true,
        },
        {
            label: 'Clearances',
            playerOnePoint: '11',
            playerTwoPoint: '20',
            playerOneMark: false,
            playerTwoMark: true,
        }
    ],
});


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
            <BasePlayerComparison :comparisons="fwdComparison" />
            <BasePlayerComparison :comparisons="midComparison" />
            <BasePlayerComparison :comparisons="defComparison1" />
            <BasePlayerComparison :comparisons="defComparison2" />
        </div>
    </div>

</template>
