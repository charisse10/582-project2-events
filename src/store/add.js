import { defineStore } from "pinia";

export const useAddStore = defineStore("add", {
  state: () => ({ add: [] }),
  actions: {
    addEvent(event) {
      this.add.push(event);
    },
  },
});
