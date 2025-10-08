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

const apiConfig = useApiConfig();
const players = ref([
    {
        rank: 1,
        player: {
            name: 'Gabriel Magalhães',
            photo: 'gabriel_magalhães.png',
        },
        club: {
            clubCrest: 'ars.png',
            name: 'Arsenal',
            clubTheme: '#ff0000',
        },
        stat: 8
    },
    {
        rank: 2,
        player: {
            name: 'James Trafford',
            photo: 'james_trafford.png',
        },
        club: {
            clubCrest: 'bunley.svg',
            name: 'Burnley F.C.',
            clubTheme: '#81204c',
        },
        stat: 7
    },
    {
        rank: 3,
        player: {
            name: 'Oleksandr Zinchenko',
            photo: 'oleksandr_zinchenko.png',
        },
        club: {
            clubCrest: 'ars.png',
            name: 'Arsenal',
            clubTheme: '#ff0000',
        },
        stat: 6
    },
    {
        rank: 4,
        player: {
            name: 'Emiliano Buendía',
            photo: 'emiliano_buendía.png',
        },
        club: {
            clubCrest: 'avl.png',
            name: 'Aston Villa',
            clubTheme: '#480024',
        },
        stat: 5
    },
    {
        rank: 1,
        player: {
            name: 'Gabriel Magalhães',
            photo: 'gabriel_magalhães.png',
        },
        club: {
            clubCrest: 'ars.png',
            name: 'Arsenal',
            clubTheme: '#ff0000',
        },
        stat: 8
    },
    {
        rank: 2,
        player: {
            name: 'James Trafford',
            photo: 'james_trafford.png',
        },
        club: {
            clubCrest: 'bunley.svg',
            name: 'Burnley F.C.',
            clubTheme: '#81204c',
        },
        stat: 7
    },
    {
        rank: 3,
        player: {
            name: 'Oleksandr Zinchenko',
            photo: 'oleksandr_zinchenko.png',
        },
        club: {
            clubCrest: 'ars.png',
            name: 'Arsenal',
            clubTheme: '#ff0000',
        },
        stat: 6
    },
    {
        rank: 4,
        player: {
            name: 'Emiliano Buendía',
            photo: 'emiliano_buendía.png',
        },
        club: {
            clubCrest: 'avl.png',
            name: 'Aston Villa',
            clubTheme: '#480024',
        },
        stat: 5
    },
        {
        rank: 3,
        player: {
            name: 'Oleksandr Zinchenko',
            photo: 'oleksandr_zinchenko.png',
        },
        club: {
            clubCrest: 'ars.png',
            name: 'Arsenal',
            clubTheme: '#ff0000',
        },
        stat: 6
    },
    {
        rank: 4,
        player: {
            name: 'Emiliano Buendía',
            photo: 'emiliano_buendía.png',
        },
        club: {
            clubCrest: 'avl.png',
            name: 'Aston Villa',
            clubTheme: '#480024',
        },
        stat: 5
    },
]);

</script>

<template>
    <div class="px-5 py-5 bg-[#28002b] flex-1 h-176 rounded-2xl">
        <span class="text-white font-bold text-xl text-center flex items-center mb-3">{{ title }} <el-icon>
                <ArrowRight class="text-white font-bold" />
            </el-icon></span>

        <div v-for="player in players" class="flex flex-col gap-2 w-full">
            <div class="flex justify-between items-center mb-4">
                <div class="flex items-center gap-2">
                    <span class="text-white font-bold text-md me-2">{{ player.rank }}</span>
                    <div class="rounded-[14px] min-w-12 min-h-12 overflow-hidden" :style="{ backgroundColor: player.club.clubTheme }">
                        <img :src="apiConfig.PLAYER_LOGOS_DIR + player.player.photo" alt="Club Crest"
                            class="w-12 h-12 object-contain mx-auto pt-1" />
                    </div>
                    <div class="flex flex-col justify-center">
                        <span class="text-white font-bold text-md">{{ player.player.name }}</span>
                        <div class="flex items-center gap-2">
                            <div class="min-w-5 min-h-5 overflow-hidden">
                                <img :src="apiConfig.TEAM_LOGOS_DIR + player.club.clubCrest" alt="Club Crest"
                                    class="w5 h-5 object-contain mx-auto pt-1" />
                            </div>
                            <span class="text-white text-sm">{{ player.club.name }}</span>
                        </div>
                    </div>
                </div>
                <span class="text-white text-2xl font-bold">{{ player.stat }}</span>
            </div>
        </div>
    </div>
</template>