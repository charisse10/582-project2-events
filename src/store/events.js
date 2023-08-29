import { defineStore } from "pinia";

export const useEventsStore = defineStore("events", {
  state: () => ({ events: [] }),
  actions: {
    displayEvents(events) {
      this.events = events;
    },

    addEvent(event) {
      this.events.push(event);
    },

    likeEvent(eventId) {
      const event = this.events.find((event) => event.id === eventId);
      return event.likes;
    },

    likeCount(eventId) {
      const event = this.events.find((event) => event.id === eventId);
      event.likes++;
    },

    deleteEvent(eventId) {
      this.events = this.events.filter((event) => event.id !== eventId);
    },
  },
});
