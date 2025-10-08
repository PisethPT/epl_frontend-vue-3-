<script setup>
import { ref, onMounted } from 'vue';
import { useMatchStore, useNewsStore } from '@/stores';
import NewsCard from '@/components/NewsCard.vue';
import BaseMatchCard from '@/components/BaseMatchCard.vue';
import { ElMessage } from 'element-plus';

const matchStore = useMatchStore();
const newsStore = useNewsStore();


const matchTables = ref([]);
const matches = ref([]);
const news = ref([]);
const TEAM_LOGOS_DIR = ref('');
const NEWS_IMAGE_DIR = ref('');
const matchTablesLoading = ref(false);
const sessionSelected = ref(1);
const options = [
  { value: 1, label: '2025/2026' },
  { value: 2, label: '2024/2025' },
  { value: 4, label: '2023/2024' },
]

const rounds = [1, 2, 3, 4, 5]
const selectedRound = ref(1)



onMounted(async () =>
{
  matchTablesLoading.value = true;
  try
  {
    await matchStore.getMatchTables();
    TEAM_LOGOS_DIR.value = matchStore.TEAM_LOGOS_DIR;
    matchTables.value = matchStore.matchTables;

    await matchStore.getMatches();
    matches.value = matchStore.matches;

    await newsStore.getDailyNews();
    news.value = newsStore.dailyNews;
    NEWS_IMAGE_DIR.value = newsStore.NEWS_IMAGE_DIR;
    console.log(NEWS_IMAGE_DIR.value);

  } catch (error)
  {
    console.log('error: ' + error);
    ElMessage.error('error on mount: ' + error);
  } finally
  {
    matchTablesLoading.value = false;
  }
});


</script>

