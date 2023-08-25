<template>
  <section class="form">
    <div class="container">
      <h2>Add Event</h2>
      <form @submit.prevent="addEvent">
        <input id="etitle" type="text" placeholder="title" />
        <input id="ecategory" type="text" placeholder="category" />
        <input id="edate" type="text" placeholder="January 01, 2023" />
        <input id="etime" type="text" placeholder="7:00 pm" />
        <input id="elocation" type="text" placeholder="location" />
        <input id="esubmit" type="submit" value="Add Event" />
      </form>
    </div>
  </section>
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
      let category = document.getElementById("ecategory").value;
      let date = document.getElementById("edate").value;
      let time = document.getElementById("etime").value;
      let location = document.getElementById("elocation").value;
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
