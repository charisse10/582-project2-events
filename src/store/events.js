import { defineStore } from "pinia";

export const useEventsStore = defineStore("events", {
  state: () => ({ events: [] }),
  actions: {
    displayEvents(events) {
      this.events = events.map((event) => ({
        ...event,
        interested: false,
      }));
    },

    addEvent(event) {
      this.events.push(event);
    },
    
  },
});