<template>
  <main class="px-3 min-h-screen flex flex-col">
    
    <!-- Carousel -->
    <!-- <el-carousel :interval="4000" type="card" height="230px" class="mt-4">
      <el-carousel-item v-for="item in news.slice(0, 5)" :key="item" class="rounded-2xl relative">
        <div class="relative w-full h-full">
          <img :src="item.image ? NEWS_IMAGE_DIR + item.image : ''" :alt="item.title"
            class="w-full h-full object-cover rounded-2xl" />
          <h3 class="absolute bottom-2 left-2 right-2 text-2xl font-bold text-white bg-black/40 p-2 rounded-lg">
            {{ item.title }}
          </h3>
        </div>
      </el-carousel-item>
    </el-carousel> -->

    <el-row :gutter="20" class="mt-4 flex-1">
      <el-col :xs="24" :sm="24" :md="14">
        <el-card class="!bg-[#37003c] shadow-sm !border-0 !rounded-2xl mb-4 custom-card">
          <template #header>
            <div class="card-header">
              <h2 class="text-white font-bold text-2xl">News</h2>
            </div>
          </template>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="md:col-span-2" v-if="news.length > 0">
              <NewsCard :news="news[0]" class="h-full" :isBodyShow="true" />
            </div>
            <div class="md:col-span-1 space-y-4">
              <NewsCard v-for="(n, index) in news.slice(1, 3)" :key="n.id" :news="n" />
            </div>

            <div class="md:col-span-1 space-y-4" v-if="news.length > 3">
              <NewsCard v-for="(n, index) in news.slice(3, 5)" :key="n.id" :news="n" />
            </div>

            <div class="md:col-span-2" v-if="news.length > 5">
              <NewsCard :news="news[5]" class="h-full" :isBodyShow="true" />
            </div>

            <div class="md:col-span-2" v-if="news.length > 6">
              <NewsCard :news="news[6]" class="h-full" :isBodyShow="true" />
            </div>

            <div class="md:col-span-1 space-y-4" v-if="news.length > 7">
              <NewsCard v-for="(n, index) in news.slice(7, 8)" :key="n.id" :news="n" class="h-fit" :isBodyShow="true" />
            </div>
          </div>
          <div
            class="text-xs text-white float-end bg-[#28002ba9] rounded-md px-3 py-2 mt-[-30px] mb-4 hover:cursor-pointer hover:bg-[#28002b7c]">
            News
            more</div>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="24" :md="10">
        <!-- Matches -->
        <el-card class="!bg-[#37003c] shadow-sm !border-0 !rounded-2xl mb-5 custom-card overflow-hidden">
          <template #header>
            <div class="flex items-center justify-between">
              <h2 class="text-white font-bold text-2xl">Matches</h2>
              <el-select v-model="selectedRound" size="small" class="!w-32" placeholder="Round">
                <el-option v-for="round in rounds" :key="round" :label="'GW ' + round" :value="round" />
              </el-select>
            </div>
          </template>
          <div class="w-full max-w-6xl mx-auto">
            <div class="text-center mb-8">
              <h1 class="text-xl font-bold text-white mb-2">Premier League Matches</h1>
              <p class="text-[#04f1fc] font-semibold">Matchday 1 of 38</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <BaseMatchCard v-for="match in matches.slice(0, 8)" :key="match.id" :match="match" />
            </div>
          </div>
        </el-card>

        <!-- Table Premier Leagues -->
        <el-card class="!bg-[#37003c] h-auto shadow-sm rounded-sm​ mb-4 !border-0 !rounded-2xl custom-card">
          <template #header style="border: none!important;">
            <div class="card-header flex justify-between items-center">
              <h2 class="text-white font-bold text-2xl">Table</h2>
              <el-select v-model="sessionSelected" placeholder="Sessions" style="width: 115px;" size="small">
                <el-option v-for="option in options" :key="option.value" :value="option.value"
                  :label="option.label"></el-option>
              </el-select>
            </div>
          </template>
          <el-table :data="matchTables" class="w-full"
            :header-cell-style="{ background: '#37003c', color: 'white', fontWeight: 'bold' }"
            :cell-style="{ background: '#37003c', color: 'white' }" :border="false">
            <el-table-column fixed prop="pos" label="Pos" width="50" align="center" />
            <el-table-column fixed prop="teamImage" label="Team" style="min-width: 400px;">
              <template #default="scope">
                <div class="flex text-center items-center gap-3">
                  <img :src="TEAM_LOGOS_DIR + scope.row.teamImage" :alt="scope.row.teamName"
                    class="w-8 h-8 object-contain">
                  <span>{{ scope.row.teamName }}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="pl" label="PL" width="50" align="center" />
            <el-table-column prop="w" label="W" width="50" align="center" />
            <el-table-column prop="d" label="D" width="50" align="center" />
            <el-table-column prop="l" label="L" width="50" align="center" />
            <el-table-column prop="gf" label="GF" width="50" align="center" />
            <el-table-column prop="ga" label="GA" width="50" align="center" />
            <el-table-column prop="gd" label="GD" width="50" align="center" />
            <el-table-column prop="pts" label="Pts" width="50" align="center">
              <template #default="scope">
                <span class="font-bold">{{ scope.row.pts }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="nextTeam" label="Next" width="80 " align="center">
              <template #default="scope">
                <div v-if="scope.row.nextTeam !== '-'" class="flex justify-center">
                  <img :src="TEAM_LOGOS_DIR + scope.row.nextTeam" alt="none" class="w-8 h-8 object-contain">
                </div>
                <span v-else>{{ scope.row.nextTeam }}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </main>
</template>

<style>
html,
body {
  background: #1e0021 !important;
}

.el-carousel__item h3 {
  position: absolute;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
  z-index: 100;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

:deep(.custom-table .el-table__cell) {
  border: none !important;
}

.custom-card .el-card__header {
  border-bottom: none !important;
  padding-bottom: 0 !important;
}

.custom-card :deep(.el-card__header) {
  border-bottom: none !important;
}

.break-inside-avoid {
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
  -moz-column-break-inside: avoid;
}
</style>
