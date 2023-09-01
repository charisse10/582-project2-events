import { defineStore } from "pinia";

export const useEventsStore = defineStore("events", {
  state: () => ({ events: [] }),
  actions: {
    addEvent(event) {
      this.events.push(event);
    },

    deleteEvent(eventId) {
      const index = this.events.findIndex((event) => event._id === eventId);
      if (index !== -1) {
        this.events.splice(index, 1);
      }
    },
  },
});
