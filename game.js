/* ATLAS — game logic */

// ─────────── DATA ───────────

const LOCATIONS = [
  // North America
  { name: "Grand Canyon",          country: "United States", lat: 36.0544, lon: -112.1401 },
  { name: "Manhattan",             country: "United States", lat: 40.7831, lon: -73.9712 },
  { name: "Las Vegas Strip",       country: "United States", lat: 36.1147, lon: -115.1728 },
  { name: "Crater Lake",           country: "United States", lat: 42.9446, lon: -122.1090 },
  { name: "Niagara Falls",         country: "Canada", lat: 43.0828, lon: -79.0742 },
  { name: "CN Tower / Toronto",    country: "Canada", lat: 43.6426, lon: -79.3871 },
  { name: "Teotihuacan",           country: "Mexico", lat: 19.6925, lon: -98.8438 },
  { name: "Chichen Itza",          country: "Mexico", lat: 20.6843, lon: -88.5678 },

  // South America
  { name: "Christ the Redeemer",   country: "Brazil", lat: -22.9519, lon: -43.2105 },
  { name: "Iguazu Falls",          country: "Brazil", lat: -25.6953, lon: -54.4367 },
  { name: "Amazon River bend",     country: "Brazil", lat: -3.1190, lon: -60.0217 },
  { name: "Machu Picchu",          country: "Peru", lat: -13.1631, lon: -72.5450 },
  { name: "Nazca Lines",           country: "Peru", lat: -14.7390, lon: -75.1300 },
  { name: "Atacama Desert",        country: "Chile", lat: -23.8783, lon: -69.1500 },
  { name: "Perito Moreno Glacier", country: "Argentina", lat: -50.4936, lon: -73.0500 },
  { name: "Salar de Uyuni",        country: "Bolivia", lat: -20.1338, lon: -67.4891 },

  // Europe
  { name: "Eiffel Tower",          country: "France", lat: 48.8584, lon: 2.2945 },
  { name: "Mont Saint-Michel",     country: "France", lat: 48.6361, lon: -1.5115 },
  { name: "Colosseum",             country: "Italy", lat: 41.8902, lon: 12.4922 },
  { name: "Venice",                country: "Italy", lat: 45.4408, lon: 12.3155 },
  { name: "Sagrada Familia",       country: "Spain", lat: 41.4036, lon: 2.1744 },
  { name: "Alhambra",              country: "Spain", lat: 37.1761, lon: -3.5881 },
  { name: "Stonehenge",            country: "United Kingdom", lat: 51.1789, lon: -1.8262 },
  { name: "London Eye",            country: "United Kingdom", lat: 51.5033, lon: -0.1196 },
  { name: "Edinburgh Castle",      country: "United Kingdom", lat: 55.9486, lon: -3.1999 },
  { name: "Brandenburg Gate",      country: "Germany", lat: 52.5163, lon: 13.3777 },
  { name: "Neuschwanstein",        country: "Germany", lat: 47.5576, lon: 10.7498 },
  { name: "Acropolis",             country: "Greece", lat: 37.9715, lon: 23.7257 },
  { name: "Santorini caldera",     country: "Greece", lat: 36.4072, lon: 25.4319 },
  { name: "Reykjavik",             country: "Iceland", lat: 64.1466, lon: -21.9426 },
  { name: "Geirangerfjord",        country: "Norway", lat: 62.1014, lon: 7.0049 },
  { name: "Charles Bridge",        country: "Czech Republic", lat: 50.0865, lon: 14.4114 },
  { name: "Red Square",            country: "Russia", lat: 55.7539, lon: 37.6208 },
  { name: "Hermitage",             country: "Russia", lat: 59.9398, lon: 30.3146 },

  // Africa
  { name: "Pyramids of Giza",      country: "Egypt", lat: 29.9792, lon: 31.1342 },
  { name: "Nile delta",            country: "Egypt", lat: 30.8025, lon: 31.0000 },
  { name: "Mount Kilimanjaro",     country: "Tanzania", lat: -3.0674, lon: 37.3556 },
  { name: "Victoria Falls",        country: "Zimbabwe", lat: -17.9243, lon: 25.8572 },
  { name: "Table Mountain",        country: "South Africa", lat: -33.9628, lon: 18.4098 },
  { name: "Ait Benhaddou",         country: "Morocco", lat: 31.0470, lon: -7.1294 },
  { name: "Erg Chebbi dunes",      country: "Morocco", lat: 31.1487, lon: -3.9890 },

  // Asia
  { name: "Great Wall (Mutianyu)", country: "China", lat: 40.4319, lon: 116.5704 },
  { name: "Forbidden City",        country: "China", lat: 39.9163, lon: 116.3972 },
  { name: "Shanghai (Pudong)",     country: "China", lat: 31.2397, lon: 121.4994 },
  { name: "Mount Fuji",            country: "Japan", lat: 35.3606, lon: 138.7274 },
  { name: "Tokyo (Shibuya)",       country: "Japan", lat: 35.6595, lon: 139.7004 },
  { name: "Kyoto (Fushimi Inari)", country: "Japan", lat: 34.9671, lon: 135.7727 },
  { name: "Taj Mahal",             country: "India", lat: 27.1751, lon: 78.0421 },
  { name: "Mumbai (Marine Drive)", country: "India", lat: 18.9438, lon: 72.8233 },
  { name: "Angkor Wat",            country: "Cambodia", lat: 13.4125, lon: 103.8670 },
  { name: "Halong Bay",            country: "Vietnam", lat: 20.9101, lon: 107.1839 },
  { name: "Petronas Towers",       country: "Malaysia", lat: 3.1579, lon: 101.7116 },
  { name: "Marina Bay Sands",      country: "Singapore", lat: 1.2834, lon: 103.8607 },
  { name: "Bali rice terraces",    country: "Indonesia", lat: -8.4322, lon: 115.3060 },
  { name: "Borobudur",             country: "Indonesia", lat: -7.6079, lon: 110.2038 },
  { name: "Palm Jumeirah",         country: "United Arab Emirates", lat: 25.1124, lon: 55.1390 },
  { name: "Burj Khalifa",          country: "United Arab Emirates", lat: 25.1972, lon: 55.2744 },
  { name: "Petra",                 country: "Jordan", lat: 30.3285, lon: 35.4444 },
  { name: "Dome of the Rock",      country: "Israel", lat: 31.7780, lon: 35.2354 },
  { name: "Hagia Sophia",          country: "Turkey", lat: 41.0086, lon: 28.9802 },
  { name: "Cappadocia",            country: "Turkey", lat: 38.6431, lon: 34.8289 },

  // Oceania
  { name: "Sydney Opera House",    country: "Australia", lat: -33.8568, lon: 151.2153 },
  { name: "Uluru",                 country: "Australia", lat: -25.3444, lon: 131.0369 },
  { name: "Great Barrier Reef",    country: "Australia", lat: -16.7000, lon: 145.9700 },
  { name: "Milford Sound",         country: "New Zealand", lat: -44.6713, lon: 167.9266 },
  { name: "Mount Cook",            country: "New Zealand", lat: -43.5950, lon: 170.1418 },
];

