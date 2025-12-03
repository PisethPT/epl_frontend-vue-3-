<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    miniNews: {
        type: Object,
        required: true,
        default: () => ({
            id: 1,
            title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex hic illo suscipit vero.',
            category: 'Match report',
            imageUrl: '/src/assets/news/Virgil-van-Dijk-Erling-Haaland-both-pictured-unhappy-.webp',
        })
    },
});
</script>

<template>
    <div class="flex justify-between gap-4">
        <div class="flex flex-col justify-between">
            <span class="text-white sm:text-xs xl:text-sm font-bold">{{ miniNews.title }}</span>
            <span class="text-white sm:text-[9px] text-xs">{{ miniNews.category }}</span>
        </div>
        <img :src="miniNews.imageUrl" alt="" class="bg-[#37003c] w-[120px] h-[70px] rounded-2xl object-cover" />
    </div>
</template>

<style scoped></style>