# 🎮 Tic-Tac-Toe Web Application

An interactive and responsive Tic-Tac-Toe game built using **HTML, CSS, and JavaScript**.  
This project demonstrates core front-end development skills including DOM manipulation, event handling, and game logic implementation.

---

## 📌 Project Overview

Tic-Tac-Toe is a classic two-player strategy game where players take turns marking spaces in a 3×3 grid.  
The objective is to get **three markers in a row** — horizontally, vertically, or diagonally — before your opponent.

This web application allows:
- 👥 Two-player gameplay (Player X vs Player O)
- 🤖 Optional AI opponent mode (if implemented)
- 🔄 Game reset functionality
- 📱 Responsive design for different screen sizes

---

## 🚀 Technologies Used

- **HTML5** – Structure of the game board and layout  
- **CSS3** – Styling, layout design, responsiveness, and animations  
- **JavaScript (ES6)** – Game logic, event handling, win detection, and state management  

---

## 🎯 Features

✔ Interactive 3x3 game board  
✔ Real-time turn switching (X and O)  
✔ Automatic win detection  
✔ Draw detection logic  
✔ Reset / Restart game option  
✔ Clean and responsive UI  
✔ Hover effects and smooth transitions  

---

## 🧠 Game Logic Explanation

- The game board is stored in a JavaScript array.
- Event listeners detect user clicks.
- After every move:
  - The board state updates.
  - The system checks for winning combinations.
  - If no winner and board is full → Declares Draw.
- Winning combinations are checked using predefined index patterns.

Example winning patterns:

```javascript
[
  [0,1,2], [3,4,5], [6,7,8],  // Rows
  [0,3,6], [1,4,7], [2,5,8],  // Columns
  [0,4,8], [2,4,6]            // Diagonals
]
