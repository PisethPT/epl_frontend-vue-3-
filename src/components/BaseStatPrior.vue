<script setup>
import { ref, defineProps } from 'vue';
import { ArrowRight } from '@element-plus/icons-vue';

const props = defineProps({
    title: {
        type: String,
        default: 'Some statistics are not available prior to the 2006/07 season. Click here to more details. ',
    }
});

</script>

<template>
    <div class="mx-8 mt-10 flex bg-white rounded-2xl p-4 min-h-20">
        <a href="#" class="text-[#37003c] font-bold text-lg hover:cursor-pointer hover:underline text-wrap">
            {{ title }}
            <el-icon>
                <ArrowRight />
            </el-icon></a>
    </div>
</template>