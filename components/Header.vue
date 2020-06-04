<template>
  <div class="header">
    <div class="header__hero-box">
      <h1>
        We build Digital products
        <br />that power business
      </h1>
    </div>
    <span>
      Our aim is building innovate web and mobile applicattion for our client
      to give them competitive advantage.
    </span>
    <button>Our Services</button>
  </div>
</template>

<script>
export default {
  data() {}
}
</script>

<style lang="scss">
.header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.678), rgba(0, 0, 0, 0.4)),
    url(./../assets/images/hero-image.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  position: relative;
}
</style>
