export const getImageUrl = (firsThreeWords) => {
  return fetch(`https://cataas.com/cat/says/${firsThreeWords}?size=50&color=red&json=true`)
    .then(res => res.json())
    .then(response => {
      // console.log(response)
      const { url } = response
      return url
    })
}
