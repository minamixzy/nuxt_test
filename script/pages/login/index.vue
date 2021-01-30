<template lang="">
    <div class="auth-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">{{isLogin ? "Sign in" : "Sign up"}}</h1>
        <p class="text-xs-center">
          <a href="">Have an account?</a>
        </p>

        <ul class="error-messages">
          <li>That email is already taken</li>
        </ul>

        <form @submit.prevent="submit">
          <fieldset class="form-group" v-if="!isLogin">
            <input class="form-control form-control-lg" type="text" placeholder="Your Name" v-model="user.username">
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" type="text" placeholder="Email" v-model="user.email">
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" type="password" placeholder="Password" v-model="user.password">
          </fieldset>
          <button class="btn btn-lg btn-primary pull-xs-right">
            {{isLogin ? "Sign in" : "Sign up"}}
          </button>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import request from "../../util/request";
import { login, register } from "@/api/user";
const Cookie = process.client ? require("js-cookie") : undefined;
export default {
  name: "login",
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
    };
  },

  computed: {
    isLogin() {
      return this.$route.name === "login";
    },
  },

  methods: {
    async submit() {
      try {
        if (this.isLogin) {
          let { data } = await login({
            user: this.user,
          });

          this.$store.commit("setUser", data.user);

          document.cookie= "user="+JSON.stringify(data.user)+"";

          this.$router.push("/");
        } else {
          let { data } = await register({
            user: this.user,
          });

          this.$router.push("/");
        }
      } catch (e) {}
    },
  },
};
</script>