<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter, RouterView } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { useFunctionsStore } from '@/stores/function';
import
    {
        SwitchButton,
    } from '@element-plus/icons-vue';
import MatchesBar from './MatchesBar.vue';

const router = useRouter();
const route = useRoute();

const userName = ref('');
const authStore = useAuthStore();
const functionStore = useFunctionsStore();

onMounted(() =>
{
    userName.value = localStorage.getItem('userName') || '';
    authStore.checkAuth();
});

const logout = () =>
{
    functionStore.logout();
    authStore.isLogin = false;
};
function indexFromRoute(r)
{
    // alert(r.name);
    if (!r) return 'guest-epl-home';

    // -------- QUERY OVERRIDE (optional) --------
    if (r.query?.activeMenu)
    {
        const q = String(r.query.activeMenu).toLowerCase();

        if (q === 'home') return 'guest-epl-home';
        if (q === 'matches') return 'guest-matches-index';
        if (q === 'table' || q === 'tables') return 'guest-tables-index';
        if (q === 'statistics') return 'guest-statistics-index';
        if (q === 'news') return 'guest-news-index';
        if (q === 'transfers') return 'guest-transfers-index';
        if (q === 'players') return 'guest-players-index';
        if (q === 'clubs') return 'guest-clubs-index';
        if (q === 'video') return 'video';

        if (q === 'fantasy' || q === 'fpl') return '2'; // sub menu main index
    }
    switch (r.name)
    {
        // MAIN NAVIGATION
        case 'guest-epl-home': return 'guest-epl-home';
        case 'guest-matches-index': return 'guest-matches-index';
        case 'guest-tables-index': return 'guest-tables-index';
        case 'guest-statistics-index': return 'guest-statistics-index';
        case 'guest-news-index': return 'guest-news-index';
        case 'guest-transfers-index': return 'guest-transfers-index';
        case 'guest-players-index': return 'guest-players-index';
        case 'guest-clubs-index': return 'guest-clubs-index';
        case 'video': return 'video';


        // MATCH DETAIL PAGE
        case 'matches':
        case 'match-detail':
        case 'match-overview':
        case 'match-tab-recap':
        case 'match-tab-highlights':
        case 'match-tab-lineups':
        case 'match-tab-stats':
        case 'match-tab-table':
        case 'match-tab-commentary':
        case 'match-tab-match-info':
            return 'guest-matches-index';

        // TABLE DETAIL PAGE
        case 'tables':
        case 'table-detail':
            return 'guest-tables-index';

        // STATISTICS DETAIL PAGE
        case 'statistics':
        case 'statistics-detail':
        case 'guest-statistics-stats-dashboard':
        case 'guest-statistics-stats-players':
        case 'guest-statistics-stats-clubs':
        case 'guest-statistics-stats-all-time-stats':
        case 'guest-statistics-stats-records':
        case 'guest-statistics-stats-players-comparison':
            return 'guest-statistics-index';

        // NEWS DETAIL PAGE
        case 'news':
        case 'news-detail':
            return 'guest-news-index';

        // TRANSFERS DETAIL PAGE
        case 'transfers':
        case 'transfer-detail':
            return 'guest-transfers-index';

        // PLAYER DETAIL PAGE
        case 'players':
        case 'player-detail':
        case 'player-overview':
            return 'guest-players-index';

        // CLUB DETAIL PAGE
        case 'clubs':
        case 'clubs-overview':
        case 'club-detail':
            return 'guest-clubs-index';

        // VIDEOS
        case 'video':
        case 'all-videos':
        case 'video-series':
        case 'video-the-archive-overview':
        case 'video-the-archive-8-minute-replays':
        case 'video-the-archive-20-minute-replays':
            return 'video';

        // FANTASY SUBMENU
        case 'gust-fantasyPremierLeague-index':
        case 'gust-fantasyDraft-index':
        case 'gust-fantasyChallenge-index':
            return '2'; // sub-menu index
    }

    // -------- DEFAULT (fallback) --------
    return 'guest-epl-home';
}

const activeIndex = ref(indexFromRoute(route));

// keep activeIndex in sync whenever route changes (name, params, or query)
watch(
    () => route.fullPath,
    () =>
    {
        activeIndex.value = indexFromRoute(route);
    },
    { immediate: true }
);

const handleSelect = (index) =>
{
    if (!index) return;
    if (index === 'logout')
    {
        logout();
        return;
    }

    router.push({ name: index }).catch(() => { });
};
</script>

