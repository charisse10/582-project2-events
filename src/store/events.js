import { defineStore } from "pinia";

export const useEventsStore = defineStore("events", {
  state: () => ({ events: [] }),
  actions: {
    addEvent(event) {
      this.events.push(event);
    },
  },
});