const COUNTRIES = [
  { name: "Afghanistan", lat: 33.94, lon: 67.71 },
  { name: "Albania", lat: 41.15, lon: 20.17 },
  { name: "Algeria", lat: 28.03, lon: 1.66 },
  { name: "Andorra", lat: 42.51, lon: 1.52 },
  { name: "Angola", lat: -11.20, lon: 17.87 },
  { name: "Argentina", lat: -38.42, lon: -63.62 },
  { name: "Armenia", lat: 40.07, lon: 45.04 },
  { name: "Australia", lat: -25.27, lon: 133.78 },
  { name: "Austria", lat: 47.52, lon: 14.55 },
  { name: "Azerbaijan", lat: 40.14, lon: 47.58 },
  { name: "Bahamas", lat: 25.03, lon: -77.40 },
  { name: "Bahrain", lat: 25.93, lon: 50.64 },
  { name: "Bangladesh", lat: 23.69, lon: 90.36 },
  { name: "Belarus", lat: 53.71, lon: 27.95 },
  { name: "Belgium", lat: 50.50, lon: 4.47 },
  { name: "Belize", lat: 17.19, lon: -88.50 },
  { name: "Benin", lat: 9.31, lon: 2.32 },
  { name: "Bhutan", lat: 27.51, lon: 90.43 },
  { name: "Bolivia", lat: -16.29, lon: -63.59 },
  { name: "Bosnia and Herzegovina", lat: 43.92, lon: 17.68 },
  { name: "Botswana", lat: -22.33, lon: 24.68 },
  { name: "Brazil", lat: -14.24, lon: -51.93 },
  { name: "Brunei", lat: 4.54, lon: 114.73 },
  { name: "Bulgaria", lat: 42.73, lon: 25.49 },
  { name: "Burkina Faso", lat: 12.24, lon: -1.56 },
  { name: "Burundi", lat: -3.37, lon: 29.92 },
  { name: "Cambodia", lat: 12.57, lon: 104.99 },
  { name: "Cameroon", lat: 7.37, lon: 12.35 },
  { name: "Canada", lat: 56.13, lon: -106.35 },
  { name: "Central African Republic", lat: 6.61, lon: 20.94 },
  { name: "Chad", lat: 15.45, lon: 18.73 },
  { name: "Chile", lat: -35.68, lon: -71.54 },
  { name: "China", lat: 35.86, lon: 104.20 },
  { name: "Colombia", lat: 4.57, lon: -74.30 },
  { name: "Costa Rica", lat: 9.75, lon: -83.75 },
  { name: "Croatia", lat: 45.10, lon: 15.20 },
  { name: "Cuba", lat: 21.52, lon: -77.78 },
  { name: "Cyprus", lat: 35.13, lon: 33.43 },
  { name: "Czech Republic", lat: 49.82, lon: 15.47 },
  { name: "Democratic Republic of the Congo", lat: -4.04, lon: 21.76 },
  { name: "Denmark", lat: 56.26, lon: 9.50 },
  { name: "Djibouti", lat: 11.83, lon: 42.59 },
  { name: "Dominican Republic", lat: 18.74, lon: -70.16 },
  { name: "Ecuador", lat: -1.83, lon: -78.18 },
  { name: "Egypt", lat: 26.82, lon: 30.80 },
  { name: "El Salvador", lat: 13.79, lon: -88.90 },
  { name: "Eritrea", lat: 15.18, lon: 39.78 },
  { name: "Estonia", lat: 58.60, lon: 25.01 },
  { name: "Eswatini", lat: -26.52, lon: 31.47 },
  { name: "Ethiopia", lat: 9.15, lon: 40.49 },
  { name: "Fiji", lat: -17.71, lon: 178.07 },
  { name: "Finland", lat: 61.92, lon: 25.75 },
  { name: "France", lat: 46.23, lon: 2.21 },
  { name: "Gabon", lat: -0.80, lon: 11.61 },
  { name: "Gambia", lat: 13.44, lon: -15.31 },
  { name: "Georgia", lat: 42.32, lon: 43.36 },
  { name: "Germany", lat: 51.17, lon: 10.45 },
  { name: "Ghana", lat: 7.95, lon: -1.02 },
  { name: "Greece", lat: 39.07, lon: 21.82 },
  { name: "Guatemala", lat: 15.78, lon: -90.23 },
  { name: "Guinea", lat: 9.95, lon: -9.70 },
  { name: "Guyana", lat: 4.86, lon: -58.93 },
  { name: "Haiti", lat: 18.97, lon: -72.29 },
  { name: "Honduras", lat: 15.20, lon: -86.24 },
  { name: "Hungary", lat: 47.16, lon: 19.50 },
  { name: "Iceland", lat: 64.96, lon: -19.02 },
  { name: "India", lat: 20.59, lon: 78.96 },
  { name: "Indonesia", lat: -0.79, lon: 113.92 },
  { name: "Iran", lat: 32.43, lon: 53.69 },
  { name: "Iraq", lat: 33.22, lon: 43.68 },
  { name: "Ireland", lat: 53.41, lon: -8.24 },
  { name: "Israel", lat: 31.05, lon: 34.85 },
  { name: "Italy", lat: 41.87, lon: 12.57 },
  { name: "Ivory Coast", lat: 7.54, lon: -5.55 },
  { name: "Jamaica", lat: 18.11, lon: -77.30 },
  { name: "Japan", lat: 36.20, lon: 138.25 },
  { name: "Jordan", lat: 30.59, lon: 36.24 },
  { name: "Kazakhstan", lat: 48.02, lon: 66.92 },
  { name: "Kenya", lat: -0.02, lon: 37.91 },
  { name: "Kosovo", lat: 42.60, lon: 20.90 },
  { name: "Kuwait", lat: 29.31, lon: 47.48 },
  { name: "Kyrgyzstan", lat: 41.20, lon: 74.77 },
  { name: "Laos", lat: 19.86, lon: 102.50 },
  { name: "Latvia", lat: 56.88, lon: 24.60 },
  { name: "Lebanon", lat: 33.85, lon: 35.86 },
  { name: "Lesotho", lat: -29.61, lon: 28.23 },
  { name: "Liberia", lat: 6.43, lon: -9.43 },
  { name: "Libya", lat: 26.34, lon: 17.23 },
  { name: "Lithuania", lat: 55.17, lon: 23.88 },
  { name: "Luxembourg", lat: 49.82, lon: 6.13 },
  { name: "Madagascar", lat: -18.77, lon: 46.87 },
  { name: "Malawi", lat: -13.25, lon: 34.30 },
  { name: "Malaysia", lat: 4.21, lon: 101.98 },
  { name: "Maldives", lat: 3.20, lon: 73.22 },
  { name: "Mali", lat: 17.57, lon: -3.99 },
  { name: "Malta", lat: 35.94, lon: 14.38 },
  { name: "Mauritania", lat: 21.01, lon: -10.94 },
  { name: "Mauritius", lat: -20.35, lon: 57.55 },
  { name: "Mexico", lat: 23.63, lon: -102.55 },
  { name: "Moldova", lat: 47.41, lon: 28.37 },
  { name: "Mongolia", lat: 46.86, lon: 103.85 },
  { name: "Montenegro", lat: 42.71, lon: 19.37 },
  { name: "Morocco", lat: 31.79, lon: -7.09 },
  { name: "Mozambique", lat: -18.67, lon: 35.53 },
  { name: "Myanmar", lat: 21.92, lon: 95.96 },
  { name: "Namibia", lat: -22.96, lon: 18.49 },
  { name: "Nepal", lat: 28.39, lon: 84.12 },
  { name: "Netherlands", lat: 52.13, lon: 5.29 },
  { name: "New Zealand", lat: -40.90, lon: 174.89 },
  { name: "Nicaragua", lat: 12.87, lon: -85.21 },
  { name: "Niger", lat: 17.61, lon: 8.08 },
  { name: "Nigeria", lat: 9.08, lon: 8.68 },
  { name: "North Korea", lat: 40.34, lon: 127.51 },
  { name: "North Macedonia", lat: 41.61, lon: 21.75 },
  { name: "Norway", lat: 60.47, lon: 8.47 },
  { name: "Oman", lat: 21.51, lon: 55.92 },
  { name: "Pakistan", lat: 30.38, lon: 69.35 },
  { name: "Panama", lat: 8.54, lon: -80.78 },
  { name: "Papua New Guinea", lat: -6.31, lon: 143.96 },
  { name: "Paraguay", lat: -23.44, lon: -58.44 },
  { name: "Peru", lat: -9.19, lon: -75.02 },
  { name: "Philippines", lat: 12.88, lon: 121.77 },
  { name: "Poland", lat: 51.92, lon: 19.15 },
  { name: "Portugal", lat: 39.40, lon: -8.22 },
  { name: "Qatar", lat: 25.35, lon: 51.18 },
  { name: "Romania", lat: 45.94, lon: 24.97 },
  { name: "Russia", lat: 61.52, lon: 105.32 },
  { name: "Rwanda", lat: -1.94, lon: 29.87 },
  { name: "Saudi Arabia", lat: 23.89, lon: 45.08 },
  { name: "Senegal", lat: 14.50, lon: -14.45 },
  { name: "Serbia", lat: 44.02, lon: 21.01 },
  { name: "Sierra Leone", lat: 8.46, lon: -11.78 },
  { name: "Singapore", lat: 1.35, lon: 103.82 },
  { name: "Slovakia", lat: 48.67, lon: 19.70 },
  { name: "Slovenia", lat: 46.15, lon: 14.99 },
  { name: "Somalia", lat: 5.15, lon: 46.20 },
  { name: "South Africa", lat: -30.56, lon: 22.94 },
  { name: "South Korea", lat: 35.91, lon: 127.77 },
  { name: "South Sudan", lat: 6.88, lon: 31.31 },
  { name: "Spain", lat: 40.46, lon: -3.75 },
  { name: "Sri Lanka", lat: 7.87, lon: 80.77 },
  { name: "Sudan", lat: 12.86, lon: 30.22 },
  { name: "Suriname", lat: 3.92, lon: -56.03 },
  { name: "Sweden", lat: 60.13, lon: 18.64 },
  { name: "Switzerland", lat: 46.82, lon: 8.23 },
  { name: "Syria", lat: 34.80, lon: 38.99 },
  { name: "Taiwan", lat: 23.70, lon: 120.96 },
  { name: "Tajikistan", lat: 38.86, lon: 71.28 },
  { name: "Tanzania", lat: -6.37, lon: 34.89 },
  { name: "Thailand", lat: 15.87, lon: 100.99 },
  { name: "Togo", lat: 8.62, lon: 0.82 },
  { name: "Trinidad and Tobago", lat: 10.69, lon: -61.22 },
  { name: "Tunisia", lat: 33.89, lon: 9.54 },
  { name: "Turkey", lat: 38.96, lon: 35.24 },
  { name: "Turkmenistan", lat: 38.97, lon: 59.56 },
  { name: "Uganda", lat: 1.37, lon: 32.29 },
  { name: "Ukraine", lat: 48.38, lon: 31.17 },
  { name: "United Arab Emirates", lat: 23.42, lon: 53.85 },
  { name: "United Kingdom", lat: 55.38, lon: -3.44 },
  { name: "United States", lat: 39.50, lon: -98.35 },
  { name: "Uruguay", lat: -32.52, lon: -55.77 },
  { name: "Uzbekistan", lat: 41.38, lon: 64.59 },
  { name: "Venezuela", lat: 6.42, lon: -66.59 },
  { name: "Vietnam", lat: 14.06, lon: 108.28 },
  { name: "Yemen", lat: 15.55, lon: 48.52 },
  { name: "Zambia", lat: -13.13, lon: 27.85 },
  { name: "Zimbabwe", lat: -19.02, lon: 29.15 },
];

