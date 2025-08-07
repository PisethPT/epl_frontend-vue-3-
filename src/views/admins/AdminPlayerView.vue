<script setup>
import { ref, onMounted } from 'vue';
import { usePlayerStore } from '@/stores/playerStore';
import PlayerTable from '@/components/PlayerTable.vue';

const playerStore = usePlayerStore();
const dataTable = ref([]);
const PageSize = ref(0);

onMounted(async () =>
{
    dataTable.value = await playerStore.getPlayers();
    PageSize.value = playerStore.players.length;

});

</script>

<template>
    <PlayerTable :tableData="dataTable" :totalPage="PageSize" />
</template>