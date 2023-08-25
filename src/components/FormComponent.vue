<template>
  <h2>Add Event</h2>
  <form @submit.prevent="addEvent">
    <label for="newEvent">Event</label>
    <input id="etitle" type="text" placeholder="event title" />
    <input id="edescription" type="text" placeholder="description" />
    <input id="esubmit" type="submit" value="Add Event" />
  </form>
</template>
<script>
import { useEventsStore } from "@/store/add";

export default {
  name: "FormComponent",
  setup() {
    const eventsStore = useEventsStore();
    return { eventsStore };
  },

  methods: {
    addEvent() {
      console.log("adding event");
      let etitle = document.getElementById("etitle").value;
      let edescription = document.getElementById("edescription").value;
      const formData = { etitle, edescription };

      fetch(
        "https://probable-guacamole-w6r64q77rpqcg9rv-3000.app.github.dev/",
        {
          method: "post",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Success!", data);
          const eventsStore = useEventsStore();
          eventsStore.addEvent(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>
