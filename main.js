const openBtn = document.getElementById("frBtn");
const closeBtn = document.getElementById("skBtn");
const content = document.querySelector(".window.active");
const parentBtn = document.querySelector('.openBtn');

openBtn.addEventListener("click", function () {
    content.classList.remove("active"); 
});

closeBtn.addEventListener("click", function () {
    content.classList.add("active");
});