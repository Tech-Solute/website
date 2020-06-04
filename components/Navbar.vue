<template>
  <header>
    <img class="logo" src="./../assets/images/logo.svg" alt="logo" width="30px" />
    <nav>
      <ul class="nav__links">
        <li>
          <a href="#" title="service">Services</a>
        </li>
        <li>
          <a href="#" About="service">About</a>
        </li>
      </ul>
    </nav>
    <a class="cta" href="#">
      <button>Contact</button>
    </a>
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
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 10%;
  background-color: rgba(0, 0, 0, 0.281);
}

.logo {
  cursor: pointer;
  margin-right: auto;
}

.nav__links {
  list-style: none;
}
.nav__links li {
  display: inline-block;
  padding: 0px 20px;
}
.nav__links li a {
  transition: all 0.3s ease 0s;
}

.nav__Links li a:hover {
  color: #0088a9;
}

button {
  margin-left: 20px;
  padding: 9px 25px;
  background-color: rgba(0, 136, 169, 1);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}

button:hover {
  background-color: rgba(0, 136, 169, 0.8);
}
</style>
