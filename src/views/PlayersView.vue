<script setup>
import { ref } from 'vue';
import PlayerCard from '@/components/PlayerCard.vue';
import
{
    Search
} from '@element-plus/icons-vue'

const query = ref('');
const select = ref('');

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value1 = ref([])
const value2 = ref()
const value3 = ref([])
const options = Array.from({ length: 1000 }).map((_, idx) => ({
    value: `Option ${idx + 1}`,
    label: `${initials[idx % 10]}${idx}`,
}))
</script>
<template>
    <div class="content-center">
        <h1 class="text-center m-3 font-bold text-2xl">Players</h1>
        <div class="flex justify-center flex-row m-2 flex-wrap gap-2">
            <el-select-v2 v-model="value2" :options="options" placeholder="Please select" size="large"
                style="width: 240px; min-width: auto; vertical-align: middle" allow-create default-first-option
                filterable clearable />
            <el-input v-model="query" style="width: 500px; min-width: auto;" size="large" placeholder="Search ..."
                :suffix-icon="Search" />
        </div>

        <div class="flex flex-wrap justify-center w-full">
            <PlayerCard />
        </div>

    </div>
</template>