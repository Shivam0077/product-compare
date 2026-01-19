# Product Comparison UI (React)

A responsive product comparison web app where users can select up to 3 products and compare them side-by-side.

---

## 🌍 Live Demo
https://vermillion-paletas-52272c.netlify.app/

## 📦 GitHub Repository
https://github.com/Shivam0077/product-compare.git

---

## 🚀 Features

### Product Listing
- Displays **8 products** in a responsive grid
- Each product shows:
  - Name
  - Brand (with icon)
  - Image
  - Price
  - 3 key features (Battery, Display, Camera)

### Compare Flow
- Users can select **up to 3 products**
- Compare bar appears only when **2 or more products** are selected
- Remove individual items from compare list
- Clear all selected products

### Comparison View
- Side-by-side comparison inside a **drawer**
- Highlights differences visually
- Option: **Show differences only**

### Bonus Enhancements
- Search by product name / brand
- Light/Dark theme toggle
- localStorage persistence for:
  - selected compare items
  - theme preference
- Responsive design (mobile + desktop)
- Background scroll lock when drawer is open

---

## ✅ Assumptions
- Static product data is used (no API/backend)
- Users can compare **maximum 3 products**
- Compare drawer opens only when user clicks **Compare**
- Compare bar is shown only when at least **2 products** are selected

---

## 🛠 Tech Stack
- React (Vite)
- HTML5 / CSS3
- JavaScript (ES6+)

---

## 🧑‍💻 Setup Instructions

### 1) Clone the repository
```bash
git clone https://github.com/Shivam0077/product-compare.git
cd product-compare
