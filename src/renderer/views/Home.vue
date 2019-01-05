<template>
  <div id="home">
    <h1>{{ title }}</h1>
    <ul>
      <li>
        <router-link to="/login">Go to Login Page</router-link>
      </li>
      <li>
        <router-link to="/others">Go to others Page</router-link>
      </li>
    </ul>
    <header>hello</header>
    <input type="text">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      title: "home page"
    };
  }
};
</script>

