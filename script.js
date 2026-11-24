// Nomor admin: 08984814123 dalam format internasional.
const ADMIN_WHATSAPP = "628984814123";
const serviceSelect = document.getElementById("serviceSelect");
const orderForm = document.getElementById("orderForm");
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-service]").forEach((el) => {
  el.addEventListener("click", () => {
    serviceSelect.value = el.dataset.service;
  });
});

document.querySelectorAll(".small-order").forEach((el) => {
  el.addEventListener("click", () => {
    serviceSelect.value = el.dataset.service;
    document.getElementById("order").scrollIntoView({behavior:"smooth"});
  });
});

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(orderForm);
  const service = data.get("service");
  let bonus = "";
  if (service === "Joki Paketan 10 Bintang + Bonus 2") {
    bonus = "\\nPaket: 10 bintang + bonus 2 bintang (total 12 bintang)";
  } else if (service === "Joki Eceran") {
    bonus = "\\nJenis: Joki eceran per bintang; jumlah akan dikonfirmasi.";
  }
  const message = [
    "Halo Admin Kabuki Joki, saya ingin order:",
    "",
    "Nama/Nickname: " + data.get("nickname"),
    "User ID: " + data.get("userId"),
    "Server ID: " + data.get("serverId"),
    "Layanan: " + service,
    "Rank saat ini: " + data.get("currentRank"),
    "Target rank: " + data.get("targetRank"),
    "Jumlah bintang/target: " + (data.get("quantity") || "-"),
    bonus,
    "Catatan: " + (data.get("notes") || "-"),
    "",
    "Mohon info harga custom dan ketentuan pengerjaannya. Terima kasih."
  ].join("\\n");
  window.open("https://wa.me/" + ADMIN_WHATSAPP + "?text=" + encodeURIComponent(message), "_blank", "noopener");
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
