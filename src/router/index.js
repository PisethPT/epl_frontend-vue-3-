import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/users/LoginView.vue";
import RegisterView from "@/views/users/RegisterView.vue";
import Empty from "@/components/Empty.vue";
import GuestLayoutView from "@/views/layouts/GuestLayoutView.vue";
import AdminLayoutView from "@/views/layouts/AdminLayoutView.vue";
import HomeView from "@/views/HomeView.vue";
import GuestClubsIndex from "@/views/clubs/ClubView.vue";
import GuestPlayerIndex from "@/views/players/PlayersView.vue";
import GuestMatchesIndex from "@/views/matches/MatchesView.vue";
import GuestTablesIndex from "@/views/tables/TableView.vue";
import GuestStatisticsIndex from "@/views/statistics/StatisticView.vue";
import GuestNewsIndex from "@/views/news/NewsView.vue";
import GuestTransfersIndex from "@/views/transfers/TransferView.vue";
import VideoView from "@/views/videos/VideoView.vue";
import VideoSeriesView from "@/views/videos/VideoSeriesView.vue";
import TheArchiveView from "@/views/videos/TheArchiveView.vue";
import AllVideosView from "@/views/videos/AllVideosView.vue";
import ViewVideoView from "@/views/videos/ViewVideoView.vue";
import MatchesDetailView from "@/views/matches/MatchesDetailView.vue";

// admin pages
import AdminDashboard from "@/views/admins/DashboardView.vue";
import AdminTeamView from "@/views/admins/AdminTeamView.vue";
import AdminPlayerView from "@/views/admins/AdminPlayerView.vue";
import AdminMatchView from "@/views/admins/AdminMatchView.vue";
import AdminSeasonView from "@/views/admins/AdminSeasonView.vue";
import AdminNewsView from "@/views/admins/AdminNewsView.vue";
import AdminCardView from "@/views/admins/AdminCardView.vue";
import AdminGoalView from "@/views/admins/AdminGoalView.vue";
import AdminAssistView from "@/views/admins/AdminAssistView.vue";
import AdminIssuesView from "@/views/admins/IssuesView.vue";

