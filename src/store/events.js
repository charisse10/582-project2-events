import { defineStore } from "pinia";

export const useEventsStore = defineStore("events", {
  state: () => ({
    workingURL:
      "https://probable-guacamole-w6r64q77rpqcg9rv-3000.app.github.dev/",
  }),
});
