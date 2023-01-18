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
        debugger
        this.userloading = true
        const data = await api.search_users(this.usersearch)
        for (let entry of data.results) {
          this.userlist.push(entry.name)
        }
        this.userloading = false
      }, 1000),
    },
    watch: {
      usersearch () {
        if (this.userlist.length === 0) {
          this.procuraUsuariosGithub()
        }
      }
    }
  }
</script>
