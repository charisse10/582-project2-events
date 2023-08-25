import { defineStore } from "pinia";

export const useEventsStore = defineStore("add", {
  state: () => ({ add: [] }),
  actions: {
    addEvent(newEvent) {
      this.add.push(newEvent);
    },
  },
});
