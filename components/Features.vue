<template>
  <div class="feature-section">
    <div class="feature-section__wrapper">
      <div class="image__wrapper">
        <picture>
          <source
            srcset="@/assets/images/image1-small.png"
            media="(min-width: 0px) and (max-width: 767px) and (min-resolution: 1900dpi)"
          />
          <source
            srcset="@/assets/images/image1-medium.png"
            media="(min-width: 768px) and (min-resolution: 1900dpi)"
          />
          <source srcset="@/assets/images/image1-large.png" />
          <img srcset="@/assets/images/image1-large.png" />
        </picture>
      </div>
      <div class="feature-section__textbox">
        <h2 class="heading-tertiary">WE BUILD WIREFRAME</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div class="feature-section__wrapper">
      <div class="feature-section__textbox">
        <h2 class="heading-tertiary">WE BUILD WIREFRAME</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="image__wrapper">
        <picture>
          <source
            srcset="@/assets/images/image2-small.png"
            media="(min-width: 0px) and (max-width: 767px) and (min-resolution: 1900dpi)"
          />
          <source
            srcset="@/assets/images/image2-medium.png"
            media="(min-width: 768px) and (min-resolution: 1900dpi)"
          />
          <source srcset="@/assets/images/image2-large.png" />
          <img srcset="@/assets/images/image2-large.png" />
        </picture>
      </div>
    </div>
    <div class="feature-section__wrapper">
      <div class="image__wrapper">
        <picture>
          <source
            srcset="@/assets/images/image3-small.png"
            media="(min-width: 0px) and (max-width: 767px) and (min-resolution: 1900dpi)"
          />
          <source
            srcset="@/assets/images/image3-medium.png"
            media="(min-width: 768px) and (min-resolution: 1900dpi)"
          />
          <source srcset="@/assets/images/image3-large.png" />
          <img srcset="@/assets/images/image3-large.png" />
        </picture>
      </div>
      <div class="feature-section__textbox">
        <h2 class="heading-tertiary">WE BUILD WIREFRAME</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
@import './../assets/styles/_utilities.scss';

.feature-section {
  height: 100%;

  &__textbox {
    width: 70%;
    display: grid;
    align-content: center;
    padding: 0 20px;

    & h2 {
      opacity: 0.5;
      color: rgb(0, 0, 0);
      font-size: 20px;
      line-height: 28px;
    }

    & p {
      font-size: 28px;
      line-height: 40px;
      font-weight: 400;
    }
  }

  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 40rem;
    height: 100%;
    width: 75vw;
    margin: 0 auto;

    @include respond(phone) {
      grid-template-columns: 1fr;
    }

    &:nth-child(2) {
      grid-template-columns: 40rem 1fr;

      @include respond(phone) {
        grid-template-columns: 1fr;
      }
    }
  }

  .image__wrapper {
    width: 100%;
  }
}
</style>
