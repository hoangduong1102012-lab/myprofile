
const intro = document.getElementById("intro");
const site = document.getElementById("site");
const enterBtn = document.getElementById("enterBtn");

// Mo trang profile
enterBtn.addEventListener("click", () => {
  intro.classList.add("exit");
  site.classList.remove("hidden");

  // Bat dau hien cac hieu ung
  setTimeout(() => {
    observeElements();
  }, 100);
});

// Nam hien tai
document.getElementById("year").textContent =
  new Date().getFullYear();

// Dong ho thoi gian
function updateClock() {
  const now = new Date();

  document.getElementById("clock").textContent =
    now.toLocaleTimeString("vi-VN", {
      hour12: false,
      timeZone: "Asia/Ho_Chi_Minh"
    });
}

updateClock();
setInterval(updateClock, 1000);

// Hieu ung hien dan khi cuon trang
let observer;

function observeElements() {
  if (observer) observer.disconnect();

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  document.querySelectorAll(".reveal:not(.visible)")
    .forEach((element) => observer.observe(element));
}

// Ho tro nguoi dung thich giam chuyen dong
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll(".reveal")
    .forEach((element) => element.classList.add("visible"));
}
