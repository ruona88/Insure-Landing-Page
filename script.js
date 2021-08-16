//Script to change the hamburger image to the close icon and make the nav fill the screen
document.querySelector("nav .hamburger-container").addEventListener("click", () => {
    document.querySelector("nav ul").classList.toggle("active");
    document.querySelector("nav .hamburger-container").classList.toggle("active");
})

//Script to change background-image back to hamburger and remove the navigation from the screen one a list item is clicked
for (let item of document.getElementsByClassName("nav-list-item")) {
    item.addEventListener("click", () => {
        document.querySelector("nav ul").classList.remove("active");
        document.querySelector("nav .hamburger-container").classList.remove("active");
    })
}

