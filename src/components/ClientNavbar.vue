<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth';
import { useFunctionsStore } from '@/stores/function';
import { RouterView } from 'vue-router';
import
{
    Football,
    TrophyBase,
    SwitchButton,
    User,
    Calendar,
    GoldMedal,
    MessageBox,
    Timer,
    Star,
} from '@element-plus/icons-vue'
import router from '@/router';

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
    <el-menu :default-active="activeIndex" class="!bg-[#1e0021] el-menu-demo flex justify-between w-full fixed-top-menu"
        mode="horizontal" @select="handleSelect">
        <div class="flex">
            <el-menu-item index="guest-epl-home" class="flex justify-evenly align-middle items-center gap-2 mr-2 p-2">
                <img style="width: 20px;" src="/src/assets/pl-main-logo.png" alt="epl-logo" />
                <div class="flex flex-col gap-0" style="line-height: 11px!important;">
                    <span class="text-white p-0">Premier</span>
                    <span class="text-white p-0">League</span>
                </div>
            </el-menu-item>
            <el-menu-item index="guest-teams-index"
                class="flex items-center space-x-2 hover:!text-white hover:!bg-transparent">
                <el-icon>
                    <Football class="text-white" />
                </el-icon>
                <span class="text-white">Teams</span>
            </el-menu-item>

            <el-menu-item index="guest-players-index">
                <el-icon>
                    <Star class="text-white" />
                </el-icon>
                <span class="text-white">Players</span>
            </el-menu-item>
            <el-menu-item index="guest-matches-index">
                <el-icon>
                    <Calendar class="text-white" />
                </el-icon>
                <span class="text-white">Matches</span>
            </el-menu-item>
            <el-menu-item index="">
                <el-icon>
                    <GoldMedal class="text-white" />
                </el-icon>
                <span class="text-white">Top Scores</span>
            </el-menu-item>
            <el-menu-item index="guest-news-index">
                <el-icon>
                    <MessageBox class="text-white" />
                </el-icon>
                <span class="text-white">News</span>
            </el-menu-item>
            <el-menu-item index="">
                <el-icon>
                    <Timer class="text-white" />
                </el-icon>
                <span class="text-white">Sessions</span>
            </el-menu-item>

            <el-sub-menu index="2" class="transparent-submenu" popper-class="transparent-popper">
                <template #title>
                    <el-icon>
                        <TrophyBase class="text-white" />
                    </el-icon>
                    <span class="text-white">Leaderboard</span>
                </template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
                <el-sub-menu index="2-4">
                    <template #title>item four</template>
                    <el-menu-item index="2-4-1">item one</el-menu-item>
                    <el-menu-item index="2-4-2">item two</el-menu-item>
                    <el-menu-item index="2-4-3">item three</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
        </div>

        <div class="flex justify-evenly">
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
  margin-bottom: 120px!important;
  z-index: 1000 !important;
  background-color: transparent !important;
}
.el-menu--horizontal>.el-menu-item:nth-child(1) {
    margin-block: auto;
}

:deep(.el-menu-item) {
    background-color: transparent !important;
    color: white !important;
}


:deep(.el-menu-item.is-active .text-white) {
    font-weight: bold !important;
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