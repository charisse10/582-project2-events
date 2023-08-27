import { defineStore } from "pinia";

export const useEventsStore = defineStore("events", {
  state: () => ({ events: [] }),
  actions: {
    displayEvents(events) {
      this.events = events;
    },

    addEvent(event) {
      this.add.push(event);
    },

    deleteEvent(eventId) {
      this.events = this.events.filter((event) => event._id !== eventId);
    },
  },
});
