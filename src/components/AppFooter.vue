<template>
  <footer>
    <div class="container">
      <p>Copyright © 2023 | City of Côte Saint-Luc</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style lang="scss" scoped>
$yellow: rgb(255, 255, 124);
$blue: #2c3e50;

footer {
  background: $yellow;
  padding: 15px 0;
  text-align: center;
  font-weight: 500;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
