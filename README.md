# 🎮 Cyber City - 2D Sidescroller Game

![Game Version](https://img.shields.io/badge/Version-1.0-blue)
![Technology](https://img.shields.io/badge/Tech-Vanilla%20JavaScript-yellow)
![Platform](https://img.shields.io/badge/Platform-Browser-green)
![Style](https://img.shields.io/badge/Art%20Style-8--Bit%20Pixel-purple)

A retro-style 2D sidescroller browser game built with pure Vanilla JavaScript, HTML5 Canvas, and CSS. Experience a nostalgic journey through the cyberpunk streets with classic arcade gameplay mechanics.

## [Live Demo](https://preston-jones.github.io/2D_Sidescroller_Game/)
![gameplay](https://github.com/user-attachments/assets/cbd5bf14-132d-40ea-b305-9ede1a2ad528)

## 🎯 Features

- **🎮 Classic Sidescroller Gameplay** - Run, jump, and shoot your way through the cyberpunk city
- **🎨 Retro Pixel Art Style** - Authentic 8-bit graphics reminiscent of classic arcade games  
- **📱 Mobile & Desktop Support** - Responsive controls for both touch and keyboard input
- **🎵 Dynamic Audio System** - Immersive sound effects and background music
- **👾 Boss Battles** - Epic encounters with challenging boss enemies
- **⚡ Power-ups & Collectibles** - Health and energy items to boost your performance
- **💥 Visual Effects** - Screen effects, animations, and particle systems
- **🏆 Victory & Game Over Screens** - Complete game flow with restart functionality

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| JavaScript | Core game logic | ES6+ |
| HTML5 Canvas | 2D rendering | HTML5 |
| CSS3 | Styling & animations | CSS3 |
| Web Audio API | Sound management | Native |

## 🏗️ Technical Architecture

### Object-Oriented Design
- **Class-Based Structure** - Modular design with inheritance hierarchy
- **Core Classes**: `DrawableObject`, `MovableObject`, `Character`, `World`, `Level`
- **Enemy System**: `Cop`, `Drone`, `BossEnemy` with unique behaviors
- **Game Objects**: `Shot`, `Collectible`, `Statusbar` for interactive elements

### Collision Detection
- **Precise Hit Detection** - Pixel-perfect collision algorithms
- **Physics Integration** - Gravity, jumping mechanics, and object interactions
- **Boundary Checking** - Level boundaries and platform collision system

### State Management
- **Game State Control** - Menu, playing, paused, game over states
- **Character States** - Health, energy, movement, and animation states
- **World State** - Dynamic environment with scrolling backgrounds and object spawning
- **Audio State** - Sound effect and music management

## 📊 Browser Compatibility

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Full | Recommended for best performance |
| Firefox | ✅ Full | Excellent compatibility |
| Safari | ✅ Full | Works on desktop and mobile |
| Edge | ✅ Full | Modern versions supported |
| Mobile Browsers | ✅ Touch | Optimized touch controls |

## 🎮 Game Controls

### Desktop
- **Arrow Keys** - Move left/right
- **Space** - Jump
- **C** - Shoot

### Mobile
- **Touch Controls** - On-screen buttons for all actions
- **Responsive Design** - Optimized for mobile devices
- 
![mobile](https://github.com/user-attachments/assets/79c7e145-eaac-4b72-9318-e2fa862fc1f1)

## 🎨 Credits

- **Game Development**: Preston Jones
- **Art Assets**: Luis Zuno ([@ansimuz](https://ansimuz.com/))
- **Inspiration**: Classic 8-bit arcade games

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser with HTML5 Canvas support
- Local web server (for development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/preston-jones/2D_Sidescroller_Game.git
```

2. Navigate to the project directory:
```bash
cd cyber-city-game
```

3. Start a local web server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have live-server installed)
live-server

# Using VS Code Live Server extension
# Right-click on index.html and select "Open with Live Server"
```

4. Open your browser and navigate to:
```
http://localhost:8000
```

---

*Have fun and enjoy a little time trip back to the arcade game era! 🕹️*