// clubs child
import ClubDetailView from "@/views/clubs/ClubDetailView.vue";
// player detail
import GuestPlayerDetailView from "@/views/players/PlayerDetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminLayoutView,
      children: [
        {
          path: "/admin/dashboard",
          name: "admin-dashboard",
          component: AdminDashboard,
        },
        {
          path: "/admin/news/index",
          name: "admin-news-index",
          component: AdminNewsView,
        },
        {
          path: "/admin/teams/index",
          name: "admin-teams-index",
          component: AdminTeamView,
        },
        {
          path: "/admin/players/index",
          name: "admin-players-index",
          component: AdminPlayerView,
        },
        {
          path: "/admin/matches/index",
          name: "admin-matches-index",
          component: AdminMatchView,
        },
        {
          path: "/admin/seasons/index",
          name: "admin-seasons-index",
          component: AdminSeasonView,
        },
        {
          path: "/admin/cards/index",
          name: "admin-cards-index",
          component: AdminCardView,
        },
        {
          path: "/admin/goals/index",
          name: "admin-goals-index",
          component: AdminGoalView,
        },
        {
          path: "/admin/assists/index",
          name: "admin-assists-index",
          component: AdminAssistView,
        },
        {
          path: "/admin/issues/index",
          name: "admin-issues-index",
          component: AdminIssuesView,
        },
        {
          path: ":pathMatch(.*)*",
          name: "admin-not-found",
          component: Empty,
        },
      ],
    },
    {
      path: "/index",
      name: "index",
      component: GuestLayoutView,
      children: [
        {
          path: "/guest/epl/home",
          name: "guest-epl-home",
          component: HomeView,
        },
        {
          path: "/guest/clubs/index",
          name: "guest-clubs-index",
          component: GuestClubsIndex,
        },
        {
          path: "/clubs/:clubId/:clubName/overview",
          name: "clubs",
          component: ClubDetailView,
          children: [
            {
              path: "clubs/:clubId/:clubName/overview",
              name: "clubs-overview",
              component: () => import("@/views/clubs/Overview.vue"),
            },
            {
              path: "clubs/:clubId/:clubName/news",
              name: "clubs-news",
              component: () => import("@/views/clubs/News.vue"),
            },
            {
              path: "clubs/:clubId/:clubName/video",
              name: "clubs-video",
              component: () => import("@/views/clubs/Video.vue"),
            },
            {
              path: "clubs/:clubId/:clubName/matches",
              name: "clubs-matches",
              component: () => import("@/views/clubs/Matches.vue"),
            },
            {
              path: "clubs/:clubId/:clubName/squad",
              name: "clubs-squad",
              component: () => import("@/views/clubs/Squad.vue"),
            },
            {
              path: "clubs/:clubId/:clubName/stats",
              name: "clubs-stats",
              component: () => import("@/views/clubs/Stats.vue"),
            },
            {
              path: "clubs/:clubId/:clubName/stadium",
              name: "clubs-stadium",
              component: () => import("@/views/clubs/Stadium.vue"),
            },
            {
              path: "clubs/:clubId/:clubName/tickets",
              name: "clubs-tickets",
              component: () => import("@/views/clubs/Tickets.vue"),
            },
            {
              path: "clubs/:clubId/:clubName/directory",
              name: "clubs-directory",
              component: () => import("@/views/clubs/Directory.vue"),
            },
          ],
        },
        {
          path: "/guest/players/index",
          name: "guest-players-index",
          component: GuestPlayerIndex,
        },
        {
          path: "/players/:playerId/:playerName",
          component: GuestPlayerDetailView,
          children: [
            {
              path: "overview",
              name: "player-overview",
              component: () => import("@/views/players/Overview.vue"),
            },
            {
              path: "video",
              name: "player-video",
              component: () => import("@/views/players/Video.vue"),
            },
            {
              path: "matches",
              name: "player-matches",
              component: () => import("@/views/players/Matches.vue"),
            },
            {
              path: "stats",
              name: "player-stats",
              component: () => import("@/views/players/Stats.vue"),
            },
            {
              path: "career",
              name: "player-career",
              component: () => import("@/views/players/CareerHistory.vue"),
            },
          ],
        },
        {
          path: "/guest/matches/index",
          name: "guest-matches-index",
          component: GuestMatchesIndex,
        },
        {
          path: "/match/:matchId/:matchTitle",
          name: "matches-detail",
          component: MatchesDetailView,
          children: [
            {
              path: "", // :matchId/:matchTitle?tab=recap // this query = { tab: "recap" }
              name: "match-tab-recap",
              component: () => import("@/views/matches/Recap.vue"),
            },
            {
              path: "",
              name: "match-tab-highlights",
              component: () => import("@/views/matches/Highlights.vue"),
            },
            {
              path: "",
              name: "match-tab-lineups",
              component: () => import("@/views/matches/Lineups.vue"),
            },
            {
              path: "",
              name: "match-tab-stats",
              component: () => import("@/views/matches/Stats.vue"),
            },
            {
              path: "",
              name: "match-tab-table",
              component: () => import("@/views/matches/Table.vue"),
            },
            {
              path: "",
              name: "match-tab-commentary",
              component: () => import("@/views/matches/Commentary.vue"),
            },
            {
              path: "",
              name: "match-tab-match-info",
              component: () => import("@/views/matches/MatchInfo.vue"),
            },
          ],
        },
        {
          path: "/guest/tables/index",
          name: "guest-tables-index",
          component: GuestTablesIndex,
        },
        {
          path: "/guest/statistics/index",
          name: "guest-statistics-index",
          component: GuestStatisticsIndex,
          children: [
            {
              path: "/guest/statistics/stats/dashboard",
              name: "guest-statistics-stats-dashboard",
              component: () => import("@/views/statistics/Dashboard.vue"),
            },
            {
              path: "/guest/statistics/stats/players",
              name: "guest-statistics-stats-players",
              component: () => import("@/views/statistics/Players.vue"),
            },
            {
              path: "/guest/statistics/stats/clubs",
              name: "guest-statistics-stats-clubs",
              component: () => import("@/views/statistics/Clubs.vue"),
            },
            {
              path: "/guest/statistics/stats/all-time-stats",
              name: "guest-statistics-stats-all-time-stats",
              component: () => import("@/views/statistics/AllTimeStats.vue"),
            },
            {
              path: "/guest/statistics/stats/records",
              name: "guest-statistics-stats-records",
              component: () => import("@/views/statistics/Records.vue"),
            },
            {
              path: "/guest/statistics/stats/players-comparison",
              name: "guest-statistics-stats-players-comparison",
              component: () =>
                import("@/views/statistics/PlayersComparison.vue"),
            },
          ],
        },
        {
          path: "/guest/news/index",
          name: "guest-news-index",
          component: GuestNewsIndex,
        },
        {
          path: "/guest/transfers/index",
          name: "guest-transfers-index",
          component: GuestTransfersIndex,
        },
        {
          path: "/video",
          name: "video",
          component: VideoView,
        },
        {
          path: "/video/series",
          name: "video-series",
          component: VideoSeriesView,
        },
        {
          path: "/video/the-archive",
          name: "video-the-archive",
          component: TheArchiveView,
          children: [
            {
              path: "/video/the-archive/overview",
              name: "video-the-archive-overview",
              component: () => import("@/views/videos/Overview.vue"),
            },
            {
              path: "/video/the-archive/8-minute-replays",
              name: "video-the-archive-8-minute-replays",
              component: () => import("@/views/videos/EightMinuteReplays.vue"),
            },
            {
              path: "/video/the-archive/20-minute-replays",
              name: "video-the-archive-20-minute-replays",
              component: () => import("@/views/videos/TwentyMinuteReplays.vue"),
            },
          ],
        },
        {
          path: "/video/all",
          name: "all-videos",
          component: AllVideosView,
        },
        {
          path: "/video/:videoId/:videoTitle",
          name: "video-viewer",
          component: ViewVideoView,
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
