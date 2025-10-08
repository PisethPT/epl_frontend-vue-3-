<script setup> 
    import { ref , defineProps } from 'vue';
    import { Edit } from '@element-plus/icons-vue';

    const props = defineProps({
        // Define any props if needed
        sponsorImage: {
            type: String,
            default: '/src/assets/sponsors/unmissable.webp'
        },
        rounded:{
            type: Boolean,
            default: true,
        },
    });
</script>

<template>
        <div class="flex justify-center gap-4 px-3 mt-4 mb-10 w-full text-center">
        <div class="relative w-full lg:w-1/2 hover:scale-105 transition cursor-pointer">
            <img class="w-full h-auto" :src="props.sponsorImage" alt="Arsenal Club Kit Promo" :style="{borderRadius: props.rounded ? '12px' : '0'}" />
            <button class="absolute top-2 right-2 bg-[rgba(138,135,135,0.49)] hover:bg-[rgba(138,135,135,0.7)]
             w-8 h-8 rounded-xl flex items-center justify-center transition cursor-pointer">
                <el-icon>
                    <Edit class="text-white" />
                </el-icon>
            </button>
        </div>
    </div>
</template>