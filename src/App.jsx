// import React, { useEffect, useMemo, useState } from "react";
// import { products as productData } from "./assets/data/product";
// import ProductGrid from "./components/ProductGrid";
// import CompareBar from "./components/CompareBar";
// import CompareTable from "./components/CompareTable";
// import SearchBar from "./components/SearchBar";
// import ThemeToggle from "./components/ThemeToggle";
// import "./App.css";

// export default function App() {
//   const [selected, setSelected] = useState([]);
//   const [query, setQuery] = useState("");
//   const [theme, setTheme] = useState("light");

//   // Load from localStorage
//   useEffect(() => {
//     const saved = localStorage.getItem("compare_items");
//     const savedTheme = localStorage.getItem("theme");

//     if (saved) {
//       const ids = JSON.parse(saved);
//       const restored = productData.filter((p) => ids.includes(p.id));
//       setSelected(restored);
//     }

//     if (savedTheme) setTheme(savedTheme);
//   }, []);

//   // Save to localStorage
//   useEffect(() => {
//     localStorage.setItem(
//       "compare_items",
//       JSON.stringify(selected.map((p) => p.id))
//     );
//   }, [selected]);

//   useEffect(() => {
//     localStorage.setItem("theme", theme);
//     document.body.setAttribute("data-theme", theme);
//   }, [theme]);

//   const filteredProducts = useMemo(() => {
//     return productData.filter((p) => {
//       const text = `${p.name} ${p.brand}`.toLowerCase();
//       return text.includes(query.toLowerCase());
//     });
//   }, [query]);

//   const toggleCompare = (product) => {
//     const exists = selected.some((p) => p.id === product.id);

//     if (exists) {
//       setSelected((prev) => prev.filter((p) => p.id !== product.id));
//       return;
//     }

//     if (selected.length >= 3) {
//       alert("You can compare maximum 3 products.");
//       return;
//     }

//     setSelected((prev) => [...prev, product]);
//   };

//   const removeFromCompare = (id) => {
//     setSelected((prev) => prev.filter((p) => p.id !== id));
//   };

//   const clearCompare = () => {
//     setSelected([]);
//   };

//   return (
//     <div className="app">
//       <header className="header">
//         <div>
//           <h1>📱 Product Compare App</h1>
//           <p className="muted">
//             Select up to 3 products and compare side-by-side.
//           </p>
//         </div>

//         <ThemeToggle theme={theme} setTheme={setTheme} />
//       </header>

//       <SearchBar value={query} onChange={setQuery} />

//       <CompareBar
//         selected={selected}
//         onRemove={removeFromCompare}
//         onClear={clearCompare}
//       />

//             <CompareTable selected={selected} />

// <div>
//       <ProductGrid
//         products={filteredProducts}
//         selected={selected}
//         onToggleCompare={toggleCompare}
//       />
// </div>
//     </div>
//   );
// }

import React, { useEffect, useMemo, useState } from "react";
import { products as productData } from "./assets/data/product";
import ProductGrid from "./components/ProductGrid";
import CompareBar from "./components/CompareBar";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";
import CompareDrawer from "./components/CompareDrawer";
import "./App.css";

export default function App() {
  const [selected, setSelected] = useState([]);
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState("light");
  const [drawerOpen, setDrawerOpen] = useState(false);

useEffect(() => {
  const body = document.body;
  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

  if (drawerOpen) {
    body.style.overflow = "hidden";
    body.style.paddingRight = `${scrollBarWidth}px`;
  } else {
    body.style.overflow = "";
    body.style.paddingRight = "";
  }

  return () => {
    body.style.overflow = "";
    body.style.paddingRight = "";
  };
}, [drawerOpen]);


  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("compare_items");
    const savedTheme = localStorage.getItem("theme");

    if (saved) {
      const ids = JSON.parse(saved);
      const restored = productData.filter((p) => ids.includes(p.id));
      setSelected(restored);
    }

    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(
      "compare_items",
      JSON.stringify(selected.map((p) => p.id))
    );
  }, [selected]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  // Close drawer if selected drops below 2
  useEffect(() => {
    if (selected.length < 2) setDrawerOpen(false);
  }, [selected.length]);

  const filteredProducts = useMemo(() => {
    return productData.filter((p) => {
      const text = `${p.name} ${p.brand}`.toLowerCase();
      return text.includes(query.toLowerCase());
    });
  }, [query]);

  const toggleCompare = (product) => {
    const exists = selected.some((p) => p.id === product.id);

    if (exists) {
      setSelected((prev) => prev.filter((p) => p.id !== product.id));
      return;
    }

    if (selected.length >= 3) {
      alert("You can compare maximum 3 products.");
      return;
    }

    setSelected((prev) => [...prev, product]);
  };

  const removeFromCompare = (id) => {
    setSelected((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCompare = () => {
    setSelected([]);
    setDrawerOpen(false);
  };

  const openCompare = () => setDrawerOpen(true);
  const closeCompare = () => setDrawerOpen(false);

  return (
    <div className="app">
<div>
      <header className="header">
  <h1 className="app-title">📱 Product Compare</h1>

  <div className="header-actions">
    <ThemeToggle theme={theme} setTheme={setTheme} />

      <SearchBar value={query} onChange={setQuery} />


</div>
  </header>


      <ProductGrid
        products={filteredProducts}
        selected={selected}
        onToggleCompare={toggleCompare}
      />

      <CompareBar
        selected={selected}
        onRemove={removeFromCompare}
        onClear={clearCompare}
        onCompare={openCompare}
      />
      </div>
<div>
  
      <CompareDrawer
        open={drawerOpen}
        onClose={closeCompare}
        selected={selected}
        onRemove={removeFromCompare}
        onClear={clearCompare}
      />
</div>
    </div>
  );
}
