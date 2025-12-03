<script setup>
import { ref, onMounted } from 'vue';
import router from '@/router';
import { useMatchStore, useNewsStore } from '@/stores';
import { partners } from '@/stores/partner';
import { ElMessage } from 'element-plus';
import SponsorBar from '@/components/SponsorBar.vue';
import BaseVideosCard from '@/components/BaseVideosCard.vue';
import BaseViewMoreVideosCard from '@/components/BaseViewMoreVideosCard.vue';
import BaseStoriesCard from '@/components/BaseStoriesCard.vue';
import BaseNewsMiniCard from '@/components/BaseNewsMiniCard.vue';
import
{
  ArrowRight,
} from '@element-plus/icons-vue';
import BaseMatchMiniCard from '@/components/BaseMatchMiniCard.vue';

const sponsorImage = ref('/src/assets/sponsors/8942442685205285966.gif');
const sponsorImage1 = ref('/src/assets/sponsors/07710_PremierLeagueDigitalProducts_MYPL_WebPage_1456x180_AWK-V3a.webp');
const sponsorImage2 = ref('/src/assets/sponsors/we_all_feel_it_gif.webp');
const sponsorImage3 = ref('/src/assets/sponsors/PL2526-Adobe-Promos-Desktop-2.webp');

const mainNews = ref({
  id: 1,
  title: 'Liverpool and Manchester United face off in a thrilling match',
  summary: 'A detailed report on the exciting match between Liverpool and Manchester United.',
  category: 'Match report',
  thumbnail: '/src/assets/news/Virgil-van-Dijk-Erling-Haaland-both-pictured-unhappy-.webp',
});

