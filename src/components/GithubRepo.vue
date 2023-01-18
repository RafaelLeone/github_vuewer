<template>
  <div>
    <v-autocomplete
      v-model="user"
      :items="userlist"
      :loading="userloading"
      :search-input.sync="usersearch"
      item-text="login"
      label="Digite o nome de um pokémon"
    />
    <div>
      <v-btn @click="vai">VAI</v-btn>
    </div>
    <div>
      <img :src=this.photo>
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
      userloading: false,
      photo: null
    }),
    methods: {
      procuraUsuariosGithub: debounce(async function () {
        this.userloading = true
        const data = await api.search_users(this.usersearch)
        for (let entry of data.results) {
          this.userlist.push(entry.name)
        }
        this.userloading = false
      }, 1000),
      async vai () {
        if (this.usersearch) {
          const foto = await api.procura_foto(this.usersearch)
          this.photo = foto.sprites.front_default
        }
      }
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
