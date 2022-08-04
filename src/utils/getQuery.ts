export const getQuery = (name: string) => {
  if (typeof URLSearchParams !== 'undefined') {
    return new URLSearchParams(location.search).get(name)
  }
}
