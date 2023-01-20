export const api = {
    async search_users (searchstring) {
        const result = [
            {name: 'joao'},
            {name: 'jose'}
        ]
        return result
    },
    async procura_poke (searchstring) {
        const result = [
            {name: 'joao', repo: 'fireblast'},
            {name: 'jose', repo: 'ember'}
        ]
        return result
    }
  }