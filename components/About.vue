<template>
  <div class="about-section">
    <div class="about-section__textbox">
      <h2 class="heading-secondary">WHO WE ARE</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {}
}
</script>
<style lang="scss" scoped>
@import './../assets/styles/_typography.scss';

.about-section {
  height: 45rem;
  background-color: yellow;
  text-align: center;

  &__textbox {
    display: inline-block;
    text-align: center;
    width: 100rem;
    padding: 10rem;

    & h2 {
      margin-bottom: 2rem;
    }

    & p {
      font-size: 2rem;
      margin-bottom: 1rem;
      line-height: 30px;
      color: #333;
    }
  }
}
</style>
