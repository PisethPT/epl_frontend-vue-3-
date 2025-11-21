<script setup>
import { ref, defineProps } from 'vue';
import
{
    ArrowDown,
    Search,
    RefreshLeft,
    Operation,
} from '@element-plus/icons-vue';

const props = defineProps({
    filters: {
        type: Array,
        default: () => ([
            {
                id: 0,
                label: '',
                tag: '',
            },
        ]),
    },
    query: {
        type: String,
        required: false,
        default: '',
    },
    isSearch: {
        type: Boolean,
        required: false,
        default: false,
    },
    isReset: {
        type: Boolean,
        required: false,
        default: false,
    }
});

</script>

<template>
    <div class="flex justify-center items-center mx-3 gap-4 xl:w-1/2 mt-12 mb-4 ">
        <el-input v-if="isSearch" :model-value="query" placeholder="Search"
            class="search-input text-sm md:w-full border-[#624d64]" :size="'large'" :prefix-icon="Search" />

        <div class="flex items-center justify-start gap-2 w-full">
            <div
                class="flex justify-center items-center text-white text-center text-sm w-fit px-3 py-2 rounded-[10px] bg-transparent border-[#624d64] border-2 text-nowrap hover:bg-[#654c6818] cursor-pointer">
                <el-icon>
                    <Operation class="text-white text-md" />
                </el-icon>
            </div>

            <div v-for="filter in filters" :key="filter.id"
                class="flex justify-center items-center gap-1 text-white text-center text-sm w-fit px-3 py-[6px] rounded-[10px] bg-transparent border-[#624d64] border-2 text-nowrap hover:bg-[#654c6818] cursor-pointer">
                {{ filter.label }}
                <el-icon>
                    <ArrowDown class="text-white text-md" />
                </el-icon>
            </div>

            <div v-if="isReset"
                class="flex justify-center items-center gap-1 text-gray-400 text-center text-sm w-fit px-3 py-[6px] rounded-[10px] bg-transparent border-[#624d64] border-2 text-nowrap hover:bg-[#654c6818] cursor-pointer">
                Reset
                <el-icon>
                    <RefreshLeft class=" text-gray-500 text-md" />
                </el-icon>
            </div>
        </div>
    </div>
</template>

<style scoped>
.search-input ::v-deep(.el-input__wrapper) {
    background-color: transparent !important;
    border: 2px solid #624d64 !important;
    border-radius: 10px !important;
    box-shadow: none !important;
}

.search-input ::v-deep(.el-input__inner) {
    color: white !important;
}

.search-input ::v-deep(.el-input__prefix) {
    color: white !important;
}
</style>