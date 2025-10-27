<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth';
import { useFunctionsStore } from '@/stores/function';
import { RouterView } from 'vue-router';
import
{
    SwitchButton,
    User,
} from '@element-plus/icons-vue'
import router from '@/router';
import MatchesBar from './MatchesBar.vue';

const userName = ref('');
const authStore = useAuthStore();
const functionStore = useFunctionsStore();

onMounted(() =>
{
    userName.value = localStorage.getItem('userName');
    authStore.checkAuth();
});


const logout = () =>
{
    functionStore.logout();
    authStore.isLogin = false;
}

const activeIndex = ref('1')
// const handleSelect = (key, keyPath) =>
// {
//     if (key == 5)
//         logout();
//     console.log(key, keyPath)
// }

const handleSelect = (index) =>
{
    if (!index) return;
    if (index == 'logout')
    {
        logout();
        return;
    }

    router.push({ name: index });
    //console.log(index)
}
</script>

<template>
    <el-menu :default-active="activeIndex" class="!bg-[#1e0021] el-menu-demo flex justify-between w-full fixed-top-menu px-5"
        mode="horizontal" @select="handleSelect">
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
            <el-menu-item index="guest-videos-index">
                <span class="text-white menu-title">Videos</span>
            </el-menu-item>
        </div>

        <div class="flex justify-evenly items-center">
            <el-menu-item index="4">
                <el-icon>
                    <user class="text-white" />
                </el-icon>
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
        <!-- matches bar -->
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