<script setup>
import { ref, reactive, defineProps, defineEmits, watch, onMounted, computed } from 'vue';
import BaseTable from '@/components/BaseTable.vue';
import BaseDialogForm from '@/components/BaseDialogForm.vue';
import BaseMatchSelect from '@/components/BaseMatchSelect.vue';
import BaseSelectWithIcon from '@/components/BaseSelectWithIcon.vue';
import { useCardStore, useTeamStore, usePlayerStore, useMatchStore } from '@/stores';
import { ElMessage, ElMessageBox } from 'element-plus';
import
{
    Plus,
    EditPen,
    Delete,
    Search,
} from '@element-plus/icons-vue';

const emit = defineEmits(['update:form', 'update:modelValue', 'submit']);
const cardStore = useCardStore();
const teamStore = useTeamStore();
const playerStore = usePlayerStore();
const matchStore = useMatchStore();

const cards = ref([]);
const query = ref('');
const PLAYER_LOGOS_DIR = ref();
const TEAM_LOGOS_DIR = ref();
const form = reactive({
    id: 0,
    matchId: '',
    teamId: null,
    playerId: null,
    type: null,
    minutes: 0,
});
const formRef = ref(null);
const modelValue = ref(false);
const loading = ref(false);
const submitLoading = ref(false);
const width = ref('800px');
const title = ref('Add New Card');
const rules = {
    type: [
        { required: true, message: 'Select type of card (yellow/red)', trigger: 'change' },
        // {
        //     validator: (rule, value, callback) =>
        //     {
        //         if (!['yellow', 'red'].includes(value))
        //         {
        //             callback(new Error('Card must be yellow or red'));
        //         } else
        //         {
        //             callback();
        //         }
        //     }, trigger: 'change'
        // }
    ],
    minutes: [
        { required: true, message: 'Enter minute of player giving card', trigger: 'blur' },
        { type: 'number', min: 1, max: 120, message: 'Minutes must be between 1 and 120', trigger: 'blur' }
    ],
    matchId: [{ required: true, message: 'Select current match', trigger: 'change' }],
    teamId: [{ required: true, message: 'Select player team', trigger: 'change' }],
    playerId: [{ required: true, message: 'Select player that giving card', trigger: 'change' }],
}
const columns = [
    { label: 'Player', prop: 'player', slot: 'player', minWidth: 220, align: 'center', sortable: true },
    { label: 'From Team', prop: 'team', slot: 'fromTeam', minWidth: 200, align: 'center', sortable: true },
    { label: 'On Match', prop: 'match', slot: 'match', minWidth: 350, align: 'center', sortable: true },
    { label: 'Card Type', prop: 'cardType', slot: 'cardType', minWidth: 120, align: 'center', sortable: true },
    { label: 'Minutes', prop: 'minutes', slot: 'minutes', minWidth: 120, align: 'center', sortable: true },
];
const selectWidth = ref('26px');
const selectHeight = ref('26px');
const selectedMatch = ref(null);
const selectMatchPlaceholder = ref('Select Match');
const matchSelectLabel = ref('Current Match');

const selectedTeam = ref(null);
const teamItemSelect = ref([]);
const teamPlaceholder = ref('Select Team');

const selectedPlayer = ref(null);
const playerItemSelect = ref([]);
const playerPlaceholder = ref('Select Player');

const selectedCard = ref(null);
const cardTypes = ref([
    {
        id: 0,
        name: 'Yellow',
        logo: 'w-4 h-6 bg-amber-400 border-1 rounded-[3px] text-center',
    },
    {
        id: 1,
        name: 'Red',
        logo: 'w-4 h-6 bg-red-500 border-1 rounded-[3px] text-center',
    }
])

const matchOptions = ref([]);

watch(() =>
{
    console.log('form: ' + JSON.stringify(form));

    emit('update:modelValue', modelValue.value);
    emit('update:form', { ...form });
}, { immediate: true });

