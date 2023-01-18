<template>
  <div>
    <v-autocomplete
      v-model="user"
      :items="userlist"
      :loading="userloading"
      :search-input.sync="usersearch"
      item-text="login"
    />
    <div>
      <v-btn>VAI</v-btn>
    </div>
  </div>
</template>

<script>
  import debounce from 'lodash/debounce'
  import { api } from '@/api/api.js'

  export default {
    data: () => ({
      user: null,
      usersearch: null,
      userlist: [],
      userloading: false
    }),
    methods: {
      procuraUsuariosGithub: debounce(async function () {
        this.userloading = true
        const data = await api.search_users(this.usersearch)
        this.userlist = data.items
        this.userloading = false
      }, 1000),
    },
    watch: {
      usersearch () {
        this.procuraUsuariosGithub()
      }
    }
  }
</script>
