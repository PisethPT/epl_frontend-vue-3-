<script setup>
import { ref, computed } from 'vue';
import { ArrowRight, Search } from '@element-plus/icons-vue';
import BasePlayerComparison from '@/components/BasePlayerComparison.vue';
import BasePlayerStatCard from '@/components/BasePlayerStatCard.vue';
import BasePlayerComparisonAddCard from '@/components/BasePlayerComparisonAddCard.vue';
import BasePlayerComparisonAddedCard from '@/components/BasePlayerComparisonAddedCard.vue';
import BaseComparisonsFields from '@/components/BaseComparisonsFields.vue';
import BaseComparisonOption from '@/components/BaseComparisonOption.vue';

const drawer = ref(false);
const addPlayerTitle = ref('Add a player 1');
const playerNumber = ref(1);
const searchPlayers = ref('');
const selectedPlayer1 = ref(null);
const selectedPlayer2 = ref(null);
const isPlayerSelected = ref(false);
const playerSelectedIndex = ref(0);

const isOverview = ref(false);
const isAttack = ref(false);
const isPossession = ref(false);
const isPhysical = ref(false);
const isDefence = ref(false);
const isDiscipline = ref(false);

function clickToAddPlayer(number, playerIndex)
{
    drawer.value = true;
    addPlayerTitle.value = `Add a player ${number}`;
    playerNumber.value = number;
    if (playerIndex != 0)
    {
        isPlayerSelected.value = true;
        playerSelectedIndex.value = playerIndex;
    } else
    {
        isPlayerSelected.value = false;
    }
}

function addPlayer(playerId)
{
    drawer.value = false;
    if (playerNumber.value === 1)
    {
        selectedPlayer1.value = players.value.find(player => player.id === playerId);
        isPlayerSelected.value = true;
        playerSelectedIndex.value = playerId;
    } else if (playerNumber.value === 2)
    {
        selectedPlayer2.value = players.value.find(player => player.id === playerId);
        isPlayerSelected.value = true;
        playerSelectedIndex.value = playerId;
    }
}

function cancelSelection()
{
    searchPlayers.value = '';
}

function viewFullComparison(playerOneId, playerTwoId)
{
    if (playerOneId && playerTwoId)
    {
        selectedPlayer1.value = players.value.find(player => player.id === playerOneId);
        selectedPlayer2.value = players.value.find(player => player.id === playerTwoId);
        isPlayerSelected.value = true;
        drawer.value = false;
    }
}

const searchLower = computed(() => searchPlayers.value.toLowerCase());
const filteredPlayers = computed(() =>
{
    return players.value.filter(player =>
    {
        return (
            player.info.name.toLowerCase().includes(searchLower.value) ||
            player.club.name.toLowerCase().includes(searchLower.value) ||
            player.info.position.toLowerCase().includes(searchLower.value) ||
            player.info.nationality.toLowerCase().includes(searchLower.value)
        );
    });
});

