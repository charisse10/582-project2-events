<template>
  <section class="form">
    <div class="container">
      <h2>Add Event</h2>
      <form @submit.prevent="addEvent">
        <input
          id="etitle"
          type="text"
          v-model="titleInput"
          placeholder="title"
        />
        <input
          id="ecategory"
          type="text"
          v-model="categoryInput"
          placeholder="category"
        />
        <input
          id="edate"
          type="text"
          v-model="dateInput"
          placeholder="January 01, 2023"
        />
        <input
          id="etime"
          type="text"
          v-model="timeInput"
          placeholder="7:00 pm"
        />
        <input
          id="elocation"
          type="text"
          v-model="locationInput"
          placeholder="location"
        />
        <input id="esubmit" type="submit" value="Add Event" />
      </form>
    </div>
  </section>
</template>

<script>
import { ref } from "vue"; // Import ref from Vue Composition API
import { useEventsStore } from "@/store/events";

export default {
  name: "FormComponent",
  setup() {
    const eventsStore = useEventsStore();
    const titleInput = ref("");
    const categoryInput = ref("");
    const dateInput = ref("");
    const timeInput = ref("");
    const locationInput = ref("");

    const addEvent = () => {
      let title = titleInput.value;
      let category = categoryInput.value;
      let date = dateInput.value;
      let time = timeInput.value;
      let location = locationInput.value;
      const formData = { title, category, date, time, location };

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
          eventsStore.addEvent(data);

          titleInput.value = "";
          categoryInput.value = "";
          dateInput.value = "";
          timeInput.value = "";
          locationInput.value = "";
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    return {
      titleInput,
      categoryInput,
      dateInput,
      timeInput,
      locationInput,
      addEvent,
    };
  },
};
</script>
