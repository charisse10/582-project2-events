import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    userType: null,
  }),
  actions: {
    setUserType(userType) {
      this.userType = userType;
    },
  },
});
