<template>
  <div class="header">
    <div class="header__hero-box">
      <div class="hero-box__content">
        <h1 class="heading-primary">
          We build Digital products
          <br />that power business
        </h1>
        <span>
          Our aim is building innovate web and mobile applicattion for our
          client to give them competitive advantage.
        </span>
      </div>
      <div class="hero-box__cta">
        <button class="btn btn--transparent">Our Services</button>
      </div>
    </div>
    <div class="header__footer">
      <div class="mouse">
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {}
}
</script>

<style lang="scss">
@import './../assets/styles/_utilities.scss';

.header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.822), rgba(0, 0, 0, 0.699)),
    url(./../assets/images/hero-image.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  position: relative;
  color: white;

  @include respond(phone) {
    width: 100vw;
  }

  &__hero-box {
    padding: 20rem 0 0 15rem;

    @include respond(phone) {
      padding: 15rem 2rem 0 2rem;
      text-align: center;
    }
  }
}

.hero-box {
  &__content {
    margin: 5rem 0;

    & span {
      font-size: 1.6rem;
      color: rgb(224, 221, 221);

      @include respond(phone) {
        font-size: 1.4rem;
      }
    }

    @include respond(phone) {
      font-size: 1.4rem;
      margin: 2rem 0;
    }
  }

  &__cta {
    @include respond(phone) {
      margin-top: 3rem;
    }
  }

  &__content:before {
    box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.3);
    filter: blur(10px);
  }
}

.header__footer {
  display: grid;
  justify-content: center;
  margin-top: 15rem;

  @include respond(phone) {
    margin-top: 10rem;
  }
}

@mixin bgGradient {
  background: $colorOutlineFade
    linear-gradient(
      transparent 0%,
      transparent 50%,
      $colorOutline 50%,
      $colorOutline 100%
    );
}

.mouse {
  @include bgGradient;
  position: relative;
  width: $widthMouse;
  height: $heightMouse;
  border-radius: 100px;
  background-size: 100% 200%;
  animation: colorSlide $animDuration linear infinite,
    nudgeMouse $animDuration ease-out infinite;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  &:before {
    width: $widthMouse - $borderMouse;
    height: $heightMouse - $borderMouse;
    background-color: $colorBg;
    border-radius: 100px;
  }
  &:after {
    background-color: $colorOutline;
    width: $sizeTrackball;
    height: $sizeTrackball;
    border-radius: 100%;
    animation: trackBallSlide $animDuration linear infinite;
  }
}

@keyframes colorSlide {
  0% {
    background-position: 0% 100%;
  }
  20% {
    background-position: 0% 0%;
  }
  21% {
    background-color: $colorOutlineFade;
  }
  29.99% {
    background-color: $colorOutline;
    background-position: 0% 0%;
  }
  30% {
    background-color: $colorOutlineFade;
    background-position: 0% 100%;
  }
  50% {
    background-position: 0% 0%;
  }
  51% {
    background-color: $colorOutlineFade;
  }
  59% {
    background-color: $colorOutline;
    background-position: 0% 0%;
  }
  60% {
    background-color: $colorOutlineFade;
    background-position: 0% 100%;
  }
  80% {
    background-position: 0% 0%;
  }
  81% {
    background-color: $colorOutlineFade;
  }
  90%,
  100% {
    background-color: $colorOutline;
  }
}

@keyframes trackBallSlide {
  0% {
    opacity: 1;
    transform: scale(1) translateY(-$posTrackball);
  }
  6% {
    opacity: 1;
    transform: scale(0.9) translateY($posTrackball/4);
  }
  14% {
    opacity: 0;
    transform: scale($shrinkTrackball) translateY($posTrackball * 2);
  }
  15%,
  19% {
    opacity: 0;
    transform: scale($shrinkTrackball) translateY(-$posTrackball);
  }
  28%,
  29.99% {
    opacity: 1;
    transform: scale(1) translateY(-$posTrackball);
  }
  30% {
    opacity: 1;
    transform: scale(1) translateY(-$posTrackball);
  }
  36% {
    opacity: 1;
    transform: scale(0.9) translateY($posTrackball/4);
  }
  44% {
    opacity: 0;
    transform: scale($shrinkTrackball) translateY($posTrackball * 2);
  }
  45%,
  49% {
    opacity: 0;
    transform: scale($shrinkTrackball) translateY(-$posTrackball);
  }
  58%,
  59.99% {
    opacity: 1;
    transform: scale(1) translateY(-$posTrackball);
  }
  60% {
    opacity: 1;
    transform: scale(1) translateY(-$posTrackball);
  }
  66% {
    opacity: 1;
    transform: scale(0.9) translateY($posTrackball/4);
  }
  74% {
    opacity: 0;
    transform: scale($shrinkTrackball) translateY($posTrackball * 2);
  }
  75%,
  79% {
    opacity: 0;
    transform: scale($shrinkTrackball) translateY(-$posTrackball);
  }
  88%,
  100% {
    opacity: 1;
    transform: scale(1) translateY(-$posTrackball);
  }
}

@keyframes nudgeMouse {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY($posMouse);
  }
  30% {
    transform: translateY(0);
  }
  50% {
    transform: translateY($posMouse);
  }
  60% {
    transform: translateY(0);
  }
  80% {
    transform: translateY($posMouse);
  }
  90% {
    transform: translateY(0);
  }
}

@keyframes nudgeText {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY($posText);
  }
  30% {
    transform: translateY(0);
  }
  50% {
    transform: translateY($posText);
  }
  60% {
    transform: translateY(0);
  }
  80% {
    transform: translateY($posText);
  }
  90% {
    transform: translateY(0);
  }
}

@keyframes colorText {
  21% {
    color: $colorOutlineFade;
  }
  30% {
    color: $colorOutline;
  }
  51% {
    color: $colorOutlineFade;
  }
  60% {
    color: $colorOutline;
  }
  81% {
    color: $colorOutlineFade;
  }
  90% {
    color: $colorOutline;
  }
}
</style>
