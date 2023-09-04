import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",

  state: () => ({
    interestedEvents: {},
  }),

  getters: {
    interestedEventsCount() {
      return Object.values(this.interestedEvents).filter(
        (interested) => interested
      ).length;
    },
  },

  actions: {
    toggleInterest(eventId) {
      if (this.interestedEvents[eventId] !== undefined) {
        this.interestedEvents[eventId] = !this.interestedEvents[eventId];
      } else {
        this.interestedEvents[eventId] = true;
      }
    },
  },
});
