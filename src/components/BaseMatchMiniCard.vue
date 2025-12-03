<script setup>
import { defineProps } from 'vue';
import { useApiConfig } from '@/stores/apiConfig';

const apiConfig = useApiConfig();
const props = defineProps({
    matchInfo: {
        type: Object,
        required: true,
        default: () => ({
            matchTitle: 'Yesterday',
            matches: [
                {
                    matchId: 1,
                    kickoffTime: '22:00',
                    isPreview: true,
                    isFullTime: false,
                    HT: null,
                    FT: null,
                    homeClub: {
                        id: 1,
                        clubName: 'Spurs',
                        clubCrest: 'tot.svg',
                        clubTheme: '#000a3c',
                    },
                    awayClub: {
                        id: 2,
                        clubName: 'Man Utd',
                        clubCrest: 'menu.svg',
                        clubTheme: '#b90006',
                    },
                    matchWeek: '11',
                    matchDate: 'Sat 08 Nov',
                    kickoffStadium: 'Tottenham Hotspur Stadium',
                    kickoffCoach: 'Samuel Barrott',
                    matchClubs: 'Tottenham Hotspur vs Manchester United',
                    matchOnSeason: '2025/2026',
                    league: 'Premier League',
                    matchStory: 'TOT 2-2 MUN'
                },
            ],
        })
    }
});
</script>

<template>
    <div class="flex flex-col">
        <span class="text-white text-md font-bold mb-4">{{ matchInfo.matchTitle }}</span>
        <div v-for="match in props.matchInfo.matches" :key="match.matchId"
            class="flex flex-col items-center gap-2 mb-2">
            <div class="grid grid-cols-[1fr_50px_1fr] gap-4 items-start hover:bg-[#37003c] p-3 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px]">
                <div class="flex justify-end items-center gap-2">
                    <span class="text-white text-xs xl:text-sm font-bold inline-block max-w-[100px] sm:max-w-[140px] truncate" :title="match.homeClub.clubName">{{ match.homeClub.clubName }}</span>
                    <img :src="apiConfig.TEAM_LOGOS_DIR + match.homeClub.clubCrest" :alt="match.homeClub.clubName"
                        srcset="" class="w-7 h-7 object-contain">
                </div>
                
                <div v-if="!match?.isPreview && match?.isFullTime" class="flex flex-col justify-start gap-2">
                    <span class="bg-[#1e0021] text-white text-md font-bold !py-[2px] rounded-md text-center">{{ match.FT
                        }}</span>
                    <span class="text-white text-xs font-bold text-center">FT</span>
                </div>
                <div v-else-if="!match?.isPreview && !match?.isFullTime && match.HT !== null"
                    class="flex flex-col justify-start gap-2">
                    <span class="bg-[#1e0021] text-white text-md font-bold !py-[2px] rounded-md text-center">{{ match.HT
                        }}</span>
                    <span class="text-white text-xs font-bold text-center">HT</span>
                </div>
                <div v-else-if="match?.isPreview" class="flex flex-col justify-start gap-2">
                    <span class="text-white text-md font-bold py-1 text-center">{{ match.kickoffTime
                        }}</span>
                </div>

                <div class="flex justify-start items-center gap-2">
                    <img :src="apiConfig.TEAM_LOGOS_DIR + match.awayClub.clubCrest" :alt="match.awayClub.clubName"
                        class="w-7 h-7 object-contain">
                    <span class="text-white text-xs xl:text-sm font-bold inline-block max-w-[100px] sm:max-w-[140px] truncate" :title="match.awayClub.clubName">{{ match.awayClub.clubName }}</span>
                </div>
            </div>
            <div class="bg-[#37003c] h-[2px] w-[200px]"></div>
        </div>
    </div>
</template>

<style scoped></style>