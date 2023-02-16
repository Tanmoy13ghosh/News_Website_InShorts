let content = document.getElementById("content")
let navMenu = document.getElementById('nav_menu')
let button = document.getElementById("button")


button.addEventListener("click", () => {
    navMenu.style.display = "flex"
})
deleteMenu.addEventListener("mouseup", () => {
    navMenu.style.display = "none"
})