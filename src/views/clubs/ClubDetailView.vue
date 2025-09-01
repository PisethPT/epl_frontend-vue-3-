<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useTeamStore } from '@/stores';
import TeamInfoCard from '@/components/TeamInfoCard.vue';

const route = useRoute();
const teamStore = useTeamStore();
const clubId = ref(route.params.id);
const clubDetails = ref(null);

onMounted(async () =>
{
    await fetchClubDetails();
})

const fetchClubDetails = async () =>
{
    try
    {
        const response = await teamStore.getTeamById(clubId.value);
        clubDetails.value = response;
    } catch (error)
    {
        console.error('Error fetching club details:', error);
    }
};

</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-4 py-4 px-3">
        <div class="flex flex-wrap gap-4 h-fit">
            <TeamInfoCard v-if="clubDetails" :team="clubDetails" />
            <div class="!bg-[#37003c] rounded-2xl h-[100px] w-full">

            </div>

            <div class="!bg-[#37003c] rounded-2xl h-[400px] w-full">

            </div>
        </div>

        <div class="flex flex-wrap gap-4 h-fit">
            <!-- nav bar -->
            <nav class=" text-white p-4 rounded-2xl w-full overflow-x-auto">
                <ul class="flex space-x-4 min-w-max w-full">
                    <li>
                        <a href="#"
                            class="font-bold active:font-bold hover:border-b-4 pb-1 hover:border-white hover:rounded-b-md transition-all no-underline">
                            Overview
                        </a>
                    </li>
                    <li><a href="#"
                            class="font-bold active:font-bold hover:border-b-4 pb-1 hover:border-white hover:rounded-t-md rounded-b-md transition-all no-underline">News</a>
                    </li>
                    <li><a href="#"
                            class="font-bold active:font-bold hover:border-b-4 pb-1 hover:border-white hover:rounded-t-md rounded-b-md transition-all no-underline">Videos</a>
                    </li>
                    <li><a href="#"
                            class="font-bold active:font-bold hover:border-b-4 pb-1 hover:border-white hover:rounded-t-md rounded-b-md transition-all no-underline">Squad</a>
                    </li>
                    <li><a href="#"
                            class="font-bold active:font-bold hover:border-b-4 pb-1 hover:border-white hover:rounded-t-md rounded-b-md transition-all no-underline">Stats</a>
                    </li>
                    <li><a href="#"
                            class="font-bold active:font-bold hover:border-b-4 pb-1 hover:border-white hover:rounded-t-md rounded-b-md transition-all no-underline">Stadium</a>
                    </li>
                    <li><a href="#"
                            class="font-bold active:font-bold hover:border-b-4 pb-1 hover:border-white hover:rounded-t-md rounded-b-md transition-all no-underline">Tickets</a>
                    </li>
                </ul>
            </nav>

            <div class="!bg-[#37003c] rounded-2xl h-[200px] w-full">

            </div>
            <div class="!bg-[#37003c] rounded-2xl h-[700px] w-full">

            </div>
        </div>

        <div class="flex flex-wrap gap-4 h-fit">
            <div class="!bg-[#37003c] rounded-2xl h-[200px] w-full">

            </div>

            <div class="!bg-[#37003c] rounded-2xl h-[850px] w-full">

            </div>
        </div>
    </div>
</template>

<style scoped>
nav::-webkit-scrollbar {
    height: 6px;
}

nav::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
}

nav::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 3px;
}

nav::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.6);
}

nav {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.4) rgba(255, 255, 255, 0.1);
}
</style>