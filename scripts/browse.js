const main = document.querySelector("main")
const container = document.createDocumentFragment()

fetch("http://localhost:3002/images")
.then(r => r.json())
.then(data => {
	data.forEach(img => container.appendChild(renderCard(img)))
	main.appendChild(container)
})

main.addEventListener("mouseover", handleHover)
main.addEventListener("mouseout", handleHover)

function renderCard(data) {
	const card = document.createElement("div")
	const img = document.createElement("img")
	const title = document.createElement("h3")

	card.className = "card"
	// card.id = `img${data.id}`
	img.src = data.src
	title.textContent = data.title
	card.appendChild(img)
	card.appendChild(title)
	
	return card
}

function handleHover(e) {
	if (e.target.tagName !== "IMG") return
	e.type === "mouseover" ? e.target.style.height = "110%" : e.target.style.height = "100%"	
}