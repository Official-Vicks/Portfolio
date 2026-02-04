const toggleBtn = document.getElementById("themeToggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
  toggleBtn.textContent = savedTheme === "light" ? "🌞" : "🌙";
} else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
  root.setAttribute("data-theme", "light");
  toggleBtn.textContent = "🌞";
}

toggleBtn.addEventListener("click", () => {
  const current =
    root.getAttribute("data-theme") === "light" ? "dark" : "light";
  root.setAttribute("data-theme", current);
  localStorage.setItem("theme", current);
  toggleBtn.textContent = current === "light" ? "🌞" : "🌙";
});