const matches = ref([
  {
    matchTitle: 'Yesterday',
    matches: [
      {
        matchId: 1,
        kickoffTime: '19:00',
        isPreview: false,
        isFullTime: true,
        HT: '1-0',
        FT: '2-1',
        homeClub: {
          id: 1,
          clubName: 'Spurs',
          clubCrest: 'tot.svg',
          clubTheme: '#000a3c',
        },
        awayClub: {
          id: 2,
          clubName: 'Man Utd',
          clubCrest: 'menu.svg',
          clubTheme: '#b90006',
        },
        matchWeek: '11',
        matchDate: 'Sat 08 Nov',
        kickoffStadium: 'Tottenham Hotspur Stadium',
        kickoffCoach: 'Samuel Barrott',
        matchClubs: 'Tottenham Hotspur vs Manchester United',
        matchOnSeason: '2025/2026',
        league: 'Premier League',
        matchStory: 'TOT 2-1 MUN'
      },
      {
        matchId: 2,
        kickoffTime: '21:00',
        isPreview: false,
        isFullTime: true,
        HT: '0-0',
        FT: '1-0',
        homeClub: {
          id: 3,
          clubName: 'Chelsea',
          clubCrest: 'che.png',
          clubTheme: '#034694',
        },
        awayClub: {
          id: 4,
          clubName: 'Liverpool',
          clubCrest: 'liv.png',
          clubTheme: '#c8102e',
        },
        matchWeek: '11',
        matchDate: 'Sat 08 Nov',
        kickoffStadium: 'Stamford Bridge',
        kickoffCoach: 'Michael Oliver',
        matchClubs: 'Chelsea vs Liverpool',
        matchOnSeason: '2025/2026',
        league: 'Premier League',
        matchStory: 'CHE 1-0 LIV'
      },
      {
        matchId: 3,
        kickoffTime: '23:30',
        isPreview: false,
        isFullTime: true,
        HT: '1-1',
        FT: '1-3',
        homeClub: {
          id: 5,
          clubName: 'Arsenal',
          clubCrest: 'ars.png',
          clubTheme: '#ef0107',
        },
        awayClub: {
          id: 6,
          clubName: 'Brighton',
          clubCrest: 'bhr.png',
          clubTheme: '#0057b8',
        },
        matchWeek: '11',
        matchDate: 'Sat 08 Nov',
        kickoffStadium: 'Emirates Stadium',
        kickoffCoach: 'Craig Pawson',
        matchClubs: 'Arsenal vs Brighton',
        matchOnSeason: '2025/2026',
        league: 'Premier League',
        matchStory: 'ARS 1-3 BHA'
      },
      {
        matchId: 4,
        kickoffTime: '18:30',
        isPreview: false,
        isFullTime: true,
        HT: '1-2',
        FT: '2-4',
        homeClub: {
          id: 7,
          clubName: 'Newcastle',
          clubCrest: 'new.png',
          clubTheme: '#241F20',
        },
        awayClub: {
          id: 8,
          clubName: 'Man City',
          clubCrest: 'mci.png',
          clubTheme: '#6CABDD',
        },
        matchWeek: '11',
        matchDate: 'Sat 08 Nov',
        kickoffStadium: 'St James\' Park',
        kickoffCoach: 'Anthony Taylor',
        matchClubs: 'Newcastle United vs Manchester City',
        matchOnSeason: '2025/2026',
        league: 'Premier League',
        matchStory: 'NEW 2-4 MCI'
      },
      {
        matchId: 5,
        kickoffTime: '20:00',
        isPreview: false,
        isFullTime: true,
        HT: '0-1',
        FT: '1-2',
        homeClub: {
          id: 9,
          clubName: 'Aston Villa',
          clubCrest: 'avl.png',
          clubTheme: '#670e36',
        },
        awayClub: {
          id: 10,
          clubName: 'Ipswich Town',
          clubCrest: 'ips.png',
          clubTheme: '#7A263A',
        },
        matchWeek: '11',
        matchDate: 'Sat 08 Nov',
        kickoffStadium: 'Villa Park',
        kickoffCoach: 'Robert Jones',
        matchClubs: 'Aston Villa vs Ipswich Town',
        matchOnSeason: '2025/2026',
        league: 'Premier League',
        matchStory: 'AVL 1-2 WHU'
      }
    ]
  },
  {
    matchTitle: 'Today',
    matches: [
      {
        matchId: 6,
        kickoffTime: '18:00',
        isPreview: true,
        isFullTime: false,
        HT: null,
        FT: null,
        homeClub: {
          id: 11,
          clubName: 'Everton',
          clubCrest: 'eve.png',
          clubTheme: '#003399',
        },
        awayClub: {
          id: 12,
          clubName: 'Leicester',
          clubCrest: 'lei.png',
          clubTheme: '#003090',
        },
        matchWeek: '12',
        matchDate: 'Sun 09 Nov',
        kickoffStadium: 'Goodison Park',
        kickoffCoach: 'John Brooks',
        matchClubs: 'Everton vs Leicester City',
        matchOnSeason: '2025/2026',
        league: 'Premier League',
        matchStory: null
      },
      {
        matchId: 7,
        kickoffTime: '20:00',
        isPreview: true,
        isFullTime: false,
        HT: null,
        FT: null,
        homeClub: {
          id: 13,
          clubName: 'Southampton',
          clubCrest: 'sou.png',
          clubTheme: '#D71920',
        },
        awayClub: {
          id: 14,
          clubName: 'Crystal Palace',
          clubCrest: 'cry.png',
          clubTheme: '#1B458F',
        },
        matchWeek: '12',
        matchDate: 'Sun 09 Nov',
        kickoffStadium: 'St Mary\'s Stadium',
        kickoffCoach: 'Peter Bankes',
        matchClubs: 'Southampton vs Crystal Palace',
        matchOnSeason: '2025/2026',
        league: 'Premier League',
        matchStory: null
      },
      {
        matchId: 8,
        kickoffTime: '21:00',
        isPreview: true,
        isFullTime: false,
        HT: null,
        FT: null,
        homeClub: {
          id: 15,
          clubName: 'Fulham',
          clubCrest: 'ful.png',
          clubTheme: '#000000',
        },
        awayClub: {
          id: 16,
          clubName: 'Bournemouth',
          clubCrest: 'bou.png',
          clubTheme: '#DA291C',
        },
        matchWeek: '12',
        matchDate: 'Sun 09 Nov',
        kickoffStadium: 'Craven Cottage',
        kickoffCoach: 'Darren England',
        matchClubs: 'Fulham vs Bournemouth',
        matchOnSeason: '2025/2026',
        league: 'Premier League',
        matchStory: null
      },
      {
        matchId: 9,
        kickoffTime: '22:30',
        isPreview: true,
        isFullTime: false,
        HT: null,
        FT: null,
        homeClub: {
          id: 17,
          clubName: 'Wolves',
          clubCrest: 'wol.svg',
          clubTheme: '#FDB913',
        },
        awayClub: {
          id: 18,
          clubName: 'Nottingham Forest',
          clubCrest: 'nf.svg',
          clubTheme: '#DD0000',
        },
        matchWeek: '12',
        matchDate: 'Sun 09 Nov',
        kickoffStadium: 'Molineux Stadium',
        kickoffCoach: 'Chris Kavanagh',
        matchClubs: 'Wolves vs Nottingham Forest',
        matchOnSeason: '2025/2026',
        league: 'Premier League',
        matchStory: null
      },
      {
        matchId: 10,
        kickoffTime: '23:00',
        isPreview: true,
        isFullTime: false,
        HT: null,
        FT: null,
        homeClub: {
          id: 19,
          clubName: 'Brentford',
          clubCrest: 'bre.png',
          clubTheme: '#e30613',
        },
        awayClub: {
          id: 20,
          clubName: 'Burnley',
          clubCrest: 'bunley.svg',
          clubTheme: '#6C1D45',
        },
        matchWeek: '12',
        matchDate: 'Sun 09 Nov',
        kickoffStadium: 'Gtech Community Stadium',
        kickoffCoach: 'Stuart Attwell',
        matchClubs: 'Brentford vs Burnley',
        matchOnSeason: '2025/2026',
        league: 'Premier League',
        matchStory: null
      }
    ]
  }
]);

