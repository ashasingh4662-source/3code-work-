// ====== Navigation ======
function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll("main section").forEach(sec => {
    sec.classList.remove("active");
  });
  // Show selected section
  document.getElementById(sectionId).classList.add("active");
}

// ====== Hamburger Menu ======
const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");

hamburger.addEventListener("click", () => {
  sideMenu.classList.toggle("hidden");
});

function navigate(sectionId) {
  showSection(sectionId);
  sideMenu.classList.add("hidden");
}

// ====== Chat Functionality ======
let chatHistory = [];
const chatWindow = document.getElementById("chatWindow");
const chatMessageInput = document.getElementById("chatMessage");

function renderChat() {
  chatWindow.innerHTML = "";
  chatHistory.forEach(msg => {
    const bubble = document.createElement("div");
    bubble.classList.add("chat-bubble", msg.sender);
    bubble.textContent = msg.text;
    chatWindow.appendChild(bubble);
  });
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function sendMessage() {
  const text = chatMessageInput.value.trim();
  if (text === "") return;

  // Add user message
  chatHistory.push({ sender: "user", text });
  renderChat();

  // Clear input
  chatMessageInput.value = "";

  // Simulated bot reply
  setTimeout(() => {
    const reply = "Got it! Keep studying hard 🚀";
    chatHistory.push({ sender: "bot", text: reply });
    renderChat();
  }, 500);
}

function newChat() {
  chatHistory = [];
  renderChat();
}

// ====== Motivation Section ======
const quotes = [
  "Discipline is the bridge between goals and achievement.",
  "Focus on progress, not perfection.",
  "Small steps every day lead to big results.",
  "Your future is created by what you do today, not tomorrow.",
  "Stay consistent, success will follow."
];

const tips = [
  "📚 Study in short focused sessions.",
  "🚀 Avoid distractions while studying.",
  "✨ Revise regularly to strengthen memory.",
  "📝 Make a simple study plan and stick to it.",
  "💡 Take breaks to refresh your mind."
];

function showMotivation() {
  const quoteBox = document.getElementById("quoteBox");
  const tipBox = document.getElementById("tipBox");

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const randomTip = tips[Math.floor(Math.random() * tips.length)];

  quoteBox.textContent = `"${randomQuote}"`;
  tipBox.textContent = randomTip;
}

// Show a new quote/tip every time Motivation section is opened
document.getElementById("motivation").addEventListener("click", showMotivation);

// ====== Default Load ======
showSection("home");
showMotivation();
