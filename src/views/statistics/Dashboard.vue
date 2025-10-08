<script setup>
import { ref, defineProps } from 'vue';
import { useApiConfig } from '@/stores/apiConfig';
import { ArrowRight } from '@element-plus/icons-vue';
import BasePlayerStat from '@/components/BasePlayerStat.vue';
import BasePLClubStat from '@/components/BasePLClubStat.vue';
import BaseStatPrior from '@/components/BaseStatPrior.vue';
</script>

<template>
    <div class="mx-4 my-4">
        <h2 class="text-white md:text-3xl text-xl font-bold mb-4">2025/26 Player Stats</h2>
        <div class="flex flex-wrap gap-5">
            <BasePlayerStat :title="'Goals'" />
            <BasePlayerStat :title="'Assists'" />
            <BasePlayerStat :title="'Total Passes'" />
            <BasePlayerStat :title="'Clean Sheets'" />
        </div>
    </div>

    <div class="mx-4 my-4">
        <h2 class="text-white md:text-3xl text-xl font-bold mb-4">Premier League Club Stats</h2>
        <div class="flex flex-wrap gap-5">
            <BasePLClubStat :title="'Goals '" />
            <BasePLClubStat :title="'Tackles Won '" />
            <BasePLClubStat :title="'Blocks '" />
            <BasePLClubStat :title="'Total Passes '" />
        </div>
    </div>

    <BaseStatPrior />
</template>