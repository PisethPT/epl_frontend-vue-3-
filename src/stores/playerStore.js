import { defineStore } from "pinia";
import { useApiConfig } from "./apiConfig";
import axios from "axios";

export const usePlayerStore = defineStore("PlayerStore", {
  state: () => {
    const apiConfig = useApiConfig();
    return {
      apiConfig,
      players: [],
      fileList: [],
      teamItemSelect: [],
      playerItemSelect: [],
      PLAYER_PHOTO_DIR: apiConfig.PLAYER_LOGOS_DIR,
      TEAM_LOGOS_DIR: apiConfig.TEAM_LOGOS_DIR,
    };
  },
  getters: {},
  actions: {
    async getPlayers() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          this.apiConfig.ENDPOINTS.PLAYER_ENDPOINTS.GET_PLAYERS_ENDPOINT,
          //+"?teamId=2",
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        this.players = [];
        if (response.status == 200) this.players = await response.data.content;
        return this.players;
      } catch (error) {
        console.error("Failed to fetch teams:", error);
        return null;
      }
    },
    async getTeamSelectListItem() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          this.apiConfig.ENDPOINTS.TEAM_ENDPOINTS.GET_TEAMS_ENDPOINT,
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        this.teamItemSelect = [];
        if (response.status == 200) {
          this.teamItemSelect = await response.data.map((team) => ({
            id: team.id,
            name: team.name,
            logo: this.TEAM_LOGOS_DIR + team.clubCrest,
          }));
        }
      } catch (error) {
        console.error("Failed to fetch teams:", error);
      }
    },
    async getPlayerSelectListItemByTeamId(teamId) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          this.apiConfig.ENDPOINTS.PLAYER_ENDPOINTS.GET_PLAYERS_ENDPOINT +
            `?teamId=${teamId}`,
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        this.playerItemSelect = [];
        if (response.status === 200) {
          this.playerItemSelect = await response.data.content.map((player) => ({
            id: player.id,
            name:
              player.firstName +
              " " +
              player.lastName +
              " (" +
              player.playerNumber +
              ")",
            logo: this.PLAYER_PHOTO_DIR + player.photo,
          }));
        }
      } catch (error) {
        if (error.response) {
          console.error("Backend error:", error.response.data);
        } else {
          console.error("Request error:", error.message);
        }
        return error;
      }
    },
    getPlayerById(playerId) {
      if (playerId === null || playerId === undefined) return null;
      return this.players.find((player) => player.id === playerId);
    },
    async createPlayer(form, fileList) {
      try {
        const formData = new FormData();
        formData.append("firstName", form.firstName);
        formData.append("lastName", form.lastName);
        formData.append("nationality", form.nationality);
        formData.append("preferredFoot", form.preferredFoot);
        formData.append("socialMedia", form.socialMedia);
        formData.append("position", form.position);
        formData.append("playerNumber", form.playerNumber);
        formData.append("teamId", form.teamId);
        fileList.value.forEach((file) => {
          console.log("file: " + file.raw);

          formData.append("photo", file.raw);
        });

        // console.log("form data: " + formData);

        const token = localStorage.getItem("token");
        const response = await axios.post(
          this.apiConfig.ENDPOINTS.PLAYER_ENDPOINTS.POST_NEW_PLAYER_ENDPOINT,
          formData,
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(JSON.stringify(response.data), " ", response.status);
        return response.status;
      } catch (error) {
        console.log("error: " + error);
        return "error: " + error;
      }
    },
    async editPlayerById(playerId, form, fileList) {
      try {
        const formData = new FormData();
        formData.append("firstName", form.firstName);
        formData.append("lastName", form.lastName);
        formData.append("nationality", form.nationality);
        formData.append("preferredFoot", form.preferredFoot);
        formData.append("socialMedia", form.socialMedia);
        formData.append("position", form.position);
        formData.append("playerNumber", form.playerNumber);
        formData.append("teamId", form.teamId);
        fileList.value.forEach((file) => {
          formData.append("photo", file.raw);
        });

        const token = localStorage.getItem("token");
        const response = await axios.put(
          this.apiConfig.ENDPOINTS.PLAYER_ENDPOINTS.PUT_PLAYER_ENDPOINT +
            playerId,
          formData,
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(JSON.stringify(response.data), " ", response.status);
        return response.status;
      } catch (error) {
        console.log("error: " + error);
        return "error: " + error;
      }
    },
    async deletePlayerById(playerId) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.delete(
          this.apiConfig.ENDPOINTS.PLAYER_ENDPOINTS.DELETE_PLAYER_ENDPOINT +
            playerId,
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data.message, " ,", response.status);
        return response.status;
      } catch (error) {
        console.log("error: " + error);
        return "error: " + error;
      }
    },
  },
});
