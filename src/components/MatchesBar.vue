<script setup>
import { ref } from 'vue';
import { useApiConfig } from '@/stores/apiConfig';
import { Edit } from '@element-plus/icons-vue';

const apiConfig = useApiConfig();

const matches = [
    {
        id: 1,
        clubCrest: 'mun.png',
        description: 'Onana join Trabzonspor on loan',
    },
    {
        id: 2,
        clubCrest: 'mci.png',
        description: 'Donnarumma: I\'m proud to be here',
    },
    {
        id: 3,
        clubCrest: 'tot.svg',
        description: 'Photos:Xavi Simons\'s first training session',
    },
    {
        id: 4,
        clubCrest: 'liv.png',
        description: 'Photos:Isak trains with new team-matches',
    },
    {
        id: 5,
        clubCrest: 'nf.svg',
        description: 'Ange\'s first interview:I\'m honoured to be here',
    },
    {
        id: 6,
        clubCrest: 'ful.png',
        description: 'Fabianski returns to Fullham',
    },
]

</script>

<template>
    <div class="flex items-center gap-2 w-full p-5 overflow-x-auto scrollbar-none cursor-pointer">
        <div v-for="match in matches" :key="match.id"
            class="flex items-center gap-2 bg-[#28002b] rounded-md px-2 py-1 shrink-0">
            <img :src="apiConfig.TEAM_LOGOS_DIR + match.clubCrest" alt="" class="w-7 h-7 object-contain" />
            <span class="text-white text-sm text-center flex items-center gap-1">
                {{ match.description }}
                <el-icon>
                    <Edit />
                </el-icon>
            </span>
        </div>
    </div>
</template>

<style scoped>
.scrollbar-none::-webkit-scrollbar {
    display: none;
}

.scrollbar-none {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>