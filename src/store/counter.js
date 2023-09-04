import { createPinia } from "pinia";

export const pinia = createPinia();

export const useCountStore = pinia.defineStore("countStore", {
  state: () => ({
    interestedEventsCount: 0,
  }),
  getters: {
    getInterestedEventsCount: (state) => state.interestedEventsCount,
  },
  actions: {
    incrementInterestedEventsCount() {
      this.interestedEventsCount++;
    },
    decrementInterestedEventsCount() {
      this.interestedEventsCount--;
    },
  },
});
