const params = new URLSearchParams(window.location.search);
const recipient = params.get("to") || "Tamu Undangan";
const category = params.get("kategori") || "Tamu";

document.getElementById("recipientName").textContent = recipient;
document.getElementById("greetingName").textContent = recipient;
document.getElementById("recipientCategory").textContent = `Kategori: ${category}`;
document.title = `Undangan untuk ${recipient} | Edu Fair 2026`;

const cover = document.getElementById("cover");
const invitation = document.getElementById("invitation");
const envelope = document.getElementById("envelope");
document.getElementById("openInvitation").addEventListener("click", () => {
  envelope.classList.add("open");
  window.setTimeout(() => {
    cover.classList.add("hidden");
    invitation.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 650);
});

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("show");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
