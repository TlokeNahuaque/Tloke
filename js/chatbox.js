const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");

let userMessage;
const API_KEY = "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";
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
  // Creamos un elemento <li> para el chat con el mensaje y la clase
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent =
    className === "saliente"
      ? `<p></p>`
      : `<span class="material-symbols-outlined"><i class="fa-solid fa-robot"></i></span><p></p>`;
  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message;
  return chatLi;
};

const generateResponse = (entranteChatLi) => {
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const messageElement = entranteChatLi.querySelector("p");

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }],
    }),
  };

  // Realizar una solicitud POST a la API y obtener una respuesta
  fetch(API_URL, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      messageElement.textContent = data.choices[0].message.content;
    })
    .catch((error) => {
      messageElement.classList.add("error");
      messageElement.textContent = "Oops! Algo salió mal. Por favor, inténtelo de nuevo";
    })
    .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
};

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;
  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;

  // Agregar mensaje al chatbox
  chatbox.appendChild(createChatLi(userMessage, "saliente"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    // Mensaje de espera de respuesta
    const entranteChatLi = createChatLi("Pensando...", "entrante");
    chatbox.appendChild(entranteChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    generateResponse(entranteChatLi);
  }, 600);
};

chatInput.addEventListener("input", () => {
  // Ajustar el tamaño del textarea en función de su contenido
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
  // Si la tecla "Enter" es presionada
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault(); // Corrección del error tipográfico
    handleChat();
  }
});

sendChatBtn.addEventListener("click", handleChat);
chatbotCloseBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
