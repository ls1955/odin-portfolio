const imgs = document.querySelectorAll("img")
const svgs = document.querySelectorAll("svg")
const themeBtn = document.querySelector("#theme-switcher")
const topNavContainer = document.querySelector(".top-navigation-container")

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
    topNavContainer.classList.toggle("dark-mode")

    // NOTE: Be sure to only apply class on intended components
    imgs.forEach(img => img.classList.toggle("dark-mode"))
    svgs.forEach(svg => svg.classList.toggle("dark-mode"))
})

if (window.matchMedia("(prefers-color-scheme: dark)")) {
    document.body.classList.toggle("dark-mode")
    topNavContainer.classList.toggle("dark-mode")

    imgs.forEach(img => img.classList.toggle("dark-mode"))
    svgs.forEach(svg => svg.classList.toggle("dark-mode"))
}