const miniNews = ref([
  {
    id: 1,
    title: 'Barnes double hits Man City hopes of closing gap on Arsenal',
    category: 'Match report',
    imageUrl: '/src/assets/news/Harvey-Barnes-with-his-arms-outstretched-wheels-away-after-scoring-against-Man-City.webp',
  },
  {
    id: 2,
    title: 'Forest\'s big win at Anfield hands Liverpool sixth loss in seven matches',
    category: 'Tactics and Analysis',
    imageUrl: '/src/assets/news/Murillo.webp',
  },
  {
    id: 3,
    title: 'Chelsea beat Burnley to go three points behind Arsenal',
    category: 'Match report',
    imageUrl: '/src/assets/news/Enzo-Fernandez-and-Pedro-Neto-in-arms-for-celebration.webp',
  },
  {
    id: 4,
    title: 'Crystal Palace go fourth after win on Edwards\' Wolves debut',
    category: 'Features',
    imageUrl: '/src/assets/news/Yeremy-Pino-celebrates-scoring-Crystal-Palace-s-second-goal-at-Wolves.webp',
  },
  {
    id: 5,
    title: 'How much will Arsenal miss Gabriel and who might replace him?',
    category: 'Match report',
    imageUrl: '/src/assets/news/PL2526-TALKING-TACTICS_2011_v3.webp',
  },
]);

const matchesNews = ref([
  {
    id: 4455832,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    category: 'Mini-Games',
    thumbnail: '/path/to/thumbnail1.jpg',
  },
  {
    id: 4455833,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    category: 'Tactics and Analysis',
    thumbnail: '/path/to/thumbnail2.jpg'
  },
  {
    id: 4455834,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    category: 'Club News',
    thumbnail: '/path/to/thumbnail3.jpg'
  },
  {
    id: 4455835,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    category: 'Club News',
    thumbnail: '/path/to/thumbnail4.jpg'
  },
  {
    id: 4455836,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    category: 'Features',
    thumbnail: '/path/to/thumbnail5.jpg'
  },
]);

const latestNews = ref([
  {
    id: 4455832,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    category: 'Match report',
    thumbnail: '/path/to/thumbnail1.jpg',
  },
  {
    id: 4455833,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    category: 'Match report',
    thumbnail: '/path/to/thumbnail2.jpg'
  },
  {
    id: 4455834,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    category: 'Match report',
    thumbnail: '/path/to/thumbnail3.jpg'
  },
  {
    id: 4455835,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    category: 'Match report',
    thumbnail: '/path/to/thumbnail4.jpg'
  },
  {
    id: 4455836,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    category: 'Match report',
    thumbnail: '/path/to/thumbnail5.jpg'
  },
]);