// ─────────── GAME STATE ───────────

const MAX_GUESSES = 5;
// Zoom levels: tightest first → widest. Final reveal zoom on loss.
const ZOOM_SEQUENCE = [16, 14, 12, 10, 8];
const REVEAL_ZOOM = 5;

// Approximate altitude (km) for each zoom level — flavor text
const ALT_FOR_ZOOM = {
  16: 1, 14: 4, 12: 15, 10: 60, 8: 240, 6: 950, 5: 1900
};

const state = {
  target: null,
  guesses: [], // { name, distanceKm, bearingDeg, correct }
  finished: false,
  won: false,
};

// ─────────── DOM ───────────
const $ = id => document.getElementById(id);
const attemptsEl = $('attempts');
const guessInput = $('guessInput');
const suggestionsEl = $('suggestions');
const submitBtn = $('submitBtn');
const guessesLeftEl = $('guessesLeft');
const altLabel = $('altLabel');
const sectorCode = $('sectorCode');

let map, tileLayer;
let activeSuggestion = -1;

// ─────────── MAP ───────────

function initMap(lat, lon, zoom) {
  if (map) {
    map.remove();
  }
  map = L.map('map', {
    center: [lat, lon],
    zoom: zoom,
    zoomControl: false,
    attributionControl: false,
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    boxZoom: false,
    keyboard: false,
    tap: false,
    inertia: false,
  });

  tileLayer = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    { maxZoom: 18, minZoom: 2 }
  ).addTo(map);
}

