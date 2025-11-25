import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import { getFirestore,
         collection,
         doc,
         setDoc,
         getDoc,
         query,
         where,
         getDocs,
         addDoc
      } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

import { firebaseConfig } from "./database.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


//Referencia al formulario de contacto
const botonEnviar = document.querySelector('#enviar')
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');


//Referencia al formulario de catalogo
const idArt= document.querySelector('#idArt');
const nombreArt= document.querySelector('#nombreArt');
const casaArt= document.querySelector('#casaArt');
const generoArt= document.querySelector('#generoArt');
const precioArt= document.querySelector('#precioArt');
const aromaArt= document.querySelector('#aromaArt');
const btnGuardar= document.querySelector('#btnGuardar');


//Referencia al dialog registro
const btnRegistrar= document.querySelector('#btnRegistrar');
const btnCerrar= document.querySelector('#btnCerrar');
const dialogRegistro= document.querySelector('#dialogRegistro');


botonEnviar.addEventListener('click', async function () {
  await setDoc(doc(db, "posibleCliente", emailInput.value), {
    name: nameInput.value,
    message: messageInput.value,
    email: emailInput.value
  });

  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    alert('Por favor, completa todos los campos.');
    return;
  }
});