const formTheClubs = ref([{
  id: 4455832,
  title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
  category: 'Club news',
  thumbnail: '/path/to/thumbnail1.jpg',
},
{
  id: 4455833,
  title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
  category: 'Club news',
  thumbnail: '/path/to/thumbnail2.jpg'
},
{
  id: 4455834,
  title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
  category: 'Club news',
  thumbnail: '/path/to/thumbnail3.jpg'
},
{
  id: 4455835,
  title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
  category: 'Club news',
  thumbnail: '/path/to/thumbnail4.jpg'
},
{
  id: 4455836,
  title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
  category: 'Club news',
  thumbnail: '/path/to/thumbnail5.jpg'
},
]);

const latestVideos = ref([
  {
    id: 4455832,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    category: 'Interviews',
    thumbnail: '/path/to/thumbnail1.jpg',
  },
  {
    id: 4455833,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    thumbnail: '/path/to/thumbnail2.jpg'
  },
  {
    id: 4455834,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    thumbnail: '/path/to/thumbnail3.jpg'
  },
  {
    id: 4455835,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    thumbnail: '/path/to/thumbnail4.jpg'
  },
  {
    id: 4455836,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    thumbnail: '/path/to/thumbnail5.jpg'
  },
  {
    id: 4455837,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    category: 'Classic Matches',
    thumbnail: '/path/to/thumbnail6.jpg'
  },
  {
    id: 4455838,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    thumbnail: '/path/to/thumbnail7.jpg'
  },
]);

const fantasyPremierLeague = ref([
  {
    id: 1,
    title: 'Fantasy Premier League Tips: Top Picks for Gameweek 5',
    category: 'Fantasy Premier League',
    thumbnail: '/path/to/fpl_thumbnail1.jpg',
  },
  {
    id: 2,
    title: 'Captaincy Choices for Gameweek 5: Who to Pick?',
    category: 'Fantasy Premier League',
    thumbnail: '/path/to/fpl_thumbnail2.jpg',
  },
  {
    id: 3,
    title: 'Differential Picks for Gameweek 5: Stand Out from the Crowd',
    category: 'Fantasy Premier League',
    thumbnail: '/path/to/fpl_thumbnail3.jpg',
  },
  {
    id: 4,
    title: 'Injury Updates and Their Impact on Fantasy Teams for Gameweek 5',
    category: 'Fantasy Challenge',
    thumbnail: '/path/to/fpl_thumbnail4.jpg',
  },
  {
    id: 5,
    title: 'Wildcard Strategy for Gameweek 5: When and How to Use It',
    category: 'Fantasy Premier League',
    thumbnail: '/path/to/fpl_thumbnail5.jpg',
  },
]);

const fixtures = ref([
  {
    id: 1,
    title: 'Analysis: Man Utd look to be in safe hands with Lammens',
    category: 'Tactics and Analysis',
    thumbnail: '/path/to/fpl_thumbnail1.jpg',
  },
  {
    id: 2,
    title: 'Preview: Chelsea vs Liverpool - A Clash of Styles',
    category: 'Match Preview',
    thumbnail: '/path/to/fpl_thumbnail2.jpg',
  },
  {
    id: 3,
    title: 'Report: Arsenal secure late win against Spurs',
    category: 'Match Report',
    thumbnail: '/path/to/fpl_thumbnail3.jpg',
  },
  {
    id: 4,
    title: 'Interview: Pep Guardiola on City’s title ambitions',
    category: 'Interviews',
    thumbnail: '/path/to/fpl_thumbnail4.jpg',
  },
  {
    id: 5,
    title: 'Feature: The rise of young English talents in the Premier League',
    category: 'Features',
    thumbnail: '/path/to/fpl_thumbnail5.jpg',
  },
]);

const HallOfFame = ref([
  {
    id: 1,
    title: 'Neville: I used to dream about playing for Man Utd',
    category: 'Hall of Fame',
    thumbnail: '/path/to/hall_of_fame1.jpg',
  },
  {
    id: 2,
    title: 'Hazard enters Hall of Fame: \'My mum deserves this award\'',
    category: 'Hall of Fame',
    thumbnail: '/path/to/hall_of_fame2.jpg',
  },
  {
    id: 3,
    title: 'Lampard: Chelsea legend inducted into Hall of Fame',
    category: 'Hall of Fame',
    thumbnail: '/path/to/hall_of_fame3.jpg',
  },
  {
    id: 4,
    title: 'Shearer: Proud to join Premier League Hall of Fame',
    category: 'Hall of Fame',
    thumbnail: '/path/to/hall_of_fame4.jpg',
  },
  {
    id: 5,
    title: "Giggs: 'Honoured to be part of Premier League Hall of Fame'",
    category: 'Hall of Fame',
    thumbnail: '/path/to/hall_of_fame5.jpg',
  },
]);

