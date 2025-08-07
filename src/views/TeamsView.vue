<script setup>
import { ref, onMounted, onUpdated, computed } from 'vue';
import TeamCard from '@/components/TeamCard.vue';
import { useTeamStore } from "@/stores/teamStore";
import
{
    Search,
} from '@element-plus/icons-vue'

const teamStore = useTeamStore();
const query = ref('');

onMounted(async () =>
{
    await teamStore.getTeams();

});

const teams = computed(() => teamStore.searchTeams(query.value));
</script>

<template>
    <div class="content-center">
        <h1 class="text-center m-3 font-bold text-2xl">Teams</h1>
        <div class="flex justify-center">
            <el-input v-model="query" style="width: 500px; min-width: auto; margin: 10px 20px;" size="large"
                placeholder="Search ..." :prefix-icon="Search" clearable />
        </div>
        <div class="flex justify-center w-full flex-wrap">
            <div v-for="team in teams" :key="team.id">
                <TeamCard :team="team"></TeamCard>
            </div>
        </div>
    </div>
</template>