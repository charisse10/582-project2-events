<template>
  <section class="section-form">
    <div class="container">
      <h2>Add Event</h2>
      <form @submit.prevent="addEvent">
        <input
          id="etitle"
          type="text"
          v-model="titleInput"
          placeholder="Title"
        />
        <!-- <input
          id="ecategory"
          type="text"
          v-model="categoryInput"
          placeholder="Category"
        /> -->
        <select id="ecategory" v-model="categoryInput" class="placeholder">
          <option value="" disabled selected hidden>Select Category</option>
          <option value="On the big screen">On the big screen</option>
          <option value="We love to read">We love to read</option>
          <option value="Music to your ears">Music to your ears</option>
          <option value="Art and Theatre">Art and Theatre</option>
          <option value="Get moving">Get moving</option>
          <option value="Celebrate">Celebrate</option>
        </select>

        <input id="edate" type="date" v-model="dateInput" />

        <input id="etime" type="time" v-model="timeInput" />

        <select id="edate" v-model="locationInput" class="placeholder">
          <option value="" disabled selected hidden>Select Location</option>
          <option value="CSL Auditorium">CSL Auditorium</option>
          <option value="Ashkelon Gardens">Ashkelon Gardens</option>
          <option value="CSL Library">CSL Library</option>
          <option value="Trudeau Park">Trudeau Park</option>
          <option value="Rembrandt Park Amphitheatre">
            Rembrandt Park Amphitheatre
          </option>
          <option value="Fletcher Park">Fletcher Park</option>
          <option value="Parkhaven Outdoor Pool">Parkhaven Outdoor Pool</option>
          <option value="Meadowbrook Golf Course">
            Meadowbrook Golf Course
          </option>
        </select>

        <input id="esubmit" type="submit" value="Submit Event" />
      </form>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
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