function flyToZoom(zoom) {
  if (!map || !state.target) return;
  map.flyTo([state.target.lat, state.target.lon], zoom, {
    animate: true,
    duration: 1.6,
    easeLinearity: 0.25,
  });
  updateAltLabel(zoom);
}

function updateAltLabel(zoom) {
  const km = ALT_FOR_ZOOM[zoom] ?? Math.round(40000 / Math.pow(2, zoom));
  altLabel.textContent = km < 1 ? '< 1 km' : `${km.toLocaleString()} km`;
}

// ─────────── GEO MATH ───────────

function toRad(d) { return d * Math.PI / 180; }
function toDeg(r) { return r * 180 / Math.PI; }

function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat/2)**2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon/2)**2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

function bearingDeg(lat1, lon1, lat2, lon2) {
  const φ1 = toRad(lat1), φ2 = toRad(lat2);
  const Δλ = toRad(lon2 - lon1);
  const y = Math.sin(Δλ) * Math.cos(φ2);
  const x = Math.cos(φ1) * Math.sin(φ2) -
            Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
  return (toDeg(Math.atan2(y, x)) + 360) % 360;
}

// 8-way arrow from bearing
const ARROWS = ['↑','↗','→','↘','↓','↙','←','↖'];
function arrowFor(deg) {
  const idx = Math.round(deg / 45) % 8;
  return ARROWS[idx];
}

