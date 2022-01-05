const navToggle = document.querySelector(".nav-toggle")

const toggleNav = () => {
    document.body.classList.toggle("nav-open")
}


navToggle.addEventListener("click", toggleNav)