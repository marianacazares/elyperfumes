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

const firebaseConfig = {
  apiKey: "AIzaSyBd8j2j4yjQF1HDbMyJMUnB8g-2Bp0ELZU",
  authDomain: "pagina-ely.firebaseapp.com",
  projectId: "pagina-ely",
  storageBucket: "pagina-ely.firebasestorage.app",
  messagingSenderId: "787334096832",
  appId: "1:787334096832:web:eb4934fdcb564f44160a25",
  measurementId: "G-DXTSCT11Q6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
//Referencia al formulario
const botonEnviar = document.querySelector('#enviar');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');


//Funciones Firebase
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