// Proximity: 1 (touching) → 0 (far). Earth's antipode is ~20000 km.
function proximity(km) {
  if (km <= 0) return 1;
  // Tiered: <100km =>0.95, <500=>0.85, <1500=>0.7, <4000=>0.5, <8000=>0.3, else =>0.1
  if (km < 100)  return 0.95;
  if (km < 500)  return 0.85;
  if (km < 1500) return 0.7;
  if (km < 4000) return 0.5;
  if (km < 8000) return 0.3;
  return 0.1;
}

function formatKm(km) {
  if (km < 10) return km.toFixed(1) + ' km';
  if (km < 1000) return Math.round(km) + ' km';
  return (km / 1000).toFixed(1) + 'k km';
}

// ─────────── AUTOCOMPLETE ───────────

function normalize(s) {
  return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}

function findCountry(query) {
  const q = normalize(query);
  if (!q) return null;
  return COUNTRIES.find(c => normalize(c.name) === q) || null;
}

function searchCountries(query) {
  const q = normalize(query);
  if (!q) return [];
  const starts = [];
  const contains = [];
  for (const c of COUNTRIES) {
    const n = normalize(c.name);
    if (n.startsWith(q)) starts.push(c);
    else if (n.includes(q)) contains.push(c);
  }
  return [...starts, ...contains].slice(0, 6);
}

