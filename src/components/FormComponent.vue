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
import { useAddStore } from "@/store/add";

export default {
  name: "FormComponent",
  setup() {
    const addStore = useAddStore();
    return { addStore };
  },

  methods: {
    addEvent() {
      console.log("Adding event...");
      let title = document.getElementById("etitle").value;
      let description = document.getElementById("edescription").value;
      const formData = { title, description };

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
          const addStore = useAddStore();
          addStore.addEvent(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>
