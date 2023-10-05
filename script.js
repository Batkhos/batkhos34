const open = document.getElementById("open")
const close = document.getElementById("close")
const content = document.getElementById("content")

open.addEventListener("click", () => {
    content.classList.toggle("active")
})

close.addEventListener("click", () => {
    content.classList.remove("active")
})