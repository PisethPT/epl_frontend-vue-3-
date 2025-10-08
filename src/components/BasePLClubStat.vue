<script setup>
import { ref, defineProps } from 'vue';
import { useApiConfig } from '@/stores/apiConfig';
import { ArrowRight } from '@element-plus/icons-vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    }
});

const clubs = ref([
    { rank: 1, name: 'Arsenal', clubCrest: 'ars.png', clubTheme: '#ff0000', stat: 14 },
    { rank: 2, name: 'Manchester City', clubCrest: 'mci.png', clubTheme: '#7ab2e1', stat: 12 },
    { rank: 3, name: 'Newcastle United', clubCrest: 'new.png', clubTheme: '#231f20', stat: 10 },
    { rank: 4, name: 'Liverpool', clubCrest: 'liv.png', clubTheme: '#ffffff', stat: 9 },
    { rank: 5, name: 'Brighton & Hove Albion', clubCrest: 'bhr.png', clubTheme: '#0054a5', stat: 8 },
    { rank: 6, name: 'Tottenham Hotspur', clubCrest: 'tot.svg', clubTheme: '#000a3c', stat: 7 },
    { rank: 7, name: 'Chelsea', clubCrest: 'che.png', clubTheme: '#001489', stat: 6 },
    { rank: 8, name: 'Aston Villa', clubCrest: 'avl.png', clubTheme: '#480024', stat: 5 },
    { rank: 9, name: 'Manchester United', clubCrest: 'mun.png', clubTheme: '#b90006', stat: 4 },
    { rank: 10, name: 'Fulham', clubCrest: 'ful.png', clubTheme: '#000000', stat: 3 },
]);

const apiConfig = useApiConfig();
</script>

<template>
    <div class="px-5 py-5 bg-[#28002b] flex-1 h-176 w-fit rounded-2xl">
        <span class="text-white font-bold text-xl text-center flex items-center mb-3">{{ title }} <el-icon>
                <ArrowRight class="text-white font-bold" />
            </el-icon></span>

        <div v-for="club in clubs" class="flex flex-col gap-2 w-full mb-4">
            <div class="flex justify-between items-center">
                <div class="flex items-center gap-2">
                    <span class="text-white font-bold text-md me-3">{{ club.rank }}</span>
                    <div class="rounded-[14px] px-[2px] min-w-12 min-h-12" :style="{ backgroundColor: club.clubTheme }">
                        <img :src="apiConfig.TEAM_LOGOS_DIR + club.clubCrest" alt="Club Crest"
                            class="w-12 h-12 p-1 object-contain mx-auto" />
                    </div>
                    <div class="flex flex-col justify-center">
                        <span class="text-white font-bold text-md">{{ club.name }}</span>
                    </div>
                </div>
                <span class="text-white text-2xl font-bold">{{ club.stat }}</span>
            </div>
        </div>
    </div>
</template>