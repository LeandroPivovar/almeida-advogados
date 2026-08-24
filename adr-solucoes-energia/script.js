const revealTargets = document.querySelectorAll(".reveal");

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.14 },
  );

  revealTargets.forEach((target) => observer.observe(target));
}

const contactForm = document.querySelector("[data-whatsapp-form]");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  const text = [
    "Olá, vim pelo site! Gostaria de obter mais informações.",
    name ? `Nome: ${name}` : "",
    phone ? `Telefone: ${phone}` : "",
    message ? `Mensagem: ${message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  window.open(
    `https://api.whatsapp.com/send?phone=554833802486&text=${encodeURIComponent(text)}`,
    "_blank",
    "noopener,noreferrer",
  );
});
