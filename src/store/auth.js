import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    userType: "",
  }),
  actions: {
    toggleUserType() {
      this.userType = this.userType === "admin" ? "user" : "admin";
    },
  },
});
