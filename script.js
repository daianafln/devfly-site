// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Scroll suave para âncoras internas
  const links = document.querySelectorAll("a[href^='#']");
  for (let link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Validação básica de formulário (exemplo)
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      const nome = form.querySelector("[name='nome']");
      const email = form.querySelector("[name='email']");

      if (!nome.value || !email.value) {
        e.preventDefault();
        alert("Por favor, preencha todos os campos obrigatórios.");
      }
    });
  }
});
