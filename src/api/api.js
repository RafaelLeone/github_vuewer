export const api = {
  async search_users (searchstring) {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/?q=${searchstring}/?offset=2000&limit=2000`)
    return await result.json()
  }
}