function renderSuggestions(items) {
  if (!items.length) {
    suggestionsEl.style.display = 'none';
    suggestionsEl.innerHTML = '';
    activeSuggestion = -1;
    return;
  }
  suggestionsEl.innerHTML = items
    .map((c, i) => `<div class="suggestion${i === activeSuggestion ? ' active' : ''}" data-name="${c.name}">${c.name}</div>`)
    .join('');
  suggestionsEl.style.display = 'block';

  suggestionsEl.querySelectorAll('.suggestion').forEach(el => {
    el.addEventListener('mousedown', (e) => {
      e.preventDefault();
      guessInput.value = el.dataset.name;
      renderSuggestions([]);
      validateInput();
      submitGuess();
    });
  });
}

// ─────────── GUESS HANDLING ───────────

function validateInput() {
  const c = findCountry(guessInput.value);
  const alreadyGuessed = c && state.guesses.some(g => g.name === c.name);
  submitBtn.disabled = !c || alreadyGuessed || state.finished;
  if (alreadyGuessed) submitBtn.textContent = 'Already guessed';
  else submitBtn.textContent = 'Submit Guess →';
}

function submitGuess() {
  if (state.finished) return;
  const country = findCountry(guessInput.value);
  if (!country) return;
  if (state.guesses.some(g => g.name === country.name)) return;

  const correct = normalize(country.name) === normalize(state.target.country);
  const distKm = haversineKm(country.lat, country.lon, state.target.lat, state.target.lon);
  const bear = bearingDeg(country.lat, country.lon, state.target.lat, state.target.lon);

  state.guesses.push({
    name: country.name,
    distanceKm: distKm,
    bearingDeg: bear,
    correct,
  });

  guessInput.value = '';
  renderSuggestions([]);
  renderAttempts();

  if (correct) {
    state.won = true;
    state.finished = true;
    flyToZoom(REVEAL_ZOOM);
    setTimeout(() => showEndgame(), 1700);
  } else if (state.guesses.length >= MAX_GUESSES) {
    state.finished = true;
    flyToZoom(REVEAL_ZOOM);
    setTimeout(() => showEndgame(), 1700);
  } else {
    // Zoom out one level
    const nextZoom = ZOOM_SEQUENCE[state.guesses.length];
    flyToZoom(nextZoom);
  }

  validateInput();
  updateGuessesLeft();
}

