const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");

let userMessage;
let questionNum = 0; // Contador de preguntas
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
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

const createChatLi2 = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent =
    className === "saliente"
      ? `<p></p>`
      : `<span style="visibility:hidden" class="material-symbols-outlined"></span><p></p>`;
  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message;
  return chatLi;
};

const createChatLi3 = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent =
    className === "saliente"
      ? '<p></p>'
      : '<span style="visibility:hidden" class="material-symbols-outlined"></span><p><a style="color=blue" target="_blank" href="https://tlokenahuaque.github.io/DiagramasUCS/Docs/Directorio.html">createChatLi3</a></p>';
  chatLi.innerHTML = chatContent;
  if (className === "entrante") {
    chatLi.querySelector("a").textContent = message;
  } else {
    chatLi.querySelector("p").textContent = message;
  }
  return chatLi;
};

const createChatLi4 = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent =
    className === "saliente"
      ? '<p></p>'
      : '<span style="visibility:hidden" class="material-symbols-outlined"></span><p><a style="color=blue" target="_blank" href="https://tlokenahuaque.github.io/DiagramasUCS/index.html">createChatLi3</a></p>';
  chatLi.innerHTML = chatContent;
  if (className === "entrante") {
    chatLi.querySelector("a").textContent = message;
  } else {
    chatLi.querySelector("p").textContent = message;
  }
  return chatLi;
};

const setQuestionNumber = (userMessage) => {
  // Expresión regular para buscar menciones del usuario
  const mentionRegex = /(hola|buenos d|buenas no|buenas ta|R11|R4)/i;

  // Directorio
  const specificWord1 = /(unidad de c|de contacto|secretario|UCS)/i;
  const specificWord2 = /(asuntos|internos|ext queja contra|ext. queja contra|pretor|extension queja|extensión queja)/i;
  const specificWord3 = /(ext brigada|ext. brigada|extension brigada|extensión brigada|ext vigilan|ext. vigilan|extension vigilan|extensión vigilan|ext animal|ext. animal|extension animal|extensión animal|ext bva|ext. bva|extension bva|extensión bva)/i;
  const specificWord4 = /(ext pol|ext. pol|extension pol|extensión pol|ext cib|ext. cib|extension cib|extensión cib)/i;
  const specificWord5 = /(dh|derechos|humanos|ext derechos|ext. derechos|extension derechos|extensión derechos)/i;
  const specificWord6 = /(ext secues|ext. secues|extension secues|extensión secues|ext extor|ext. extor|extension extor|extensión extor|crisis|ext crisis|ext. crisis|extension crisis|extensión crisis)/i;
  const specificWord7 = /(ext segu|ext. segu|extension segu|extensión segu|ext privada|ext. privada|extension privada|extensión privada)/i;
  const specificWord8 = /(unidad de g|genero|género|ext unidad de g|ext. unidad de g|extension unidad de g|extensión unidad de g|ext genero|ext. genero|extension genero|extensión genero|ext género|ext. género|extension género|extensión género)/i;
  const specificWord9 = /(PAOT|paot|Ambiental y del|ordenamiento terri)/i;
  const specificWord10 = /(narco|ext drog|ext. drog|extension drog|extensión drog|ext vent|ext. vent|extension vent|extensión vent)/i;
  const specificWord11 = /(fuerza de|tarea|zorros)/i;
  const specificWord12 = /(bomberos|ext bomberos|ext. bomberos|extension bomberos|extensión bomberos)/i;
  const specificWord13 = /(protección c|civil)/i;
    const specificWord14 = /(hola|buenos d|buenas no|buenas ta|R11)/i;
    const specificWord15 = /(hola|buenos d|buenas no|buenas ta|R11)/i;
    const specificWord16 = /(hola|buenos d|buenas no|buenas ta|R11)/i;
    const specificWord17 = /(hola|buenos d|buenas no|buenas ta|R11)/i;
    const specificWord18 = /(hola|buenos d|buenas no|buenas ta|R11)/i;
    const specificWord19 = /(hola|buenos d|buenas no|buenas ta|R11)/i;
    const specificWord20 = /(hola|buenos d|buenas no|buenas ta|R11)/i;
    const specificWord21 = /(hola|buenos d|buenas no|buenas ta|R11)/i;
    const specificWord22 = /(hola|buenos d|buenas no|buenas ta|R11)/i;
    const specificWord23 = /(hola|buenos d|buenas no|buenas ta|R11)/i;
    const specificWord24 = /(hola|buenos d|buenas no|buenas ta|R11)/i;
  const specificWord25 = /(directorio|telefono|teléfono|agenda|extension|Z7)/i;

  //Tipos de Reporte  
  const specificWord26 = /(acompañ|cuentahab|Bancario)/i;
  const specificWord27 = /(alerta|amber)/i;
  const specificWord28 = /(apoyo psic|psicol)/i;
  const specificWord29 = /(asesoria ju|asesoría ju|juridica|jurídica)/i;
  const specificWord30 = /(asistencia ciber|asistencia cyber|policia ciber|policía ciber|cibern)/i;
  const specificWord31 = /(cia integral|para pers|discapaci|tarjetón|tarjeton)/i;
  const specificWord32 = /(brigada|animal|bva)/i;
  const specificWord33 = /(broma)/i;
  const specificWord34 = /(camara|cámara|videos)/i;
  const specificWord35 = /(en el trans|transporte|publico|público)/i;
  const specificWord36 = /(extors)/i;
  const specificWord37 = /(felicita)/i;
  const specificWord38 = /(insult|altisonan)/i;
  const specificWord39 = /(orientacion|orientación)/i;
  const specificWord40 = /(contra p|policia|policía|servidores p|elemen|oficial|custodio|Pol Bancar|Policia Bancar|Policía Bancar|PBI|Pol Aux|Policia Aux|Policía Aux|servidor|Z10)/i;
  const specificWord41 = /(queja seg|queja de seg|seguridad privada|privada)/i;
  const specificWord42 = /(con violen)/i;
  const specificWord43 = /(sin violen|X5)/i;
  const specificWord44 = /(robo|X6)/i;
  const specificWord45 = /(trabajo so|social)/i;
  const specificWord46 = /(venta|droga)/i;
  const specificWord47 = /(vigilancia)/i;
  const specificWord48 = /(violencia|X8)/i;
  const specificWord49 = /(patrull|envio p|envío|envio u|envío u)/i;
  const specificWord50 = /(activación|activacion|alarma)/i;
  const specificWord51 = /(amenaza de|bomba|X10)/i;
  const specificWord52 = /(arrancones)/i;
  const specificWord53 = /(derrame|aceite)/i;
  const specificWord54 = /(enjambre)/i;
  const specificWord55 = /(explosion|explosión)/i;
  const specificWord56 = /(fuga|de gas)/i;
  const specificWord57 = /(incendio|X11)/i;
  const specificWord58 = /(rescate|urbano)/i;
  const specificWord59 = /(cadaver|cádaver|muert|occis|fallecid|Z1)/i;
  const specificWord60 = /(ebrio|borrach|alcohol)/i;
  const specificWord61 = /(entrevista|ciudadana)/i;
  const specificWord62 = /(escadal)/i;
  const specificWord63 = /(franele)/i;
  const specificWord64 = /(blanca|cuchillo|puña|X12)/i;
  const specificWord65 = /(fuego|arma|pistola|X13)/i;
  const specificWord66 = /(atropella|Z3)/i;
  const specificWord67 = /(caida|caída)/i;
  const specificWord68 = /(por golpes)/i;
  const specificWord69 = /(drogando|drogándo)/i;
  const specificWord70 = /(de calle|vagabund|indigent|mendig)/i;
  const specificWord71 = /(riña|pelea|disputa|Z4)/i;
  const specificWord72 = /(secuestro|X7)/i;
  const specificWord73 = /(sospechoso|X4)/i;
  const specificWord74 = /(tala|arbol|árbol)/i;
  const specificWord75 = /(calidad|de vida)/i;
  const specificWord76 = /(con les)/i;
  const specificWord77 = /(sin les)/i;
  const specificWord78 = /(circulac|vuelta prohib)/i;
  const specificWord79 = /(no circul)/i;
  const specificWord80 = /(infraccio|multa|fotomult|foto multa|deposito vehi|depósito veh|exceso de velocidad|parquimetr|parquímetr)/i;
  const specificWord81 = /(obstrucc|estacionado en vía p|estacionado en via p)/i;
  const specificWord82 = /(semaforo|semáforo)/i;

  //Especificaciones  
  const specificWord83 = /(vialidad y t)/i;
  const specificWord84 = /(lesionado|ERUM|Z2)/i;
  const specificWord85 = /(queja)/i;
  const specificWord86 = /(choque|Z6)/i;
  const specificWord87 = /(no|muchas|gracia|enterado|entendido|R10|R2|X3|R5|K4)/i;
  const specificWord88 = /(diagrama|de flujo)/i;





  if (mentionRegex.test(userMessage)) {
    // Si el usuario saluda, restablece la pregunta a 0
    questionNum = 0;
  } else if (specificWord1.test(userMessage)) {
    questionNum = 1;
  } else if (specificWord2.test(userMessage)) {
    questionNum = 2;
  } else if (specificWord3.test(userMessage)) {
    questionNum = 3;
  } else if (specificWord4.test(userMessage)) {
    questionNum = 4;
  } else if (specificWord5.test(userMessage)) {
    questionNum = 5;
  } else if (specificWord6.test(userMessage)) {
    questionNum = 6;
  } else if (specificWord7.test(userMessage)) {
    questionNum = 7;
  } else if (specificWord8.test(userMessage)) {
    questionNum = 8;
  } else if (specificWord9.test(userMessage)) {
    questionNum = 9;
  } else if (specificWord10.test(userMessage)) {
    questionNum = 10;
  } else if (specificWord11.test(userMessage)) {
    questionNum = 11;
  } else if (specificWord12.test(userMessage)) {
    questionNum = 12;
  } else if (specificWord13.test(userMessage)) {
    questionNum = 13;
  } else if (specificWord14.test(userMessage)) {
    questionNum = 14;
  } else if (specificWord15.test(userMessage)) {
    questionNum = 15;
  } else if (specificWord16.test(userMessage)) {
    questionNum = 16;
  } else if (specificWord17.test(userMessage)) {
    questionNum = 17;
  } else if (specificWord18.test(userMessage)) {
    questionNum = 18;    
  } else if (specificWord19.test(userMessage)) {
    questionNum = 19;
  } else if (specificWord20.test(userMessage)) {
    questionNum = 20;
  } else if (specificWord21.test(userMessage)) {
    questionNum = 21;
  } else if (specificWord22.test(userMessage)) {
    questionNum = 22;
  } else if (specificWord23.test(userMessage)) {
    questionNum = 23;
  } else if (specificWord24.test(userMessage)) {
    questionNum = 24;
  } else if (specificWord25.test(userMessage)) {
    questionNum = 25;
  } else if (specificWord26.test(userMessage)) {
    questionNum = 26;
  } else if (specificWord27.test(userMessage)) {
    questionNum = 27;
  } else if (specificWord28.test(userMessage)) {
    questionNum = 28;
  } else if (specificWord29.test(userMessage)) {
    questionNum = 29;
  } else if (specificWord30.test(userMessage)) {
    questionNum = 30;
  } else if (specificWord31.test(userMessage)) {
    questionNum = 31;
  } else if (specificWord32.test(userMessage)) {
    questionNum = 32;
  } else if (specificWord33.test(userMessage)) {
    questionNum = 33;
  } else if (specificWord34.test(userMessage)) {
    questionNum = 34;
  } else if (specificWord35.test(userMessage)) {
    questionNum = 35;
  } else if (specificWord36.test(userMessage)) {
    questionNum = 36;
  } else if (specificWord37.test(userMessage)) {
    questionNum = 37;
  } else if (specificWord38.test(userMessage)) {
    questionNum = 38;
  } else if (specificWord39.test(userMessage)) {
    questionNum = 39;
  } else if (specificWord40.test(userMessage)) {
    questionNum = 40;
  } else if (specificWord41.test(userMessage)) {
    questionNum = 41;
  } else if (specificWord42.test(userMessage)) {
    questionNum = 42;
  } else if (specificWord43.test(userMessage)) {
    questionNum = 43;
  } else if (specificWord44.test(userMessage)) {
    questionNum = 44;
  } else if (specificWord45.test(userMessage)) {
    questionNum = 45;
  } else if (specificWord46.test(userMessage)) {
    questionNum = 46;
  } else if (specificWord47.test(userMessage)) {
    questionNum = 47;
  } else if (specificWord48.test(userMessage)) {
    questionNum = 48;
  } else if (specificWord49.test(userMessage)) {
    questionNum = 49;
  } else if (specificWord50.test(userMessage)) {
    questionNum = 50;
  } else if (specificWord51.test(userMessage)) {
    questionNum = 51;
  } else if (specificWord52.test(userMessage)) {
    questionNum = 52;
  } else if (specificWord53.test(userMessage)) {
    questionNum = 53;
  } else if (specificWord54.test(userMessage)) {
    questionNum = 54;
  } else if (specificWord55.test(userMessage)) {
    questionNum = 55;
  } else if (specificWord56.test(userMessage)) {
    questionNum = 56;
  } else if (specificWord57.test(userMessage)) {
    questionNum = 57;
  } else if (specificWord58.test(userMessage)) {
    questionNum = 58;
  } else if (specificWord59.test(userMessage)) {
    questionNum = 59;
  } else if (specificWord60.test(userMessage)) {
    questionNum = 60;
  } else if (specificWord61.test(userMessage)) {
    questionNum = 61;
  } else if (specificWord62.test(userMessage)) {
    questionNum = 62;
  } else if (specificWord63.test(userMessage)) {
    questionNum = 63;
  } else if (specificWord64.test(userMessage)) {
    questionNum = 64;
  } else if (specificWord65.test(userMessage)) {
    questionNum = 65;
  } else if (specificWord66.test(userMessage)) {
    questionNum = 66;
  } else if (specificWord67.test(userMessage)) {
    questionNum = 67;
  } else if (specificWord68.test(userMessage)) {
    questionNum = 68;
  } else if (specificWord69.test(userMessage)) {
    questionNum = 69;
  } else if (specificWord70.test(userMessage)) {
    questionNum = 70;
  } else if (specificWord71.test(userMessage)) {
    questionNum = 71;
  } else if (specificWord72.test(userMessage)) {
    questionNum = 72;
  } else if (specificWord73.test(userMessage)) {
    questionNum = 73;
  } else if (specificWord74.test(userMessage)) {
    questionNum = 74;
  } else if (specificWord75.test(userMessage)) {
    questionNum = 75;
  } else if (specificWord76.test(userMessage)) {
    questionNum = 76;
  } else if (specificWord77.test(userMessage)) {
    questionNum = 77;
  } else if (specificWord78.test(userMessage)) {
    questionNum = 78;
  } else if (specificWord79.test(userMessage)) {
    questionNum = 79;
  } else if (specificWord80.test(userMessage)) {
    questionNum = 80;
  } else if (specificWord81.test(userMessage)) {
    questionNum = 81;
  } else if (specificWord82.test(userMessage)) {
    questionNum = 82;
  } else if (specificWord83.test(userMessage)) {
    questionNum = 83;
  } else if (specificWord84.test(userMessage)) {
    questionNum = 84;
  } else if (specificWord85.test(userMessage)) {
    questionNum = 85;
  } else if (specificWord86.test(userMessage)) {
    questionNum = 86;
  } else if (specificWord87.test(userMessage)) {
    questionNum = 87;
  } else if (specificWord88.test(userMessage)) {
    questionNum = 88;
  } else if (specificWord89.test(userMessage)) {
    questionNum = 89;
  } else if (specificWord90.test(userMessage)) {
    questionNum = 90;
  } else if (specificWord91.test(userMessage)) {
    questionNum = 91;
  } else if (specificWord92.test(userMessage)) {
    questionNum = 92;
  } else if (specificWord93.test(userMessage)) {
    questionNum = 93;
                                            
                                            
  } else {
    questionNum = 8000;
  }
};

