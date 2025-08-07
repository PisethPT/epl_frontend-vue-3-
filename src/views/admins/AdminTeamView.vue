<script setup>
import { ref, onMounted, computed } from 'vue';
import TableComponent from '@/components/Table.vue';
import { useTeamStore } from '@/stores/teamStore';

const teamStore = useTeamStore();
const teamData = ref([]);
const totalPage = ref(0);
const pageSize = ref(10);
const currentPage = ref(1);

onMounted(async () =>
{
    await teamStore.getTeams();
    teamData.value = teamStore.teams;
    totalPage.value = teamStore.totalTeam;
});

</script>

<template>
    <TableComponent :tableData="teamData" :totalPage="totalPage" />
</template>