watch(selectedMatch, (val) =>
{
    if (val)
    {
        // console.log('select match: ' + val.id);
        form.matchId = val.id ?? null;
    }
    form.teamId = null;
    form.playerId = null;
});

watch(selectedTeam, async (val) =>
{
    if (val)
    {
        form.teamId = val.id ?? null;
        if (val.id)
        {
            playerItemSelect.value = [];
            selectedPlayer.value = null;
            form.playerId = selectedPlayer.value;
            // console.log('team selected: ' + val.id);
            await playerStore.getPlayerSelectListItemByTeamId(val.id);
            playerItemSelect.value = playerStore.playerItemSelect;
        }
    }
    form.playerId = null;
});

watch(selectedPlayer, (val) =>
{
    if (val)
    {
        form.playerId = val.id ?? null
        // console.log('select player: ' + form.playerId);
    }
})

watch(selectedCard, (val) =>
{
    if (val)
    {
        console.log('select card: ' + val.id);
        form.type = val.id ?? null
    }
})

onMounted(async () =>
{
    loading.value = true;
    try
    {
        await cardStore.getCards();
        if (cardStore.cards.length > 0)
            cards.value = cardStore.cards;
        //console.log('cards: ' + cards.value);

        await playerStore.getTeamSelectListItem();
        teamItemSelect.value = playerStore.teamItemSelect;
        PLAYER_LOGOS_DIR.value = cardStore.PLAYER_LOGOS_DIR;

        TEAM_LOGOS_DIR.value = teamStore.TEAM_LOGO_DIR;
        const currentlyMatches = await matchStore.filteringMatches(0) ?? [];
        if (currentlyMatches.length > 0)
        {
            matchOptions.value.length = 0;
            currentlyMatches.map((match) =>
            {
                matchOptions.value.push({
                    id: match.matchId,
                    homeTeam: {
                        id: match.homeTeamId,
                        name: match.homeTeamName,
                        logo: TEAM_LOGOS_DIR.value + match.homeTeamClubCrest,
                    },
                    awayTeam: {
                        id: match.awayTeamId,
                        name: match.awayTeamName,
                        logo: TEAM_LOGOS_DIR.value + match.awayTeamClubCrest,
                    },
                })
            })
        }
    } catch (error)
    {
        console.log('error: ' + error);
        ElMessage.error('error on mount: ' + error);

    } finally
    {
        loading.value = false;
    }
});

const filterDataTable = computed(() =>
{
    return cards.value.filter((card) =>
    {
        return (
            card.team.name.toLowerCase().includes(query.value.toLowerCase()) ||
            card.player.firstName.toLowerCase().includes(query.value.toLocaleLowerCase()) ||
            card.player.lastName.toLocaleLowerCase().includes(query.value.toLocaleLowerCase()) ||
            card.player.playerNumber.toString().toLocaleLowerCase().includes(query.value.toString().toLocaleLowerCase()) ||
            card.cardType.toLocaleLowerCase().includes(query.value.toLocaleLowerCase()) ||
            card.minutes.toString().toLocaleLowerCase().includes(query.value.toString().toLocaleLowerCase())
        )
    })
})

// actions
function handleOpenDialog()
{
    title.value = 'Create New Card';
    // Reset form fields
    form.id = 0;
    form.matchId = null;
    form.teamId = null;
    form.playerId = null;
    form.type = null;
    form.minutes = 0;

    // Reset selection fields
    selectedMatch.value = null;
    selectedTeam.value = null;
    selectedPlayer.value = null;
    selectedCard.value = null;

    // Open dialog
    modelValue.value = true;
    submitLoading.value = false;

    // Reset form validation (important!)
    nextTick(() =>
    {
        formRef.value?.resetFields();
    });
}

