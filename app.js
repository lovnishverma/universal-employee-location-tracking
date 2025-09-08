import { 
  initializeApp 
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";

import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  serverTimestamp 
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// 🔹 Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy2CdR45-n65CU969Kmz39PvWRd-OMkQM",
  authDomain: "location-tracking-85dd8.firebaseapp.com",
  projectId: "location-tracking-85dd8",
  storageBucket: "location-tracking-85dd8.firebasestorage.app",
  messagingSenderId: "430642423787",
  appId: "1:430642423787:web:f59ed647b279a50f2d1bae",
  measurementId: "G-CCBQ0NXSBS"
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ========================
// Helper Functions
// ========================
function showError(message) {
  const error = document.getElementById("error-message");
  error.innerText = message;
  error.style.display = "block";
  document.getElementById("success-message").style.display = "none";
}

function showSuccess() {
  document.getElementById("error-message").style.display = "none";
  const success = document.getElementById("success-message");
  success.style.display = "block";
  setTimeout(() => {
    success.style.display = "none";
  }, 4000);
}

// ========================
// Submit Location
// ========================
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

// ========================
// View Submitted Data
// ========================
document.getElementById("viewDataBtn").addEventListener("click", async () => {
  const container = document.getElementById("dataTableContainer");
  const tbody = document.getElementById("dataTable").querySelector("tbody");
  tbody.innerHTML = ""; // Clear old rows

  try {
    // ✅ Fetch ordered docs (latest first)
    const q = query(collection(db, "employee_locations"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const lat = data.latitude?.toFixed(5);
      const lng = data.longitude?.toFixed(5);
      const mapsLink = lat && lng ? `https://www.google.com/maps?q=${lat},${lng}` : "#";

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${data.name || "-"}</td>
        <td>${data.department || "-"}</td>
        <td>${lat || "-"}</td>
        <td>${lng || "-"}</td>
        <td>${data.timestamp ? data.timestamp.toDate().toLocaleString() : "-"}</td>
        <td>${lat && lng ? `<a href="${mapsLink}" target="_blank">Open in Google Maps</a>` : "-"}</td>
      `;
      tbody.appendChild(row);
    });

    container.style.display = "block";
  } catch (err) {
    console.error("Error loading data:", err);
    showError("Failed to load submitted locations.");
  }
});
