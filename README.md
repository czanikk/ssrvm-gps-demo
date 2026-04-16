# 🚌 SSRVM GPS Demo

**School Bus Tracking System — Sri Sri Ravishankar Vidya Mandir**

A fully working demo with simulated GPS movement for 27 buses.

---

## 🚀 Deploy to Railway (5 minutes)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "SSRVM GPS Demo"
# Create a repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/ssrvm-gps-demo
git push -u origin main
```

### Step 2: Deploy on Railway
1. Go to **railway.app** → Sign up free
2. Click **New Project** → **Deploy from GitHub**
3. Select your repo → Click **Deploy**
4. Wait ~2 minutes for build to complete
5. Click **Settings** → **Domains** → Generate a domain

### Step 3: Your live URLs
```
Parent App:       https://YOUR-URL.railway.app/parent/login.html
Admin Dashboard:  https://YOUR-URL.railway.app/admin
Driver App:       https://YOUR-URL.railway.app/driver
```

---

## 🔐 Demo Login Credentials

| Role   | Phone       | OTP    |
|--------|-------------|--------|
| Parent | 9876543210  | 123456 |
| Parent | 9876543211  | 123456 |
| Parent | 9876543212  | 123456 |
| Admin  | 9774598668  | 123456 |

---

## 📱 What the Demo Shows

- **Parent App** — Login with OTP, see live bus on map, ETA countdown, driver info
- **Admin Dashboard** — All 27 buses moving on live map, stats, bus details panel
- **Driver App** — On/off duty toggle, speed display, route stops, SOS button

---

## 🗂 Project Structure

```
ssrvm-gps-demo/
├── backend/
│   ├── server.js       # Express server + SSE endpoints
│   ├── simulator.js    # GPS simulator (27 buses moving)
│   ├── demoData.js     # Bus data, routes, demo parents
│   └── package.json
│
├── parent-app/
│   ├── login.html      # OTP login page
│   ├── track.html      # Live bus tracking
│   └── css/app.css     # Shared styles
│
├── admin-app/
│   └── index.html      # Admin fleet dashboard
│
├── driver-app/
│   └── index.html      # Driver interface
│
└── railway.toml        # Railway deployment config
```

---

## 🛠 Run Locally

```bash
cd backend
npm install
npm start
# Open: http://localhost:3000
```

---

## 📍 Customizing for Actual School

1. Open `backend/demoData.js`
2. Update `SCHOOL_LAT` and `SCHOOL_LNG` with actual school coordinates
3. Update route waypoints with real Guwahati coordinates
4. Update bus numbers, routes, and driver names
5. Add real parent phone numbers to `DEMO_PARENTS`

---

*Built with Express.js + Server-Sent Events + Leaflet.js*  
*🌹 Jai Gurudev 🌹*
