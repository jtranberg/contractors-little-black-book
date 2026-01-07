const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());

    // TODO: replace with your real endpoint later
    // await fetch("https://YOUR_BACKEND/contact", { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(payload) })

    if (statusEl) statusEl.textContent = "Received — we’ll reply soon.";
    form.reset();
  });
}
