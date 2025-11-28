// Animação leve de entrada (reveal) usando IntersectionObserver
document.addEventListener("DOMContentLoaded", () => {
  const revealEls = document.querySelectorAll("[data-reveal]");

  if (!("IntersectionObserver" in window)) {
    // Fallback: se o navegador não suportar, mostra tudo
    revealEls.forEach(el => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealEls.forEach(el => observer.observe(el));
});

document.querySelectorAll('.hero-proof-count').forEach(el => {
  let target = +el.getAttribute('data-target');
  let count = 0;
  let step = Math.ceil(target / 60);

  const interval = setInterval(() => {
    count += step;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    el.textContent = count + '+';
  }, 20);
});