<template>
    <el-menu :default-active="activeIndex" :key="activeIndex"
        class="!bg-[#1e0021] el-menu-demo flex justify-between w-full fixed-top-menu px-5" mode="horizontal"
        @select="handleSelect">
        <div class="flex items-center gap-0">
            <el-menu-item index="guest-epl-home" class="flex justify-evenly align-middle items-center gap-2 p-2 mx-3">
                <img style="width: 30px;" src="/src/assets/pl-main-logo.png" alt="epl-logo" />
                <div class="flex flex-col gap-0" style="line-height: 13px!important;">
                    <span class="text-white font-bold text-[16px] p-0">Premier</span>
                    <span class="text-white font-bold text-[16px] p-0">League</span>
                </div>
            </el-menu-item>

            <el-menu-item index="guest-matches-index">
                <span class="text-white menu-title">Matches</span>
            </el-menu-item>

            <el-menu-item index="guest-tables-index">
                <span class="text-white menu-title">Table</span>
            </el-menu-item>

            <el-menu-item index="guest-statistics-index">
                <span class="text-white menu-title">Statistics</span>
            </el-menu-item>

            <el-sub-menu index="2" class="transparent-submenu" popper-class="transparent-popper">
                <template #title>
                    <span class="text-white font-bold text-[16px]">Fantasy</span>
                </template>

                <el-menu-item index="gust-fantasyPremierLeague-index">
                    <template #title>
                        <span class="menu-title text-black text-[16px]">Fantasy Premier League</span>
                    </template>
                </el-menu-item>

                <el-menu-item index="gust-fantasyDraft-index">
                    <template #title>
                        <span class="menu-title text-black text-[16px]">Fantasy Draft</span>
                    </template>
                </el-menu-item>

                <el-menu-item index="gust-fantasyChallenge-index">
                    <template #title>
                        <span class="menu-title text-black text-[16px]">Fantasy Challenge</span>
                    </template>
                </el-menu-item>
            </el-sub-menu>

            <el-menu-item index="guest-news-index">
                <span class="text-white menu-title">News</span>
            </el-menu-item>

            <el-menu-item index="guest-transfers-index">
                <span class="text-white menu-title">Transfers</span>
            </el-menu-item>

            <el-menu-item index="guest-players-index">
                <span class="text-white menu-title">Players</span>
            </el-menu-item>

            <el-menu-item index="guest-clubs-index"
                class="flex items-center space-x-2 hover:!text-white hover:!bg-transparent">
                <span class="text-white menu-title">Clubs</span>
            </el-menu-item>

            <el-menu-item index="video">
                <span class="text-white menu-title">Videos</span>
            </el-menu-item>
        </div>

        <div class="flex justify-evenly items-center">
            <el-menu-item index="4">
                <span class="text-white">{{ userName }}</span>
            </el-menu-item>

            <el-menu-item index="logout">
                <el-icon>
                    <switch-button class="text-white" />
                </el-icon>
                <span class="text-white">Logout</span>
            </el-menu-item>
        </div>
    </el-menu>

    <main class="flex-1 pt-[60px]">
        <MatchesBar />
        <RouterView />
    </main>
</template>

<style scoped>
html,
body {
    background: #1e0021 !important;
}

.fixed-top-menu {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    margin-bottom: 120px !important;
    height: 70px !important;
    border-bottom: none !important;
    z-index: 1000 !important;
    background-color: transparent !important;
}

.el-menu--horizontal>.el-menu-item:nth-child(1) {
    margin-block: auto;
}

:deep(.el-menu-item) {
    background-color: transparent !important;
    color: white !important;
    padding: 0 3px;
    font-weight: bold !important;
    height: 40px;
    text-align: center;
}

:deep(.el-menu-item .menu-title) {
    padding: 0 14px;
    font-size: 16px;
}

:deep(.el-menu-item.is-active .menu-title) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.08) !important;
    border-radius: 20px;
    padding: 0 14px;
    color: #ffffff !important;
    font-weight: bold !important;
    height: 40px;
    text-align: center;
}

:deep(.el-menu-item.is-active .el-icon) {
    color: #ffffff !important;
}

:deep(.transparent-submenu) {
    background-color: transparent !important;
}

:deep(.transparent-submenu .el-sub-menu__title) {
    color: white !important;
}

:deep(.transparent-submenu .el-sub-menu__title:hover) {
    background-color: transparent !important;
}

:deep(.transparent-popper.el-menu--vertical) {
    background-color: transparent !important;
}
</style>