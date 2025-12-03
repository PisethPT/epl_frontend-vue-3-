<script setup>
import { defineProps, defineEmits } from 'vue';
import
{
    ArrowRight,
    ArrowLeft,
    CaretRight
} from '@element-plus/icons-vue';

const emits = defineEmits(['allVideos', 'nextVideos', 'prevVideos', 'scrollAwards']);

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    videos: {
        type: Array,
        required: true,
        default: () => [
            {
                id: 4455832,
                title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
                category: 'Fixtures',
                thumbnail: '/path/to/thumbnail1.jpg',
            },
            {
                id: 4455833,
                title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
                category: 'Fixtures',
                thumbnail: '/path/to/thumbnail2.jpg'
            },
            {
                id: 4455834,
                title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
                category: 'Fixtures',
                thumbnail: '/path/to/thumbnail3.jpg'
            },
        ]
    },
    allVideosButtonTitle: {
        type: String,
        required: false,
        default: 'All Videos',
    },
    isAllVideosButton: {
        type: Boolean,
        required: true,
        default: false
    },
    isPreviousAndNextButtons: {
        type: Boolean,
        required: false,
        default: false
    },
    isAtStart: {
        type: Boolean,
        required: false,
        default: false
    },
    isAtEnd: {
        type: Boolean,
        required: false,
        default: false
    },
    allVideos: {
        type: Function,
        required: false
    },
    scrollAwards: {
        type: Function,
        required: false
    },
});

</script>

<template>
    <div class="flex flex-col gap-5 !bg-[#28002b] rounded-2xl w-full p-4">
        <div class="flex justify-between items-center">
            <span class="text-white text-2xl font-bold">{{ props.title }}</span>
            <div class="flex gap-2">
                <div v-if="props.isPreviousAndNextButtons" class="flex gap-2">
                    <button class="flex items-center justify-center rounded-full bg-[#3e003f] w-8 h-8" :class="[
                        props.isAtStart
                            ? 'bg-[#1d001f] opacity-40'
                            : 'bg-[#3e003f] hover:bg-[#55005a] cursor-pointer'
                    ]" :disabled="props.isAtStart" @click="scrollAwards('left')">
                        <el-icon>
                            <ArrowLeft class="text-white" />
                        </el-icon>
                    </button>
                    <button class="flex items-center justify-center rounded-full bg-[#3e003f] w-8 h-8" :class="[
                        props.isAtEnd
                            ? 'bg-[#1d001f] opacity-40'
                            : 'bg-[#3e003f] hover:bg-[#55005a] cursor-pointer'
                    ]" :disabled="props.isAtEnd" @click="scrollAwards('right')">
                        <el-icon>
                            <ArrowRight class="text-white" />
                        </el-icon>
                    </button>
                </div>
                <button v-if="props.isAllVideosButton && props.videos.length > 5" @click="props.allVideos"
                    class="flex items-center justify-start rounded-full bg-[#3e003f] text-xs text-white w-fit h-8 px-4 hover:underline cursor-pointer whitespace-nowrap">
                    {{ props.allVideosButtonTitle }}
                    <el-icon>
                        <ArrowRight class="text-white" />
                    </el-icon>
                </button>
            </div>
        </div>
        <div ref="awardsContainer">
            <div class="flex items-start gap-4 w-full rounded-t-2xl overflow-x-auto scrollbar-none">
                <div v-for="video in props.videos" :key="video.id" class="flex flex-col gap-2 rounded-2xl h-fit">
                    <div
                        class="flex justify-start bg-[#4b1254] rounded-2xl w-[300px] h-[160px] relative overflow-hidden">
                        <router-link
                            :to="{ name: 'video-viewer', params: { videoId: video.id, videoTitle: video.title.toString().toLowerCase().replace(/ /g, '-') } }"
                            class="hover:bg-[#edaef777] flex justify-center items-center w-full h-full"></router-link>
                        <div
                            class="absolute text-center bg-[#28002b] !w-7 !h-7 rounded-full !bottom-2 !right-2 flex justify-center items-center">
                            <el-icon>
                                <CaretRight class="text-white" />
                            </el-icon>
                        </div>
                    </div>
                    <span class="text-white text-md font-bold text-wrap w-[300px]">{{ video.title }}</span>
                    <span class="text-white text-xs">{{ video.category }}</span>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.scrollbar-none::-webkit-scrollbar {
    display: none !important;
}

.scrollbar-none {
    -ms-overflow-style: none !important;
    scrollbar-width: none !important;
}
</style>