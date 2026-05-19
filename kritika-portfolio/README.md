# Kritika Adhikari — Cybersecurity Portfolio

A dark terminal-themed React portfolio with 5 pages: Home, About, Skills, Projects, and Contact.

## 🚀 Quick Start

### Prerequisites
- Node.js v16 or higher
- npm (comes with Node.js)

### Installation & Run

```bash
# 1. Navigate into the project folder
cd kritika-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The app will open at **http://localhost:3000**

---

## 📁 Project Structure

```
kritika-portfolio/
├── public/
│   └── index.html          ← HTML shell + Google Fonts
├── src/
│   ├── styles/
│   │   └── globals.css     ← Global styles & CSS animations
│   ├── components/
│   │   ├── Navbar.js       ← Fixed top navigation (responsive)
│   │   ├── HexBackground.js← SVG hex grid background
│   │   ├── TypeWriter.js   ← Animated typewriter text
│   │   ├── SkillBar.js     ← Scroll-triggered animated bars
│   │   ├── SectionTitle.js ← Reusable section heading
│   │   └── EventCard.js    ← Hover event cards (Projects page)
│   ├── pages/
│   │   ├── Home.js         ← Hero section with stats
│   │   ├── About.js        ← Bio, education, certifications
│   │   ├── Skills.js       ← Skill bars + interest grid
│   │   ├── Projects.js     ← Community work + events
│   │   └── Contact.js      ← Contact info + working form
│   ├── data.js             ← All portfolio content (edit here)
│   ├── App.js              ← Root component + scroll tracking
│   └── index.js            ← React entry point
└── package.json
```

---

## ✏️ How to Customize

All portfolio content lives in **`src/data.js`**.  
Edit that file to update your name, bio, skills, events, certifications, etc.

---

## 📦 Build for Production

```bash
npm run build
```

Output goes to the `build/` folder — ready to deploy on Netlify, Vercel, or GitHub Pages.

---

## 🎨 Design

- **Theme**: Dark terminal / cyberpunk aesthetic
- **Fonts**: Orbitron (headings) + Share Tech Mono (body)
- **Colors**: Deep black background with neon green (#00ff8c) accents
- **Features**: Typewriter animation, scroll-triggered skill bars, hex grid bg, hover effects, fully responsive
