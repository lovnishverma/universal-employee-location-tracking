import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// ✅ Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCy2CdR45-n65CU969Kmz39PvWRd-OMkQM",
  authDomain: "location-tracking-85dd8.firebaseapp.com",
  projectId: "location-tracking-85dd8",
  storageBucket: "location-tracking-85dd8.firebasestorage.app",
  messagingSenderId: "430642423787",
  appId: "1:430642423787:web:f59ed647b279a50f2d1bae",
  measurementId: "G-CCBQ0NXSBS"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function showError(message) {
  const error = document.getElementById("error-message");
  error.innerText = message;
  error.style.display = "block";
  document.getElementById("success-message").style.display = "none";
}

function showSuccess() {
  document.getElementById("error-message").style.display = "none";
  document.getElementById("success-message").style.display = "block";
  setTimeout(() => {
    document.getElementById("success-message").style.display = "none";
  }, 4000);
}

// 🔥 Submit Location Handler
window.submitLocation = async function () {
  document.getElementById("error-message").style.display = "none";

  const name = document.getElementById("employeeName").value.trim();
  const department = document.getElementById("employeeDepartment").value.trim();

  if (!name || !department) {
    showError("All fields are required.");
    return;
  }

  if (!navigator.geolocation) {
    showError("Geolocation is not supported by this browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(async (position) => {
    try {
      await addDoc(collection(db, "employee_locations"), {
        name,
        department,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        timestamp: serverTimestamp()
      });
      showSuccess();
      document.querySelector("form").reset();
    } catch (error) {
      console.error(error);
      showError("Failed to submit data. Try again.");
    }
  }, (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        showError("Location access denied. Enable location in your browser.");
        break;
      case error.POSITION_UNAVAILABLE:
        showError("Location unavailable. Check GPS settings.");
        break;
      case error.TIMEOUT:
        showError("Location request timed out.");
        break;
      default:
        showError("An unknown error occurred.");
    }
  });
};
