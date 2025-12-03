<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    stories: {
        type: Array,
        required: true,
        default: () => ([
            {
                id: 1,
                tag: 'New',
                content: 'Top 10 goals of the season',
                thumbnail: '/src/assets/club_best_news/best_goals.jpg'
            },
            {
                id: 2,
                tag: 'New',
                content: 'Amazing saves by goalkeepers',
                thumbnail: '/src/assets/club_best_news/amazing_saves.jpg'
            },
            {
                id: 3,
                tag: 'New',
                content: 'Best assists and passes',
                thumbnail: '/src/assets/club_best_news/best_assists.jpg'
            },
        ]),
    },
});
</script>

<template>
    <div class="flex flex-col gap-5 !bg-[#28002b] rounded-2xl p-4 mx-4">
        <div class="flex justify-between items-center">
            <span class="text-white text-2xl font-bold">{{ title }}</span>
        </div>
        <div ref="awardsContainer">
            <div class="flex gap-2 rounded-t-lg overflow-x-scroll scrollbar-none">
                <div v-for="story in stories" :key="story.id"
                    class="relative rounded-lg w-[185px] h-[260px] overflow-hidden flex-none">
                    <div class="absolute text-[10px] text-white bg-purple-600 px-2 rounded-lg left-1 top-1">
                        {{ story.tag }}
                    </div>
                    <img :src="story.thumbnail" alt="best news" class="w-full h-full object-cover" />
                    <div class="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent">
                        <span class="absolute bottom-2 left-2 text-sm text-white font-bold">{{ story.title }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>