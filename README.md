# 📍 Universal Employee Location Tracking (Firebase Firestore)

A modern web application to capture and store **employee location** in real-time along with their **name and department** using **HTML, JavaScript, and Firebase Firestore**.

---

## 🚀 Features

* 🌐 **Web-based**: No app installation required.
* 📍 **Geolocation API**: Captures real-time latitude & longitude.
* 🏢 **Department & Name Tracking**: Suitable for any organization, company, or team.
* 🔥 **Firebase Firestore Integration**: Stores data securely in the cloud.
* ✅ **Success/Error Feedback**: User-friendly alerts.
* 📊 **Real-time Data Collection**: Useful for attendance, audits, field staff, etc.

---

## 🛠️ Tech Stack

* HTML5 / CSS3 / JavaScript (Vanilla)
* Firebase v9 Modular SDK

  * Firestore Database
* Geolocation API (Browser-based)

---

## 📂 Project Structure

```
location-tracking/
├── index.html       # Main HTML structure
├── app.js           # Firebase Firestore & Location logic
├── style.css        # UI Styling (Optional but recommended)
└── README.md        # Project Documentation
```

---

## 🔧 Setup Instructions

### 1️⃣ Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project: **Location Tracking**
3. Firestore > Create Database > Start in test mode
4. Set Firestore security rules (optional demo rule):

```javascript
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

5. Project Settings > Web App (get your **Firebase config**)
6. Replace your config in `app.js`

---

### 2️⃣ Running the Project

1. Place all files (`index.html`, `app.js`, `style.css`) in one folder.
2. Open `index.html` in your web browser.
3. Allow **location permissions**.
4. Fill out **Name** and **Department**.
5. Click **Submit Location**.

---

## 🔥 How Firestore Data Looks

Collection: `employee_locations`
Example Document:

```json
{
  "name": "John Doe",
  "department": "Marketing",
  "latitude": 28.6139,
  "longitude": 77.2090,
  "timestamp": "2025-07-13T10:00:00Z"
}
```

---

## 💡 Use Cases

* Remote worker verification
* Field staff attendance
* Office presence logging
* Multi-department location audits

---

## 📸 Screenshots

| Desktop View                | Mobile View                |
| --------------------------- | -------------------------- |
| ![Desktop](screenshot1.png) | ![Mobile](screenshot2.png) |

---

## 🚨 Important Notes

* Ensure **Location Services** are enabled on the device.
* Permissions for **browser location access** are required.
* Firestore **security rules** must be configured properly for production.

---

## 📝 License

This project is released under the **MIT License**.

---

## 👨‍💻 Author

**Lovnish Verma**
[GitHub](https://github.com/lovnishverma)

---

Future Enhacements:

* 🔐 Firebase Authentication
* 📍 Google Maps Visualization
* 📈 Admin Dashboard for Reports

