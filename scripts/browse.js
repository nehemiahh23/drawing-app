const main = document.querySelector("main")

const imgCard = document.createDocumentFragment()
const cardContainer = document.createElement("div")
const img = document.createElement("img")

img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1200px-Aspect-ratio-16x9.svg.png"

cardContainer.appendChild(img)
imgCard.appendChild(cardContainer)
main.appendChild(imgCard)