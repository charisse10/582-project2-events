<template>
  <section class="section-form">
    <div class="container">
      <h2>Add Event</h2>
      <form @submit.prevent="addEvent">
        <input
          v-model="titleInput"
          id="etitle"
          type="text"
          placeholder="Title"
          required
        />
        <select
          v-model="categoryInput"
          id="ecategory"
          class="placeholder"
          required
        >
          <option value="" disabled selected hidden>Select Category</option>
          <option value="On the big screen">On the big screen</option>
          <option value="We love to read">We love to read</option>
          <option value="Music to your ears">Music to your ears</option>
          <option value="Art and Theatre">Art and Theatre</option>
          <option value="Get moving">Get moving</option>
          <option value="Celebrate">Celebrate</option>
        </select>

        <input v-model="dateInput" id="edate" type="date" required />

        <input v-model="timeInput" id="etime" type="time" required />

        <select
          v-model="locationInput"
          id="elocation"
          class="placeholder"
          required
        >
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
      <p v-if="isSubmitted" class="added">Event added successfully!</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "FormComponent",
  data() {
    return {
      titleInput: "",
      categoryInput: "",
      dateInput: "",
      timeInput: "",
      locationInput: "",
      isSubmitted: false,
      events: [],
    };
  },
  methods: {
    async addEvent() {
      const formData = {
        title: this.titleInput,
        category: this.categoryInput,
        date: this.dateInput,
        time: this.timeInput,
        location: this.locationInput,
      };

      fetch(
        "https://probable-guacamole-w6r64q77rpqcg9rv-3000.app.github.dev/",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Success!", data);
          this.$emit("eventCreated", data);

          window.location.reload();
          setTimeout(function () {
            window.location.reload();
          }, 3000);

          this.isSubmitted = true;
          this.titleInput = "";
          this.categoryInput = "";
          this.dateInput = "";
          this.timeInput = "";
          this.locationInput = "";
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
$orange: #f44d00;

form {
  input {
    display: block;
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
    border: 1px solid #878787;
  }

  input#esubmit {
    background-color: $orange;
    color: #fff;
    width: 200px;
    margin: 15px auto 30px;
    border-radius: 25px;
    font-size: 1.1rem;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
  }

  .placeholder {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
  }
}
</style>
