const { url } = require("css-tree");

const btnMenu = document.getElementById("btn-menu");
const sidebar = document.querySelector(".sidebar");
const dashboard = document.querySelector(".dashboard");
const main = document.querySelector(".main");
const toggleMode = document.querySelector(".toggle-mode");

btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("active");
  sidebar.classList.toggle("active");
  dashboard.classList.toggle("active");
  // main.classList.toggle("active");
});

dashboard.addEventListener("click", () => {
  sidebar.classList.remove("active");
  dashboard.classList.remove("active");
  btnMenu.classList.remove("active");
});

toggleMode.addEventListener("click", () => {
  if (document.body.classList.contains("light-theme")) {
    dashboard.style.backgroundColor = "#252526";
    document.body.classList.toggle("light-theme");
    toggleMode.src = "http://localhost:1234/moon-solid.95e0b5a3.svg";
  } else {
    toggleMode.src = "http://localhost:1234/sun-solid.c3d5100b.svg";
    document.body.classList.toggle("light-theme");
    dashboard.style.backgroundColor = "#ffff";
  }

  console.log(toggleMode.src);
});
