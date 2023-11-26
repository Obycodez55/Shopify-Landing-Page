// Your javascript goes here

document.querySelector(".active .title").classList.add("bold");
const options = document.querySelectorAll(".feature");

options.forEach((options) => {
  options.addEventListener("click", () => {
    const activeOption = document.querySelector(".feature.active");
    document.querySelector(".active .title").classList.remove("bold");
    activeOption.classList.remove("active");
    options.classList.toggle("active");
    document.querySelector(".active .title").classList.add("bold");
  });
});

const dropdownIcon = document.querySelector(".dropdown-icon");
const optionsDropdown = document.querySelector(".options");
dropdownIcon.addEventListener("click", () => {
  optionsDropdown.classList.toggle("collapsed");
  document.querySelector(".dropdown-icon svg").classList.toggle("rotate");
});

const dismissIcon = document.querySelector(".dismiss");
const trialCallout = document.querySelector(".trial-callout");
dismissIcon.addEventListener("click", () => {
  trialCallout.style.visibility = "hidden";
});

const optionIcon = document.querySelectorAll(".option-icon svg");

optionIcon.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    icon.querySelector("circle").removeAttribute("stroke-dasharray");
  });
  icon.addEventListener("mouseout", () => {
    icon.querySelector("circle").setAttribute("stroke-dasharray", "4 6");
  });
});

const clientInfo = document.querySelector(".client-info");

clientInfo.addEventListener("click", () => {
  document.querySelector(".client-info-dropdown").classList.toggle("collapsed");
});

const alertIcon = document.querySelector(".bell-icon");

alertIcon.addEventListener("click", () => {
  document.querySelector(".alerts").classList.toggle("collapsed");
});

// Progress bar
let counter = 0;
let progressQuantity = counter * 20;
document.querySelector(".progress-recorder span").textContent = counter;
document.querySelector(".progress").style.width = progressQuantity + "%";

optionIcon.forEach((icon) => {
  let clicked = false;
  icon.addEventListener("click", () => {
    if (clicked == false && counter != 5) {
      counter++;
      clicked = true;
    } else if(clicked == true && counter != 0){
      counter--;
      clicked == false;
    }
    progressQuantity = counter * 20;
    document.querySelector(".progress-recorder span").textContent = counter;
    document.querySelector(".progress").style.width = progressQuantity + "%";
  
  });
});


 