<script setup>
import { defineProps } from 'vue';
import { useApiConfig } from '@/stores/apiConfig';

const apiConfig = useApiConfig();

const props = defineProps({
    news: {
        type: Object,
        required: false,
        default: () => ({
            id: 0,
            title: '',
            subTitle: '',
            body: '',
            publishedDate: '',
            image: '',
            videoLink: '',
        }),
    }
});

</script>

<template>
    <div class="bg-[#28002b] w-fit h-auto shadow-sm rounded-xl">
        <img :src="news.image ? apiConfig.NEWS_IMAGE_DIR + news.image : ''" :alt="news.title"
            class="w-full h-auto rounded-xl">
        <div class="px-4 py-4">
            <h1 class="font-bold mt-2 text-[1.2rem] text-white mb-4">{{ news.title }}</h1>
            <span class="font-mono text-gray-500 text-sm text-wrap">{{ news.subTitle }}</span>
        </div>
        <!-- <div class="text-xs text-gray-400 float-end mb-4 mr-4 px-1 bg-[#37003c] rounded-xs">News</div> -->
    </div>
</template>

