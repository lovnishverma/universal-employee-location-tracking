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
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

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
- [Installation & Setup](#-installation--setup)
- [Firebase Configuration](#-firebase-configuration)
- [Deployment](#-deployment-options)
- [Usage Flow](#️-how-it-works-usage-flow)
- [Future Improvements](#-future-improvements-optional-ideas)
- [Why This Project](#-why-this-project)
- [License](#-license)
- [Author](#-author)
- [Contributing](#-contributing)

---

## 🎥 Quick Demo 

[![Watch the demo](https://img.shields.io/badge/▶️%20Watch-Demo-blue)](https://github.com/user-attachments/assets/137f25d0-677f-43bb-b9a8-08aeae78309b)

*Watch the complete workflow: Fill form → Submit location → View in table → Open Google Maps*

---

## 🔥 Features

✅ **Modern Responsive UI** - Built with TailwindCSS for beautiful, mobile-first design

✅ **Real-time GPS Tracking** - Live location capture via browser geolocation API

✅ **Firebase Firestore Integration** - Secure cloud database with real-time sync

✅ **Google Maps Integration** - Direct links to view locations (no API key required)

✅ **Department-wise Organization** - Track employees by departments/teams

✅ **Interactive Data Table** - View all submitted locations in a clean, sortable table

✅ **Animated UI Elements** - Smooth animations and loading states for better UX

✅ **Error Handling** - Comprehensive error messages and validation

✅ **Success Notifications** - Clear feedback for successful submissions

✅ **Empty State Handling** - Informative messages when no data is available

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
universal-employee-location-tracking/
├── index.html                                    # Main Frontend Page with TailwindCSS
├── app.js                                        # Firebase Integration & Core Logic
├── 404.html                                      # Custom 404 Error Page
├── README.md                                     # 📄 Documentation (this file)
├── LICENSE                                       # MIT License File
└── want to save in google sheet try this instead.html  # Alternative Google Sheets version
```

### Key Files Description:

- **`index.html`** - Main application with responsive design using TailwindCSS
- **`app.js`** - Contains Firebase configuration, geolocation handling, and data management
- **`404.html`** - Custom error page for better user experience
- **`want to save in google sheet try this instead.html`** - Alternative version using Google Sheets

---

## 🛠️ Tech Stack

| Technology             | Purpose                          | Version |
| ---------------------- | -------------------------------- | ------- |
| **HTML5**              | Structure & Semantic Markup     | Latest  |
| **TailwindCSS**        | Utility-first CSS Framework     | Latest  |
| **JavaScript (ES6)**   | Logic & Geolocation API          | ES6+    |
| **Firebase Firestore** | Cloud NoSQL Database             | v9+     |
| **Google Maps (Link)** | Direct Location Visualization    | N/A     |
| **Browser Geolocation** | GPS Coordinate Capture          | Native  |

---

## 📸 Screenshots

### 📥 Employee Submission Form


![Form Screenshot](https://github.com/user-attachments/assets/5cd7089c-eaef-4210-ac80-91355af49e13)

*Clean and intuitive form with modern TailwindCSS styling*

### 📊 Location Data Table View


![Table Screenshot](https://github.com/user-attachments/assets/ac432976-53cb-44f6-936c-6997956b5dc1)

*Responsive table showing all submitted locations with Google Maps integration*

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/lovnishverma/universal-employee-location-tracking.git
cd universal-employee-location-tracking
```

### 2️⃣ Configure Firebase
Open `app.js` and replace the Firebase configuration with your own:

```javascript
// Your Firebase configuration
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
```

### 3️⃣ Enable Firestore
1. Go to Firebase Console → Your Project
2. Click on "Firestore Database"
3. Create database in **test mode** (for development)

### 4️⃣ Test Locally
Open `index.html` in your browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

---

## 🔧 Firebase Configuration

### Firestore Database Structure

The app stores data in the following format:

```javascript
// Collection: "locations"
{
  employeeName: "John Doe",
  employeeDepartment: "Engineering", 
  latitude: 28.7041,
  longitude: 77.1025,
  timestamp: "2024-01-15 14:30:25"
}
```

### Security Rules (Production)

For production use, update your Firestore Security Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access on all documents to any user signed in to the application
    match /locations/{document} {
      allow read, write: if request.auth != null;
    }
  }
}
```

---

## 🌐 Deployment Options

### Option 1: Firebase Hosting (Recommended)

#### Install Firebase CLI
```bash
npm install -g firebase-tools
```

#### Login and Initialize
```bash
firebase login
firebase init hosting
```

#### Configure firebase.json
```json
{
  "hosting": {
    "public": "./",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

#### Deploy
```bash
firebase deploy
```

✅ **Your app will be live at:** `https://your-project-id.web.app`

### Option 2: GitHub Pages

1. Push your code to GitHub
2. Go to **Repository Settings** → **Pages**
3. **Source:** Deploy from `main` branch → `/ (root)`
4. **Save**

✅ **Your app will be available at:** `https://yourusername.github.io/universal-employee-location-tracking/`

### Option 3: Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: *Leave empty*
3. Set publish directory: `./`
4. Deploy

---

## 🖥️ How It Works (Usage Flow)

### Step 1: Employee Data Entry
- Open the application in a web browser
- Enter **Employee Name** in the first field
- Enter **Department/Team** name
- Click **"Submit Location 🚀"** button

### Step 2: Location Capture & Storage
- Browser automatically requests GPS permission
- Application shows "Acquiring your location..." status
- Captures **live device coordinates** (latitude/longitude)
- Automatically stores data to **Firebase Firestore**
- Shows success confirmation with green checkmark

### Step 3: View & Track Locations
- Click **"📄 View Submitted Locations"** button
- See all submissions in a responsive table
- Each entry shows: Name, Department, Coordinates, Timestamp
- Click **"View on Map"** link for any entry
- Google Maps opens with precise location pinned

**Example Google Maps Link:**
```
https://www.google.com/maps?q=28.7041,77.1025
```

---

## 🎯 Key Features in Detail

### 🎨 Modern UI/UX
- **TailwindCSS** for consistent, responsive design
- **Gradient backgrounds** and smooth animations
- **Loading states** and progress indicators
- **Success/Error notifications** with auto-dismiss
- **Mobile-first** responsive design

### 🔄 Real-time Data Sync
- **Instant updates** across all connected devices
- **Firebase Firestore** real-time database
- **Automatic retry** for failed submissions
- **Offline detection** (coming soon)

### 📊 Data Management
- **Clean table interface** for viewing submissions
- **Sortable columns** (Name, Department, Date)
- **Direct Google Maps integration**
- **Timestamp tracking** for all submissions

---

## 🔍 Future Improvements (Roadmap)

### 🔐 Security & Authentication
- [ ] **Firebase Authentication** - Secure user login system
- [ ] **Role-based Access Control** - Admin, Manager, Employee roles
- [ ] **API Rate Limiting** - Prevent abuse

### 📊 Analytics & Reporting  
- [ ] **CSV Export** - Download location data for reporting
- [ ] **Dashboard Analytics** - Charts and insights
- [ ] **Advanced Filtering** - Search by date, department, employee
- [ ] **Location History** - Track employee movement over time

### 🎨 UI/UX Enhancements
- [ ] **Dark Mode** - Toggle between light/dark themes
- [ ] **Progressive Web App** - Offline functionality & app-like experience
- [ ] **Push Notifications** - Real-time alerts
- [ ] **Multi-language Support** - i18n implementation

### 🌐 Advanced Features  
- [ ] **Geofencing** - Location-based automated actions
- [ ] **Check-in/Check-out** - Time tracking functionality
- [ ] **Photo Capture** - Attach photos with location submissions
- [ ] **Batch Operations** - Bulk actions on multiple records

---

## 💡 Why This Project?

This solution is **perfect** for:

### 🏢 Corporate Use Cases:
- **Remote employee tracking** - Know where your distributed team is working
- **Field worker management** - Track sales reps, technicians, consultants
- **Department location compliance** - Ensure employees are at designated locations
- **Attendance verification** - Combine with time tracking for accurate attendance

### 🌍 Industry Applications:
- **Sales Territory Management** - Track sales team across different regions
- **Delivery & Logistics** - Monitor delivery personnel and routes
- **Survey Data Collection** - Geographic data collection for research
- **Emergency Response** - Quick location identification for safety protocols
- **Event Management** - Track staff across multiple event locations

### ✨ Key Benefits:
- **🚀 Zero Infrastructure** - No servers or backend needed
- **⚡ Real-time Updates** - Instant data synchronization across devices
- **📱 Mobile First** - Optimized for smartphones and tablets
- **💰 Cost Effective** - Free Firebase tier supports thousands of operations
- **🔧 Easy Setup** - Deploy in minutes, not hours
- **🔒 Secure by Default** - Firebase provides enterprise-grade security

---

## 🛡️ Security Considerations

> ⚠️ **Production Security Checklist:**

### Essential Security Measures:
- [ ] **Configure Firestore Security Rules** - Restrict read/write access
- [ ] **Enable Firebase Authentication** - User login system
- [ ] **Implement RBAC** - Role-based access control
- [ ] **Use HTTPS Only** - Secure data transmission
- [ ] **Regular Security Audits** - Monitor for vulnerabilities
- [ ] **Data Encryption** - Protect sensitive information

### Sample Production Security Rules:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Only authenticated users can read/write locations
    match /locations/{document} {
      allow read: if request.auth != null;
      allow write: if request.auth != null 
        && request.auth.uid == resource.data.userId;
    }
    
    // Admin can read all locations
    match /locations/{document} {
      allow read: if request.auth != null 
        && request.auth.token.admin == true;
    }
  }
}
```

---

## 🔄 Alternative Versions

### 📊 Google Sheets Version
Want to save data directly to Google Sheets instead of Firebase?

**File:** [want to save in google sheet try this instead.html](https://github.com/lovnishverma/universal-employee-location-tracking/blob/main/want%20to%20save%20in%20google%20sheet%20try%20this%20instead.html)

[View Demo](https://lovnishverma.github.io/universal-employee-location-tracking/want%20to%20save%20in%20google%20sheet%20try%20this%20instead.html)


<img width="1764" height="392" alt="image" src="https://github.com/user-attachments/assets/fac370ce-5d5d-4c0f-a052-b51d5f40f356" />


<img width="1919" height="623" alt="image" src="https://github.com/user-attachments/assets/e2f49a5d-2be4-4c63-950f-ead68b2c717d" />


This alternative version:
- Uses **Google Apps Script** for backend processing
- Stores data in **Google Sheets** spreadsheet  
- No Firebase setup required
- Perfect for small teams or simple tracking needs

---

## 📄 License

This project is licensed under the **[MIT License](LICENSE)**.

```
MIT License

Copyright (c) 2024 Lovnish Verma

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙌 Author

**Lovnish Verma**  
🔗 [Portfolio Website](https://lovnishverma.github.io/) • 🔗 [GitHub Profile](https://github.com/lovnishverma)

*Full Stack Developer passionate about creating practical solutions for real-world problems.*

---

## ⭐ Contributing

We welcome contributions! Here's how you can help:

### 🚀 Quick Contribution Steps:
1. **🍴 Fork** the repository
2. **🌿 Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **💾 Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **📤 Push** to the branch (`git push origin feature/amazing-feature`)
5. **🔀 Open** a Pull Request

### 🐛 Found a Bug?
Please [open an issue](https://github.com/lovnishverma/universal-employee-location-tracking/issues) with:
- **Bug description** - What went wrong?
- **Steps to reproduce** - How can we recreate the issue?
- **Expected vs actual behavior** - What should happen vs what actually happens?
- **Screenshots** - Visual proof helps a lot!
- **Browser/Device info** - What were you using?

### 💡 Feature Requests
Have an idea? [Create a feature request](https://github.com/lovnishverma/universal-employee-location-tracking/issues) and let's discuss!

### 🎯 Areas for Contribution:
- **UI/UX improvements** - Better design and user experience
- **Performance optimization** - Faster load times and smoother interactions
- **Security enhancements** - Better protection and privacy features
- **Documentation** - Improve setup guides and code comments
- **Testing** - Add automated tests and quality assurance
- **Accessibility** - Make the app usable for everyone

---

## 💬 Community & Support

### 📞 Getting Help
- **📚 Documentation** - Check this README first
- **🐛 Issues** - [GitHub Issues](https://github.com/lovnishverma/universal-employee-location-tracking/issues) for bugs and feature requests
- **💬 Discussions** - [GitHub Discussions](https://github.com/lovnishverma/universal-employee-location-tracking/discussions) for questions and ideas

### 🏆 Recognition
Special thanks to all contributors who help improve this project!

---

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/lovnishverma/universal-employee-location-tracking)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/lovnishverma/universal-employee-location-tracking)
![GitHub last commit](https://img.shields.io/github/last-commit/lovnishverma/universal-employee-location-tracking)

---

### ⭐ Show Your Support

If this project helped you, please give it a **star** ⭐ and share it with others!

[![GitHub Stars](https://img.shields.io/github/stars/lovnishverma/universal-employee-location-tracking?style=social)](https://github.com/lovnishverma/universal-employee-location-tracking/stargazers)

**Made with ❤️ by [Lovnish Verma](https://github.com/lovnishverma)**

---

*Last updated: September 2025*
