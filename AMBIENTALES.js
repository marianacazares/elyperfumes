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
const ambientalesSection = document.querySelector('#ambientales');
document.addEventListener('DOMContentLoaded', async function () {
    const q = query(collection(db, "articulosCatalogo"), where("categoriaArt", "==","AMBIENTAL"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data())
    ambientalesSection.innerHTML += `
        <div class="articulo">
            <h3>${doc.data().nombreArt}</h3>
            <p>PRECIO: $${doc.data().precioArt}</p>
            <p>AROMA: ${doc.data().aromaArt}</p>
            <p>DESCRIPCIÓN: ${doc.data().descripcionArt}</p>
        </div>
    `;
});

})