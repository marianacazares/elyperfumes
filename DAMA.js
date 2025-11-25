import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getFirestore,
         collection,
         query,
         where,
         getDocs,
      } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

      import { firebaseConfig } from "./database.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Elementos DOM
const damaSection = document.querySelector('#dama');
document.addEventListener('DOMContentLoaded', async function () {
    const q = query(collection(db, "articulosCatalogo"), where("categoriaArt", "==","DAMA"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data())
    damaSection.innerHTML += `
        <div class="articulo">
            <h3>${doc.data().nombreArt}</h3>
            <p>CASA: ${doc.data().casaArt}</p>
            <p>GÉNERO: ${doc.data().generoArt}</p>
            <p>PRECIO: $${doc.data().precioArt}</p>
            <p>AROMA: ${doc.data().aromaArt}</p>
            <p class="descripcion">DESCRIPCIÓN: ${doc.data().descripcionArt}</p>
        </div>
    `;
});

})