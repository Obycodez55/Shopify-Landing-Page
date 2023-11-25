
// Your javascript goes here
const options = document.querySelectorAll(".option-container");

options.forEach((options) => {
    options.addEventListener("click", () => {
        options.classList.toggle("active");
    })
})