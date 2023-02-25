<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Login</v-card-title>
          <v-card-text>
            <v-text-field label="user" spellcheck="false" aria-autocomplete="none"></v-text-field>
            <v-text-field label="password" type="password" aria-autocomplete="none"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-space></v-space>
            <v-btn @click.prevent="signInUser" color="primary" variant="tonal">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {useLoginStore} from "../../store/login/useLogin.ts";

export default {
  name: "SignIn",
  setup() {
    const {userInfo, userToken} = useLoginStore()
    return {userToken, userInfo}
  },
  methods: {
    signInUser() {
      return true
    }
  }
}
</script>

<style scoped>

</style>