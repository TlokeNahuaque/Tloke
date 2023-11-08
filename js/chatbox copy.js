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


//
//
//
//
//
//
//
var messages = [], //matriz que contiene el registro de cada cadena en el chat
  lastUserMessage = "", //realiza un seguimiento de la cadena de entrada más reciente del usuario
  botMessage = "", //var realiza un seguimiento de lo que va a decir el chatbot
  botName = "Chatbot", //nombre del chatbot
  talking = true; //cuando es falso la función de voz no funciona
//
//
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//edita esta función para cambiar lo que dice el chatbot
function chatbotResponse() {
  talking = true;
  botMessage = "Podrías reformular tu argumento"; //the default message

  if (lastUserMessage === "hola" || lastUserMessage == "buenos dias") {
    const hi = ["hi", "howdy", "hello"];
    botMessage = hi[Math.floor(Math.random() * hi.length)];
  }

  if (lastUserMessage === "name") {
    botMessage = "My name is " + botName;
  }
}
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//
//
//
//Esto se ejecuta cada vez que se presiona enter.
//Controla la entrada y salida general
function newEntry() {
  //Si el mensaje del usuario no está vacío entonces ejecuta
  if (document.getElementById("chat-input").value != "") {
    //Extrae el valor del cuadro de chat y lo establece en lastUserMessage
    lastUserMessage = document.getElementById("chat-input").value;
    //Configura el cuadro de chat para que sea claro
    document.getElementById("chat-input").value = "";
    //Agrega el valor del chat-input a los mensajes de la matriz
    messages.push(lastUserMessage);
    //Speech(lastUserMessage);  //Dice lo que el usuario escribió en voz alta
    //Establece la variable botMessage en respuesta a lastUserMessage
    chatbotResponse();
    //Agregue el nombre y el mensaje del chatbot a la matriz de mensajes
    messages.push("<b>" + botName + ":</b> " + botMessage);
    //Dice el mensaje usando la función de texto a voz escrita a continuación
    Speech(botMessage);
    //Genera los últimos elementos de la matriz de mensajes en html
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML =
          messages[messages.length - i];
    }
  }
}



//Ejecuta la función keypress() cuando se presiona una tecla
document.onkeypress = keyPress;
//si la tecla presionada es 'enter' se ejecuta la función newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = x.keyCode || x.which;
  if (key == 13 || key == 3) {
    //ejecuta esta función cuando se presiona enter
    newEntry();
  }
  if (key == 38) {
    console.log("hi");
    //document.getElementById("chat-input").value = lastUserMessage;
  }
}

//borra el texto del marcador de posición en el cuadro de chat
//esta función está configurada para ejecutarse cuando los usuarios enfocan el chat-input, al hacer clic en él
function placeHolder() {
  document.getElementById("chat-input").placeholder = "";
}