const players = ref([
    {
        id: 1,
        rank: 1,
        info: {
            name: 'Gabriel Magalhães',
            photo: 'gabriel_magalhães.png',
            position: 'DEF',
            nationality: 'Brazil',
        },
        club: {
            clubCrest: 'ars.png',
            name: 'Arsenal',
            clubTheme: '#ff0000',
        },
        stat: 8
    },
    {
        id: 2,
        rank: 2,
        info: {
            name: 'Erling Haaland',
            photo: '223094.png',
            position: 'FWD',
            nationality: 'Norway',
        },
        club: {
            clubCrest: 'mci.png',
            name: 'Manchester City',
            clubTheme: '#7ab2e1',
        },
        stat: 7
    },
    {
        id: 3,
        rank: 3,
        info: {
            name: 'Oleksandr Zinchenko',
            photo: 'oleksandr_zinchenko.png',
            position: 'DEF',
            nationality: 'Ukraine',
        },
        club: {
            clubCrest: 'ars.png',
            name: 'Arsenal',
            clubTheme: '#ff0000',
        },
        stat: 6
    },
    {
        id: 4,
        rank: 4,
        info: {
            name: 'Emiliano Buendía',
            photo: 'emiliano_buendía.png',
            position: 'MID',
            nationality: 'Argentina',
        },
        club: {
            clubCrest: 'avl.png',
            name: 'Aston Villa',
            clubTheme: '#480024',
        },
        stat: 5
    },
    {
        id: 5,
        rank: 1,
        info: {
            name: 'Chris Wood',
            photo: '60689.png',
            position: 'FWD',
            nationality: 'New Zealand',
        },
        club: {
            clubCrest: 'nf.svg',
            name: 'Nottingham Forest',
            clubTheme: '#eb0024',
        },
        stat: 8
    },
    {
        id: 6,
        rank: 2,
        info: {
            name: 'James Trafford',
            photo: 'james_trafford.png',
            position: 'GK',
            nationality: 'England',
        },
        club: {
            clubCrest: 'bunley.svg',
            name: 'Burnley F.C.',
            clubTheme: '#81204c',
        },
        stat: 7
    },
    {
        id: 7,
        rank: 3,
        info: {
            name: 'Martin Ødegaard',
            photo: 'martin_qdegaard.png',
            position: 'MID',
            nationality: 'Norway',
        },
        club: {
            clubCrest: 'ars.png',
            name: 'Arsenal',
            clubTheme: '#ff0000',
        },
        stat: 6
    },
    {
        id: 8,
        rank: 4,
        info: {
            name: 'Eberechi Eze',
            photo: '232413.png',
            position: 'MID',
            nationality: 'England',
        },
        club: {
            clubCrest: 'ars.png',
            name: 'Arsenal',
            clubTheme: '#ff0000',
        },
        stat: 5
    },
    {
        id: 9,
        rank: 3,
        info: {
            name: 'Virgil van Dijk',
            photo: '97032.png',
            position: 'DEF',
            nationality: 'Netherlands',
        },
        club: {
            clubCrest: 'liv.png',
            name: 'Liverpool',
            clubTheme: '#ffffff',
        },
        stat: 6
    },
    {
        id: 10,
        rank: 4,
        info: {
            name: 'Daniel Muñoz',
            photo: '247348.png',
            position: 'DEF',
            nationality: 'Colombia',
        },
        club: {
            clubCrest: 'cry.png',
            name: 'Crystal Palace',
            clubTheme: '#ee2e24',
        },
        stat: 5
    },
    {
        id: 11,
        rank: 4,
        info: {
            name: 'Nikola Milenkovic',
            photo: '227444.png',
            position: 'DEF',
            nationality: 'Serbia',
        },
        club: {
            clubCrest: 'nf.svg',
            name: 'Nottingham Forest',
            clubTheme: '#eb0024',
        },
        stat: 5
    },
    {
        id: 12,
        rank: 4,
        info: {
            name: 'Ola Aina',
            photo: '159506.png',
            position: 'DEF',
            nationality: 'Nigeria',
        },
        club: {
            clubCrest: 'nf.svg',
            name: 'Nottingham Forest',
            clubTheme: '#eb0024',
        },
        stat: 5
    },
    {
        id: 13,
        rank: 4,
        info: {
            name: 'Brenden Aaronson',
            photo: 'brenden_aaronson.png',
            position: 'DEF',
            nationality: 'United States',
        },
        club: {
            clubCrest: 'leed.svg',
            name: 'Leeds United',
            clubTheme: '#ffd600',
        },
        stat: 5
    },
    {
        id: 14,
        rank: 4,
        info: {
            name: 'Matty Cash',
            photo: 'matty_cash.png',
            position: 'DEF',
            nationality: 'Brazil',
        },
        club: {
            clubCrest: 'avl.png',
            name: 'Aston Villa',
            clubTheme: '#480024',
        },
        stat: 5
    },
    {
        id: 15,
        rank: 4,
        info: {
            name: ' Gabriel Gudmundsson',
            photo: 'gabriel_gudmundsson.png',
            position: 'DEF',
            nationality: 'Sweden',
        },
        club: {
            clubCrest: 'leed.svg',
            name: 'Leeds United',
            clubTheme: '#ffd600',
        },
        stat: 5
    },

]);

