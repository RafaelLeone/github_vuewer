<template>
  <div>
    <v-row class="text-center">
      <v-col cols="6">
        <v-autocomplete
          v-model="user"
          :items="userlist"
          :loading="userloading"
          :search-input.sync="usersearch"
          item-text="login"
          label="Digite o nome de um pokémon"
        />
      </v-col>
      <v-col cols="6">
        <v-select
          v-model="repo"
          :items="repolist"
          :loading="repoloading"
          :disabled="!this.user"
          item-text="name"
          label="Movimentos"
          return-object
          single-line
        ></v-select>
      </v-col>
    </v-row>
    
    <div>
      <v-btn @click="vai">VAI</v-btn>
    </div>
    <br>
    <div v-if="this.photo">
      <img :src=this.photo width="180px">
    </div>
    <div v-else>
      Sprite indisponível
    </div>
  </div>
</template>

<script>
  import debounce from 'lodash/debounce'
  import { api } from '@/api/api.js'

  export default {
    data: () => ({
      user: null,
      repo: null,
      usersearch: null,
      userlist: [],
      repolist: [],
      userloading: false,
      repoloading: false,
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
      async listaRepositorios () {
        this.repoloading = true
        const data = await api.procura_poke(this.user)
        for (let move of data.moves) {
          this.repolist.push(move.move.name)
        }
        debugger
        this.repoloading = false
      },
      async vai () {
        if (this.usersearch) {
          const foto = await api.procura_poke(this.usersearch)
          this.photo = foto.sprites.front_default
        }
      }
    },
    watch: {
      usersearch () {
        if (this.userlist.length === 0) {
          this.procuraUsuariosGithub()
        }
      },
      user () {
        this.listaRepositorios()
      }
    }
  }
</script>