async function handleSubmit()
{
    try
    {
        submitLoading.value = true;
        if (form.id != 0)
        {
            console.log('edit card: ' + form.id, ', form:' + form);
            const data = await cardStore.editCardByCardId({ ...form }, form.id);
            if (data === 200)
            {
                ElMessage.success('Edit Card Successfully');
                modelValue.value = false;
            } else
            {
                ElMessage.error('Error happened: ' + data);
            }
        } else
        {
            console.log('create card: ' + form);
            const data = await cardStore.createCard({ ...form });
            if (data === 201)
            {
                ElMessage.success('Create Card Successfully');
                modelValue.value = false;
            } else
            {
                ElMessage.error('Error happened: ' + data);
            }
        }
        emit('update:form', { ...form });
        emit('submit', { ...form });
    } catch (error)
    {
        console.error('Submit error:', error);
        ElMessage.error(error.response?.data?.message || 'Submit failed');
    } finally
    {
        submitLoading.value = false;
    }
}

async function handleEdit(row)
{
    //console.log('edit on id: ' + row.team.id);
    title.value = 'Edit Card';
    selectedMatch.value = matchOptions.value.find((match) => match.id === row.matchId);
    selectedTeam.value = teamItemSelect.value.find((team) => team.id === row.team.id);

    await playerStore.getPlayerSelectListItemByTeamId(row.team.id);
    playerItemSelect.value = playerStore.playerItemSelect;
    selectedPlayer.value = playerItemSelect.value.find((player) => player.id === row.player.id);

    selectedCard.value = cardTypes.value.find((card) => card.name === row.cardType);

    form.id = row.id;
    form.matchId = row.matchId;
    form.teamId = row.team.id;
    form.playerId = selectedPlayer.value ?? row.player.id
    form.type = selectedCard.value.id ?? 0;
    form.minutes = row.minutes;


    modelValue.value = true;
    submitLoading.value = false;
}

async function handleDelete(row)
{
    console.log('delete on id: ' + row.id);
    const playerPhoto = PLAYER_LOGOS_DIR.value + row.player.photo;
    const playerName = row.player.firstName + ' ' + row.player.lastName;
    const playerNumber = row.player.playerNumber;
    const teamLogo = TEAM_LOGOS_DIR.value + row.team.clubCrest; // player’s team
    const homeLogo = TEAM_LOGOS_DIR.value + row.match.homeTeamClubCrest;
    const awayLogo = TEAM_LOGOS_DIR.value + row.match.awayTeamClubCrest;
    const minutes = row.minutes;
    const isYellow = row.cardType === 'Yellow';

    const htmlContent = `
  <style>
    .relative-container { position: relative; width: 100px; height: 100px; }
    .player-photo { width: 100%; height: 100%; object-fit: contain; border-radius: 50%; border: 1px solid #e5e7eb; }
    .card-box { position: absolute; top: 4px; right: 4px; width: 16px; height: 22px; border-radius: 4px; border: 1px solid #ccc; background-color: ${isYellow ? '#facc15' : '#ef4444'}; }
    .team-logo { position: absolute; bottom: 2px; right: 2px; width: 30px; height: 30px; border-radius: 50%; border: 1px solid #e5e7eb; background: white; object-fit: contain; }
  </style>

  <div class="flex flex-col items-center space-y-4">
    <div class="relative-container">
      <img src="${playerPhoto}" alt="Player Photo" class="player-photo" />
      <div class="card-box"></div>
      <img src="${teamLogo}" alt="Team Logo" class="team-logo" />
    </div>
    <div class="text-center mt-2">
  <div class="text-base font-semibold text-gray-800">${playerName}</div>
  <div class="text-sm text-gray-500">#${playerNumber}</div>
</div>
    <div class="mt-1">
  <span class="inline-block bg-gray-100 text-gray-800 text-xl font-bold px-3 py-1 rounded-full shadow">
    ${minutes}&rsquo;
  </span>
</div>
    <div class="grid grid-cols-3 gap-4 items-center text-center bg-amber-50 shadow-sm border-0 rounded-sm px-1 py-2 w-full">
      <div>
        <img src="${homeLogo}" alt="${row.match.homeTeamName}" class="w-10 h-10 object-contain mx-auto" />
        <div class="text-sm text-gray-600 mt-1">${row.match.homeTeamName}</div>
      </div>
      <div class="text-xl font-semibold text-gray-700">VS</div>
      <div>
        <img src="${awayLogo}" alt="${row.match.awayTeamName}" class="w-10 h-10 object-contain mx-auto" />
        <div class="text-sm text-gray-600 mt-1">${row.match.awayTeamName}</div>
      </div>
    </div>

    <p class="text-base text-center text-gray-700 font-medium mt-2">
      Are you sure you want to delete this card?
    </p>
  </div>
`;
    ElMessageBox.confirm(htmlContent, {
        title: 'Delete Card Confirmation',
        confirmButtonText: 'Yes, Delete',
        cancelButtonText: 'Cancel',
        type: 'warning',
        center: true,
        dangerouslyUseHTMLString: true,
    })
        .then(async () =>
        {
            try
            {
                if (row.matchId)
                {
                    const data = await cardStore.deleteCardByCardId(row.id);
                    if (data === 200)
                    {
                        ElMessage.success({
                            type: 'success',
                            message: 'Card deleted successfully',
                        });
                    } else
                    {
                        ElMessage.error({
                            type: 'error',
                            message: 'Failed to delete card. Please try again.',
                        });
                    }
                } else
                {
                    ElMessage.error({
                        type: 'error',
                        message: 'Card ID not found: ' + row.id,
                    });
                }
            } catch (error)
            {
                ElMessage.error({
                    type: 'error',
                    message: 'Error: ' + error,
                });
            }
        })
        .catch(() =>
        {
            ElMessage.info({
                type: 'info',
                message: 'Delete canceled',
            });
        });
}

