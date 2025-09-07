# 📍 Universal Employee Location Tracking (GPS + Firebase Firestore + Google Maps)

![Intro GIF](https://github.com/user-attachments/assets/b57db73f-b0e5-4c97-93bc-8d05b7bf4f9f)

[![GitHub Stars](https://img.shields.io/github/stars/lovnishverma/universal-employee-location-tracking?style=social)](https://github.com/lovnishverma/universal-employee-location-tracking/stargazers)
[![GitHub License](https://img.shields.io/github/license/lovnishverma/universal-employee-location-tracking)](LICENSE)
[![Issues](https://img.shields.io/github/issues/lovnishverma/universal-employee-location-tracking)](https://github.com/lovnishverma/universal-employee-location-tracking/issues)
[![GitHub Forks](https://img.shields.io/github/forks/lovnishverma/universal-employee-location-tracking?style=social)](https://github.com/lovnishverma/universal-employee-location-tracking/network/members)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Firebase](https://img.shields.io/badge/Firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)

---

> **Track, View & Manage Employee Location Data with Firebase Firestore and Google Maps Integration.**
> Suitable for **any department**, **remote teams**, or **organization-wide tracking.**

👉 **[🚀 LIVE DEMO HERE](https://lovnishverma.github.io/universal-employee-location-tracking/)** 👈

> ⚠️ **Important:** This project is for educational/demo purposes. Always configure Firebase Security Rules before using in production environments.

---

## 📑 Table of Contents
- [Quick Demo](#-quick-demo)
- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Screenshots](#-screenshots)
- [Deployment](#-firebase-hosting-deployment-recommended)
- [Usage Flow](#️-how-it-works-usage-flow)
- [Future Improvements](#-future-improvements-optional-ideas)
- [Why This Project](#-why-this-project)
- [License](#-license)
- [Author](#-author)
- [Contributing](#-contributing)

---

## 🎥 Quick Demo 

<img width="480" height="288" alt="github-location_tracker_video" src="https://github.com/user-attachments/assets/59555e73-a987-41d6-9fa3-410702c565eb" />


*Watch the complete workflow: Fill form → Submit location → View in table → Open Google Maps*

---

## 🔥 Features

✅ **Clean Responsive UI** - Works perfectly on all devices

✅ **Mobile Friendly Design** - Optimized for smartphones and tablets  

✅ **Live GPS Tracking** - Real-time location capture via browser geolocation

✅ **Firebase Firestore Integration** - Secure cloud database storage

✅ **Google Maps Direct Links** - One-click location viewing (no API key needed)

✅ **Department-wise Tracking** - Organize employees by departments

✅ **Instant Data Sync** - Real-time updates across all devices

---

## 📌 Prerequisites

Before you start, make sure you have:

- 🔥 **Firebase Account** → [Sign up here](https://firebase.google.com/)
- 📊 **Firestore Database** → Create a new project in Firebase Console
- 🔑 **Firebase Config Keys** → Copy your config object into `app.js`
- 🌐 **Modern Web Browser** → Chrome, Firefox, Safari, or Edge (for geolocation support)

### Quick Firebase Setup:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Firestore Database
4. Copy your web app config and paste it in `app.js`

---

## 📂 Project Structure

```
├── index.html       # Main Frontend Page
├── style.css        # Clean Responsive CSS Styling
├── app.js           # Firebase Integration & Core Logic
├── README.md        # 📄 Documentation (this file)
├── LICENSE          # MIT License File
```

---

## 🛠️ Tech Stack

| Technology             | Purpose                          | Version |
| ---------------------- | -------------------------------- | ------- |
| **HTML5 / CSS3**       | Structure & Modern Styling       | Latest  |
| **JavaScript (ES6)**   | Logic & Geolocation API          | ES6+    |
| **Firebase Firestore** | Cloud NoSQL Database             | v9+     |
| **Google Maps (Link)** | Direct Location Visualization    | N/A     |
| **Browser Geolocation** | GPS Coordinate Capture          | Native  |

---

## 📸 Screenshots

### 📥 Employee Submission Form
![Form Screenshot](https://github.com/user-attachments/assets/e13b53b2-58c1-4153-87a8-61b8c75fdd64)
*Clean and intuitive form for employee data entry*

### 📊 Location Data Table View  
![Table Screenshot](https://github.com/user-attachments/assets/ee98198b-3848-4782-86c5-36a3457bccf8)
*Responsive table showing all submitted locations with Google Maps integration*

---

## 🔧 Firebase Hosting Deployment (Recommended)

### 1️⃣ Install Firebase CLI
```bash
npm install -g firebase-tools
```

### 2️⃣ Login to Firebase
```bash
firebase login
```

### 3️⃣ Initialize Firebase Hosting
```bash
firebase init
# Select: Hosting
# Pick your Firebase project
# Set public directory: ./ (root)
# Configure as SPA: yes
```

### 4️⃣ Deploy to Firebase
```bash
firebase deploy
```

✅ **Your app will be live at:**
```
https://your-project-id.web.app
```

---

## 📡 Alternative: GitHub Pages Deployment

### 1️⃣ Push Repository to GitHub
Ensure all project files are committed and pushed.

### 2️⃣ Enable GitHub Pages
- Go to **Repository Settings** → **Pages**
- **Source:** Deploy from `main` branch → `/ (root)`
- Click **Save**

✅ **Your app will be available at:**
```
https://yourusername.github.io/universal-employee-location-tracking/
```

---

## 🖥️ How It Works (Usage Flow)

### Step 1: Employee Data Entry
- Enter **Employee Name**
- Select **Department** from dropdown
- Click **"Get My Location"** button

### Step 2: Location Capture & Storage
- Browser requests GPS permission
- Captures **live device coordinates** (latitude/longitude)
- Automatically stores data to **Firebase Firestore**
- Shows success confirmation

### Step 3: View & Track Locations
- Navigate to **"View Locations"** tab
- See all submissions in clean HTML table format
- Click **"View on Map"** for any entry
- Google Maps opens directly with precise location

**Example Google Maps Link:**
```
https://www.google.com/maps?q=28.7041,77.1025
```

---

## 🔍 Future Improvements (Roadmap)

- 🔐 **Firebase Authentication** - Secure user login system
- 📥 **CSV Export** - Download location data for reporting
- 📊 **Admin Dashboard** - Advanced filtering & analytics
- 🕒 **Time Tracking** - Check-in/check-out functionality  
- 🌓 **Dark Mode** - Toggle between light/dark themes
- 🌐 **Multi-language** - Support for multiple languages
- 📱 **Progressive Web App** - Offline functionality
- 🔔 **Push Notifications** - Real-time alerts
- 📍 **Geofencing** - Location-based automated actions

---

## 💡 Why This Project?

This solution is **perfect** for:

🏢 **Corporate Use Cases:**
- Remote employee tracking
- Field worker management  
- Department location compliance
- Attendance verification

🌍 **Industry Applications:**
- Sales team territory management
- Delivery personnel tracking
- Survey data collection
- Emergency response coordination

✨ **Key Benefits:**
- **Zero Infrastructure** - No servers needed
- **Real-time Updates** - Instant data synchronization
- **Mobile First** - Designed for smartphones
- **Cost Effective** - Free Firebase tier available
- **Easy Deployment** - Deploy in minutes

---

## 🔒 Security Considerations

> ⚠️ **Production Security Checklist:**

- [ ] Configure Firestore Security Rules
- [ ] Enable Firebase Authentication  
- [ ] Implement role-based access control
- [ ] Use HTTPS only
- [ ] Regular security audits
- [ ] Data encryption at rest

**Sample Firestore Security Rule:**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /locations/{document} {
      allow read, write: if request.auth != null;
    }
  }
}
```

---

## 📄 License

This project is licensed under the **[MIT License](LICENSE)**.

Feel free to use, modify, and distribute this code for personal and commercial purposes.

---

## 🙌 Author

**Lovnish Verma**  
🔗 [Portfolio Website](https://lovnishverma.github.io/) • 🔗 [GitHub Profile](https://github.com/lovnishverma)

---

## 💾 Alternative Version

**Want to save data in Google Sheets instead of Firebase?**  
[📋 Check out the Google Sheets version](https://github.com/lovnishverma/universal-employee-location-tracking/blob/main/want%20to%20save%20in%20google%20sheet%20try%20this%20instead.html)

---

## ⭐ Contributing

We welcome contributions! Here's how you can help:

1. **🍴 Fork** the repository
2. **🌿 Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **💾 Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **📤 Push** to the branch (`git push origin feature/amazing-feature`)
5. **🔀 Open** a Pull Request

### 🐛 Found a Bug?
Please [open an issue](https://github.com/lovnishverma/universal-employee-location-tracking/issues) with:
- Bug description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

### 💡 Feature Requests
Have an idea? [Create a feature request](https://github.com/lovnishverma/universal-employee-location-tracking/issues) and let's discuss!

---

### ⭐ Show Your Support

If this project helped you, please give it a **star** ⭐ and share it with others!

[![GitHub Stars](https://img.shields.io/github/stars/lovnishverma/universal-employee-location-tracking?style=social)](https://github.com/lovnishverma/universal-employee-location-tracking/stargazers)

---

**Made with ❤️ by [Lovnish Verma](https://github.com/lovnishverma)**
