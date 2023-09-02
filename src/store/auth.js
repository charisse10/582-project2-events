import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    userType: "",
  }),
  actions: {
    setUserType(userType) {
      this.userType = userType;
    },
  },
});
