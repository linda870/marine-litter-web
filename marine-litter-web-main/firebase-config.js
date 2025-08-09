// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, push, get, child } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCiUYF1MeV9seUzZpkVMSTYQr87r-pXitk",
  authDomain: "marinelitter-410a0.firebaseapp.com",
  databaseURL: "https://marinelitter-410a0-default-rtdb.firebaseio.com",
  projectId: "marinelitter-410a0",
  storageBucket: "marinelitter-410a0.appspot.com",
  messagingSenderId: "902858063996",
  appId: "1:902858063996:web:7a7a9f43cb449d98b089f9",
  measurementId: "G-1EH8EYCBLG"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Database
const db = getDatabase(app);

// Export for use in HTML pages
export { db, ref, push, get, child };
