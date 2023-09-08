// import { defineStore } from "pinia";

// export const useEventsStore = defineStore("events", {
//   state: () => ({
//     workingURL:
//       "https://probable-guacamole-w6r64q77rpqcg9rv-3000.app.github.dev/",
//   }),//

import { defineStore } from "pinia";

export const useInterestedEventsStore = defineStore("interestedEventsStore", {
  state: () => ({
    interestedEvents: [],
    interestedEventCount: 0,
  }),

  actions: {
    addInterestedEvent(event) {
      if (!this.interestedEvents.some((e) => e._id === event._id)) {
        this.interestedEvents.push({ ...event, isInterested: true });
        this.interestedEventCount++;
      }
    },

    deleteInterestedEvent(event) {
      const index = this.interestedEvents.findIndex(
        (interestedEvent) => interestedEvent._id === event._id
      );
      if (index !== -1) {
        this.interestedEvents.splice(index, 1);
        this.interestedEventCount--;
      }
    },
  },
});
