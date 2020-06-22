<template>
  <header>
    <img
      class="logo"
      src="./../assets/images/logo.svg"
      alt="logo"
      width="30px"
    />
    <nav role="navigation">
      <ul
        class="nav__links"
        v-scroll-spy-active="{ class: 'customActive' }"
        v-scroll-spy-link
      >
        <li>
          <a href="#" title="about">About</a>
        </li>
        <li>
          <a href="#" title="service">Services</a>
        </li>
        <li>
          <a class="cta" href="#">
            <button>Contact</button>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {}
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: transparent;
}

li,
a,
button {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #eee;
  text-decoration: none;
}

header {
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 10%;
  width: 100%;
  z-index: 999;
  font-size: 1.4rem;
}

.logo {
  cursor: pointer;
  margin-right: auto;
  fill: white;
}

.nav__links {
  list-style: none;
}
.nav__links li {
  display: inline-block;
  padding: 0px 40px;
}
.nav__links li a {
  transition: all 0.3s ease 0s;
}

.nav__Links li a:hover {
  color: #0088a9;
}

button {
  padding: 9px 25px;
  background-color: rgba(0, 136, 169, 1);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  outline: none;
}

button:hover {
  background-color: rgba(0, 136, 169, 0.8);
}
</style>