function updateGuessesLeft() {
  const left = MAX_GUESSES - state.guesses.length;
  guessesLeftEl.textContent = state.finished ? '— END —' : `${left} LEFT`;
}

function renderAttempts() {
  const rows = [];
  for (let i = 0; i < MAX_GUESSES; i++) {
    const g = state.guesses[i];
    if (!g) {
      rows.push(`
        <div class="attempt-row empty">
          <div class="attempt-num">${String(i + 1).padStart(2, '0')}</div>
          <div class="attempt-name">awaiting…</div>
          <div class="attempt-meta">—</div>
        </div>
      `);
    } else if (g.correct) {
      rows.push(`
        <div class="attempt-row correct">
          <div class="attempt-num">${String(i + 1).padStart(2, '0')}</div>
          <div class="attempt-name">${g.name}</div>
          <div class="attempt-meta">✓ correct</div>
        </div>
      `);
    } else {
      const prox = proximity(g.distanceKm);
      rows.push(`
        <div class="attempt-row filled">
          <div class="attempt-num">${String(i + 1).padStart(2, '0')}</div>
          <div class="attempt-name">${g.name}</div>
          <div class="attempt-meta">
            <span>${formatKm(g.distanceKm)}</span>
            <span class="arrow">${arrowFor(g.bearingDeg)}</span>
            <span class="dist-bar" style="--prox: ${prox};"></span>
          </div>
        </div>
      `);
    }
  }
  attemptsEl.innerHTML = rows.join('');
}

// ─────────── ENDGAME ───────────

function squaresFor(guesses, won) {
  // 🟩 correct, 🟧 close (<500km), 🟨 medium (<2000), ⬜ far
  const sq = [];
  for (const g of guesses) {
    if (g.correct) sq.push('🟩');
    else if (g.distanceKm < 500) sq.push('🟧');
    else if (g.distanceKm < 2000) sq.push('🟨');
    else sq.push('⬜');
  }
  return sq.join('');
}

