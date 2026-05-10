# 🌐 Yug Umrania — Personal Portfolio Website

> A clean, responsive personal portfolio website built with pure **HTML**, **CSS**, and **JavaScript** — no frameworks, no build tools, no dependencies. Just handcrafted code.

[![GitHub](https://img.shields.io/badge/GitHub-YugUmrania-181717?style=for-the-badge&logo=github)](https://github.com/YugUmrania)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Yug_Umrania-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/yug-umrania-368816331)
[![Portfolio](https://img.shields.io/badge/Status-In_Development-f59e0b?style=for-the-badge)](https://github.com/YugUmrania/portfolio)

---

## ✨ Features

- ⚡ **Typing animation** — Hero subtitle cycles through roles automatically
- 📱 **Fully responsive** — mobile hamburger menu, fluid grid layouts for all screen sizes
- 🧭 **Smart navbar** — hides on scroll down, reappears on scroll up (Samsung-style UX)
- 🖼️ **Certificate lightbox** — click any certificate to view it fullscreen; press `Esc` to close
- 🔍 **Certificate filter** — instantly filter by Coursera, Events, or Others
- 🎓 **Education timeline** — horizontal card layout with real stats (CGPA, grades, highlights)
- 🎯 **Scroll reveal animations** — elements fade in using Intersection Observer API
- 🔗 **Smooth scrolling** — works across all browsers including older Safari
- 🌫️ **Backdrop blur navbar** — glassmorphism effect with shadow on scroll
- 📂 **Lazy loading** — all 27 certificate images load on demand for faster performance
- 📩 **Contact form + social links** — email, LinkedIn, GitHub, Twitter in one section

---

## 🗂️ Project Structure

```
portfolio/
│── index.html                          # Main single-page HTML file
│── README.md                           # You are here
│── yu-favicon.svg                      # Custom YU monogram favicon
│
├── css/
│   └── style.css                       # All styles — layout, animations, responsive
│
├── js/
│   └── script.js                       # Navbar scroll, mobile menu, filter, reveal
│
└── assets/
    ├── images/
    │   ├── profile.jpeg.webp           # Profile photo
    │   ├── Portfolio_image.png         # Portfolio screenshot
    │   ├── project_cardeal.png         # Used Car project thumbnail
    │   ├── E_Commerce.png              # E-Commerce project thumbnail
    │   ├── Hebron_School.webp          # School image (Education section)
    │   ├── CHARUSAT_GATE.webp          # College image (Education section)
    │   └── certificates/
    │       ├── Coursera/               # 16 Coursera certificates (.webp)
    │       ├── Events/                 # 4 Event certificates (.webp)
    │       └── Others Certificate/    # 7 Other certificates (.webp)
    └── resume/
        └── resume.pdf                  # Downloadable resume
```

---

## 📋 Sections

| # | Section | What's Inside |
|---|---|---|
| 1 | **Navbar** | Sticky, smart-hide, blur effect, mobile hamburger |
| 2 | **Hero** | Photo, name, typing animation, tagline, CTA buttons |
| 3 | **About Me** | Story cards — The Work, What Drives Me, The Vision + interest tags |
| 4 | **Skills** | 4 categorized skill cards + professional skill tags |
| 5 | **Projects** | 3 project cards with tech stack badges and GitHub links |
| 6 | **Certificates** | 27 certificates with filter tabs + fullscreen lightbox |
| 7 | **Education** | Horizontal flow — Hebron School → DEPSTAR CHARUSAT with stats |
| 8 | **Coding Profiles** | LeetCode & HackerRank badge links |
| 9 | **Contact** | Email, LinkedIn, GitHub, Twitter + contact form |
| 10 | **Footer** | Designed & Built by Yug Umrania © 2026 |

---

## 🛠️ Tech Stack

| Technology | Role |
|---|---|
| **HTML5** | Semantic page structure, accessibility |
| **CSS3** | Flexbox & Grid layouts, animations, responsive design |
| **Vanilla JavaScript** | Smart navbar, typing effect, scroll reveal, mobile menu, certificate filter, lightbox |
| **Google Fonts** | Poppins (headings) + Inter (body) — loaded via CDN |
| **Font Awesome 6** | All icons via CDN |

> ✅ **Zero frameworks. Zero build steps. Zero npm installs.** Open `index.html` and it works.

---

## 🚀 Projects Showcased

### 1. 🚗 Used Car Price Prediction & Insights System
A machine learning web application that predicts the resale price of used cars based on inputs like brand, model, year, fuel type, transmission, ownership history, and kilometers driven. Includes data preprocessing, model training, and a custom frontend UI.

**Stack:** Python · Machine Learning · HTML · CSS · JavaScript  
**Repo:** [Used-Car-Price-Prediction-and-Insights-System](https://github.com/YugUmrania/Used-Car-Price-Prediction-and-Insights-System)

---

### 2. 🛒 E-Commerce Inventory Management System
A C++ console application built with OOP principles — handles product listing, cart management, and order summaries in a simulated e-commerce environment. Built as a team project (3 members).

**Stack:** C++ · Object-Oriented Programming  
**Repo:** [E---Commerce-Inventory-Management-System](https://github.com/YugUmrania/E---Commerce-Inventory-Management-System)

---

### 3. 🌐 Personal Portfolio Website
This very site — hand-coded from scratch with no templates or frameworks.

**Stack:** HTML · CSS · JavaScript  
**Repo:** [portfolio](https://github.com/YugUmrania/Portfolio-Website)

---

## 🎓 Certificates (27 Total)

<details>
<summary><strong>📘 Coursera — 16 Certificates</strong></summary>

- C for Everyone
- Core Java
- Data Science Orientation
- DSA – Packt
- Fundamentals of DSA
- Google – Get Started with Python
- IBM – Data Analysis with Python
- IBM – Data Visualization with Python
- IBM – Data Science (Specialization)
- IBM – Data Science Methodology
- IBM – Machine Learning with Python
- IBM – Python for AI & Data Science Developer
- IBM – Python Project for Data Science
- IBM – Tools for Data Science
- Software Engineering
- Web App Built with PHP

</details>

<details>
<summary><strong>🏆 Events — 4 Certificates</strong></summary>

- AI Workshop
- Beam Bender – Non Tech Event
- Code Quest
- Quantum Computing Workshop

</details>

<details>
<summary><strong>📄 Others — 7 Certificates</strong></summary>

- AVLON – Culinary Art
- Bug Arena
- Edunet Foundation – Green Skills AI
- LINGAY'S – Banking & Finance
- SQL Island
- Tata Crucible
- Unstop – Management

</details>

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#ffffff` |
| Section Alternate | `#f9fafb` |
| Primary Accent | `#2563eb` |
| Primary Hover | `#1d4ed8` |
| Text – Main | `#111827` |
| Text – Sub | `#6b7280` |
| Font – Headings | Poppins 600 / 700 |
| Font – Body | Inter 400 / 500 / 600 |
| Transition | `all 0.3s ease` |

---

## 📬 Contact

| Platform | Link |
|---|---|
| 📧 Email | umraniayug4507@gmail.com |
| 💼 LinkedIn | [yug-umrania-368816331](https://linkedin.com/in/yug-umrania-368816331) |
| 🐙 GitHub | [YugUmrania](https://github.com/YugUmrania) |
| 🐦 Twitter / X | [@YugUmrania45](https://x.com/YugUmrania45) |
| 💻 LeetCode | [YugUmrania07](https://leetcode.com/u/YugUmrania07) |
| 🟩 HackerRank | [24dcs140](https://hackerrank.com/profile/24dcs140) |

---

## 📄 License

This project is open source and built by Yug Umrania available under the [MIT License](LICENSE).

---

<p align="center">Designed & Built by <strong>Yug Umrania</strong> © 2026</p>
