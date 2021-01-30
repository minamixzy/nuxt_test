<template>
  <div>
    <nav class="navbar navbar-light">
      <div class="container">
        <a class="navbar-brand" href="index.html">conduit</a>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->

            <nuxt-link class="nav-link" to="/" exact>Home</nuxt-link>
            <!-- <a class="nav-link active" href="">Home</a> -->
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href=""> -->
            <nuxt-link class="nav-link" to="/editor"
              ><i class="ion-compose"></i>&nbsp;New Post</nuxt-link
            >
            <!-- </a> -->
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/settings">
              <i class="ion-gear-a"></i>&nbsp;Settings</nuxt-link
            >
            <!-- <a class="nav-link" href="">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </a> -->
          </li>
          <template v-if="!user">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/register">Sign up</nuxt-link>
            <!-- <a class="nav-link" href="">Sign up</a> -->
          </li>
          </template>
          <template v-if="user">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/login">Sign in</nuxt-link>
              <!-- <a class="nav-link" href="">Sign up</a> -->
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/profile">{{
                user.username
              }}</nuxt-link>
              <!-- <a class="nav-link" href="">Sign up</a> -->
            </li>
          </template>
        </ul>
      </div>
    </nav>

    <!-- 子路由   -->
    <nuxt-child></nuxt-child>

    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
          licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "layout",

  data() {
    return {};
  },

  computed: {
    user(){
      return this.$store.state.user
    }
  },
};
</script>