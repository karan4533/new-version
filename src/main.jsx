import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// ── Dynamic favicon: switches between black (light mode) and white (dark mode) ──
function applyFavicon(isDark) {
  const link = document.getElementById('favicon');
  if (link) link.href = isDark ? '/favicon-dark.png' : '/favicon-light.png';
}

const darkMQ = window.matchMedia('(prefers-color-scheme: dark)');
applyFavicon(darkMQ.matches);
darkMQ.addEventListener('change', (e) => applyFavicon(e.matches));
// ────────────────────────────────────────────────────────────────────────────────

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
