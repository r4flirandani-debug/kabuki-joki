// GANTI nomor ini dengan nomor WhatsApp admin. Format: 62xxxxxxxxxxx (tanpa +, spasi, atau 0 di depan).
const ADMIN_WHATSAPP = "6281234567890";

const orderForm = document.getElementById("orderForm");
const serviceSelect = document.getElementById("serviceSelect");

function openWhatsApp(message) {
  if (ADMIN_WHATSAPP === "6281234567890") {
    alert("Nomor WhatsApp admin belum diatur. Buka file script.js lalu ganti ADMIN_WHATSAPP dengan nomor admin Kabuki Joki.");
    return;
  }
  const url = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

document.querySelectorAll("[data-service]").forEach((button) => {
  button.addEventListener("click", () => {
    const service = button.getAttribute("data-service");
    if (serviceSelect) serviceSelect.value = service;
    document.getElementById("order").scrollIntoView({ behavior: "smooth" });
  });
});

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(orderForm);
  const message = [
    "Halo Admin Kabuki Joki! Saya ingin melakukan pemesanan.",
    "",
    `Nama / Nickname: ${data.get("nickname")}`,
    `User ID: ${data.get("userId")}`,
    `Server ID: ${data.get("serverId")}`,
    `Layanan: ${data.get("service")}`,
    `Rank saat ini: ${data.get("currentRank")}`,
    `Target rank: ${data.get("targetRank")}`,
    `Catatan: ${data.get("notes") || "-"}`,
    "",
    "Mohon info total harga dan ketentuan pengerjaannya. Terima kasih."
  ].join("\n");
  openWhatsApp(message);
});

document.getElementById("floatingWa").addEventListener("click", (event) => {
  event.preventDefault();
  openWhatsApp("Halo Admin Kabuki Joki, saya ingin bertanya tentang layanan joki Mobile Legends.");
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".topbar nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
