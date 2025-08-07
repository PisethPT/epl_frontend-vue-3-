<script setup>
import { ref, defineProps, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth';
import { useFunctionsStore } from '@/stores/function';
import { RouterLink, RouterView } from 'vue-router';
import
{
    Football,
    Avatar,
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

// const props = defineProps({
//     userName: {
//         type: String,
//         required: true
//     },
// });

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
    <el-menu :default-active="activeIndex" class="el-menu-demo flex justify-between w-full" mode="horizontal"
        @select="handleSelect">
        <div class="flex">
            <el-menu-item index="0" class="flex justify-evenly align-middle items-center gap-2 mr-2 p-2" readonly>
                <img style="width: 20px;" src="/src/assets/pl-main-logo.png" alt="epl-logo" />
                <h3 class="text-gray-700">English Premier League</h3>
            </el-menu-item>
            <el-menu-item index="guest-teams-index" class="flex items-center space-x-2">
                <el-icon>
                    <Football />
                </el-icon>
                <span>Teams</span>
            </el-menu-item>

            <el-menu-item index="guest-players-index">
                <el-icon class="bg-white">
                    <Star />
                </el-icon>
                <span>Players</span>
            </el-menu-item>
            <el-menu-item index="guest-matches-index">
                <el-icon>
                    <Calendar />
                </el-icon>
                <span>Matches</span>
            </el-menu-item>
            <el-menu-item index="">
                <el-icon>
                    <GoldMedal />
                </el-icon>
                <span>Top Scores</span>
            </el-menu-item>
            <el-menu-item index="guest-news-index">
                <el-icon>
                    <MessageBox />
                </el-icon>
                <span>News</span>
            </el-menu-item>
            <el-menu-item index="">
                <el-icon>
                    <Timer />
                </el-icon>
                <span>Sessions</span>
            </el-menu-item>

            <el-sub-menu index="2">
                <template #title>
                    <el-icon>
                        <TrophyBase />
                    </el-icon>
                    Leaderboard</template>
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
                    <user />
                </el-icon>
                {{ userName }}
            </el-menu-item>
            <el-menu-item index="logout">
                <el-icon>
                    <switch-button />
                </el-icon>
                Logout
            </el-menu-item>
        </div>
    </el-menu>

    <main class="flex-1">
        <RouterView />
    </main>
</template>

<style scoped>
.el-menu--horizontal>.el-menu-item:nth-child(1) {
    margin-block: auto;
}
</style>