const premierLeagues = ref([
  {
    id: 1,
    title: 'myPremierLeague: A new way to personalise your experience',
    category: 'News',
    thumbnail: '/path/to/thumbnail1.jpg',
  },
  {
    id: 2,
    title: 'Premier League launches new AI-powered features',
    category: 'News',
    thumbnail: '/path/to/thumbnail2.jpg'
  },
  {
    id: 3,
    title: 'Exclusive interview with Premier League CEO on future plans',
    category: 'Interview',
    thumbnail: '/path/to/thumbnail3.jpg',
  },
  {
    id: 4,
    title: 'Premier League announces new sustainability initiatives',
    category: 'News',
    thumbnail: '/path/to/thumbnail4.jpg'
  },
  {
    id: 5,
    title: 'Behind the scenes of Premier League’s global expansion',
    category: 'Feature',
    thumbnail: '/path/to/thumbnail5.jpg'
  },
]);

const moreThanAGames = ref([
  {
    id: 1,
    title: 'Premier League launches mental health awareness campaign',
    category: 'More Than A Game',
    thumbnail: '/path/to/thumbnail1.jpg',
  },
  {
    id: 2,
    title: 'Community initiatives making a difference off the pitch',
    category: 'More Than A Game',
    thumbnail: '/path/to/thumbnail2.jpg'
  },
  {
    id: 3,
    title: 'Player stories: Using football to inspire change',
    category: 'More Than A Game',
    thumbnail: '/path/to/thumbnail3.jpg',
  },
  {
    id: 4,
    title: 'Clubs unite for social causes in local communities',
    category: 'More Than A Game',
    thumbnail: '/path/to/thumbnail4.jpg'
  },
  {
    id: 5,
    title: 'The impact of football on education and youth development',
    category: 'More Than A Game',
    thumbnail: '/path/to/thumbnail5.jpg'
  },
  {
    id: 6,
    title: 'How football promotes diversity and inclusion',
    category: 'More Than A Game',
    thumbnail: '/path/to/thumbnail6.jpg'
  },
]);

const premierLeaguesGames = ref([
  {
    id: 1,
    title: 'Premier League launches mental health awareness campaign',
    category: 'More Than A Game',
    thumbnail: '/path/to/thumbnail1.jpg',
  },
  {
    id: 2,
    title: 'Community initiatives making a difference off the pitch',
    category: 'More Than A Game',
    thumbnail: '/path/to/thumbnail2.jpg'
  },
  {
    id: 3,
    title: 'Player stories: Using football to inspire change',
    category: 'More Than A Game',
    thumbnail: '/path/to/thumbnail3.jpg',
  },
  {
    id: 4,
    title: 'Clubs unite for social causes in local communities',
    category: 'More Than A Game',
    thumbnail: '/path/to/thumbnail4.jpg'
  },
  {
    id: 5,
    title: 'The impact of football on education and youth development',
    category: 'More Than A Game',
    thumbnail: '/path/to/thumbnail5.jpg'
  },
  {
    id: 6,
    title: 'How football promotes diversity and inclusion',
    category: 'More Than A Game',
    thumbnail: '/path/to/thumbnail6.jpg'
  },
]);