function showEndgame() {
  $('endTitle').textContent = state.won ? 'Solved.' : 'Not quite.';
  $('endAnswer').textContent = state.target.name;
  $('endMeta').textContent = state.target.country;
  $('endSquares').textContent = squaresFor(state.guesses, state.won) +
    (state.won ? '' : ' ✗');
  $('overlay').classList.add('show');
}

function hideEndgame() {
  $('overlay').classList.remove('show');
}

// ─────────── INIT ───────────

function pickRandomLocation() {
  return LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
}

function newGame() {
  state.target = pickRandomLocation();
  state.guesses = [];
  state.finished = false;
  state.won = false;

  // Generate fake "sector code" for flavor
  const code = ['A','B','C','D','E','F','G','H','J','K','L','M','N','P','R','S','T','V','W','X','Y','Z'];
  const r = () => code[Math.floor(Math.random() * code.length)];
  const n = () => Math.floor(Math.random() * 100).toString().padStart(2, '0');
  sectorCode.textContent = `${r()}${r()}-${n()}-${r()}${n()}`;

  // Date in header
  const now = new Date();
  const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  $('dateLabel').textContent = `${String(now.getDate()).padStart(2,'0')} ${months[now.getMonth()]} ${now.getFullYear()}`;

  // Bump puzzle number from localStorage if available
  let puz = 1;
  try {
    puz = parseInt(localStorage.getItem('atlas_puzzle') || '0') + 1;
    localStorage.setItem('atlas_puzzle', String(puz));
  } catch (e) {}
  $('puzzleNum').textContent = String(puz).padStart(3, '0');

  initMap(state.target.lat, state.target.lon, ZOOM_SEQUENCE[0]);
  updateAltLabel(ZOOM_SEQUENCE[0]);
  renderAttempts();
  updateGuessesLeft();
  guessInput.value = '';
  validateInput();
  hideEndgame();
}

// ─────────── EVENTS ───────────

guessInput.addEventListener('input', () => {
  const items = searchCountries(guessInput.value);
  activeSuggestion = -1;
  renderSuggestions(items);
  validateInput();
});

guessInput.addEventListener('keydown', (e) => {
  const items = Array.from(suggestionsEl.querySelectorAll('.suggestion'));
  if (e.key === 'ArrowDown' && items.length) {
    e.preventDefault();
    activeSuggestion = (activeSuggestion + 1) % items.length;
    items.forEach((el, i) => el.classList.toggle('active', i === activeSuggestion));
  } else if (e.key === 'ArrowUp' && items.length) {
    e.preventDefault();
    activeSuggestion = (activeSuggestion - 1 + items.length) % items.length;
    items.forEach((el, i) => el.classList.toggle('active', i === activeSuggestion));
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (activeSuggestion >= 0 && items[activeSuggestion]) {
      guessInput.value = items[activeSuggestion].dataset.name;
      renderSuggestions([]);
      validateInput();
    }
    submitGuess();
  } else if (e.key === 'Escape') {
    renderSuggestions([]);
  }
});

guessInput.addEventListener('blur', () => {
  setTimeout(() => renderSuggestions([]), 150);
});

submitBtn.addEventListener('click', submitGuess);
$('playAgain').addEventListener('click', newGame);

$('helpBtn').addEventListener('click', () => $('helpOverlay').classList.add('show'));
$('closeHelp').addEventListener('click', () => $('helpOverlay').classList.remove('show'));

// Show help on first visit
window.addEventListener('load', () => {
  newGame();
  let seen = false;
  try { seen = localStorage.getItem('atlas_seen_help') === '1'; } catch(e) {}
  if (!seen) {
    $('helpOverlay').classList.add('show');
    try { localStorage.setItem('atlas_seen_help', '1'); } catch(e) {}
  }
});
