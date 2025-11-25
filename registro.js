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


//Referencia al dialog registro
const idArtReg= document.querySelector('#idArtReg');
const categoriaInputReg= document.querySelector('#categoriaArtReg');
const nombreInputReg= document.querySelector('#nombreArtReg');
const casaInputReg= document.querySelector('#casaArtReg');
const generoInputReg= document.querySelector('#generoArtReg');
const precioInputReg= document.querySelector('#precioArtReg');
const aromaInputReg= document.querySelector('#aromaArtReg');
const descripcionInputReg= document.querySelector('#descripcionArtReg');
const btnGuardarReg= document.querySelector('#btnGuardarReg');


//Funciones Firebase
btnGuardarReg.addEventListener('click', async function () {
     await setDoc(doc(db, "articulosCatalogo", idArtReg.value), {
        categoriaArt: categoriaInputReg.value,  
        nombreArt: nombreInputReg.value,
        casaArt: casaInputReg.value,
        generoArt: generoInputReg.value,
        precioArt: precioInputReg.value,
        aromaArt: aromaInputReg.value,
        descripcionArt: descripcionInputReg.value
    
      });
});

btnBuscarReg.addEventListener('click', async function () {
    const q = query(collection(db, "articulosCatalogo"), where("nombreArt", "==","PRUEBA"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
});