const generateResponse = (userMessage) => {
  // Llamamos a la función para establecer el valor de questionNum
  setQuestionNumber(userMessage);

  switch (questionNum) {
    case 0:
      // specificWord0
      return "¡Hola! es un gusto conocerte ¿en qué te puedo ayudar?";

    case 1:
      setTimeout(() => {
        const response = "Estamos ubicados en Arcos de Belén 79, primer piso, colonia Centro, alcaldía Cuauhtémoc, C.P. 06000\n\nContamos con más canales para la recepción de solicitudes ciudadanas como lo son:\n\nCorreo:  ucontacto@ssc.cdmx.gob.mx,\nWhatsApp:  55 4331 9636,\nTwitter:  @UCS_GCDMX\nSUAC y la aplicación Mi policía";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 100);
      setTimeout(() => {
        const response = "Es un guto atenderte ¿Requieres algo más?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
      return "Nuestro número telefónico es:\n55 5209 9898\n\nCon servicio los 365 días del año, las 24 horas del día";
            

    case 2:
      setTimeout(() => {
        const response = "¿Deseas buscar otra extensión?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
      return "La extensión de Asuntos Internos es: 1121, 1122 y 1160";

    case 3:
      setTimeout(() => {
        const response = "¿Deseas saber algo más?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
      return "El número telefónico de Brigada de Vigilancia Animal es: 55 6300 8771\n\nSubdirección de Programas de Prevención del Delito Ext. 5030 y 5727";


    case 4:
      setTimeout(() => {
        const response = "¿En qué más puedo colaborar contigo?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
      return "La extensión de la Policía Cibernética es: 5086 (para reportes) y 5666 (pláticas informativas de prevención)\n\nTambién reciben denuncias por medio de Twitter #CiberneticaCDMX ó a través, al correo policia.cibernetica@ssc.cdmx.gob.mx ó prevencion.cibernetica@ssc.cdmx.gob.mx";

    case 5:
      setTimeout(() => {
        const response = "¿Necesitas información adicional?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
      return "Contacto con la Dirección General de Derechos Humanos: 55 5442 5303";

    case 6:
      setTimeout(() => {
        const response = "¿Hay algo más en lo que pueda asistirte?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
      return "La línea directa de Atención de la Dirección de Manejo de Crisis y Negociación es: 55 5242 5034";  

    case 7:
      setTimeout(() => {
        const response = "¿Te puedo ayudar en algo más?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
      return "Dirección General de Seguridad Privada y Colaboración Interinstitucional\nExt. 5258 y 5631\n\nUbicación: Ermita No.5 Piso 2, Col. Narvarte Poniente, Benito Juárez, C.P. 02030";  

    case 8:
      setTimeout(() => {
        const response = "¿Hay algo más que te interese?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
    return "La extension de la Unidad Especializada de Género es: 4974 y 4970";  

    case 9:
      setTimeout(() => {
        const response = "Con un horario de servicio de lunes a jueves de 9 a 18 horas y los viernes de 9 a 15 horas";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 100);
      setTimeout(() => {
        const response = "¿Te puedo ayudar en algo más?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
    return "Claro, el número telefónico de la PAOT es:\n55 5265 0780 ext. 15430, 15440, 15450 y 15410";  

   case 10:
      setTimeout(() => {
        const response = "¿Deseas buscar otra extensión?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
    return "Dirección de Combate a Narcomenudeo y Delitos Conexos de la Dirección General de Investigación de Delitos de Mayor de la SSC Ext. 5409\n\nUbicación: Liverpool 136, 2° piso, Colonia Juárez, Cuauhtémoc, C.P. 06000";  

    case 11:
      setTimeout(() => {
        const response = "¿Hay algo más en lo que pueda asistirte?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
    return "El número telefónico de Fuerza de Tarea es: 55 5845 6919 y 55 5845 8736\n\nUbicación: Calle Leandro Valle, PB, Colonia Del Mar, Tláhuac. C.P.13270, Ciudad de México";  

    case 12:
      setTimeout(() => {
        const response = "¿En qué más puedo colaborar contigo?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
    return "El número telefónico de Bomberos es:\n55 5764 4102\n\nUbicación: Avenida Fray Servando Teresa de Mier, Colonia Merced Balbuena, Venustiano Carranza, C.P. 15810, Ciudad de México";  

    case 13:
      setTimeout(() => {
        const response = "¿Hay algo más en lo que pueda asistirte?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
    return "Claro, el número telefónico de Protección Civil es:\n55 563 2222\n\nUbicación: Calle Abraham González 67, Colonia Juárez, Cuauhtémoc C.P. 06600, Ciudad de México\n\nCorreo electrónico: atencion.ciudadana.sgirpc@cdmx.gob.mx";  

    
    case 25:
      setTimeout(() => {
        const response = "[Haz click para abrir el Directorio]";
        const entranteChatLi = createChatLi3(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 100);
      setTimeout(() => {
        const response = "¿Te puedo ayudar en algo más?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
      return "Por supuesto, si requieres consultar algún número telefónico lo puedes realizar aquí:";  
  
    
    //Tipos de Reporte
    case 26:
      setTimeout(() => {
        const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Dónde se encuentra ubicado?\n •¿A que sucursal se le va a trasladar?\n •¿Cuál es la ubicación del banco?\n •¿Domicilio a donde desea ser acompañando?\n •¿Cuál es su vestimenta?\n •¿Referencias del lugar?";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 100); 
      setTimeout(() => {
        const response = "El motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 200); 
      setTimeout(() => {
        const response = "Recomienda al usuario:\n • Permanecer dentro del lugar donde se encuentra hasta que los oficiales arriben del lugar\n • No comentar las actividades financieras que realizo\n • No solicitar apoyo de terceras personas";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 300); 
      setTimeout(() => {
        const response = "Se canaliza al: Jefe de Cuadrante del Sector Correspondiente\n\nSi requieres más información puedes consultar el Anexo 1";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 400); 
      setTimeout(() => {
        const response = "¿Quisieras que investiguemos algo más?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
      return "Comprendo que estás realizando un folio de Acompañamiento a cuentahabiente bancario";  

      
    case 27:
      setTimeout(() => {
        const response = "Comienza por realizar las siguientes preguntas:\n Datos del contacto:\n • Nombre\n • Teléfono\n • Edad\n • Domicilio\n • Relación con la persona extraviada, ausente o sustraída."; 
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 100); 
      setTimeout(() => {
        const response = "Datos de la persona desaparecida:\n • Nombre\n • Sexo\n • Edad\n • Media filiación\n • Señas particulares como lunares, cicatrices, tatuajes u otros\n • Ropa: prendas, cualquier peculiaridad como color, logotipos o slogans\n • ¿Estaba la persona en compañía de un adulto, niño o una mascota?\n • ¿Alguien sufrió alguna lesión?\n • ¿Toma algún medicamento, tiene problemas de salud, discapacidades físicas o mentales? Si toma algún medicamento específico ¿Cuándo necesita su siguiente dosis? Sintomatología asociada a la enfermedad (crisis, epilepsia, pérdida de conocimiento, etc.)\n • ¿Portaba algún teléfono celular? Proporcione el número"; 
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 200); 
      setTimeout(() => {
        const response = "Datos de los hechos:\n • Lugar, fecha y hora de extravío o ausencia\n • Lugar en que fue visto por última vez y última persona que lo vio o lo contactó\n • A dónde se dirigía la persona ausente\n • La última vez que estableció contacto con la persona ausente; indicar que tipo de contacto (personal, telefónica o electrónica), lugar, fecha y hora\n • Datos relevantes (vehículos, personas o cualquier otra situación)."; 
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 300); 
      setTimeout(() => {
        const response = "NOTA: En el caso de la UCS, se deberá tomar en cuenta toda persona desaparecida, extraviada, sin importar la edad, para fines estadísticos\n\nLa Alerta Alba Se emite el Protocolo Alba para la Ciudad de México que tiene por objeto establecer estrategias y acciones de coordinación en los niveles de gobierno, para la búsqueda inmediata y localización de mujeres, niñas y adolescentes no localizadas o desaparecidas en la Ciudad de México"; 
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 400); 
      setTimeout(() => {
        const response = "Se debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró\n\nConsiderando sí la información que proporciona sea fehaciente, permitiéndonos ponderar la emergencia como prioridad ALTA\n\nSi la situación es de más gravedad que la que el denunciante está expresando se dará aviso de inmediato al coordinador y/o a la subdirección"; 
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 500); 
      setTimeout(() => {
        const response = "Recomienda al usuario:\n • Verificar que los hechos reportados sean reales o serios\n • Registrar información como antecedente del caso\n • Identificar y confirmar que se cuente con información suficiente\n • Orientar a la persona reportante y canalizar el reporte al área competente\n • Coopere con las autoridades en cuanto arriben a prestarle el apoyoPermanecer dentro del lugar donde se encuentra hasta que los oficiales arriben del lugar\n • No comentar las actividades financieras que realizo\n • No solicitar apoyo de terceras personas";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 600); 
      setTimeout(() => {
        const response = "Se canaliza al: Jefe de Cuadrante, 911, Puesto de mando, para que realice la investigación a los alrededores\nLOCATEL 55 5658 1111\nConsejo ciudadano 55 5533 5533 y 800 5533 000\nAlerta Amber México\n\nSi requieres más información puedes consultar el Anexo 39";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 700); 
      setTimeout(() => {
        const response = "¿Tienes alguna otra consulta o inquietud?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
      return "Comprendo que estás realizando un folio de Alerta Amber";  
  
  
    case 28:
      setTimeout(() => {
        const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Cuál es la situación?\n •¿Hace cuánto tiempo se encuentra en dicha situación?";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 100); 
      setTimeout(() => {
        const response = "Es importante mencionar a la persona atendida que la información proporcionada será tratada en base a la Ley de Protección de datos personales\n\nEl operador telefónico en caso de recibir cualquier situación antes mencionada deberá proporcionar el folio al área de Asistencia Integral para que brinde la atención correspondiente y deberá estar a la espera para concluir su folio de orientación con el folio que le proporcione dicha área.";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 200); 
      setTimeout(() => {
        const response = "Recomienda al usuario:\n • Es importante que dé seguimiento a su folio, ya que si gusta se le podrá brindar atención personalizada";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 300); 
      setTimeout(() => {
        const response = "Se canaliza a: Asistencia Integral (Ext. 4992, 4936, 4937) generando un folio de Orientación al Público-Asistencia Integral\n\nSi requieres más información puedes consultar el Anexo 40";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 400); 
      setTimeout(() => {
        const response = "¿Hay alguna otra información que necesitas?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
      return "Comprendo que estás realizando un folio de Apoyo Psicológico";  

      
    case 29:
      setTimeout(() => {
        const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Situación por la que requiere la asesoría?\n •¿Desde hace cuánto se llevan a cabo los hechos?";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 100); 
      setTimeout(() => {
        const response = "Es importante mencionar a la persona atendida que la información proporcionada será tratada en base a la Ley de Protección de datos personales\n\nEn el caso de que la solicitud ingresa vía telefónica o digital deberá proporcionar el folio al área de Asistencia Integral para que brinde la atención correspondiente y deberá estar a la espera para concluir su folio de orientación con el folio que le proporcione dicha área.";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 200); 
      setTimeout(() => {
        const response = "Recomienda al usuario:\n • Es importante que dé seguimiento a su folio, ya que si gusta se le podrá brindar atención personalizada";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 300); 
      setTimeout(() => {
        const response = "Se canaliza a: Asistencia Integral (Ext. 4992, 4936, 4937) generando un folio de Orientación al Público-Asistencia Integral\n\nSi requieres más información puedes consultar el Anexo 66";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 400); 
      setTimeout(() => {
        const response = "¿Puedo brindarte más detalles o aclaraciones?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
      return "Comprendo que estás realizando un folio de Asesoría Jurídica";    

    case 30:
      setTimeout(() => {
        const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Motivo por el cual desea realizar su reporte?\n •¿Cuál es la red social en la que se llevan a cabo los hechos?\n •¿Hace cuánto tiempo inicio la situación?\n •¿Conoce a los agresores?";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 100); 
      setTimeout(() => {
        const response = "Se deberán mencionar las redes sociales en las que tambien podrá realizar su denuncia:\n TWITTER @UCS_CDMX\n #CiberneticaCDMX";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 200); 
      setTimeout(() => {
        const response = "Recomienda al usuario:\n • No responder a las agresiones\n • Bloquear la red\n • No publicar datos personales en sus redes sociales\n • No publicar fotografías de sus familiares\n • Mantener actualizado el software de protección de su computadora, como el antivirus y el antiespías. Procure instalar versiones originales legales\n • Cambiar sus contraseñas con regularidad, como mínimo cada 90 días\n • Evitar las contraseñas lógicas que se puedan deducir fácilmente, como su fecha de nacimiento y procure utilizar combinación de mayúsculas, minúsculas, números y caracteres especiales si le son permitidos\n • Cuidar los archivos adjuntos que revisa en sus correos electrónicos\n • Aunque use su equipo personal, acostúmbrese a cerrar las sesiones de correo electrónico o de redes sociales\n • Evitar realizar operaciones financieras en redes abiertas o públicas\n • Cuidar la información que comparte en redes sociales\n • Interponer una denuncia cuando el ciberdelito ya ha ocurrido.Es importante que dé seguimiento a su folio, ya que si gusta se le podrá brindar atención personalizada";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 300); 
      setTimeout(() => {
        const response = "Se canaliza a: Policía cibernética de la SSPCDMX Ext. 5086 (para reportes) y 5666 (pláticas de prevención)\nHorario: 24 horas 365 dias.\n\nSi requieres más información puedes consultar el Anexo 4";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 400); 
      setTimeout(() => {
        const response = "¿Requieres más detalles o aclaraciones?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
      return "Comprendo que estás realizando un folio de Asistencia Cibernética";    


    case 31:
      setTimeout(() => {
        const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Domicilio del usuario?\n •¿Cuál es la información o servicio que requiere?\n •¿Tipo de discapacidad?\n •¿Cuenta con el certificado de discapacidad?\n •¿Quién le expide el certificado de discapacidad?";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 100); 
      setTimeout(() => {
        const response = "Es importante mencionar a la persona atendida que la información proporcionada será tratada en base a la Ley de Protección de datos personales\n\nEl operador deberá proporcionar el folio al área de Asistencia Integral para que brinde la atención correspondiente y deberá estar a la espera para concluir su folio de orientación con el folio que le proporcione dicha área.";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 200); 
      setTimeout(() => {
        const response = "Requisitos, todos los documentos en original y copia:\n 1) Formato de solicitud debidamente requisitado y firmado\n 2) Personas físicas, carta poder firmada ante dos testigos e identificación del interesado y de quién realiza el trámite\n 3) Constancia de Discapacidad y Funcionalidad emitida por la SEDESA, con vigencia no mayor a un año\n 4) Una fotografía tamaño infantil (en blanco y negro o a color con fondo blanco)\n 5) Identificación oficial (credencial para votar o pasaporte o cédula profesional o cartilla de servicio militar)\n 6) Acta de nacimiento\n 7) Tarjeta incluyente emitida por el DIF-CDMX\n 8) Acta de extravío levantada ante el MP (solo en casos de reposición por robo o extravío)";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 300); 
      setTimeout(() => {
        const response = "Se canaliza a: Asistencia Integral (Ext. 4992, 4936, 4937) generando un folio de Orientación al Público-Asistencia Integral\n\nSi requieres más información puedes consultar el Anexo 68";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 400); 
      setTimeout(() => {
        const response = "¿Necesitas asistencia adicional en algún otro aspecto?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
      return "Comprendo que estás realizando un folio de Asistencia Integral para Personas con Discapacidad";    

          
    case 32:
      setTimeout(() => {
        const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Qué tipo de animal es? (domésticos perro, gato etc.)\n • ¿En qué condiciones se encuentra el animal? (sano, herido)\n • ¿Tienen alguna marca en particular?\n • ¿El animal porta alguna identificación? (placa, registro, otra)\n • Características del animal (nombre, raza, tamaño, color, características especiales (manchas, rayas, otras).";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 100); 
      setTimeout(() => {
        const response = "La brigada de vigilancia animal tiene como funciones:\nh. Rescatar animales de las vías primarias y secundarias, así como de alta velocidad; \ni. Brindar protección a los animales que se encuentren en abandono y que sean maltratados; \nj. Responder a situaciones de peligro por agresión animal; \nk. Impedir y remitir ante la autoridad competente a los infractores por la venta de animales en la vía pública; \nl. Coadyuvar en el rescate de animales silvestres y entregarlos a las autoridades competentes para su resguardo; \nm. Retirar animales que participen en plantones o manifestaciones; y \nn. Impedir y remitir ante la autoridad competente a los infractores que celebren y promuevan peleas de perros.\no. Realizar operativos en los mercados y establecimientos que se tengan identificados los cuales se dediquen a la venta de animales, a fin de detectar posibles anomalías en dichos centros y establecimientos.";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 200); 
      setTimeout(() => {
        const response = "Recomienda al usuario:\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo.\n • Es importante que realice formalmente su denuncia.";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 300); 
      setTimeout(() => {
        const response = "Se canaliza a: Brigada de vigilancia Animal Tel: 55 6300 8771\nSubdirección de Programas de Prevención del Delito Ext. 5030 y 5727\n\nSi requieres más información puedes consultar el Anexo 2";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 400); 
      setTimeout(() => {
        const response = "¿Puedo resolver alguna otra pregunta?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
      return "Comprendo que estás realizando un folio de Brigada de Vigilancia Animal";    


    case 33:
      setTimeout(() => {
        const response = "Genera el folio con la mayor información con la que cuentes.\nEs necesario registrar el número telefónico y marcar si se trata de un usuario recurrente.";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 100); 
      setTimeout(() => {
        const response = "¿Puedo resolver alguna otra pregunta?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
      return "Comprendo que estás realizando un folio relacionado a una llamada de Broma";    


    case 34:
      setTimeout(() => {
        const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n • Domicilio del solicitante\n • Domicilio donde requiere la instalación, reubicación, reparación, botón de panico o auxilio, alerta sísmica ó altavoz?\n • Referencias del lugar con planos\n •¿Motivo por el cuál la requiere?";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 100); 
      setTimeout(() => {
        const response = "Es importante mencionarle al usuario que esta Dirección, opera como 'Ventanilla Única' para la recepción de solicitudes de cámaras de video vigilancia en la Ciudad de México, sin tener facultad para autorizar la instalación o la reubicación.";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 200); 
      setTimeout(() => {
        const response = "Recomienda al usuario:\n • Proporcionar referencias, planos\n • Ubicar el número de ID de la cámara de video vigilancia";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 300); 
      setTimeout(() => {
        const response = "Se informa a la Subdirección de Asistencia Ciudadana(SAC) Ext. 5521. Posteriormente SAC canalizará mediante oficio la petición al Centro de Comando, Control, Cómputo, Comunicaciones y Contacto Ciudadano de la Ciudad de México\n\nSi requieres más información puedes consultar el Anexo 3";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 400); 
      setTimeout(() => {
        const response = "¿Existe algo más en lo que estés interesado?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
      return "Comprendo que estás realizando un folio de Cámaras de Vigilancia";    


    case 35:
      setTimeout(() => {
        const response = "Comienza por solicitar al usuario que conserve la calma y realiza las siguientes preguntas:\n • Datos del usuario\n •¿Se encuentran los asaltantes en el lugar?\n •¿Cuántos son?\n •¿Están armados?\n •¿Tipo de arma? Fuego, blanca, otra (especifique).\n •¿Hay lesionados?\n •¿Cuántos?\n •¿Tipo de lesiones?\n •¿Están consientes?\n •¿Qué le robaron?\n •¿Los asaltantes viajaban en algún vehículo?\n •¿En qué dirección huyeron?\n •¿Características del o los vehículos? (tipo de vehículo, marca, submarca, placas, modelo, color)\n •¿Características físicas de los asaltantes? (estatura, complexión, color de cabello, tatuajes\n •¿Qué tipo de transporte público es? (taxi, autobús, trolebús, metro, metrobus, microbús, combi, etc.)\n •Características del transporte público agredido (placas, ruta, marca, modelo, color)";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 100); 
      setTimeout(() => {
        const response = "Se debe saber que el motivo, puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.\n\nSi la situación es de más gravedad que la que el denunciante está expresando se dará aviso de inmediato al coordinador y/o a la subdirección.";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 200); 
      setTimeout(() => {
        const response = "Recomienda al usuario:\n • Mantenérse en un lugar seguro.\n • No intentar seguirlos.\n • Evitar discusiones.\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo.\n • Es importante que denunciar ante el Ministerio Público";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 300); 
      setTimeout(() => {
        const response = "Se canaliza a: \n\nSSC - JUD de Analisis para la Prevención del Delito Contra el Transporte Ext. 5418 y 5563\n\nSEMUJERES - Abogadas 55 5512 2772 ext.402\nLos Módulos de Atención a víctimas para casos de abuso sexual se ubican en las siguientes estaciones: Balderas,Pantitlán, Hidalgo Telefono 565811 o al 911\nLos horarios de atención son de 08:00 a 20:00 horas, de lunes a viernes.\nTeléfono:55 5512 2836 Horarios:Lunes a jueves 9:00 a 17:00,Viernes 9:00 a 15:00\nLunas 5555122836 ext. 502 lunes a viernes de 9:00 a 17:00 horas\n\nEn caso de lesionados a Servicio Médico ERUM  911 base de radio y checar estos numeros 55 5772 8800 Ext. 8319 y 8303\n\nSi requieres más información puedes consultar el Anexo 5";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 400); 
      setTimeout(() => {
        const response = "¿En qué más puedo ayudarte?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
      return "Comprendo que estás realizando un folio relacionado a Denuncia en el Transporte Público";   

          
    case 36:
      setTimeout(() => {
        const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n • Determinar que tipo de extorsión le realizan al denunciante\n •¿Le dicen que se ganó un premio?\n •¿Dice ser un familiar que viaja y necesita que le mande dinero?\n •¿Es una voz que le dice a gritos que lo tienen secuestrado?\n •¿Es una voz que le dice que secuestraron a su familiar?\n •¿Es una voz que lo amenaza con causar daño a bienes o familiares?\n •¿Quién está supuestamente secuestrado?\n •¿Cuándo fue la última vez que lo vieron?\n •¿Ya se comunico con el familiar supuestamente secuestrado?\n •¿Le piden dinero o tarjetas telefónicas?\n •¿A que Institución Bancaria le solicitan el depósito?\n •¿A qué número de cuenta le piden que deposite?\n •¿Qué monto en dinero o especie le solicitan?\n •¿Qué compañía telefónica le requieren tarjetas?\n •¿Le mencionan que alguna autoridad detuvo a su familiar que viene del extranjero?\n •¿De que dependencia es?\n •¿Qué cargo tiene?\n •¿Cuál es el nombre?\n •¿Qué monto en dinero o especie le solicitan?";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 100); 
      setTimeout(() => {
        const response = "LO MAS IMPORTANTE ES EVITAR QUE EL DENUNCIANTE ENTREGUE BIENES, DEPOSITE DINERO O PROPORCIONE CLAVE DE TARJETAS TELEFONICAS, SE DEBE EXPLICAR QUE SE TRATA DE UNA EXTORSION TELEFONICA Y PRIMERO QUE NADA CONTACTAR AL FAMILIAR QUE SUPUESTAMENTE SE ENCUENTRA SECUESTRADO O DETENIDO.\n\nSe debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.\n\nSi la situación de la extorsión es de más gravedad que la que el denunciante está expresando se dará aviso de inmediato al al Coordinador y a la Subdirección de Asistencia Ciudadana.\n\nLa extorsión telefónica consiste en amenazar con secuestrar o dañar a algún familiar si no se deposita cierta cantidad de dinero a una cuenta de banco que por lo general es abierta únicamente para la transacción y es cancelada tan pronto se haya concluido la misma, el extorsionador puede fingir ser miembro de alguna corporación policíaca o grupo delictivo (Cartel Zetas o Cartel del narcotráfico).\n\nEl fraude telefónico es aquel en el que notifica al ganador que ha sido acreedor a algún tipo de premio, otorgado por alguna empresa (generalmente crediticia o de teléfonos celulares), y que para poder reclamar el premio, el ganador debe comprar productos y tarjetas de celular y darle los números de las mismas al que nos está llamando.\n\nA la fecha ninguna supuesta víctima ha reportado ningún percance que pudiera deberse a represalias por no haber seguido las indicaciones de estos extorsionadores o defraudadores.";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 200); 
      setTimeout(() => {
        const response = "Recomienda al usuario:\n • Mantener la calma.\n • Escuchar con atención lo que te dicen.\n • Pedir tiempo y usarlo para localizar a tu familiar. Puedes llamar al CIAM para preguntar si tienen información acerca del paradero de tu familiar.\n • Anotar el número entrante, el sexo de la persona y todos los datos posibles. De ser posible, graba la llamada.\n • No los enfrentes ni cuestiones.\n • ¡Actúa! Una vez que hayas localizado a tu familiar, descuelga el teléfono al menos un par de horas.\n • Si recibes una llamada amenazante, responde que es número equivocado y cuelga.\n • Contactar con el familiar que está supuestamente secuestrado, si es alumno de una escuela contactar a la escuela para que verifiquen que se encuentra bien\n • Ya que en las escuelas generalmente apagan los teléfonos celulares mientras se encuentran en clase.\n • Si está el extorsionador en línea pedir que corte la comunicación y no mantenga dialogo con él, el extorsionador es un profesional en obtener datos que utilizará para extorsionar\n • Comunica a tu familia, amistades y vecinos sobre esta problemática para que tenga conocimiento del modo de operar de los delincuentes.\n • Evita proporcionar a desconocidos o contestar encuestas telefónicas en las que pidan datos personales.\n • Actualiza el directorio telefónico procurando que tus familiares siempre tengan los números de tus amigos más cercanos, compañeros de trabajo o escuela, crea un código o clave familiar.\n • Preferentemente cuenta con identificador de llamadas.\n • Concientiza a tu familia, especialmente a los jóvenes para que no apaguen sus celulares cuando salgan de su casa o mantenga siempre contacto con la familia aun cuando sea por otro medio esto en virtud de que es uno de los grupos más vulnerables.\n • No realices grabaciones en tu buzón donde menciones tu nombre o la familia a la que están llamando.\n • Que tus hijos o familiares te avisen cuando van a entrar a un lugar de difícil recepción para las líneas celulares.";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 300); 
      setTimeout(() => {
        const response = "Se canaliza a: Jefe de Cuadrante \n\nAAC-Secuestros, extorsión Dirección General de Atención a Casos de Secuestro y Extorsión de la SSC Ext. 5645\nHorario: 24 horas los 365 días del año\nLa línea directa de Atención de la Dirección de Manejo de Crisis y Negociación es: 55 5242 5034\n\nCIAM Centro de información y Asistencia a Mexicanos Tel: 52 0623 7874\n\nSi requieres más información puedes consultar el Anexo 59";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 400); 
      setTimeout(() => {
        const response = "¿Quisieras que investiguemos algo más?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
      return "Comprendo que estás realizando un folio referente a Extorsión";    


    case 37:
      setTimeout(() => {
        const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n • Datos específicos del oficial\n •¿Sector o Agrupamiento al que pertenece?\n •¿Fechas en que proporciono el apoyo?\n •¿Motivo por el cual quiere manifestar sus felicitaciones?\n •¿Ubicación donde se llevaron a cabo los hechos?";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 100); 
      setTimeout(() => {
        const response = "Entrará como felicitación siempre y cuando el oficial haya realizado algún acto heroico";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 200); 
      setTimeout(() => {
        const response = "Recomienda al usuario:\n • Dar seguimiento a su folio";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 300); 
      setTimeout(() => {
        const response = "Se canaliza al: Mando de estructura de área ó Sector al que pertenezca el oficial.";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 400); 
      setTimeout(() => {
        const response = "¿Tienes alguna otra consulta o inquietud?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
      return "Comprendo que estás realizando un folio de Felicitaciones";    
    
    
    case 38:
      setTimeout(() => {
        const response = "No devuelvas la agresión y finaliza la llamada conforme al protocolo.\nGenera el folio con la mayor información con la que cuentes.\nEs necesario registrar el número telefónico y marcar si se trata de un usuario recurrente.";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 100); 
      setTimeout(() => {
        const response = "¿Puedo resolver alguna otra pregunta?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
      return "Comprendo que estás realizando un folio relacionado a Insultos/Palabras altisonantes";  


    case 39:
      setTimeout(() => {
        const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Cuál es la información que requiere?";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 100); 
      setTimeout(() => {
        const response = "Antes de proporcionar cualquier información a los ciudadanos es necesario verificar que los datos proporcionados sean correctos y actualizados.";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 200); 
      setTimeout(() => {
        const response = "Recomienda al usuario:\n • Contar con lápiz y papel a la mano para que que pueda anotar la información requerida";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 300); 
      setTimeout(() => {
        const response = "Se canaliza a: UCS\n\nLOCATEL *0311 ó 55 5658 1111\n\nSi requieres más información puedes consultar los Anexo 25, 26, 27 y 28";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 400); 
      setTimeout(() => {
        const response = "¿Hay alguna otra información que necesitas?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
      return "Comprendo que estás realizando un folio de Orientación al Público";   


    case 40:
      setTimeout(() => {
        const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿En qué dependencia se encuentra?\n •¿Conoce el nombre de la persona?\n •¿Qué puesto está usurpando?\n •¿Porta alguna credencial que lo identifique?\n •¿Le está solicitando algo a cambio de algún servicio?\n •¿Va acompañado?\n •¿Cuántos son?\n •¿Van en algún vehículo? (placas, marca, submarca, modelo, color).\n •¿Tiene logos de alguna dependencia?";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 100); 
      setTimeout(() => {
        const response = "Se debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.\n\nSi la situación es de más gravedad que la que el denunciante está expresando se dará aviso de inmediato al Supervisor";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 200); 
      setTimeout(() => {
        const response = "Recomienda al usuario:\n • No agredir a nadie física ni verbalmente.\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo.";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 300); 
      setTimeout(() => {
        const response = "Se canaliza a: Dirección General de Asuntos Internos Ext. 1120, 1121, 1122 y 1171.\nPretor 1134\nContraloría Interna de la SSP-CDMX 55 5709 2982, 5716 7700 Ext. 7815\n\nSi requieres más información puedes consultar el Anexo 29";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 400); 
      setTimeout(() => {
        const response = "¿Necesitas asistencia adicional en algún otro aspecto?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
      return "Comprendo que estás realizando un folio de Queja contra Policía y Servidores Públicos";   


    case 41:
      setTimeout(() => {
        const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Cuáles son los datos del usuario?\n •¿Nombre del oficial de seguridad privada?\n •¿Nombre de la empresa?\n •¿Domicilio y ubicación exacta del lugar de los hechos?\n •¿Descripción de los hechos que constituyan las probables omisiones o irregularidades?\n •¿Fecha en que se llevaron a cabo los hechos?";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 100); 
      setTimeout(() => {
        const response = "En caso de Empresa de Segurida Privada: el operador de la UCS verificará vigencia de la empresa, en la página WEB https://seguridadprivada.ssc.cdmx.gob.mx/ parte inferior en el archivo Excel. Y proporcionará la información, si esta no se encuentra vigente deberá canalizar al ext. 5662 (tomar el folio, y nombre del personal de seguridad privada que conteste y proporcionar el folio UCS correspondiente)\n\nEn caso de Personal de Seguridad Privada: el operador de la UCS deberá canalizar directamente a la Ext. 5662(tomar el folio, y nombre del personal de seguridad privada que conteste y proporcionar el folio UCS correspondiente)";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 200); 
      setTimeout(() => {
        const response = "Recomienda al usuario:\n • Contar con lápiz y papel a la mano para que que pueda anotar la información requerida";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 300); 
      setTimeout(() => {
        const response = "Se canaliza a: Dirección General de Seguridad Privada y Colaboración Interinstitucional Ext. 5258 y 5631\n\nUbicación: Ermita No.5 Piso 2, Col. Narvarte Poniente, Benito Juárez, C.P. 02030\n\nhttps://www.ssc.cdmx.gob.mx/organizacion-policial/direcciones-generales/direccion-general-de-seguridad-privada/directorio\n\nSi requieres más información puedes consultar el Anexo 31";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 400); 
      setTimeout(() => {
        const response = "¿Necesitas asistencia adicional en algún otro aspecto?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
      return "Comprendo que estás realizando un folio de Queja Seguridad Privada"; 


    case 42:
      setTimeout(() => {
        const response = "Comienza por solicitar al usuario que conserve la calma y realiza las siguientes preguntas:\n • Datos del usuario\n •¿Se encuentran ahí los delincuentes?\n • ¿A qué auto le robaron las piezas? (Tipo de vehículo, placas, marca, submarca, modelo, color)\n •¿A qué hora presumiblemente fue el robo?\n •¿Qué fue lo que le robaron?\n •¿Alguna persona vió a los sospechosos?\n •¿Iban en algún vehículo?\n •¿Características del vehículo? (placas, marca, submarca, modelo, color)\n •¿En qué dirección huyeron?\n •¿Características físicas de los asaltantes? (estatura, complexión, color de cabello, tatuajes, cicatrices, tipo y color de vestimenta.)";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 100); 
      setTimeout(() => {
        const response = "Las bandas que se dedican a este tipo de delito, se han sofisticado, y para efectuarlo eficazmente cuentan con equipo de radiocomunicación (radio localizadores, celulares), vehículos además de armas de grueso calibre.\n\nSe debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.\n\nSi la situación es de más gravedad que la que el denunciante está expresando se dará aviso de inmediato al Supervisor y al Subdirector de Asistencia ciudadana";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 200); 
      setTimeout(() => {
        const response = "Recomienda al usuario:\n • Manténgase en un lugar seguro.\n • No intente seguirlos.\n • No los enfrente.\n\nEn caso de lesionados:\n • No mueva al lesionado\n • No le de ningún medicamento, no le de de beber nada, ni de comer nada hasta que llegue la ambulancia.\n • Afloje la ropa a fin de que pueda respirar con facilidad.\n • Si el vomita recuéstelo de un costado.\n\nEn caso de convulsiones:\n • Únicamente proteja que no se golpee en la cabeza, no introduzca nada a su boca.\n\nEn caso de hemorragias:\n • No limpie la sangre a fin de que la ambulancia pueda determinar cuánta sangre ha perdido.\n • Es importante que un adulto esté todo el tiempo con él hasta que llegue la ambulancia.\n • Probablemente llegue primero una patrulla al lugar y posteriormente llegará una ambulancia, el servicio de ambulancia es gratuito.\n • Coopere con las autoridades en cuanto arriben a prestarle el apoyo.\n • Es importante que realice formalmente su denuncia ante el Ministerio Público";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 300); 
      setTimeout(() => {
        const response = "Se canaliza a: Jefe de Cuadrante\n\nSi hay heridos ERUM\n\nSi esta en crisis DUCS-JAI\nSolicitar apoyo de un psicologo Ext. 4936, 4992\n\nSi requieres más información puedes consultar el Anexo 32";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 400); 
      setTimeout(() => {
        const response = "¿Puedo resolver alguna otra pregunta?";
        const entranteChatLi = createChatLi(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 1000); 
      return "Para Robo con violencia"; 


    case 43:
      setTimeout(() => {
        const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Se encuentran los asaltantes en el lugar?\n •¿Cuántos son?\n •¿Están armados?\n •¿Tipo de arma?\n •Fuego, blanca, otra (especifique).\n •¿Usted se encuentra bien?\n •¿Es usted el afectado?\n •¿Hay lesionados?\n •¿Cuántos?\n •¿Tipo de lesiones?\n •¿Están consientes?\n •¿Los asaltantes viajan en algún vehículo?\n •¿En qué dirección huyeron?\n •¿Características del o los vehículos? (placas, marca, submarca, modelo, color)\n •¿Características físicas de los asaltantes? (estatura, complexión, color de cabello, color de piel, tatuajes, cicatrices, tipo y color de vestimenta)";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 100); 
      setTimeout(() => {
      const response = "Se debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.\n\nSi la situación es de más gravedad que la que el denunciante está expresando se dará aviso de inmediato al Supervisor";
      const entranteChatLi = createChatLi2(response, "entrante");
      chatbox.appendChild(entranteChatLi);
      chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 200);   
      setTimeout(() => {
        const response = "Recomienda al usuario:\n • Es necesario que se presente al Ministerio Público mas cercano al lugar donde fue robado y realice su denuncia.\n • Cooperar con las autoridades en cuanto arriben a prestarle el auxilio.";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 300); 
      setTimeout(() => {
        const response = "Se canaliza a: Jefe de Cuadrante\n\nSi requiere Asesoría Jurídica Ext. 4936, 4992\n\nSi requieres más información puedes consultar el Anexo 65";
        const entranteChatLi = createChatLi2(response, "entrante");
        chatbox.appendChild(entranteChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 400); 
        setTimeout(() => {
          const response = "¿Algo más en lo que estés interesado?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
      return "Para Robo sin violencia"; 


      case 45:
        setTimeout(() => {
          const response = "¿Podrías especificar si es robo con violencia o robo sin violencia?";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 500); 
  
        return "Comprendo que estás realizando un folio de Robo"; 


      case 45:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Situación por la que requiere la asesoría?\n •¿Desde hace cuánto se llevan a cabo los hechos?\n •Identificar si se trata de una llamada genuina";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Si se trata un denunciante el cual no tiene nada que reportar y simplemente pregunta sobre alguna información no relacionada a alguna emergencia, se le indica que es una línea de emergencia, se le sugiere 52425100 EXT. 4936 y se termina la llamada.\n\nEl operador asigna el folio con el tipo de reporte orientación al público catálogo asistencia integral.\n\nDeberá proporcionar el folio al área de Asistencia Integral para que brinde la atención correspondiente y deberá estar a la espera para concluir su folio de orientación al folio que le proporcione dicha área.\n\nEs importante mencionar a la persona atendida que la información proporcionada será tratada en base a la Ley de Protección de datos personales";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • Es importante entablar una adecuada comunicación con voz clara y amable y lograr empatía con el denunciante.\n • Mantener la llamada hasta haber obtenido toda la información necesaria";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Asistencia Integral (Ext. 4992, 4936, 4937) generando un folio de Orientación al Público-Asistencia Integral\n\nSi requieres más información puedes consultar el Anexo 67";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Hay alguna otra información que necesitas?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio de Trabajo Social"; 


      case 46:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Se encuentran en vía pública?\n •¿Cuántos son?\n •¿Sabe si están armados?\n •¿En donde se realiza la venta?\n •¿Conoce que tipo de droga se vende?\n •¿A qué hora venden?\n •¿Cuáles son las características del lugar donde se comercializa?\n •¿Tienen en algún vehículo?(placas, marca, submarca, modelo, color).\n •¿Conoce si alguien les entrega el producto?\n •¿Conoce a los involucrados?(nombre o alias)\n •¿Características de los involucrados?(estatura, complexión, color de cabello, tatuajes, cicatrices, tipo y color de vestimenta)";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Se debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.\n\nSi la situación es de más gravedad que la que el denunciante está expresando se dará aviso de inmediato al Supervisor , a la Subdirección de Asistencia Ciudadana";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • Mantenérse en un lugar a seguro\n • No agredir a nadie ni física ni verbalmente.\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nDirección de Combate a Narcomenudeo y Delitos Conexos de la Dirección General de Investigación de Delitos de Mayor de la Secretaria de Seguridad Ciudadana Ext. 5409\n\nUbicación: Liverpool 136, 2° piso, Colonia Juárez, Cuauhtémoc, C.P. 06000\n\nSi requieres más información puedes consultar el Anexo 69";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Puedo resolver alguna otra pregunta?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio relacionado a Venta de Droga"; 


      case 47:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Ubicación donde requiere la vigilancia?\n •¿Qué tipo de vigilancia requiere (pie tierra, patrullaje, policías en bicicleta, motopatrullas, etc.?\n •¿A qué hora del día requiere la vigilancia?\n •¿Motivo por la que la requiere?";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Cuanto más específica sea la información los oficiales identificaran sus necesidades en cuanto a Seguridad Pública.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • Esperar a los oficiales fuera de su domicilio para que la ubiquen de inmediato\n • Externar las anomalías que se lleven a cabo en su colonia\n • Dar seguimiento a su número de folio";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nSi requieres más información puedes consultar el Anexo 38";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿En qué más puedo ayudarte?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio de Vigilancia"; 


      case 48:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Es usted el agredido?\n •¿Está en peligro su vida?\n •¿Se encuentran ahí los agresores?\n •¿Cuántos son?\n •¿Están armados?\n •¿Tipo de arma?\n •Fuego, blanca, otra (especifique).\n •¿Hay lesionados?\n •¿Cuántos?\n •¿Tipo de lesiones?\n •¿Están consientes?\n •¿Tipo de maltrato? (físico, psicológico, discriminación, etc.).\n •¿Características de la(s) persona(s) agredida(s)? (edad, estatura, complexión, color de cabello, tipo y color de vestimenta, grupo étnico (si aplica), discapacidades (si aplica), etc.).\n •¿Parentesco de la víctima con el responsable?\n •¿Qué tipo de agresión es? (Física, verbal, psicológica, discriminación, otra especifique).\n •¿A qué se debe la agresión?\n •¿Conoce a los agresores? (nombre o alias)\n •¿Características de los responsables? (estatura, complexión, color de cabello, tatuajes, cicatrices, tipo y color de vestimenta.)";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Se debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.\n\nEn este tipo de motivo es importante ponderar que tan grave es el maltrato, si esta en flagrancia, ya que de acuerdo a esta información pudiera cambiar la prioridad de la emergencia.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • Alejarse de los agresores.\n • Mantenerse en un lugar a seguro, cierre puertas, ventanas o cualquier otro tipo de acceso.\n • No responder a las agresiones.\n • Si hay lesionados no los mueva.\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo.\n • Es importante denunciar ante el Ministerio Público.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Asistencia Integral (Ext. 4992, 4936, 4937) generando un folio de Orientación al Público-Asistencia Integral\n\nSi la violencia se esta consumando Enviar patrulla\n\nSi hay lesionados a ERUM\n\nSi requieres más información puedes consultar los Anexos 60, 61, 62, 64 y 75";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Tienes alguna otra consulta o inquietud?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio de Violencia";             


      case 49:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Se encuentra bien?\n •¿A qué se debe su petición?\n •¿Cuál es la solicitud expresa?\n •¿Alguna referencia donde se encuentre?";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Se debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • Esperar el apoyo en vía pública con la intensión de que la ubiquen con mayor facilidad.\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nSi requieres más información puedes consultar el Anexo 10";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿En qué más puedo ayudarte?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio de Envío de Patrulla"; 


      case 50:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Ubicación donde requiere del apoyo?\n •¿Referencias del lugar de los hechos?\n •¿Hay personas en el lugar?\n •¿El establecimiento de encuentra en servicio?";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "El motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • No intentar acercarse\n • No llame la atención de los delincuentes";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nSi requieres más información puedes consultar el Anexo 7";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Tienes alguna otra consulta o inquietud?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio de Envío de Patrulla - Activación de alarma"; 


      case 51:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n • HAGA QUE REPITA LA AMENAZA.\n •HAGA QUE HABLE MÁS FUERTE Y MÁS DESPACIO.\n •ESCRIBA LO MÁS FIELMENTE POSIBLE EL MENSAJE DE LA AMENAZA.\n •¿Cuándo va a explotar el artefacto explosivo?\n •¿Dónde fue colocado? Escuela, edificio (público ó privado) piso, departamento, etc.\n •¿Qué tipo de artefacto es? (especificación técnica)\n •¿En qué objeto se encuentra? (Automóvil, bolsa, caja, mochila, otro (especifique))\n •¿Colocó usted el artefacto?\n •¿Cuál es su nombre o Alias?\n •¿A qué organización pertenece?\n •¿Por qué razón fue colocado?\n •Identifique el sexo y rango de edad del denunciante (masculino, femenino, niño, adolescente, adulto, adulto mayor)\n •Identifique las características de la voz:\nLenguaje: (excelente, regular, mal hablado)\nAcento: (local D.F., Norteño, costeño, extranjero).\nForma de hablar: (rápido, lento, alto, bajo, distorsionado)\nIdentifique el comportamiento: (calmado, nervioso, enojado, riéndose, incoherente).\nIdentifique ruidos de fondo: (maquinas de oficina, fábrica, animales, tráfico urbano, trenes, voces, música, etc.)\n\nSi no el es amenazante quien llama, solicite hablar con quien recibió la llamada de la amenaza y realice las preguntas de esta instrucción de trabajo.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Artefacto Explosivo (bomba).- Es un objeto capaz de producir daños al momento de ser activada, dichos daños pueden ser materiales (destrucción de inmuebles) o humanos (lesiones o muerte).\n\nSe usa cuando un denunciante menciona la colocación de un artefacto explosivo en algún lugar de la ciudad.\n\nPuede darse el caso de que el denunciante reporte que alguien llamó con la amenaza o puede llamar directamente el amenazante\n\nLas amenazas de bomba se hacen para alertar a la gente que se retire del lugar donde se pudo haber colocado un aparato explosivo.\n\nEs probable que la persona que llama tenga conocimiento de la existencia del aparato y no quiera que la gente resulte lastimada.\n\nCuanto más específica sea la información, es más probable que realmente haya un explosivo. Otra razón para una amenaza de bomba es hacer una broma.\n\nCualquiera que sea la razón para una amenaza de bomba, todas las amenazas se deben tomar en serio.\n\n¿A qué se parece una bomba?\nPrácticamente todas las cosas que usted pueda imaginarse, podrían llegar a ser artefactos explosivos.\n\nSe debe informar de inmediato de la situación al Coordinador y a la Subdirección de Asistencia Ciudadana.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n Si quien llama es el amenazado, debemos mantenerlo en la línea el mayor tiempo posible\n • Conserve la calma\n • Aléjese del objeto\n • No toque el objeto\n • No ladee ó voltee el paquete\n • No intente abrirlo\n • No corte ningún cable\n • No lo mueva.\n • Informe de inmediato al jefe de piso o en su caso a las Brigadas de Protección Civil.\n • No utilice radios receptores ni teléfonos celulares o cualquier otro medio de comunicación\n • No accione interruptores de corriente eléctrica.\n • No permita que se acerquen personas ajenas o inexpertas.\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo.• Esperar el apoyo en vía pública con la intensión de que la ubiquen con mayor facilidad.\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nFuerza de Tarea Tel: 55 5845 6919 y 55 5845 8736\nUbicación: Calle Leandro Valle, PB, Colonia Del Mar, Tláhuac. C.P.13270, Ciudad de México\n\nBomberos Tel: 55 5764 4102\nUbicación: Avenida Fray Servando Teresa de Mier Merced Balbuena, Venustiano Carranza, C.P. 15810, Ciudad de México\n\nProtección civil Tel: 55 5683 2222\nUbicación: Calle Abraham González 67 Colonia Juárez, Cuauhtémoc C.P. 06600, Ciudad de México\n\nERUM\n\nSi requieres más información puedes consultar el Anexo 41";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Hay alguna otra información que necesitas?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio de Envío de Patrulla - Amenaza de bomba"; 


      case 52:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Se encuentran en este momento practicando arrancones?\n •¿Cuántos autos o motos participan?\n •¿Características del los vehículos? (marca, submarca, modelo, color, placas)\n •¿Cuántas personas están involucradas?\n •¿Conoce a las personas que lo practican?\n •¿Sabe los nombres o Alias?\n •¿Características físicas de los involucrados?\n •¿Están ebrios o drogados?\n •¿Cada cuando lo practican?";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "En muchas ocasiones aprovechan la oportunidad para cometer asaltos en masa a tiendas y autoservicio de 24 horas y agresiones a transeúntes y/o otros automovilistas.\n\nSe debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • Manténgase en un lugar seguro\n • No se acerque al lugar\n • No discuta con los involucrados\n • No los agreda\n • No intentar competir\n • No intentar cortarles el paso en la vía pública\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nSi requieres más información puedes consultar el Anexo 8";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿En qué más puedo ayudarte?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio de Envío de Patrulla - Arrancones"; 


      case 53:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Conoce de que sustancia se trata?\n •¿Qué características físicas tiene la sustancia? (Liquido, Gas, Polvos)\n •¿Hacia dónde se fuga la sustancia? o Aire ambiental (¿huele a algo en particular? o Piso, drenaje o ríos)\n •¿En donde es la fuga? (fábrica, transporte, comercio, casa habitación, vía pública).\n •Fábrica ¿Cuál es la Razón Social de la empresa o fábrica)\n •Transporte ¿Qué tipo de vehículo es? (Particular, transportista, pipa, etc.).\n •¿Características del vehículo? (marca, submarca, modelo, color).\n •¿Tiene a la vista el rombo de colores que lleva el camión o pipa? ¿Qué colores y que números lleva el rombo?\n •¿Hay lesionados en el lugar?\n •¿Cuántos?\n •¿Consientes o inconscientes?\n •¿Hay zonas de riesgo a su al derredor? (escuelas, gasolineras, zonas de concentración de personas).\n •¿Tiene idea de que ocasionó la fuga?";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Se debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.\n\nEs importante indagar la codificación del rombo de productos químicos (según la norma NFPA 704) si esta a la vista, ya que este dato nos determina el tipo de químico y que consecuencias pude traer el incidente.\n\nLa norma NFPA 704 pretende a través de un rombo seccionado en cuatro partes de diferentes colores, indicar los grados de peligrosidad de la sustancia a clasificar.\n\nDentro de cada recuadro se indicaran los niveles de peligrosidad, los cuales se identifican con una escala numérica del 0 al 4.\n\nSi la situación de la Volcadura sea de gravedad o ponga en riesgo la vida de la persona se da aviso de inmediato al Supervisor A, Supervisor B, y a su vez al personal de la Central de Radio que se encuentre en al área del 066.\n\nROJO: Con este color se indican los riesgos a la inflamabilidad con una escala del 0 al 4. AZUL: Con este color se indican los riesgos a la salud con una escala del 0 al 4. AMARILLO: Con este color se indican los riesgos por reactividad con una escala del 0 al 4. BLANCO: En esta casilla se harán las indicaciones especiales para algunos productos. Como producto oxidante, corrosivo, reactivo con agua o radiactivo.\n\nLos símbolos especiales que pueden incluirse en el recuadro blanco son:\nOXI Agente oxidante\nCOR Agente corrosivo\nReacción violenta con el agua\nRadioactividad";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • Manténgase a distancia.\n • Cubra su boca y nariz con un lienzo húmedo en lo que llega el apoyo.\n • Cubra rendijas en puertas y ventanas con trapos húmedos.\n • Si hay lesionados, no  los mueva.\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nFuerza de Tarea Tel: 55 5845 6919 y 55 5845 8736\nUbicación: Calle Leandro Valle, PB, Colonia Del Mar, Tláhuac. C.P.13270, Ciudad de México\n\nBomberos Tel: 55 5764 4102\nUbicación: Avenida Fray Servando Teresa de Mier Merced Balbuena, Venustiano Carranza, C.P. 15810, Ciudad de México\n\nProtección civil Tel: 55 5683 2222\nUbicación: Calle Abraham González 67 Colonia Juárez, Cuauhtémoc C.P. 06600, Ciudad de México\n\nERUM\n\nSi requieres más información puedes consultar el Anexo 43";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Quisieras investigar algo más?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio de Envío de Patrulla - Bomberos - Derrame de Aceite"; 


      case 54:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿El enjambre es de abejas o de avispas?\n •¿En donde se encuentra ubicado exactamente el enjambre?\n •¿De dónde se sostiene?\n •¿Cuánto tiempo tiene ahí?\n •¿A qué altura se encuentra?\n •¿Aproximadamente de que tamaño es el panal? (determinar Volumen no cantidad)\n •¿Las abejas / avispas manifiestan alboroto?\n •¿Hay personas lesionadas / picadas por el enjambre";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Cuanto más específica sea la información, nos permitirá canalizar con mayor rapidez los servicios correspondientes. Se debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.\n\nSi la situación es de más gravedad que la que el denunciante está expresando se dará aviso de inmediato al Coordinador o Subdirector";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • Alejarse del lugar en donde se encuentra el enjambre.\n •No permitir que se acerquen los niños o personas ajenas o inexpertas.\n • No intentar retirar el panal, espere el apoyo.\n • No espantar a los insectos, evite ser agredido por ellos.\n • Evitar hacer ruido o movimientos bruscos cerca del panal.\nEn caso de lesionados:\n • No mueva al lesionado\n • No le de ningún medicamento, no le de de beber nada, ni de comer nada hasta que llegue la ambulancia.\n • Verifique que el lesionado esté recostado en una cama o un sillón.\n • Afloje la ropa a fin de que pueda respirar con facilidad.\n • Si el vomita recuéstelo de un costado.\n • En caso de convulsiones únicamente proteja que no se golpee en la cabeza, no introduzca nada a su boca.\n • En caso de hemorragias, no limpie la sangre a fin de que la ambulancia pueda determinar cuánta sangre ha perdido.\n • Es importante que un adulto esté todo el tiempo con él hasta que llegue la ambulancia.\n • Probablemente llegue primero una patrulla al lugar y posteriormente llegará una ambulancia, el servicio de ambulancia es gratuito.\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nBomberos Tel: 55 5764 4102\nUbicación: Avenida Fray Servando Teresa de Mier Merced Balbuena, Venustiano Carranza, C.P. 15810, Ciudad de México\n\nProtección civil Tel: 55 5683 2222\nUbicación: Calle Abraham González 67 Colonia Juárez, Cuauhtémoc C.P. 06600, Ciudad de México\n\nERUM\n\nSi requieres más información puedes consultar el Anexo 44";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Tienes alguna otra consulta o inquietud?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio de Envío de Patrulla - Bomberos - Enjambre"; 


        case 55:
          setTimeout(() => {
            const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Qué explotó?\n •¿Artefacto Explosivo (Bomba)?\n •¿Granada?\n •¿Dinamita?\n •¿Explosivo Plástico?\n •¿Industria? ¿Qué fabrica o procesa?\n •¿Laboratorio?\n •¿Cocina?, ¿Horno?, ¿Estufa?\n •¿Pirotecnia (Cuetes)?\n •¿Dónde fue la explosión?\n Vía Pública\n Casa habitación\n Escuela\n Comercio / Oficina / Industria\n •¿Fue visible la explosión o solo e escuchó?\n •¿Están habiendo mas explosiones?\n •¿Hay Lesionados?\n •¿Cuántos?\n •¿Alguno perdió la vida?\n •¿Hay daños a las edificaciones cercanas a lugar de la explosión?\n •¿Hay incendio posterior a la explosión?\n •¿Qué hay a su alrededor? (baldíos, casas, escuelas, oficinas, fabricas, negocios, tanques de Gas)";
            const entranteChatLi = createChatLi2(response, "entrante");
            chatbox.appendChild(entranteChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
          }, 100); 
          setTimeout(() => {
            const response = "Se debe cuantificar la magnitud de la explosión, número de lesionados, Tamaño de la onda expansiva (daños provocados a la redonda) y tratar de determinar la causa.\n\nCuanto más específica sea la información, nos permitirá canalizar con mayor rapidez los servicios correspondientes.\n\nSe dará aviso de inmediato al Coordinador y a la Subdirección de Asistencia Ciudadana.";
            const entranteChatLi = createChatLi2(response, "entrante");
            chatbox.appendChild(entranteChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
          }, 200); 
          setTimeout(() => {
            const response = "Recomienda al usuario:\n • Esperar el apoyo en vía pública con la intensión de que la ubiquen con mayor facilidad.\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo.";
            const entranteChatLi = createChatLi2(response, "entrante");
            chatbox.appendChild(entranteChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
          }, 300); 
          setTimeout(() => {
            const response = "Se canaliza a: Jefe de Cuadrante\n\nFuerza de Tarea Tel: 55 5845 6919 y 55 5845 8736\nUbicación: Calle Leandro Valle, PB, Colonia Del Mar, Tláhuac. C.P.13270, Ciudad de México\n\nBomberos Tel: 55 5764 4102\nUbicación: Avenida Fray Servando Teresa de Mier Merced Balbuena, Venustiano Carranza, C.P. 15810, Ciudad de México\n\nProtección civil Tel: 55 5683 2222\nUbicación: Calle Abraham González 67 Colonia Juárez, Cuauhtémoc C.P. 06600, Ciudad de México\n\nERUM\n\nSi requieres más información puedes consultar el Anexo 45";
            const entranteChatLi = createChatLi2(response, "entrante");
            chatbox.appendChild(entranteChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
          }, 400); 
          setTimeout(() => {
            const response = "¿Hay alguna otra información que necesitas?";
            const entranteChatLi = createChatLi(response, "entrante");
            chatbox.appendChild(entranteChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
          }, 1000); 
          return "Comprendo que estás realizando un folio de Envío de Patrulla - Bomberos - Explosión"; 


      case 56:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿En qué lugar se encuentra la fuga? (casa, oficina, escuela, vía pública, fábrica, área recreativa, negocios, otro)\n •¿Identifica donde se localiza la fuga o el olor a gas? (cilindro, etc.)\n •¿Qué hay a su alrededor? (casa, oficina, escuela, vía pública, fábrica, área recreativa, negocios, otro).\n •¿Hay Intoxicados y/o lesionados? ¿Cuántos?";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Se debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.\n\nSi la situación es de más gravedad que la que el denunciante está expresando se dará aviso de inmediato al Coordinador y Subdirectora de área.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • Ventilar el área.\n • No enciender ni apagar luces.\n • No enciender cigarros ni cerillos o fuego, ni permita que otros lo hagan.\n • Si el olor es demasiado fuerte, use una frazada tapando su boca y nariz.\n • No permitir que se acerquen personas ajenas o inexpertas.\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nFuerza de Tarea Tel: 55 5845 6919 y 55 5845 8736\nUbicación: Calle Leandro Valle, PB, Colonia Del Mar, Tláhuac. C.P.13270, Ciudad de México\n\nBomberos Tel: 55 5764 4102\nUbicación: Avenida Fray Servando Teresa de Mier Merced Balbuena, Venustiano Carranza, C.P. 15810, Ciudad de México\n\nProtección civil Tel: 55 5683 2222\nUbicación: Calle Abraham González 67 Colonia Juárez, Cuauhtémoc C.P. 06600, Ciudad de México\n\nERUM\n\nSi requieres más información puedes consultar el Anexo 46";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Puedo brindarte más detalles o aclaraciones?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio de Envío de Patrulla - Bomberos - Fuga de Gas"; 


      case 57:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Qué se está quemando?\n •¿Casa habitación?\n •¿Departamento?\n •¿Hace cuanto tiempo empezó?\n •¿Hay personas dentro? ¿Cuántas estima?\n Lesionados\n •¿Cuántos?\n •¿Tipo de lesiones?\n •¿Alguno perdió la vida?\n •¿Las llamas son visibles?\n •¿Altura aproximada de las llamas?\n •¿Color y tipo de humo?\n •¿Conoce las causas?\n •¿Está en riesgo de propagarse?\n •¿Qué hay a su alrededor? (baldíos, casas, escuelas, fabricas, negocios, tanques de Gas)\n •¿se está obstruyendo la Vialidad";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Se debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.\n\nLos incendios pueden originarse por fallos en instalaciones eléctricas, calderas, escapes de combustibles en la cocina, fogatas, altas temperaturas, accidentes (choques, volcaduras etc.), siniestros naturales, descuidos humanos, etc. Puede propagarse rápidamente a otras estructuras.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • Conservar la calma.\n • Si esta en fábrica u oficina informe de inmediato al jefe de piso o en su caso a las Brigadas de Protección Civil y evacuar el inmueble\n • No accionar interruptores eléctricos.\n • Si tiene la posibilidad sin ponerse en riesgo, corte fuentes eléctricas e instalaciones de gas.\n • Alejarse de la zona de riesgo.\n • Invitar a los vecinos o curiosos a mantener despejada la zona.\n • Despejar el acceso al lugar para los vehículos de emergencia\n • Seguir las indicaciones de los profesionales que le asistirán.\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nFuerza de Tarea Tel: 55 5845 6919 y 55 5845 8736\nUbicación: Calle Leandro Valle, PB, Colonia Del Mar, Tláhuac. C.P.13270, Ciudad de México\n\nBomberos Tel: 55 5764 4102\nUbicación: Avenida Fray Servando Teresa de Mier Merced Balbuena, Venustiano Carranza, C.P. 15810, Ciudad de México\n\nProtección civil Tel: 55 5683 2222\nUbicación: Calle Abraham González 67 Colonia Juárez, Cuauhtémoc C.P. 06600, Ciudad de México\n\nERUM\n\nSi requieres más información puedes consultar los Anexos 42 y 47";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Necesitas asistencia adicional en algún otro aspecto?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio de Envío de Patrulla - Bomberos - Incendio"; 


        case 58:
          setTimeout(() => {
            const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Qué tipo de catástrofe o desastre es?\n •¿Hay lesionados en el lugar?\n •¿Hay cadáveres en el lugar?\n •¿Hay alguna fuga de gas en el lugar?\n •¿Hay alguna fuga de agua en el lugar?\n •¿Requiere algún apoyo adicional en el lugar?";
            const entranteChatLi = createChatLi2(response, "entrante");
            chatbox.appendChild(entranteChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
          }, 100); 
          setTimeout(() => {
            const response = "Se debe informar en todo momento al recurso asignado los detalles de los que se tiene conocimiento ya sea a través de la cámara de video vigilancia y/o por la información recibida del denunciante a fin de alertar al personal sobre la gravedad de la emergencia.\n\nSe deberá registrar en el sistema los tiempos de los movimientos reportados por la(s) unidad(es) de apoyo, como lo es la hora de arribo y de término.\n\nToda la información que se reciba de la(s) unidad(es) de apoyo se deberá registrar en la bitácora de notas del sistema";
            const entranteChatLi = createChatLi2(response, "entrante");
            chatbox.appendChild(entranteChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
          }, 200); 
          setTimeout(() => {
            const response = "Recomienda al usuario:\n • Alejarse de la zona de riesgo.\n •  Si hay lesionados no los mueva.\n • Invitar a los curiosos a mantener despejada la zona, por su propia seguridad y para que las unidades de apoyo puedan arribar sin dificultades.\n • Si tiene la posibilidad sin ponerse en riesgo corte fuentes eléctricas e instalaciones de gas.\n • Cooperar con las autoridades en cuanto arriben a prestarle el auxilio.";
            const entranteChatLi = createChatLi2(response, "entrante");
            chatbox.appendChild(entranteChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
          }, 300); 
          setTimeout(() => {
            const response = "Se canaliza a: Jefe de Cuadrante\n\nFuerza de Tarea Tel: 55 5845 6919 y 55 5845 8736\nUbicación: Calle Leandro Valle, PB, Colonia Del Mar, Tláhuac. C.P.13270, Ciudad de México\n\nBomberos Tel: 55 5764 4102\nUbicación: Avenida Fray Servando Teresa de Mier Merced Balbuena, Venustiano Carranza, C.P. 15810, Ciudad de México\n\nProtección civil Tel: 55 5683 2222\nUbicación: Calle Abraham González 67 Colonia Juárez, Cuauhtémoc C.P. 06600, Ciudad de México\n\nERUM\n\nSi requieres más información puedes consultar el Anexo 48";
            const entranteChatLi = createChatLi2(response, "entrante");
            chatbox.appendChild(entranteChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
          }, 400); 
          setTimeout(() => {
            const response = "¿Existe algo más en lo que estés interesado?";
            const entranteChatLi = createChatLi(response, "entrante");
            chatbox.appendChild(entranteChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
          }, 1000); 
          return "Comprendo que estás realizando un folio de Envío de Patrulla - Bomberos - Rescate Urbano"; 


      case 59:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Cuántos cadáveres hay en el lugar?\n •Sexo y edad aproximada del (los) cadáver(es).\n •¿Cuánto tiempo tiene que falleció?\n •¿Hay olor fétido y/o descomposición?";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Si se trata de cadáveres en vía pública se debe alertar al coordinador y manejar como alta prioridad.\n\nSi se trata de cadáver cuya muerte presumiblemente sea a causa de un acto delictivo o violento se debe alertar al coordinador.\n\nSe debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.\n\nSi la situación es de más gravedad que la que el denunciante está expresando se dará aviso de inmediato al al Coordinador y a la Subdirección de Asistencia ciudadana.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • No mover al cadáver.\n • No toque nada alrededor del cadáver.\n • No limpie ni quite nada que haya alrededor del cadáver.\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nFiscalía General de Justicia Tel: 55 5200 9000\nServicios en linea: https://www.fgjcdmx.gob.mx/nuestros-servicios/en-linea\n\nInstituto De Ciencias Forenses\nIdentificación de cadáveres desconocidos Tel: 55 5134 1100, Ext. 1364\nUbicación: Avenida Niños Héroes 130, 3° piso, Colonia Doctores, Cuauhtémoc, C.P. 06720, Ciudad de México.\nHorario: Las solicitudes de particulares lunes a viernes de 10.00 a 19.00 hrs., domingos y días festivos de 10.00 a 14.00 hrs. y de 16.00 a 19.00 hrs.\n\nSi requieres más información puedes consultar el Anexo 49";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿En qué más puedo ayudarte?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio de Envío de Patrulla - Cádaver"; 



      case 60:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Ubicación exacta del lugar de los hechos?\n •¿Cuantas personas hay en el lugar?\n •¿Características de los probables infractores?\n •¿Se encuentra a bordo de algún vehículo?";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Se debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • No enfrentar a los probables infractores\n •  Mentenerse en un lugar seguro\n •  No adviersar de la llegada de las unidades";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nSi requieres más información puedes consultar el Anexo 9";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Quisieras que investiguemos algo más?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio de Envío de Patrulla - Ebrios"; 


      case 61:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Quién es el afectado?\n •¿Está en peligro su vida?\n •¿Se encuentran ahí los detenidos?\n •¿Cuántos son?\n •¿Están armados?\n •¿Tipo de arma? Fuego, blanca, otra (especifique).\n •¿Hay lesionados?\n •¿Cuántos?\n •¿Tipo de lesiones?\n •¿Están consientes?\n •¿Por qué se realizó la detención? (robo, agresión, fraude, etc.)\n •¿Hubo agresiones?\n •¿Conoce a los agresores? (nombre o alias)\n •¿Características de los agresores? (estatura, complexión, color de cabello, tatuajes, cicatrices, tipo y color de vestimenta.)";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Se debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • Esperar el apoyo en vía pública con la intensión de que la ubiquen con mayor facilidad.\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nSi requieres más información puedes consultar los Anexo 10, 11, 12, 13, 14 y 15";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Tienes alguna otra consulta o inquietud?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio de Envío de Patrulla - Entrevista Ciudadana"; 


      case 62:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Se encuentran en vía pública?\n •Si es en interior, ¿qué tipo de inmueble?\n •¿Están en algún vehículo? (marca, sub marca, placas, modelo, color).\n •¿Cuántas personas son aproximadamente?\n •¿Tipo de escándalo? (fiesta, música alta, gritos, otros)\n •¿Conoce a los involucrados? (nombre o alias)\n •¿Características de los involucrados? (estatura, complexión, color de cabello, tatuajes, cicatrices, tipo y color de vestimenta)\n •¿Están agrediendo a alguien?\n •¿Qué tipo de agresión es? (Física, verbal, psicológica, otra especifique).\n •¿Están armados?\n •¿Tipo de arma? Fuego, blanca, otra (especifique).";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Se debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • Mantenerse en un lugar a seguro, cierre puertas, ventanas o cualquier otro tipo de acceso.\n • No agredir a nadie ni física ni verbalmente.\n • No hablar ni interactuar con ellos\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nSi requieres más información puedes consultar el Anexo 16";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Hay alguna otra información que necesitas?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio de Envío de Patrulla - Escandalizar"; 


      case 63:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Ubicación exacta del lugar de los hechos?\n •¿Cuantas personas hay en el lugar?\n •¿Características de los probables infractores?\n •¿Referencias del lugar?";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Las puestas a disposición de los infractores serán a petición de parte.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • No enfrentar a los probables infractores\n • Mantenerse en un lugar seguro";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nSi requieres más información puedes consultar el Anexo 17";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Puedo brindarte más detalles o aclaraciones?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio de Envío de Patrulla - Franeleros"; 



      case 64:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Cuantos lesionados hay en el lugar?\n •¿Concientes o inconcientes?\n •Sexo y edad aproximada del o los lesionados.\n •¿Alguno perdió la vida?\n •¿Qué tipo de arma causó la lesión de la persona? (picahielo, cuchillo, navaja, machete, espada)\n •¿Intento de suicidio?\n •¿Como trató de quitarse la vida?\n •¿Aún persiste en el intento?\n •Arma De Fuego (Cambia motivo a por arma de fuego)\n •¿Se encuentra en el lugar el responsable de haber causado la lesión?\n •Si se dio a la fuga, ¿En qué dirección huyo?\n •Características del Responsable (sexo, complexión, color de cabello, tipo y color de vestimenta).";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Si se trata de menores lesionados se debe alertar al supervisor y manejar como alta prioridad.\n\nSe debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.\n\nSi la situación es de más gravedad que la que el denunciante está expresando se dará aviso de inmediato al Coordinador y Subdirector";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • No mover a los lesionados.\n • Protejer al lesionado sin poner en riesgo su integridad física previniendo que hayan mas lesiones o mas personas se lesionen.\n • Ayudar a prevenir otro lesionado.\n • Es importante que el responsable no se retire del lugar.\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nERUM\n\nSi requieres más información puedes consultar el Anexo 51";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Necesitas asistencia adicional en algún otro aspecto?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Para folios del tipo de reporte Envío de Patrulla - Lesionados (ERUM) - Por arma blanca"; 


      case 65:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Continúan los disparos?\n •¿Por qué motivo fue la agresión?\n •¿Cuántos lesionados hay en el lugar?\n •¿Consientes o inconscientes?\n •Sexo y edad aproximada del o los lesionados.\n •¿Alguno perdió la vida?\n •¿Qué tipo de arma causó la lesión de la persona? (Arma Corta (pistola) Arma Larga (Fusil, metralleta, escopeta)\n •¿Se encuentra en el lugar el responsable de haber causado los disparos?\n •¿Cuántas personas son?\n •Si se dió a la fuga, ¿En qué dirección huyo?\n •Características del Responsable (sexo, complexión, color de cabello, tipo y color de vestimenta). ";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Si se trata de menores lesionados se debe alertar al supervisor y manejar como alta prioridad.\n\nSe debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.\n\nSi la situación es de más gravedad que la que el denunciante está expresando se dará aviso de inmediato al Coordinador y Subdirector";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • No mover a los lesionados.\n • Protejer al lesionado sin poner en riesgo su integridad física previniendo que hayan mas lesiones o mas personas se lesionen.\n • Ayudar a prevenir otro lesionado.\n • Es importante que el responsable no se retire del lugar.\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nERUM\n\nFuerza de Tarea Tel: 55 5845 6919 y 55 5845 8736\nUbicación: Calle Leandro Valle, PB, Colonia Del Mar, Tláhuac. C.P.13270, Ciudad de México\n\nFiscalía General de Justicia Tel: 55 5200 9000\n\nSi requieres más información puedes consultar el Anexo 52";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Necesitas asistencia adicional en algún otro aspecto?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Para folios del tipo de reporte Envío de Patrulla - Lesionados (ERUM) - Por arma de fuego"; 

      case 66:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Cuántas personas están atropelladas?\n •¿Cuántos lesionados hay en el lugar?\n •¿Consientes o inconscientes?\n •Sexo y edad aproximada del o los lesionados.\n •¿Alguno esta atrapado / prensado debajo del vehículo?\n •¿Alguno perdió la vida?\n •¿Se encuentra en el lugar el responsable?\n •Si se dio a la fuga, ¿En qué dirección huyo?\n •Características del Responsable (sexo, complexión, color de cabello, tipo y color de vestimenta).\n •¿Características del vehículo que causó el atropellamiento? (tipo de vehículo, marca, submarca, modelo, color)\n •¿Existe riesgo de que ocurran mas accidentes?\n •¿Se está obstruyendo la vialidad? ";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Si se trata de menores lesionados se debe alertar al supervisor y manejar como alta prioridad.\n\nSe debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.\n\nSi la situación es de más gravedad que la que el denunciante está expresando se dará aviso de inmediato al Coordinador y Subdirector.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • No mover a los lesionados.\n • Protejer al atropellado previniendo que otro vehículo lo atropelle obstruyendo el carril donde este se encuentra.\n • Es importante que el responsable no se retire del lugar.\n • Ayudar a prevenir otro lesionado, coloque señales de precaución 50 m antes del percance, válgase de algún voluntario de ser necesario.\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nERUM\n\nSi requieres más información puedes consultar el Anexo 53";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Puedo resolver alguna otra pregunta?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Para folios del tipo de reporte Envío de Patrulla - Lesionados (ERUM) - Por atropellamiento"; 


      case 67:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Cuántos lesionados hay en el lugar?\n •¿Consientes o inconscientes?\n •Sexo y edad aproximada del o los lesionados.\n •¿Alguno esta atrapado / prensado?\n •¿Alguno perdió la vida?\n •¿De qué altura fue la caída?\n •Metros aproximados\n •¿De dónde cayó?\n •Edificio, azotea, techo, árbol, etc.\n •¿Se encuentra en el lugar el responsable de haber causado la lesión? (si es que aplica)\n •Si se dio a la fuga, ¿En qué dirección huyo?\n •Características del Responsable (sexo, complexión, color de cabello, tipo y color de vestimenta).\n •¿Existe riesgo de que ocurran más lesiones o lesiones a más personas?";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Si se trata de menores lesionados se debe alertar al supervisor y manejar como alta prioridad. Se debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.\n\nSi la situación es de más gravedad que la que el denunciante está expresando se dará aviso de inmediato al Coordinador y Subdirector.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • No mover a los lesionados.\n • Protejer al lesionado sin poner en riesgo su integridad física previniendo que hayan mas lesiones o mas personas se lesionen.\n • Ayudar a prevenir otro lesionado.\n • Es importante que el responsable no se retire del lugar.\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nERUM\n\nBomberos Tel: 55 5764 4102\nUbicación: Avenida Fray Servando Teresa de Mier Merced Balbuena, Venustiano Carranza, C.P. 15810, Ciudad de México\n\nProtección civil Tel: 55 5683 2222\nUbicación: Calle Abraham González 67 Colonia Juárez, Cuauhtémoc C.P. 06600, Ciudad de México\n\nSi requieres más información puedes consultar el Anexo 50";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Algo más en lo que estés interesado?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Para folios del tipo de reporte Envío de Patrulla - Lesionados (ERUM) - Por caida"; 


      case 68:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Cuántos lesionados hay en el lugar?\n •¿Consientes o inconscientes?\n •Sexo y edad aproximada del o los lesionados.\n •¿Alguno esta atrapado / prensado?\n •¿Alguno perdió la vida?\n •¿Qué causó la lesión de la persona?\n •Golpes\n •Caída (¿De que cayó? ¿De que altura cayó?)\n •Quemadura (¿Hay fuego en el lugar?)\n •¿Accidente industrial?\n •¿Accidente en Práctica Deportiva?\n •¿Mordedura o Picadura de animal? (¿Está en el lugar el animal agresor?, ¿Qué tipo de animal es?)\n •Electrocutado (¿Continúa la fuente de electricidad cerca del lesionado?)\n •¿Cortaduras? (¿Qué causó la lesión?, ¿Quién Causó la lesión?)\n •¿Intento de suicidio? (¿Cómo trató de quitarse la vida?, ¿Aún persiste en el intento?))\n •Arma Blanca (cambia motivo)\n •Arma De Fuego (Cambia motivo)\n •Enfermedad (cambia motivo)\n •Accidente automovilístico (cambia motivo)\n •¿Se encuentra en el lugar el responsable de haber causado la lesión? (si es que aplica)\n •Si se dio a la fuga, ¿En qué dirección huyo?\n •Características del Responsable (sexo, complexión, color de cabello, tipo y color de vestimenta).\n •¿Existe riesgo de que ocurran mas lesiones o lesiones a mas personas?";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Si se trata de menores lesionados se debe alertar al supervisor y manejar como alta prioridad.\n\nSe debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.\n\nSi la situación es de más gravedad que la que el denunciante está expresando se dará aviso de inmediato al Coordinador y Subdirector.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • No mover a los lesionados.\n • Protejer al lesionado sin poner en riesgo su integridad física previniendo que hayan mas lesiones o mas personas se lesionen.\n • Ayudar a prevenir otro lesionado.\n • Es importante que el responsable no se retire del lugar.\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nERUM\n\nSi requieres más información puedes consultar el Anexo 55";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Te gustaría discutir otro tema relacionado?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Para folios del tipo de reporte Envío de Patrulla - Lesionados (ERUM) - Por golpes"; 


      case 69:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Se encuentran en vía pública?\n •¿Cuántos son?\n •¿Sabe si están armados?\n •¿Están en algún vehículo? (placas, marca, submarca, modelo, color).\n •¿Conoce a los involucrados? (nombre o alias)\n •¿Características de los involucrados? ( estatura, complexión, color de cabello, tatuajes, cicatrices, tipo y color de vestimenta)";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Se debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.\n\nSi la situación es de más gravedad que la que el denunciante está expresando se dará aviso de inmediato al Coordinador o Subdirector";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • Mantenerse en un lugar a seguro, cierre puertas, ventanas o cualquier otro tipo de acceso.\n • No agredir a nadie ni física ni verbalmente.\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nSi requieres más información puedes consultar el Anexo 18";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿En qué más puedo ayudarte?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio de Envío de Patrulla - Personas drogándose"; 


      case 70:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Cuánto tiempo tiene abandonada?\n •¿Sexo y edad aproximada?\n •¿Conoce el nombre de la persona?\n •¿Esta lesionada o enferma?\n •¿Tipo de lesiones?\n •¿está conciente?\n •¿Características físicas de la persona?\n •¿Estatura? ¿Complexión?\n •¿Color de Piel?\n •¿Cabello Largo, Tipo de Corte, Color?\n •¿Rasgos faciales Cara, Ojos, Nariz, Boca, Cejas?\n •¿Señas particulares? ¿Enfermedades?\n •¿Vestimenta que vestía, color?\n •¿Se trata de una persona en situación de calle?\n •¿Padece de sus facultades mentales?\n\nOjo este motivo debe de manejar por separado EXTRAVIADO Y ABANDONADO";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Se debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.\n\nSi la situación es de más gravedad que la que el denunciante está expresando se dará aviso de inmediato al Supervisor o al coordinador.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n\nEn el caso de una persona extraviada:\n • No dar información de ningún tipo vía telefónica a personas desconocidas\n • Mantener a un adulto atendiendo el teléfono de casa por si alguien reporta a la persona\n • Esperar a la patrulla y entrevístese con los oficiales\n\nEn el caso de una persona abandonada:\n • Mantener a la persona abandonada en un lugar seguro.\n • Que no se desplace del lugar donde la encontró, tratando de que sea lo más visible, para su pronta ubicación.\n • Tranquilizarla.\n\nEn el caso de una persona en situación de calle:\n • Revisar la situación si es menor, adulto mayor, o mujeres\n • Esperar a la patrulla y entrevístese con los oficiales\n • Y esperar al persona de Derechos Humanos de la SSC grupos vulnerables.\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nTrabajo Social 52425100 ext. 4999\n\nSi requieres más información puedes consultar el Anexo 19";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Quisieras que investiguemos algo más?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio de Envío de Patrulla - Personas en Situación de Calle"; 


      case 71:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n • ¿Quién es el agredido?\n • ¿Está en peligro su vida?\n • ¿Se encuentran ahí los agresores?\n • ¿Cuántos son?\n • ¿Están armados?\n • ¿Tipo de arma? Fuego, blanca, otra (especifique).\n • ¿Hay lesionados?\n • ¿Cuántos?\n • ¿Tipo de lesiones?\n • ¿Están consientes?\n • ¿Qué tipo de agresión es? (Física, verbal, psicológica, otra especifique).\n • ¿A qué se debe la agresión?\n • ¿Conoce a los agresores? (nombre o alias)\n • ¿Características de los agresores? (estatura, complexión, color de cabello, tatuajes, cicatrices, tipo y color de vestimenta.)";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "El motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.\n\nSi la situación de la agresión es de más gravedad que la que el denunciante está expresando se dará aviso de inmediato Coordinador y Subdirector de área";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • Alejarse de los agresores.\n • Mantenerse en un lugar a seguro, cierre puertas, ventanas o cualquier otro tipo de acceso.\n • No responder a las agresiones.\n • Si hay lesionados no moverlos.\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo.\n • Es importante que denuncie ante el Ministerio Público.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante y en caso de lesionados al despacho de unidades médicas\n\nSi requieres más información puedes consultar los Anexos 20 y 21";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Tienes alguna otra consulta?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio de Envío de Patrulla - Riña";
        
        
      case 72:
        setTimeout(() => {
          const response = "Comienza por solicitar al usuario que conserve la calma y realiza las siguientes preguntas:\n • Datos del usuario\n •¿Es la victima?\n •¿Está en proceso?\n •¿Esta cautivo?\n •¿Cuál es su nombre?\n •¿Lugar en donde lo secuestraron? (dirección, lugar o referencia)\n •¿Hace cuanto tiempo fue? (aproximadamente)\n •¿Características físicas de la victima? (para que las unidades de apoyo lo localicen, media filiación, como viste)\n •¿Deme el nombre y teléfono de algún familiar o amigo?\n •¿Sabe cuántos secuestradores están involucrados?\n •¿Sabe quién(es) son los ó el responsable(s)? (nombre o alias)\n •¿Están armados? (tipo de arma, arma largas, arma corta, arma blanca.)\n •¿Características de los responsables? (media filiación, características particulares, como visten, como hablan)\n •¿Conoce las características del vehículo en el que lo secuestraron? (placas, marca, modelo, color).\n •Se escapo\n •¿Cuál es su nombre?\n •¿Quién lo libero?\n •¿Dónde se encuentra en este momento? (dirección, lugar o referencia).\n •¿Está lesionado o enfermo?\n •¿Características físicas de la victima? (para que las unidades de apoyo lo localicen, media filiación, como viste)\n •¿Sabe dónde estuvo cautivo? (dirección, lugar o referencia).\n •¿Cuándo lo secuestraron?\n •¿En dónde?\n •¿Se fugo o lo liberaron?\n •¿Sabe cuántos secuestradores están involucrados?\n •¿Sabe quién(es) son los ó el responsable(s)? (nombre o alias)\n •¿Están armados? (tipo de arma, arma largas, arma corta, arma blanca.)\n •¿Características de los responsables? (media filiación, características particulares, como visten, como hablan)\n •¿Conoce las características del vehículo en el que lo secuestraron? (placas, marca, modelo, color).\n •¿Es un testigo?\n •¿En proceso?\n •¿Tipo de testigo? (visual, auditivo).\n •¿Lugar en donde fué el secuestro o donde esta cautivo? (dirección, lugar o referencia).\n •¿Hace cuanto tiempo fué? (aproximadamente).\n •¿Qué rumbo tomaron?\n •¿Características de la victima? (media filiación, características particulares, como viste).\n •¿Sabe cuántos secuestradores están involucrados?\n •¿Sabe quién(es) son los ó el responsable(s)? (nombre o alias)\n •¿Están armados? (tipo de arma, arma largas, arma corta, arma blanca.)\n •¿Características de los responsables? (media filiación, características particulares, como visten, como hablan)";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "El operador debe de estar consciente de que en este tipo de emergencias; deberá mantener sus sentidos muy alertas ya que, en el menor tiempo posible se deben enviar la mayor cantidad de datos fehacientes a despacho para frustrar este delito.\n\nSe debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró. Si la situación es de más gravedad que la que el denunciante está expresando se dará aviso de inmediato al  Coordinador y Subdirector.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n ¿Es la victima?\n • Mantenga la calma, el apoyo está en camino.\n • Sea discreto, evite que suene su teléfono, mientras lo tenga consigo. (modo silencio).\n • No los enfrente ni discuta con ellos, evite ser lastimado.\n • Coopere con las autoridades en cuanto arriben a prestarle el apoyo.\n ¿Es un testigo?\n • Mantenga la calma, el apoyo está en camino.\n • No los enfrente ni discuta con ellos, evite ser lastimado.\n • Coopere con las autoridades en cuanto arriben a entrevistarse con usted, cualquier dato es muy importante para nosotros.\n • Es importante que realice formalmente su denuncia.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nDirección General de Atención a Casos de Secuestro y Extorsión de la Secretaria de Seguridad Ciudadana\nTel: 52415100 ext. 5645\nUbicación: Liverpool 136, 2° piso, Colonia Juárez, Alcaldía Cuauhtémoc, C.P. 06000\nHorario: 24 horas los 365 días del año\n\nFAS-Fiscalía Antisecuestros\nTel: 55 5200 9000\nUbicación: Avenida Jardín No. 356 B, Colonia Del Gas, Delegación Azcapotzalco.\nHorario: 24 horas los 365 días del año\n\nSi requieres más información puedes consultar los Anexos 57 y 58";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Alguna otra información que necesitas?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio de Envío de Patrulla - Secuestro"; 


      case 73:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Se encuentran ahí los sospechosos?\n •¿Cuánto tiempo tiene ahí el sospechoso?\n •Características del sospechoso (estatura, complexión, color de cabello, tatuajes, cicatrices, tipo y color de vestimenta.)\n •¿Cuántos son?\n •¿Están armados?\n •¿Tipo de arma? Fuego, blanca, otra (especifique).\n •¿Está en peligro su vida?\n •¿Están en algún vehículo? (placas, marca, modelo, color).\n •¿Sabe que están haciendo en el lugar?";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Cuanto más específica sea la información, es más probable identificar al o a los sospechosos.\n\nSe debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.\n\nSi la situación de la Volcadura sea de gravedad o ponga en riesgo la vida de la persona se da aviso de inmediato al Coordinador y Subdirectora.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • Conservar la calma.\n • No enfrentarlos.\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nSi requieres más información puedes consultar el Anexos 22";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Puedo brindarte más detalles?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio de Envío de Patrulla - Sospechoso"; 


      case 74:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Los árboles se encuentran en vía pública?\n •\n •¿Están siendo talados en este momento?\n •¿Conoce el motivo?\n •¿Cuántos han talado?\n •¿Conoce a los responsables?\n •¿Cuántos son?\n •¿Hay algún vehículo en el lugar? (placas, marca, submarca, modelo, color).\n •¿Tiene logos de alguna dependencia?";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Se debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.\n\nSi la situación es de más gravedad que la que el denunciante está expresando se dará aviso de inmediato al Coordinador y Subdirectora de área.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • No agredir física ni verbalmente.\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nRed Árbol 1er piso del Bunker en la PGJDF Tel: 55 5346 8916 Ext. 5346 y 8605\n\nSi requieres más información puedes consultar el Anexos 23";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Deseas saber algo específico?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio de Envío de Patrulla - Tala de árbol"; 
      

      case 75:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n • Datos del usuario\n •¿Cuánto tiempo lleva el auto en el lugar?\n •¿Sabe si pertenece a algún vecino?\n •¿Características del vehículo? (marca, sub marca, placas, modelo, color, otros (daños que presenta el auto)\n •¿Se observa algún objeto sospechoso dentro del vehículo?\n •¿Entorpece la vialidad?\n •¿Obstruye alguna entrada?";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "En ocasiones estos vehículos fueron ocupados para delinquir, los involucrados los abandonan en cualquier calle para no ser sorprendidos, por tal razón es preferible no acercarse ni tocarlo, ya que las huellas dactilares son parte importante de una investigación.\n\nEs posible que se trate incluso de un auto robado.\n\n\n\nSe debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.\n\nSi la situación es de más gravedad que la que el denunciante está expresando se dará aviso de inmediato al Supervisor.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • No intentar abrir el auto.\n • No se acerque.\n • \n • De preferencia no lo toque.\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nKronos: ext: 8801, 8323, 8816\n\nSi requieres más información puedes consultar el Anexos 33";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Deseas saber algo más?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio de Vialidad y Tránsito - Calidad de Vida"; 


      case 76:
        setTimeout(() => {
          const response = "Comienza por solicitar al usuario que conserve la calma y realiza las siguientes preguntas:\n • Datos del usuario\n •¿Hay lesionados en el lugar?\n •¿Cuantos lesionados hay en el lugar\n •¿Consientes o inconscientes?\n •¿Alguno esta atrapado / prensado?\n •¿Alguno perdió la vida?\n •¿Algún Vehículo esta incendiado?\n •¿Existe derrame de gasolina o aceite de los autos?\n •¿Está involucrado algún inmueble o algún poste de luz?\n •¿Se encuentran en el lugar todos los responsables?\n •Si alguno se dio a la fuga, ¿En qué dirección huyo?\n •¿Características del auto en el que se dio a la fuga? (placas, marca, modelo, color).\n •¿Características de cada uno de los vehículos involucrados? (marca, submarca, modelo, color)\n •¿Alguno de los vehículos transporta químicos?\n •¿Qué tipo de químico?\n •¿Hay derrame o fuga?\n •¿Tiene a la vista el rombo de colores que lleva el camión o pipa?\n •¿Qué colores y que números lleva el rombo?\n •El derrame o fuga es en el piso?, en agua (río, laguna, drenaje)?, En el aire?\n •¿Existe riesgo de que ocurran mas accidentes?\n •¿Es usted alguno de los afectados?\n •¿Habla por parte de alguna aseguradora? ¿Cuál?\n •¿Se está obstruyendo la vialidad?";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Es importante indagar la codificación del rombo de productos químicos (según la norma NFPA 704) si esta a la vista, ya que este dato nos determina el tipo de químico y que consecuencias pude traer el incidente.\n\nLa norma NFPA 704 pretende a través de un rombo seccionado en cuatro partes de diferentes colores, indicar los grados de peligrosidad de la sustancia a clasificar.\nROJO: Con este color se indican los riesgos a la inflamabilidad con una escala del 0 al 4.\nAZUL: Con este color se indican los riesgos a la salud con una escala del 0 al 4.\nAMARILLO: Con este color se indican los riesgos por reactividad (inestabilidad) con una escala del 0 al 4\nBLANCO: En esta casilla se harán las indicaciones especiales para algunos productos. Como producto oxidante, corrosivo, reactivo con agua o radiactivo. Los símbolos especiales que pueden incluirse en el recuadro blanco son:\nOXI Agente oxidante\nCOR Agente corrosivo\nReacción violenta con el agua\nRadioactividad\n\nDentro de cada recuadro se indicaran los niveles de peligrosidad, los cuales se identifican con una escala numérica del 0 al 4.\n\nSe debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.\n\nSi la situación es de más gravedad que la que el denunciante está expresando se dará aviso de inmediato al Supervisor A, Supervisor B, y a su vez al personal de la Central de Radio que se encuentre en al área del 066.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • Evitar discusiones.\n • No mover a los lesionados.\n • Si hay fuego o químicos alejarse del lugar y póngase en un lugar seguro.\n • De contar con el servicio, llamar a su aseguradora.\n • Es importante que los responsables no se retiren del lugar y lleguen a un acuerdo.\n • Ayúdenos a prevenir otro accidente,\n • Coloque señales de precaución 50 m antes del percance, válgase de algún voluntario de ser necesario.\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nERUM\n\nSi requieres más información puedes consultar el Anexos 56";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Existe algo más en lo que estés interesado?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Para folios de Vialidad y Tránsito - Choque - Con Lesionados"; 


      case 77:
        setTimeout(() => {
          const response = "Comienza por solicitar al usuario que conserve la calma y realiza las siguientes preguntas:\n •¿Cuántos vehículos están involucrados?\n •¿Hay lesionados? (cambia el motivo y ver instrucción de trabajo Choque con lesionados).\n •¿Algún Vehículo esta incendiado?\n •¿Existe derrame de gasolina o aceite de los autos?\n •¿Está involucrado algún inmueble o algún poste de luz?\n •¿Se encuentran en el lugar todos los responsables?\n\n Si alguno se dio a la fuga, ¿En qué dirección huyo?\n •¿Características del auto en el que se dio a la fuga? (placas, marca, modelo, color).\n •¿Características de cada uno de los vehículos involucrados? (placas, marca, modelo, color).\n •¿Alguno de los vehículos transporta químicos?\n •¿Qué tipo de químico?\n •¿Hay derrame?\n •¿Tiene a la vista el rombo de colores que lleva el camión o pipa?\n •¿Qué colores y que números lleva el rombo?\n •¿Es usted alguno de los afectados?\n •¿Habla por parte de alguna aseguradora? ¿Cuál?\n •¿Se está obstruyendo la vialidad?Datos del usuario\n •¿Hay lesionados en el lugar?\n •¿Cuantos lesionados hay en el lugar\n •¿Consientes o inconscientes?\n •¿Alguno esta atrapado / prensado?\n •¿Alguno perdió la vida?\n •¿Algún Vehículo esta incendiado?\n •¿Existe derrame de gasolina o aceite de los autos?\n •¿Está involucrado algún inmueble o algún poste de luz?\n •¿Se encuentran en el lugar todos los responsables?\n •Si alguno se dio a la fuga, ¿En qué dirección huyo?\n •¿Características del auto en el que se dio a la fuga? (placas, marca, modelo, color).\n •¿Características de cada uno de los vehículos involucrados? (marca, submarca, modelo, color)\n •¿Alguno de los vehículos transporta químicos?\n •¿Qué tipo de químico?\n •¿Hay derrame o fuga?\n •¿Tiene a la vista el rombo de colores que lleva el camión o pipa?\n •¿Qué colores y que números lleva el rombo?\n •El derrame o fuga es en el piso?, en agua (río, laguna, drenaje)?, En el aire?\n •¿Existe riesgo de que ocurran mas accidentes?\n •¿Es usted alguno de los afectados?\n •¿Habla por parte de alguna aseguradora? ¿Cuál?\n •¿Se está obstruyendo la vialidad?";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Solo se usa para choque entre vehículos. Conocidos también como choques lamineros.\nSe excluye el caso en que un vehículo causa daños a una propiedad, este último se considerará y será capturado como motivo de Daños.\nEs importante indagar la codificación del rombo de productos químicos (según la norma NFPA 704) si esta a la vista, ya que este dato nos determina el tipo de químico y que consecuencias pude traer el incidente.\n\nLa norma NFPA 704 pretende a través de un rombo seccionado en cuatro partes de diferentes colores, indicar los grados de peligrosidad de la sustancia a clasificar.\nROJO: Con este color se indican los riesgos a la inflamabilidad con una escala del 0 al 4.\nAZUL: Con este color se indican los riesgos a la salud con una escala del 0 al 4.\nAMARILLO: Con este color se indican los riesgos por reactividad (inestabilidad) con una escala del 0 al 4\nBLANCO: En esta casilla se harán las indicaciones especiales para algunos productos. Como producto oxidante, corrosivo, reactivo con agua o radiactivo. Los símbolos especiales que pueden incluirse en el recuadro blanco son:\nOXI Agente oxidante\nCOR Agente corrosivo\nReacción violenta con el agua\nRadioactividad\n\nDentro de cada recuadro se indicaran los niveles de peligrosidad, los cuales se identifican con una escala numérica del 0 al 4.\n\nSe debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.\n\nSi la situación es de más gravedad que la que el denunciante está expresando se dará aviso de inmediato al Supervisor A, Supervisor B, y a su vez al personal de la Central de Radio que se encuentre en al área del 066.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • Evitar discusiones.\n • Si hay fuego o químicos alejarse del lugar y póngase en un lugar seguro.\n • Llamar a su aseguradora.\n • Es importante que los responsables no se retiren del lugar y lleguen a un acuerdo.\n • Ayúdenos a prevenir otro accidente,\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nKronos 8801, 8323, 8816\n\nSector\n\nSi requieres más información puedes consultar el Anexos 34";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿En qué más puedo ayudarte?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Para folios de Vialidad y Tránsito - Choque - Sin Lesionados"; 


      case 78:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n •¿Nombre del usuario?\n •¿Cuáles son los datos del vehículo?\n •¿Qué información es la que requiere?";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Se recomienda consultar la pagina de internet finanzas.cdmx.gob.mx";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • Sugerir al ciudadano contar con lápiz y papel para anotar la información que solicito\n • Indicarle que puede consultar sus infracciones en la siguiente pagina de internet finanzas.cdmx.gob.mx";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: MODULOS DE ATENCIÓN\n\n• Calle Chimalpopoca esq. San Antonio Abad, Col. Obrera, Del. Cuauhtémoc\nTeléfono 5761.8411\nLunes a Viernes de 08:00 a 19:00 hrs., Sábado de 8:00 a 15:00 hrs. Metro Pino Suárez\n\n• Calle Liverpool 136 planta baja, Col. Juárez, Del. Cuauhtémoc\nTeléfono 5242.5100 Ext. 4996, 4997 y 4998, Lunes a Viernes de 8:00 a 19:00 hrs., Sábado de 8:00 a 15:00 hrs.\nMetro Insurgentes\n\n• Fray Servando Av. Fray Servando Teresa de Mier No. 142, Col. Centro, Del. Cuauhtémoc\nLunes a Viernes de 8:00 a 19:00 hrs., Sábado de 8:00 a 15:00 hrs.\n\nSi requieres más información puedes consultar el Anexos 35";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Quisieras que investiguemos algo más?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio de Vialidad y Tránsito - Circulación Prohibida"; 

      case 79:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n •¿Nombre del usuario?\n •¿Cuáles son los datos del vehículo?\n •¿Qué información es la que requiere?";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Se recomienda consultar la pagina de internet finanzas.cdmx.gob.mx";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • Sugerir al ciudadano contar con lápiz y papel para anotar la información que solicito\n • Indicarle que puede consultar sus infracciones en la siguiente pagina de internet finanzas.cdmx.gob.mx";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: MODULOS DE ATENCIÓN\n\n• Calle Chimalpopoca esq. San Antonio Abad, Col. Obrera, Del. Cuauhtémoc\nTeléfono 5761.8411\nLunes a Viernes de 08:00 a 19:00 hrs., Sábado de 8:00 a 15:00 hrs. Metro Pino Suárez\n\n• Calle Liverpool 136 planta baja, Col. Juárez, Del. Cuauhtémoc\nTeléfono 5242.5100 Ext. 4996, 4997 y 4998, Lunes a Viernes de 8:00 a 19:00 hrs., Sábado de 8:00 a 15:00 hrs.\nMetro Insurgentes\n\n• Fray Servando Av. Fray Servando Teresa de Mier No. 142, Col. Centro, Del. Cuauhtémoc\nLunes a Viernes de 8:00 a 19:00 hrs., Sábado de 8:00 a 15:00 hrs.\n\nSi requieres más información puedes consultar el Anexos 35";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Tienes alguna otra consulta o inquietud?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio de Vialidad y Tránsito - Hoy no circula"; 

      case 80:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n •¿Nombre del usuario?\n •¿Cuáles son los datos del vehículo?\n •¿Qué información es la que requiere?";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Se recomienda consultar la pagina de internet finanzas.cdmx.gob.mx";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • Sugerir al ciudadano contar con lápiz y papel para anotar la información que solicito\n • Indicarle que puede consultar sus infracciones en la siguiente pagina de internet finanzas.cdmx.gob.mx";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: MODULOS DE ATENCIÓN\n\n• Calle Chimalpopoca esq. San Antonio Abad, Col. Obrera, Del. Cuauhtémoc\nTeléfono 5761.8411\nLunes a Viernes de 08:00 a 19:00 hrs., Sábado de 8:00 a 15:00 hrs. Metro Pino Suárez\n\n• Calle Liverpool 136 planta baja, Col. Juárez, Del. Cuauhtémoc\nTeléfono 5242.5100 Ext. 4996, 4997 y 4998, Lunes a Viernes de 8:00 a 19:00 hrs., Sábado de 8:00 a 15:00 hrs.\nMetro Insurgentes\n\n• Fray Servando Av. Fray Servando Teresa de Mier No. 142, Col. Centro, Del. Cuauhtémoc\nLunes a Viernes de 8:00 a 19:00 hrs., Sábado de 8:00 a 15:00 hrs.\n\nSi requieres más información puedes consultar el Anexos 35";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Hay alguna otra información que necesitas?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio de Vialidad y Tránsito - Infracciones"; 

      case 81:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n •¿Qué se está obstruyendo (entrada, calle, especifique)?\n •¿Qué vehículo obstruye? (Tipo de vehículo, Placas, marca, submarca, modelo, color)\n •¿Cuánto tiempo lleva obstruyendo?\n •¿Se encuentra el responsable en el lugar?\n •¿Hay personas en el interior del vehículo o cerca de el?";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "Se debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.\n\nSi la situación es de más gravedad que la que el denunciante está expresando se dará aviso de inmediato al Supervisor.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • Evitar discusiones.\n • No agreda a nadie, ni física ni verbalmente.\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Jefe de Cuadrante\n\nTránsito 8316\n\nSi requieres más información puedes consultar el Anexos 36";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Puedo brindarte más detalles o aclaraciones?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio de Vialidad y Tránsito - Obstrucción en vía pública"; 


      case 82:
        setTimeout(() => {
          const response = "Comienza por realizar las siguientes preguntas:\n •¿Cuánto tiempo lleva detenido el tráfico en el lugar?\n •¿Conoce la razón que está originando el embotellamiento?\n •¿Si es algún semáforo descompuesto?\n •¿El semáforo que está sobre que calle o avenida? o ¿En que sentido?\n •¿Está pegado o está apagado?";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 100); 
        setTimeout(() => {
          const response = "No se debe utilizar para ayudar a los vehículos descompuestos en la vía pública, eso no es competencia del 911.\nSe debe saber que el motivo puede cambiar si las respuestas implican que la situación es más grave de lo que el mismo denunciante consideró.\nSi la situación es de más gravedad o ponga en riesgo la vida de la persona se da aviso de inmediato al coordinador vez al personal de la Central de Radio que se encuentre en al área al 911.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 200); 
        setTimeout(() => {
          const response = "Recomienda al usuario:\n • Conservar la calma.\n • Trate de tomar una vía alterna.\n • Evite usar el claxon.\n • Cooperar con las autoridades en cuanto arriben a prestarle el apoyo.";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 300); 
        setTimeout(() => {
          const response = "Se canaliza a: Descompuesto Ingeniería Vial 5542 27 72 y Solicitud Ingeniería Vial 5692 68 79\n\nSi requieres más información puedes consultar el Anexos 37";
          const entranteChatLi = createChatLi2(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 400); 
        setTimeout(() => {
          const response = "¿Necesitas asistencia adicional en algún otro aspecto?";
          const entranteChatLi = createChatLi(response, "entrante");
          chatbox.appendChild(entranteChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); 
        return "Comprendo que estás realizando un folio de Vialidad y Tránsito - Sémaforo";
        
        

        
    //Especificaciones
        case 83:
          setTimeout(() => {
            const response = "Podrías especificar que tipo de lesionados (Calidad de vida, caos vial, choque, circulación prohibida, infracciones, obstrucción en vía pública, semáforo)";
            const entranteChatLi = createChatLi2(response, "entrante");
            chatbox.appendChild(entranteChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
          }, 500); 
          return "Comprendo que estás realizando un folio de Vialidad y Tránsito"; 

        case 84:
          setTimeout(() => {
            const response = "Podrías especificar que tipo de lesionados (por arma blanca, por arma de fuego, por atrollamiento, por caida o por golpes)";
            const entranteChatLi = createChatLi2(response, "entrante");
            chatbox.appendChild(entranteChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
          }, 500); 
          return "Comprendo que estás realizando un folio de Envío de Patrulla - Lesionados (ERUM)"; 

        
        case 85:
          setTimeout(() => {
            const response = "Podrías especificar que tipo queja (policías, custodios, seguridad privada, servidores públicos)";
            const entranteChatLi = createChatLi2(response, "entrante");
            chatbox.appendChild(entranteChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
          }, 500); 
          return "Comprendo que estás realizando un folio de Queja";


        case 86:
          setTimeout(() => {
            const response = "Podrías especificar que tipo de Choque (Con lesionados, sin lesionados)";
            const entranteChatLi = createChatLi2(response, "entrante");
            chatbox.appendChild(entranteChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
          }, 500); 
          return "Comprendo que estás realizando un folio de Vialidad y Tránsito - Choque"; 
        
          
        case 87:
          setTimeout(() => {
            const response = "[Haz click para abrir Diagramas]";
            const entranteChatLi = createChatLi4(response, "entrante");
            chatbox.appendChild(entranteChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
          }, 100);
          setTimeout(() => {
            const response = "¿Requieres algo más?";
            const entranteChatLi = createChatLi(response, "entrante");
            chatbox.appendChild(entranteChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
          }, 1000); 
          return "Por supuesto, te puedo mostrar algunos diagramas"; 


        case 88://no
          return "Es un gusto ayudarte, estoy a tu servicio, si me necesitas estaré por aquí";  

    
        default:
        return "No entiendo la pregunta o aún no conozco sobre ese tema, inténtalo de nuevo por favor .";
  }

  

};





const enableTextarea = () => {
  // Habilita el textarea cuando se muestra el chatbot
  chatInput.removeAttribute("disabled");
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
    // Mensaje de respuesta generada internamente
    const response = generateResponse(userMessage);
    const entranteChatLi = createChatLi(response, "entrante");
    chatbox.appendChild(entranteChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
  }, 600);

};



// Llamada para iniciar la conversación automáticamente al cargar la página
handleChat();

chatInput.addEventListener("input", () => {
  // Ajustar el tamaño del textarea en función de su contenido
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
  // Si la tecla "Enter" es presionada
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handleChat();
  }
});

sendChatBtn.addEventListener("click", handleChat);
chatbotCloseBtn.addEventListener("click", () => {
  document.body.classList.remove("show-chatbot");
  // Deshabilita el textarea al cerrar el chatbot
  chatInput.setAttribute("disabled", true);
});

chatbotToggler.addEventListener("click", () => {
  document.body.classList.toggle("show-chatbot");
  enableTextarea(); // Habilita el textarea al mostrar el chatbot
});





document.addEventListener('DOMContentLoaded', function () {
  var showMenuButton = document.getElementById('showmenu');
  var menu = document.getElementById('menu');

  showMenuButton.addEventListener('click', function () {
      menu.classList.toggle('show');
  });
});


