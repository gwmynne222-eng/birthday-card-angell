const candle = document.getElementById("candle");
const message = document.getElementById("message");
const music = document.getElementById("bg-music");

candle.addEventListener("click", () => {
  message.classList.add("show");
  music.play();
});

// ===== BUKU TAMU SEDERHANA =====
const form = document.getElementById("guestForm");
const guestbook = document.getElementById("guestbook");

// ambil data lama
let messages = JSON.parse(localStorage.getItem("guestbook")) || [];

function renderMessages() {
  guestbook.innerHTML = "";
  messages.forEach(msg => {
    const div = document.createElement("div");
    div.className = "guest-item";
    div.innerHTML = `<strong>${msg.name}</strong><br>${msg.wish}`;
    guestbook.prepend(div);
  });
}

renderMessages();

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const wish = document.getElementById("wish").value;

  const newMessage = { name, wish };
  messages.push(newMessage);

  localStorage.setItem("guestbook", JSON.stringify(messages));

  renderMessages();
  form.reset();
});

