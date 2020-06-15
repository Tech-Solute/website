/* eslint-disable */
<template>
  <div class="container">
    <div class="header-section">
      <div class="subhead-copy">
        ARE YOU READY
        <br />
        <br />
      </div>
      <h2 class="heading-secondary u-margin-bottom-medium">
        TO SAFELY IMPLEMENT YOUR PROJECT?
        <br />
      </h2>
      <h5 class="description">
        Fill out the contact form and we'll get ack to you immediately
        <br />
      </h5>
    </div>
    <div id="contact">
      <div class="contact-form">
        <form action="#" class="form">
          <div class="form__group">
            <input
              id="name"
              v-model.lazy="contactForm.name"
              type="text"
              class="form__input"
              placeholder="Full name"
              required
            />
          </div>
          <div class="form__group">
            <input
              id="email"
              v-model.lazy="contactForm.email"
              type="text"
              class="form__input"
              placeholder="Email"
              required
            />
          </div>
          <div class="form__group">
            <label for="service" class="service__label">Choose a service:</label>
            <select v-model.lazy="contactForm.services" class="select-css">
              <option v-for="(service, index) in services" :key="index">
                {{
                service
                }}
              </option>
            </select>
          </div>
          <div class="form__group">
            <textarea
              id="message"
              v-model.lazy="contactForm.message"
              placeholder="Send us a message"
              class="form__input"
              required
            ></textarea>
          </div>
          <div class="form-button">
            <button v-on:click.prevent="post()" class="btn btn--green">GET A QUOTE</button>
          </div>
          <div class="div-block">
            <img src="@/assets/images/lock.svg" alt="security icon" width="16px" />
            <div class="text-block">We guarantee 100% confidentiality</div>
          </div>
        </form>
      </div>
      <div class="contact-personnel">
        <figure class="contact-personnel__shape">
          <img
            src="@/assets/images/image-placeholder.jpg"
            alt="Person to contact"
            class="contact-personnel__image"
          />
          <figcaption class="contact-personnel__caption">Vincent Abodei</figcaption>
        </figure>
        <div class="contact-personnel__text">
          <h3 class="heading-tertiary">Ebizimoh Abodei</h3>
          <p>Client Service Coordinator</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => {
    return {
      contactForm: {
        name: '',
        email: '',
        service: '',
        message: ''
      },
      services: [
        'Enterprise Software Development',
        'Mobile App Development',
        'IT Consulting',
        'Sedicated Development Team',
        'UX/UI Design',
        'QA & Testing'
      ]
    }
  },
  methods: {
    // send user info from contact form to database [I use a dummy API]
    sendUserInfoToDb() {
      axios
        .post('http://jsonplaceholder.typicode.com/posts', {
          name: this.contactForm.name,
          email: this.contactForm.name,
          service: this.contactForm.name,
          message: this.contactForm.name
        })
        .then((response) => {
          console.log(response)
        })
        .catch((e) => {
          this.errors.push(e)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../assets/styles/_utilities.scss';

.container {
  margin: 0 auto;
}

.header {
  text-align: center;
}
#contact * {
  box-sizing: border-box;
}
#contact {
  margin: 10rem auto;
  max-width: 100rem;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 0 53px 0 rgba(0, 0, 0, 0.14);
  @include respond(phone) {
    grid-template-columns: 1fr;
  }
}

label {
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0.7rem 0 0.4rem 0;
  display: block;
  transition: all 0.3s;
  color: #777;
}

.btn {
  margin: 0 auto;
}

.form {
  &__group:not(:last-child) {
    margin-bottom: 2rem;
  }
  &__input {
    font-size: 1.5rem;
    padding: 1.5rem 2rem;
    border-radius: 2px;
    color: inherit;
    font-family: inherit;
    background-color: #eee;
    border: none;
    border-bottom: 3px solid transparent;
    width: 100%;
    display: block;
    transition: all 0.3s;

    &:focus {
      outline: none;
      box-shadow: 0 1rem 2rem rgba($color-black, 0.1);
      border-bottom: 3px solid $color-primary;
    }

    &:focus:invalid {
      border-bottom: 3px solid $color-secondary-dark;
    }

    &::-webkit-input-placeholder {
      color: $color-grey-dark-2;
    }
  }

  &__input:placeholder-shown + &__label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }
}

.select-css {
  display: block;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 700;
  color: #444;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
}
.select-css::-ms-expand {
  display: none;
}
.select-css:hover {
  border-color: #888;
}
.select-css:focus {
  border-color: #aaa;
  box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: #222;
  outline: none;
}
.select-css option {
  font-weight: normal;
}
.contact-form {
  padding: 2rem 4rem;
}

.contact-personnel {
  width: 100%;
  margin: 0 auto;
  /* box-shadow: 0 3rem 6rem rgba($color-black, 0.1); */
  background-color: #eee;
  border-radius: 0 10px 10px 0;
  padding: 6rem 3rem;
  font-size: $default-font-size;
  text-align: center;

  @include respond(phone) {
    display: none;
  }

  &__shape {
    width: 15rem;
    height: 15rem;
    margin: 2rem auto;
    margin-bottom: 1.5rem;
    -webkit-shape-outside: circle(50% at 50% 50%);
    shape-outside: circle(50% at 50% 50%);
    -webkit-clip-path: circle(50% at 50% 50%);
    clip-path: circle(50% at 50% 50%);
    position: relative;
  }

  &__image {
    height: 100%;
    transform: scale(1.4);
    backface-visibility: hidden;
    transition: all 0.5s;
  }

  &__text {
    width: 100%;
    & p {
      color: $color-grey-dark-2;
      font-weight: 500;
    }
  }

  &__caption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 20%);
    color: $color-white;
    text-transform: uppercase;
    font-size: 1.7rem;
    text-align: center;
    opacity: 0;
    transition: all 0.5s;
    backface-visibility: hidden;
  }

  &:hover &__caption {
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  &:hover &__image {
    transform: translateX(0.1rem) scale(1);
    filter: blur(3px) brightness(70%);
  }
}

.heading-tertiary {
  padding-bottom: 0.5rem;
}

.form-button {
  display: grid;
  align-content: center;
  justify-content: center;
}

.div-block {
  display: flex;
  padding-top: 15px;
  justify-content: center;
  align-content: center;
}
.text-block {
  display: inline-block;
  padding-left: 5px;
  color: #333;
  font-size: 14px;
  line-height: 20px;
}

img {
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
}
</style>
