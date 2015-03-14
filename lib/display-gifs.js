export default (urls) => {
  var elem = document.querySelector('#gifs')
  console.log(elem)
  elem.innerHTML = urls.map(url => `<img src="${url}">`).join("\n")
}
