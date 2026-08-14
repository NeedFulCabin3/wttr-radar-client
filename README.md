# Wttr Radar Client

A client-side dashboard that turns raw weather data into clear forecast panels. It consumes `wttr.in` endpoints, maps text descriptions to icon sets, and presents conditions without complex setups or build tooling.

---

## How It Works

1. **Input Capture:** Reads user queries via click or keyboard event listeners.
2. **Data Fetching:** Dispatches asynchronous HTTP calls to `wttr.in/${city}?format=j1` to extract structured JSON payload data.
3. **Condition Parsing:** Runs weather description strings through a custom pattern matcher to pull matching OpenWeatherMap iconography codes.
4. **DOM Construction:** Dynamically populates current conditions along with a 5-day daily average summary grid.

---

## Key Features

* **Instant Search:** Fetches real-time conditions for any location on demand.
* **Smart Icon Mapping:** Translates arbitrary weather status text into distinct visual assets.
* **Multi-Day Outlook:** Processes raw forecast arrays to extract daily averages and midday summaries.
* **Fail-Safe UI State:** Displays helpful feedback when query strings return bad network responses.

---

## Tech Stack Breakdown

* **HTML5:** Semantic layout structure using standard markup elements.
* **CSS3:** Custom styles leveraging CSS Grid, Flexbox, and Media Queries for adaptivity across viewports.
* **JavaScript (ES6+):** Asynchronous Fetch API, DOM manipulation logic, and runtime condition matching.

---

## Prerequisites & Web-Based Quick Start

You don't need local node runtimes or local terminal setups to work on this code.

### Option 1: GitHub Codespaces (Browser)

1. Press `.` on your keyboard while viewing this repository page (or click **Code** -> **Codespaces** -> **Create codespace on main**).
2. Wait for the browser editor to initialize.
3. Install the **Live Server** extension from the VS Code Extensions tab inside your browser session.
4. Right-click `index.html` and hit **Open with Live Server**.

### Option 2: Local Execution

1. Download the source files directly from the GitHub UI as a ZIP archive.
2. Extract the archive locally.
3. Double-click `index.html` to open the interface directly inside your web browser.

---

## Repository Structure

```text
wttr-radar-client/
├── .github/
│   └── workflows/
│       └── code-health.yml   # Workflow for validation checks
├── .gitignore                # Excludes operational noise & editor settings
├── LICENSE                   # Open-source MIT license declaration
├── README.md                 # Primary documentation
├── index.html                # Application structure & entry point
├── script.js                 # Network handling & DOM logic
└── style.css                 # Interface styling & layouts
```

## Roadmap

[ ] Add temperature scale toggle (°C / °F).

[ ] Save recent location searches to localStorage.

[ ] Geolocation API integration for automatic location detection.

```text"Simplicity is prerequisite for reliability." — Edsger W. Dijkstra```
