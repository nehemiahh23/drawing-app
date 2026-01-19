const main = document.querySelector("main")
const container = document.createDocumentFragment()
const search = document.getElementById("search")
const charError = document.getElementById("char-error")
const imgModal = document.getElementById("img-modal")
let disable = false

fetch("http://localhost:3000/")
.then(r => r.json())
.then(data => {
	data.forEach(img => container.appendChild(renderCard(img)))
	main.appendChild(container)
})

search.addEventListener("keydown", handleInput)
search.addEventListener("keyup", handleInput)
search.addEventListener("paste", handlePaste)
main.addEventListener("mouseover", handleHover)
main.addEventListener("mouseout", handleHover)

function renderCard(data) {
	const card = document.createElement("div")
	const img = document.createElement("img")
	const author = document.createElement("h3")

	card.className = "card"
	// card.id = `img${data.id}`
	img.src = data.src
	img.alt = data.alt
	author.textContent = data.author
	card.appendChild(img)
	card.appendChild(author)
	
	return card
}

// TODO: hover should enlarge img into a new z-index w/o affecting page flow
function handleHover(e) {
	if (e.target.tagName !== "IMG" || disable) return
	e.type === "mouseover" ? e.target.style.height = "110%" : e.target.style.height = "100%"	
}

function handleInput(e) {
	if (e.key.match(/[^\w\s]/)) {
		e.preventDefault()
		displayMessage(charError, "Titles cannot contain special characters!")
	}
	
	if (e.target.value.length === 40 && e.key.match(/[\w\s]/)) {
		displayMessage(charError, "Titles cannot be over 40 characters!")
	}
	
	for (let node of main.childNodes) {
		node.classList ? node.style.display = "flex" : null
	}
	
	const nonMatches = Array.from(main.childNodes).filter(node => node.classList && !node.textContent.toLowerCase().includes(e.target.value.toLowerCase())) // .childNodes = parent/child reference; .filter ilterates over collection of elements
	
	for (let node of nonMatches) {
		node.style.display = "none"
	}
}

function handlePaste(e) {
	const data = e.clipboardData.getData("text/plain")
	
	if (data.match(/[^\w\s]/)) {
		e.preventDefault()
		alert("Image titles cannot contain special characters.")
	}

	if (e.target.value.length === 40 && e.key.match(/[\w\s]/)) {
		displayMessage(charError, "Titles cannot be over 40 characters!")
	}
}

function displayMessage(element, message) {
	element.style.display = "revert"
	element.textContent = message
	setTimeout(() => {
		displayTimeout(element)
	}, 4500)
}

function displayTimeout(element) {
	console.log("a")
	if (element.style.display = "none") return
	element.style.display = "none"
	element.textContent = ""
	displayTimeout(element)
}