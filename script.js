// prepínač light/dark
const modeBtn = document.getElementById("mode-toggle");
modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  modeBtn.textContent = document.body.classList.contains("light") ? "🌙 Dark" : "☀️ Light";
});

// jazykový prepínač (vizuálny)
const langBtn = document.getElementById("lang-toggle");
langBtn.addEventListener("click", () => {
  langBtn.textContent = langBtn.textContent === "EN" ? "SK" : "EN";
});

// animácie sekcií
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
});
sections.forEach(s => observer.observe(s));
