<template>
  <div>
    <v-autocomplete
      v-model="user"
      :items="userlist"
      :loading="userloading"
      :search-input.sync="usersearch"
      item-text="login"
    />
  </div>
</template>

<script>
  import debounce from 'lodash/debounce'


  export default {
    data: () => ({
      user: null,
      usersearch: null,
      userlist: [],
      userloading: false
    }),
    methods: {
      procuraUsuariosGithub: debounce(function () {
        console.log('perguntei pro github ' + this.usersearch)
          this.userlist = [
            {login: 'joao'},
            {login: 'jose'}
          ]
          this.userloading = false
        }, 1000)
    },
    watch: {
      usersearch () {
        this.userloading = true
        this.procuraUsuariosGithub()
      }
    }
  }
</script>
