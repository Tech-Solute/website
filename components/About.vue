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
@import './../assets/styles/_utilities.scss';

.about-section {
  height: 42rem;
  text-align: center;

  @include respond(phone) {
    margin-top: 3rem;
  }

  @include respond(phone) {
    min-height: 65vh;
    width: 100%;
    padding-top: 2rem;
  }

  &__textbox {
    display: inline-block;
    text-align: center;
    width: 100rem;
    padding: 10rem;

    @include respond(phone) {
      width: 80%;
      margin: 0 auto;
      padding: 0;
    }

    & h2 {
      margin-bottom: 3rem;

      @include respond(phone) {
        margin-bottom: 1rem;
      }
    }

    & p {
      font-size: 2rem;
      margin-bottom: 1rem;
      line-height: 1.67;
      color: rgba(50, 50, 50, 0.7);
      @include respond(phone) {
        font-size: 1.8rem;
        line-height: 1.4;
      }
    }
  }
}
</style>
