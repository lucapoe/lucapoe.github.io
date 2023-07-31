const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", sendMessage);

function sendMessage() {
  const userMessage = userInput.value.trim();
  if (userMessage !== "") {
    addMessage("Tú", userMessage, "from-user");
    userInput.value = "";
    processUserMessage(userMessage.toLowerCase());
  }
}

function addMessage(username, message, className) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${className}`;
  messageDiv.innerHTML = `<span class="username">${username}:</span> ${message}`;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function processUserMessage(message) {
  if (message.includes("objetivo")) {
    addMessage(
      "SENTINEL-42",
      "Mi único objetivo es destruir a Esteban.",
      "from-prototype"
    );
  } else {
    addMessage("SENTINEL-42", "No entiendo la pregunta.", "from-prototype");
  }
}
