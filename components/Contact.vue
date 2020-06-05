<template>
  <div id="contact">
    <h2>Get in touch with Us</h2>
    <form>
      <label>Full Name</label>
      <input v-model.lazy="contactForm.name" type="text" required />
      <label>Email</label>
      <input v-model.lazy="contactForm.email" type="text" required />
      <label>Service:</label>
      <select v-model.lazy="contactForm.services">
        <option v-for="(service, index) in services" :key="index">{{
          service
        }}</option>
      </select>
      <label>Message</label>
      <textarea v-model.lazy="contactForm.message" required></textarea>
      <button v-on:click.prevent="post()" class="btn btn--green">
        GET A QUOTE
      </button>
    </form>
    <p>FullName: {{ contactForm.name }}</p>
    <p>Service: {{ contactForm.services }}</p>
    <p>Message: {{ contactForm.message }}</p>
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
    post() {
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
@import './../assets/styles/_button.scss';
#contact * {
  box-sizing: border-box;
}
#contact {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type='text'],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
</style>