const fwdComparison = ref({
    playerOne: {
        id: 2,
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
        id: 5,
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
        id: 7,
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
        id: 8,
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
        id: 11,
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
        id: 9,
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
        id: 12,
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
        id: 10,
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
        <h2 class="text-white md:text-2xl text-xl font-bold mb-4">Player Comparison</h2>

        <div class="flex flex-col gap-4 lg:w-1/2">
            <div class="flex flex-col gap-6" :style="{
                backgroundColor: selectedPlayer1 && selectedPlayer2 ? '#28002b' : 'transparent',
                padding: selectedPlayer1 && selectedPlayer2 ? '16px' : '0',
                borderRadius: selectedPlayer1 && selectedPlayer2 ? '16px' : '0',
            }">
                <div class="flex flex-2 gap-4 h-fit">
                    <BasePlayerComparisonAddedCard v-if="selectedPlayer1" :player="selectedPlayer1"
                        @click-to-add-player="clickToAddPlayer" :param="1" :player-index="selectedPlayer1.id" />
                    <BasePlayerComparisonAddCard v-else @click-to-add-player="clickToAddPlayer" :param="1" />

                    <BasePlayerComparisonAddedCard v-if="selectedPlayer2" :player="selectedPlayer2"
                        @click-to-add-player="clickToAddPlayer" :param="2" :player-index="selectedPlayer2.id" />
                    <BasePlayerComparisonAddCard v-else @click-to-add-player="clickToAddPlayer" :param="2" />
                </div>
                <BaseComparisonOption :title="'Overview'" :is-options-visible="isOverview" :comparisons="fwdComparison"
                    :selected-player1="selectedPlayer1" :selected-player2="selectedPlayer2"
                    @toggle-options-visibility="isOverview = !isOverview" />

                <BaseComparisonOption :title="'Attack'" :is-options-visible="isAttack" :comparisons="midComparison"
                    :selected-player1="selectedPlayer1" :selected-player2="selectedPlayer2"
                    @toggle-options-visibility="isAttack = !isAttack" />

                <BaseComparisonOption :title="'Possession'" :is-options-visible="isPossession"
                    :comparisons="defComparison1" :selected-player1="selectedPlayer1"
                    :selected-player2="selectedPlayer2" @toggle-options-visibility="isPossession = !isPossession" />

                <BaseComparisonOption :title="'Physical'" :is-options-visible="isPhysical" :comparisons="defComparison2"
                    :selected-player1="selectedPlayer1" :selected-player2="selectedPlayer2"
                    @toggle-options-visibility="isPhysical = !isPhysical" />

                <BaseComparisonOption :title="'Defence'" :is-options-visible="isDefence" :comparisons="defComparison2"
                    :selected-player1="selectedPlayer1" :selected-player2="selectedPlayer2"
                    @toggle-options-visibility="isDefence = !isDefence" />

                <BaseComparisonOption :title="'Discipline'" :is-options-visible="isDiscipline"
                    :comparisons="defComparison2" :selected-player1="selectedPlayer1"
                    :selected-player2="selectedPlayer2" @toggle-options-visibility="isDiscipline = !isDiscipline" />

            </div>

            <div class="flex-2">
                <div class="flex bg-[#28002b] rounded-lg px-3 py-2 flex-2">
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
        <h2 class="text-white md:text-2xl text-xl font-bold mb-4">Popular player comparisons</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            <BasePlayerComparison :comparisons="fwdComparison"
                @view-full-comparison="viewFullComparison(fwdComparison.playerOne.id, fwdComparison.playerTwo.id)" />
            <BasePlayerComparison :comparisons="midComparison"
                @view-full-comparison="viewFullComparison(midComparison.playerOne.id, midComparison.playerTwo.id)" />
            <BasePlayerComparison :comparisons="defComparison1"
                @view-full-comparison="viewFullComparison(defComparison1.playerOne.id, defComparison1.playerTwo.id)" />
            <BasePlayerComparison :comparisons="defComparison2"
                @view-full-comparison="viewFullComparison(defComparison2.playerOne.id, defComparison2.playerTwo.id)" />
        </div>
    </div>

    <el-drawer v-model="drawer" class="!bg-[#28002b]" :size="'23%'">
        <template #header>
            <div class="flex flex-col gap-5">
                <h4 class="text-white font-bold text-3xl">{{ addPlayerTitle }}</h4>
            </div>
        </template>
        <template #default>
            <div class="flex flex-col gap-3">
                <div class="flex">
                    <el-input v-model="searchPlayers" placeholder="Search" class="search-input w-full !text-[15px]"
                        :size="'large'" :prefix-icon="Search" />
                    <el-button class="ml-1 !bg-transparent !border-0 !text-[15px] !font-bold !text-white"
                        @click="cancelSelection">
                        Cancel
                    </el-button>
                </div>
                <span class="text-white font-bold text-sm">Clubs</span>
                <div class="overflow-y-auto overflow-x-hidden">
                    <div v-for="player in filteredPlayers" class="grid grid-cols-[1fr_72px] ">
                        <BasePlayerStatCard :player="player" :is-rank-visible="false" :is-stat-visible="false" />
                        <button
                            disabled="isPlayerSelected && players.findIndex(p => p.id === player.id) === playerSelectedIndex-1"
                            v-if="isPlayerSelected && players.findIndex(p => p.id === player.id) === playerSelectedIndex - 1"
                            class="text-gray-500 text-sm bg-transparent border-1 border-[#55005a] rounded-full w-18 h-8">
                            Add
                        </button>
                        <button v-else
                            class="text-[#3e003f] text-sm bg-white hover:bg-[#55005a] hover:text-white rounded-full w-18 h-8"
                            @click="addPlayer(player.id)">
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </template>
    </el-drawer>
</template>

<style scoped>
.search-input ::v-deep(.el-input__wrapper) {
    background-color: transparent !important;
    border: 2px solid rgba(255, 255, 255, 0.3) !important;
    border-radius: 10px !important;
    box-shadow: none !important;
}

.search-input ::v-deep(.el-input__inner) {
    color: white !important;
}

.search-input ::v-deep(.el-input__prefix) {
    color: white !important;
}
</style>