const bestMoments2025_26 = ref([
  {
    id: 1,
    tag: 'New',
    title: 'Top 10 goals of the season',
    thumbnail: '/src/assets/club_best_news/best_goals.jpg'
  },
  {
    id: 2,
    tag: 'New',
    title: 'Amazing saves by goalkeepers',
    thumbnail: '/src/assets/club_best_news/amazing_saves.jpg'
  },
  {
    id: 3,
    tag: 'New',
    title: 'Best assists and passes',
    thumbnail: '/src/assets/club_best_news/best_assists.jpg'
  },
  {
    id: 4,
    tag: 'New',
    title: 'Incredible dribbles and skills',
    thumbnail: '/src/assets/club_best_news/incredible_dribbles.jpg'
  },
  {
    id: 5,
    tag: 'New',
    title: 'Unforgettable comebacks',
    thumbnail: '/src/assets/club_best_news/unforgettable_comebacks.jpg'
  },
  {
    id: 6,
    tag: 'New',
    title: 'Record-breaking performances',
    thumbnail: '/src/assets/club_best_news/record_breaking.jpg'
  },
  {
    id: 7,
    tag: 'New',
    title: 'Best team plays',
    thumbnail: '/src/assets/club_best_news/best_team_plays.jpg'
  },
  {
    id: 8,
    tag: 'New',
    title: 'Fan moments',
    thumbnail: '/src/assets/club_best_news/fan_moments.jpg'
  },
  {
    id: 9,
    tag: 'New',
    title: 'Managerial masterstrokes',
    thumbnail: '/src/assets/club_best_news/managerial_masterstrokes.jpg'
  },
  {
    id: 10,
    tag: 'New',
    title: 'Season highlights',
    thumbnail: '/src/assets/club_best_news/season_highlights.jpg'
  }
]);

onMounted(async () =>
{
  window.scrollTo({ top: 0, behavior: 'auto' });
});

const interviews = ref([
  {
    id: 1,
    tag: 'New',
    title: 'Exclusive interview with the Premier League CEO',
    thumbnail: '/src/assets/interviews/interview_ceo.jpg'
  },
  {
    id: 2,
    tag: 'New',
    title: 'Star player discusses season highlights',
    thumbnail: '/src/assets/interviews/star_player.jpg'
  },
  {
    id: 3,
    tag: 'New',
    title: 'Manager shares insights on team strategy',
    thumbnail: '/src/assets/interviews/manager_strategy.jpg'
  },
]);

const trendingNow = ref([
  {
    id: 1,
    tag: 'New',
    title: 'Breaking transfer news shakes up the league',
    thumbnail: '/src/assets/trending_now/transfer_news.jpg'
  },
  {
    id: 2,
    tag: 'New',
    title: 'Injury updates impact team line-ups',
    thumbnail: '/src/assets/trending_now/injury_updates.jpg'
  },
  {
    id: 3,
    tag: 'New',
    title: 'Fan reactions to recent matches',
    thumbnail: '/src/assets/trending_now/fan_reactions.jpg'
  },
]);

const allVideos = () => router.push({ name: 'all-videos' });

function viewMore()
{
  ElMessage.info('View more news clicked!');
}

function viewAllMatches()
{
  router.push({ name: 'guest-matches-index'});
}

</script>

