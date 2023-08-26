import { defineStore } from "pinia";

export const useDeleteStore = defineStore("delete", {
  state: () => ({
    deletionStatus: null,
  }),
  actions: {
    async deleteEvent(eventId) {
      try {
        const response = await fetch(`your_backend_url/${eventId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          this.removeDeletedEventFromState(eventId);

          this.deletionStatus = "success";
        } else {
          const data = await response.json();
          throw new Error(data.message || "Error deleting event");
        }
      } catch (error) {
        console.error("Error deleting event:", error);
        this.deletionStatus = "error";
        throw error;
      }
    },
  },
});
