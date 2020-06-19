<template>
  <div class="mission-section">
    <div class="container">
      <div class="mission-section__textbox">
        <h3>Our mission</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
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

.mission-section {
  height: 30rem;
  text-align: center;
  background-color: #000;
  color: #eee !important;
  width: 100vw;
  display: grid;
  align-content: center;

  &__textbox {
    display: inline-block;
    text-align: center;
    width: auto;
    padding: 5rem;

    @include respond(phone) {
      padding: 3rem;
    }

    & h3 {
      margin-bottom: 1.5rem;
    }

    & p {
      font-size: 2rem;
      margin-bottom: 1rem;
      line-height: 1.67;
      color: #eee;
      @include respond(phone) {
        line-height: 1.5;
      }
    }
  }
}

.container {
  max-width: 75.25rem;
  width: 100%;
  margin: 0 auto;
}
</style>
