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