const formatDate = (dateString) =>
{
    const date = new Date(dateString)
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
        'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    return `${weekdays[date.getDay()]}, ${String(date.getDate()).padStart(2, '0')}-${months[date.getMonth()]}-${date.getFullYear()}`
}

const formatTime = (timeString) =>
{
    const date = new Date(`1970-01-01T${timeString}`) // base date to parse time only
    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    })
}
</script>

<template>
    <div class="flex justify-end mb-2">
        <el-button type="info" @click="handleOpenDialog" :icon="Plus" plain>Add New</el-button>
    </div>
    <!-- dialog -->
    <BaseDialogForm v-model="modelValue" :form="form" :formRef="formRef" :rules="rules" :title="title" :width="width"
        :loading="submitLoading" @update:form="emit('update:form', $event)"
        @update:modelValue="emit('update:modelValue', $event)" @submit="handleSubmit">
        <template #form>
            <BaseMatchSelect v-model="selectedMatch" :options="matchOptions" prop="matchId" :label="matchSelectLabel"
                :placeholder="selectMatchPlaceholder" :width="selectWidth" />

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BaseSelectWithIcon v-model="selectedTeam" :options="teamItemSelect" label="Team"
                    :placeholder="teamPlaceholder" prop="teamId" :width="selectWidth" :height="selectHeight" />
                <BaseSelectWithIcon v-model="selectedPlayer" :options="playerItemSelect" label="Player"
                    :placeholder="playerPlaceholder" prop="playerId" />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <el-form-item label="Card Type" prop="type">
                    <el-select v-model="selectedCard" placeholder="Choose a team" class="w-full" :value-key="'id'">
                        <template #prefix>
                            <div v-if="selectedCard" :class="selectedCard.logo">

                            </div>
                        </template>
                        <el-option v-for="card in cardTypes" :key="card.id" :label="card.name" :value="card">
                            <div class="flex items-center gap-2">
                                <div :class="card.logo"></div>
                                <span>{{ card.name }}</span>
                            </div>
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="Minutes" prop="minutes">
                    <el-input v-model.number="form.minutes" type="number" :min="0.01" />
                </el-form-item>
            </div>
        </template>
    </BaseDialogForm>

    <!-- table -->
    <BaseTable :table-data="filterDataTable" :columns="columns" :loading="loading" :show-index="true">

        <template #player="{ row }">
            <div class="flex items-center gap-3">
                <el-avatar :size="60" :src="row.player.photo ? PLAYER_LOGOS_DIR + row.player.photo : ''">
                    {{ row.player.firstName.charAt(0) }}{{ row.player.lastName.charAt(0) }}
                </el-avatar>
                <div class="flex flex-col">
                    <span class="font-medium">{{ row.player.firstName }} {{ row.player.lastName }}</span>
                    <span class="text-xs text-gray-500">#{{ row.player.playerNumber }}</span>
                </div>
            </div>
        </template>

        <template #fromTeam="{ row }">
            <div class="flex flex-col gap-1">
                <img :src="row.team.clubCrest ? cardStore.TEAM_LOGOS_DIR + row.team.clubCrest : ''"
                    :alt="row.team.clubCrest" class="w-12 h-12 object-contain mx-auto">
                <span class="text-sm text-wrap">{{ row.team.name }}</span>
            </div>
        </template>

        <template #match="{ row }">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-1">
                <div class="flex justify-center items-center flex-col">
                    <img :src="row.match.homeTeamClubCrest ? cardStore.TEAM_LOGOS_DIR + row.match.homeTeamClubCrest : ''"
                        :alt="row.match.homeTeamClubCrest" class="w-10 h-10 object-contain mx-auto" />
                    <div class="text-gray-500 text-center mt-1 text-xs text-wrap">{{ row.match.homeTeamName }}</div>
                </div>
                <div class="flex flex-col items-center">
                    <span class="text-xs font-medium bg-gray-100 px-2 py-1 rounded">VS</span>
                </div>
                <div class="flex justify-center flex-col">
                    <img :src="row.match.awayTeamClubCrest ? cardStore.TEAM_LOGOS_DIR + row.match.awayTeamClubCrest : ''"
                        :alt="row.match.awayTeamClubCrest" class="w-10 h-10 object-contain mx-auto" />
                    <div class="text-gray-500 text-center mt-1 text-xs text-wrap">{{ row.match.awayTeamName }}</div>
                </div>
            </div>
            <div class="text-center text-xs mt-1">{{ formatDate(row.match.matchDate) }} {{
                formatTime(row.match.matchTime) }}</div>
        </template>

        <template #cardType="{ row }">
            <div class="flex justify-center flex-col items-center">
                <div v-if="row.cardType === 'Yellow'" class="w-7 h-10 bg-amber-400 border-1 rounded-[5px] text-center">
                </div>
                <div v-else class="w-7 h-10 bg-red-500 border-1 rounded-[5px] text-center"></div>
                <span>{{ row.cardType }}</span>
            </div>
        </template>

        <template #minutes="{ row }">
            <span class="inline-block bg-gray-100 text-gray-500 text-sm font-bold px-3 py-1 rounded-full shadow">{{
                row.minutes }}&rsquo;</span>
        </template>

        <template #actions>
            <el-table-column label="Actions" width="320" label-class-name="text-center" align="center" fixed="right">
                <template #header>
                    <el-input v-model="query" size="normal" placeholder="Search ..." :prefix-icon="Search" clearable />
                </template>
                <template #default="{ row }">
                    <el-button type="warning" @click="handleEdit(row)" :icon="EditPen" plain>Edit</el-button>
                    <el-button type="danger" @click="handleDelete(row)" :icon="Delete" plain>Delete</el-button>
                </template>
            </el-table-column>
        </template>
    </BaseTable>
</template>