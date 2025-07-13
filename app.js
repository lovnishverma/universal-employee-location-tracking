import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCy2CdR45-n65CU969Kmz39PvWRd-OMkQM",
  authDomain: "location-tracking-85dd8.firebaseapp.com",
  projectId: "location-tracking-85dd8",
  storageBucket: "location-tracking-85dd8.firebasestorage.app",
  messagingSenderId: "430642423787",
  appId: "1:430642423787:web:f59ed647b279a50f2d1bae",
  measurementId: "G-CCBQ0NXSBS"
};

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

document.getElementById("viewDataBtn").addEventListener("click", async () => {
  const container = document.getElementById("dataTableContainer");
  const tbody = document.getElementById("dataTable").querySelector("tbody");
  tbody.innerHTML = ""; // Clear previous data
  
  const querySnapshot = await getDocs(collection(db, "employee_locations"));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${data.name || "-"}</td>
      <td>${data.department || "-"}</td>
      <td>${data.latitude?.toFixed(5) || "-"}</td>
      <td>${data.longitude?.toFixed(5) || "-"}</td>
      <td>${data.timestamp ? data.timestamp.toDate().toLocaleString() : "-"}</td>
    `;
    tbody.appendChild(row);
  });

  container.style.display = "block";
  document.getElementById("mapContainer").style.display = "none";
});

document.getElementById("viewMapBtn").addEventListener("click", async () => {
  const mapContainer = document.getElementById("mapContainer");
  mapContainer.style.display = "block";
  document.getElementById("dataTableContainer").style.display = "none";

  const querySnapshot = await getDocs(collection(db, "employee_locations"));
  const locations = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    locations.push({
      name: data.name,
      department: data.department,
      latitude: data.latitude,
      longitude: data.longitude
    });
  });

  initMap(locations);
});

window.initMap = (locations = []) => {
  const centerCoords = locations.length
    ? { lat: locations[0].latitude, lng: locations[0].longitude }
    : { lat: 20.5937, lng: 78.9629 }; // Default to India center

  const map = new google.maps.Map(document.getElementById("mapContainer"), {
    center: centerCoords,
    zoom: 5,
  });

  locations.forEach(loc => {
    const marker = new google.maps.Marker({
      position: { lat: loc.latitude, lng: loc.longitude },
      map: map,
      title: `${loc.name} (${loc.department})`
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `<strong>${loc.name}</strong><br>Department: ${loc.department}<br>Lat: ${loc.latitude.toFixed(5)}, Lng: ${loc.longitude.toFixed(5)}`
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  });
};
