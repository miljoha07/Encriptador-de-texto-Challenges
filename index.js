// Función para encriptar el texto ingresado por el usuario
function encriptar() {
  // Obtiene el valor del textarea con id "texto"
  let texto = document.getElementById("texto").value;
  
  // Obtiene los elementos que se actualizarán con el resultado de la encriptación
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  // Realiza las sustituciones para encriptar el texto
  let textoCifrado = texto
    .replace(/e/gi, "enter") // Reemplaza 'e' con 'enter'
    .replace(/i/gi, "imes")  // Reemplaza 'i' con 'imes'
    .replace(/a/gi, "ai")    // Reemplaza 'a' con 'ai'
    .replace(/o/gi, "ober")  // Reemplaza 'o' con 'ober'
    .replace(/u/gi, "ufat"); // Reemplaza 'u' con 'ufat'

  // Verifica si el texto no está vacío
  if (texto.length != 0) {
    // Actual  iza el valor del textarea con el texto encriptado
    document.getElementById("texto").value = textoCifrado;
    
    // Actualiza el título y el párrafo con el mensaje de éxito
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    
    // Cambia la imagen a la versión encriptada
    muñeco.src = "./img/encriptada.jpg";
  } else {
    // Si el texto está vacío, restablece la imagen y los mensajes
    muñeco.src = "./img/muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    
    // Muestra una alerta de advertencia
    swal("lo siento!", "Debes ingresar un texto", "warning");
  }
}



// Función asincrónica para copiar el texto al portapapeles
async function copiar() {
  // Obtiene el texto que se encuentra en el elemento con id "mensaje-encriptado"
  const mensaje = document.getElementById('mensaje-encriptado').innerText;
  
  try {
    //  copiar el texto al portapapeles
    await navigator.clipboard.writeText(mensaje);
    
    // Muestra una alerta de éxito
    swal("¡Texto copiado!", "El mensaje ha sido copiado al portapapeles.", "success");
  } catch (err) {
    // En caso de error, muestra un mensaje en la consola y una alerta de error
    console.error('Error al copiar:', err);
    swal("Error", "No se pudo copiar el texto. Inténtalo de nuevo.", "error");
  }
}

// Función para desencriptar el texto encriptado
function desencriptar() {
  // Obtiene el valor del textarea con id "texto"
  let texto = document.getElementById("texto").value;
  
  // Obtiene los elementos que se actualizarán con el resultado de la desencriptación
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  // Realiza las sustituciones para desencriptar el texto
  let textoCifrado = texto
    .replace(/enter/gi, "e")   // Reemplaza 'enter' con 'e'
    .replace(/imes/gi, "i")    // Reemplaza 'imes' con 'i'
    .replace(/ai/gi, "a")      // Reemplaza 'ai' con 'a'
    .replace(/ober/gi, "o")    // Reemplaza 'ober' con 'o'
    .replace(/ufat/gi, "u");   // Reemplaza 'ufat' con 'u'
  
  // Verifica si el texto no está vacío
  if (texto.length != 0) {
    // Actualiza el valor del textarea con el texto desencriptado
    document.getElementById("texto").value = textoCifrado;
    
    // Actualiza el título y el párrafo con el mensaje de éxito
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    
    // Cambia la imagen a la versión desencriptada
    muñeco.src = "./img/desencriptar.jpg";
  } else {
    // Si el texto está vacío, restablece la imagen y los mensajes
    muñeco.src = "./img/muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    
    // Muestra una alerta de advertencia
    swal("lo siento!", "Debes escribir un texto", "warning");
  }
}
