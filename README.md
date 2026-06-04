# <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Globe%20Showing%20Americas.png" width="35px"> AtmosIQ

> **"Making the invisible visible — one AQI reading at a time."**

[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![Flask](https://img.shields.io/badge/Flask-3.0-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com)
[![CSV](https://img.shields.io/badge/Data-CSV_Based-217346?style=for-the-badge&logo=microsoftexcel&logoColor=white)]()
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)]()

---

[🚀 Features](#-features) • [🧬 How it Works](#-how-it-works) • [🛠 Setup](#-installation--setup) • [📁 Project Structure](#-project-structure) • [📊 AQI Reference](#-aqi-reference) • [👥 Team](#-team)

---

## 🧭 The Problem

Air quality is one of the most critical yet underreported environmental metrics affecting daily life. Existing platforms are often complex, data-heavy, and inaccessible to general users or developers trying to understand how AQI systems work under the hood.

**AtmosIQ** is an atmospheric intelligence platform that strips away the complexity — focusing on clean, modular, and explainable code that shows exactly how AQI data flows from raw readings to meaningful visualizations.

---

## 🚀 Features

- AQI data ingestion and processing from CSV sources
- Clean modular backend API built with Flask
- Simple data transformation functions — easy to read and extend
- Frontend display of processed AQI values
- Beginner-friendly and interview-ready codebase
- Easily swappable data sources — plug in any CSV or API feed

---

## 🧬 How it Works

```
📄 AQI Data (CSV File)
        │
        ▼
🔧 Data Processing Layer (Python)
        │  Read CSV → parse pollutant values
        │  Apply AQI calculation functions
        │  Categorize air quality levels
        ▼
🌐 Flask Backend API
        │  Serve processed AQI data as JSON endpoints
        │  Handle requests from frontend
        ▼
📊 Frontend Display
        │  Render AQI values and categories
        │  Show location-based air quality status
        ▼
👤 User sees clean, readable AQI output
```

---

## 🏗 Architecture

| Layer | Technology | Role |
|---|---|---|
| **Data Source** | CSV Files | Raw AQI pollutant readings |
| **Processing** | Python | AQI calculation, categorization, transformation |
| **Backend** | Flask | REST API serving processed data as JSON |
| **Frontend** | HTML/CSS/JS | Displaying AQI values and status to users |

---

## 📁 Project Structure

```
atmosiq/
├── data/
│   └── aqi_data.csv            # Raw AQI dataset
│
├── backend/
│   ├── app.py                  # Flask application and API routes
│   ├── processor.py            # AQI calculation and processing logic
│   └── utils.py                # Helper functions
│
├── frontend/
│   ├── index.html              # Main UI
│   ├── style.css               # Styling
│   └── script.js               # API calls and data rendering
│
├── requirements.txt            # Python dependencies
└── README.md
```

---

## 🛠 Installation & Setup

### Prerequisites
- Python 3.10+
- pip

---

### Step 1 — Clone the Repository

```bash
git clone https://github.com/yourusername/atmosiq.git
cd atmosiq
```

---

### Step 2 — Create Virtual Environment

```bash
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # Mac/Linux
```

---

### Step 3 — Install Dependencies

```bash
pip install -r requirements.txt
```

Or manually:
```bash
pip install flask pandas
```

---

### Step 4 — Start the Backend

```bash
cd backend
python app.py
```

Backend runs at: `http://127.0.0.1:5000`

---

### Step 5 — Open the Frontend

Open `frontend/index.html` directly in your browser, or serve it with:

```bash
python -m http.server 3000
```

Then visit `http://localhost:3000`

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/aqi` | Get all processed AQI readings |
| `GET` | `/api/aqi/<location>` | Get AQI for a specific location |
| `GET` | `/api/summary` | Get overall air quality summary stats |

---

## 📊 AQI Reference

| AQI Range | Category | Health Implication |
|---|---|---|
| 0 – 50 | Good | Air quality is satisfactory |
| 51 – 100 | Moderate | Acceptable for most people |
| 101 – 150 | Unhealthy for Sensitive Groups | Risk for sensitive individuals |
| 151 – 200 | Unhealthy | Everyone may experience effects |
| 201 – 300 | Very Unhealthy | Health alert for all |
| 301+ | Hazardous | Emergency conditions |

---

## 🔮 Future Improvements

- Live AQI data integration via public APIs (OpenAQ, WAQI)
- Interactive map visualization with location pins
- Historical trend charts per city
- Alerts and notifications when AQI crosses thresholds
- Machine learning forecasting for next-day AQI prediction
- Mobile-responsive frontend

---

## 👥 Team

Built as a learning-focused full-stack project.

| Role | Contribution |
|---|---|
| Backend Developer | Flask API, data processing pipeline |
| Frontend Developer | UI design, data rendering, API integration |

---

## 📄 License

This project is licensed under the MIT License.

---

*"Clean air starts with clean data."*
**— The AtmosIQ Team**
