import { defineStore } from "pinia";

export const useDeleteStore = defineStore("delete", {
  state: () => ({ delete: [] }),
  actions: {
    async deleteEvent(eventId) {
      try {
        const response = await fetch(
          `https://probable-guacamole-w6r64q77rpqcg9rv-3000.app.github.dev/${eventId}`,
          {
            method: "delete",
          }
        );
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error deleting event:", error);
        throw error;
      }
    },
  },
});
