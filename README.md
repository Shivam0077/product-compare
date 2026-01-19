# Product Comparison UI (React)

A responsive product comparison web app where users can select up to **3 products** and compare them side-by-side inside a drawer.

---

## Live Demo
https://vermillion-paletas-52272c.netlify.app/

## GitHub Repository
https://github.com/Shivam0077/product-compare.git

## Features

### Product Listing
- Displays **8 products** in a responsive grid layout
- Each product card includes:
  - Product name
  - Brand (with icon)
  - Product image
  - Price
  - Key specs:
    - Battery
    - Display
    - Camera

### Compare Flow
- Users can select **up to 3 products** for comparison
- Compare bar appears only when **2 or more products** are selected
- Users can:
  - Remove individual products from compare list
  - Clear all selected products at once

### Comparison View (Drawer)
- Side-by-side comparison inside a **drawer panel**
- Differences are visually highlighted
- Option available:
  - **Show differences only**

### Bonus Enhancements
- Search by product **name / brand**
- Light/Dark theme toggle
- `localStorage` persistence for:
  - selected compare products
  - theme preference
- Fully responsive UI (mobile + desktop)
- Background scroll lock when compare drawer is open

## Assumptions
- Static product data is used (no backend/API)
- Maximum **3 products** can be compared
- Compare drawer opens only when user clicks **Compare**
- Compare bar is visible only when at least **2 products** are selected
- On reload:
  - if previously selected items exist, user is prompted
  - checkbox available: **Don’t show again**


## Tech Stack
- React (Vite)
- HTML5 / CSS3
- JavaScript (ES6+)

---

##  Setup Instructions

### Clone the repository
git clone https://github.com/Shivam0077/product-compare.git
cd product-compare
