# Music Streaming App

A free music streaming platform inspired by Spotify, built to provide seamless music discovery, playlist creation, and an enjoyable listening experience for everyone.

---

## Tech Stack

* React + JavaScript
* Vite
* Tailwind CSS
* Node.js
* npm

---

## Installation Guide

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2. Install Dependencies

```bash
npm install
```

---

## Tailwind CSS Installation

### 1. Install Tailwind CSS + PostCSS + Autoprefixer

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

### 2. Configure `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

### 3. Add Tailwind Directives in `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## Run the Project

```bash
npm run dev
```

Your app will start on:

```bash
http://localhost:5173/
```

---

## Build for Production

```bash
npm run build
```

---

## Project Structure

```text
src/
 ├── components/
 ├── pages/
 ├── assets/
 ├── App.tsx
 ├── main.tsx
 └── index.css
```

---

## Features

* Music streaming UI
* Responsive design
* Playlist creation
* Search functionality
* Modern Spotify-inspired interface
* Clean and minimal user experience

---

## Author

Built with ❤️ using React + Tailwind CSS
