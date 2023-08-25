import { defineStore } from "pinia";

export const useDisplayStore = defineStore("display", {
  state: () => ({ events: [] }),
  actions: {
    displayEvents(events) {
      this.events = events;
    },
  },
});