<template>
  <main class="px-3 min-h-screen flex flex-col gap-4">
    <SponsorBar :sponsor-image="sponsorImage" :rounded="false" :is-clickable="false" />

    <div
      class="bg-[#37003c] grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 w-full h-fit lg:h-fit rounded-2xl p-4">
      <div class="bg-[#28002b] flex flex-col gap-4 w-full h-full pb-4 lg:pb-0 rounded-2xl">
        <div class="bg-[#28002b] h-fit flex rounded-2xl overflow-hidden">
          <img :src="mainNews.thumbnail" class="w-full h-full object-contain" />
        </div>
        <div class="flex flex-col gap-2 mx-5">
          <span class="text-white sm:text-md xl:text-3xl font-bold text-wrap">{{ mainNews.title }}</span>
          <span class="text-white text-xs xl:text-sm text-wrap">{{ mainNews.summary }}</span>
          <span class="text-white text-[11px] xl:text-xs mt-2">{{ mainNews.category }}</span>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        <div class="bg-[#28002b] flex flex-col gap-10 w-full h-full rounded-2xl p-4">
          <BaseNewsMiniCard v-for="n in miniNews" :key="n.id" :miniNews="n" />
        </div>

        <div
          class="bg-[#28002b] flex flex-col gap-4 w-full h-170 rounded-2xl overflow-hidden overflow-y-scroll p-4 scrollbar-none">
          <div class="flex flex-col">
            <div class="flex justify-between items-center">
              <span class="text-white text-md font-bold">Premier League</span>
              <button @click="viewAllMatches"
                class="bg-[#37003c] px-3 py-2 rounded-2xl text-white text-xs text-center hover:bg-[#410544] cursor-pointer">View
                all matches
                <el-icon class="text-center">
                  <ArrowRight class="text-white text-center" />
                </el-icon>
              </button>
            </div>
          </div>

          <div class="flex flex-col gap-14">
            <BaseMatchMiniCard v-for="matchDay in matches" :key="matchDay.matchTitle" :match-info="matchDay" />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-[#37003c] via-[#943bff] to-[#943afc] rounded-2xl w-full h-45 mt-8 mb-12 relative">
      <div class="absolute top-3 w-full h-45 z-10 bg-[#28002b] rounded-2xl">
        <div class="w-full h-full py-4 overflow-hidden">
          <div class="flex justify-center items-center px-4 h-full overflow-x-auto scrollbar-none">
            <a v-for="partner in partners" :key="partner.id" :href="partner.officialUrl" target="_blank"
              class="flex flex-col items-center justify-between w-37 h-22 shrink-0">
              <img :src="partner.logo" :alt="partner.name" class="w-25" />
              <span class="text-white text-xs">{{ partner.content }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- best moments of 2025/26 -->
    <BaseStoriesCard :title="'Best Moments of 2025/26'" :stories="bestMoments2025_26" />

    <!-- interviews -->
    <BaseStoriesCard :title="'Interviews'" :stories="interviews" />

    <!-- matches news  -->
    <BaseViewMoreVideosCard class="my-4" :title="'Arsenal vs Spurs'" :videos="matchesNews" :viewMore="viewMore" />

    <!-- latest news -->
    <BaseViewMoreVideosCard class="my-4" :title="'Latest News'" :videos="latestNews" :viewMore="viewMore" />

    <!-- form the clubs -->
    <BaseViewMoreVideosCard class="my-4" :title="'From the Clubs'" :videos="formTheClubs" :viewMore="viewMore" />

    <!-- latest videos -->
    <BaseVideosCard class="my-4" :title="'Latest Videos'" :videos="latestVideos" :all-videos="allVideos"
      :isAllVideosButton="true" :allVideosButtonTitle="'View more'" :isPreviousAndNextButtons="true" />

    <!-- fantasy premier league -->
    <BaseViewMoreVideosCard class="my-4" :title="'Fantasy Premier League'" :videos="fantasyPremierLeague"
      :viewMore="viewMore" />

    <!-- fixtures & analysis -->
    <BaseViewMoreVideosCard class="my-4" :title="'Fixtures'" :videos="fixtures" :viewMore="viewMore" />

    <!-- trending now -->
    <BaseStoriesCard :title="'Trending Now'" :stories="trendingNow" />

    <!-- hall of fame -->
    <BaseViewMoreVideosCard class="mt-4" :title="'Hall of Fame'" :videos="HallOfFame" :viewMore="viewMore" />

    <div class="bg-[#28002b] flex flex-col rounded-2xl w-full h-60 my-4 p-4">
      <div class="text-white text-xl lg:text-3xl font-bold">Premier League Companion, <span
          class="text-gray-300 font-normal">your personalised AI assistant.</span></div>
    </div>

    <SponsorBar class="!mb-3" :sponsor-image="sponsorImage1" :sponsor-width="'60rem'" :rounded="true"
      :is-clickable="false" />

    <!-- premier league -->
    <BaseViewMoreVideosCard class="mb-4" :title="'Premier League'" :videos="premierLeagues" :viewMore="viewMore" />

    <SponsorBar :sponsor-image="sponsorImage2" :sponsor-width="'60rem'" :rounded="true" :is-clickable="false" />

    <!-- more than a game -->
    <BaseVideosCard class="mb-4" :title="'More than a Game'" :videos="moreThanAGames" :all-videos="allVideos"
      :isAllVideosButton="true" :allVideosButtonTitle="'More'" :isPreviousAndNextButtons="true" />

    <SponsorBar :sponsor-image="sponsorImage3" :sponsor-width="'60rem'" :rounded="true" :is-clickable="false" />

    <!-- premier league games -->
    <BaseVideosCard class="mb-4" :title="'Premier League Games'" :videos="premierLeaguesGames" :all-videos="allVideos"
      :isAllVideosButton="true" :allVideosButtonTitle="'More'" :isPreviousAndNextButtons="true" />

  </main>
</template>

<style>
html,
body {
  background: #1e0021 !important;
}

.scrollbar-none::-webkit-scrollbar {
  display: none !important;
}

.scrollbar-none {
  -ms-overflow-style: none !important;
  scrollbar-width: none !important;
}
</style>
