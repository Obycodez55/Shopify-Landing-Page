
// Your javascript goes here
const options = document.querySelectorAll(".option-container");

options.forEach((options) => {
    options.addEventListener("click", () => {
        const active = document.querySelector(".option-container.active");
        active.classList.remove("active");
        options.classList.toggle("active");
    })
})