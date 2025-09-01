import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/users/LoginView.vue";
import RegisterView from "@/views/users/RegisterView.vue";
import Empty from "@/components/Empty.vue";
import GuestLayoutView from "@/views/layouts/GuestLayoutView.vue";
import AdminLayoutView from "@/views/layouts/AdminLayoutView.vue";
import HomeView from "@/views/HomeView.vue";
import GuestTeamsIndex from "@/views/TeamsView.vue";
import GuestPlayerIndex from "@/views/PlayersView.vue";
import GuestMatchesIndex from "@/views/MatchesView.vue";
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

// clubs child
import ClubDetailView from "@/views/clubs/ClubDetailView.vue";

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
          path: "/guest/teams/index",
          name: "guest-teams-index",
          component: GuestTeamsIndex,
        },
        {
          path: "/guest/teams/index/:id",
          name: "guest-team-detail",
          component: ClubDetailView,
        },
        {
          path: "/guest/players/index",
          name: "guest-players-index",
          component: GuestPlayerIndex,
        },
        {
          path: "/guest/matches/index",
          name: "guest-matches-index",
          component: GuestMatchesIndex,
        },
        {
          path: "/guest/news/index",
          name: "guest-news-index",
          component: import("@/views/NewsView.vue"),
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
