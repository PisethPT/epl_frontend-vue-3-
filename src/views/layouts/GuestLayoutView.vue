<script setup>
import { onMounted } from 'vue';
import ClientNavbar from '@/components/ClientNavbar.vue';
import router from '@/router';
import { partners } from '@/stores/partner';


onMounted(() =>
{
    router.push({ name: 'guest-epl-home' })
})
</script>
<template>
    <ClientNavbar></ClientNavbar>
    <!-- Footer -->
    <footer class="bg-[#28002b] text-black text-center py-4 mt-20 mb-4 mx-3 rounded-2xl">
        <el-row :gutter="24">
            <el-col :xs="12" :sm="12" :md="4" v-for="partner in partners" :key="partner.id" class="mb-8">
                <a :href="partner.officialUrl" target="_blank" class="flex flex-col items-center">
                    <img :src="partner.logo" :alt="partner.name" class="w-20 h-auto mb-2">
                    <span class="text-white">{{ partner.content }}</span>
                </a>
            </el-col>
        </el-row>
        <span class="text-white">© 2025 English Premier League. All rights reserved.</span>
    </footer>
</template>

<style scoped>
html,
body {
  background: #1e0021 !important;
}
</style>