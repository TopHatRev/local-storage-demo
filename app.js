function setTheme() {
  if (
    localStorage.getItem("theme") === "light" ||
    localStorage.getItem("theme") === null
  ) {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark");
  } else {
    localStorage.setItem("theme", "light");
    document.body.classList.remove("dark");
  }
}

const themeButton = document.getElementById("theme-change");
themeButton.addEventListener("click", setTheme);

function getTheme() {
  theme = localStorage.getItem("theme");
}
setTheme();
