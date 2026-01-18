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

  // ✅ prevent overwriting localStorage before restore
  const [hydrated, setHydrated] = useState(false);

  // Prevent background scroll + prevent layout shift when drawer opens
  useEffect(() => {
    const body = document.body;
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

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

  // ✅ Load from localStorage + Ask restore if items exist
  useEffect(() => {
    const saved = localStorage.getItem("compare_items");
    const savedTheme = localStorage.getItem("theme");

    // restore theme
    if (savedTheme) setTheme(savedTheme);

    // restore compare items with prompt
    if (saved) {
      try {
        const ids = JSON.parse(saved);

        if (Array.isArray(ids) && ids.length > 0) {
          const shouldRestore = window.confirm(
            "Previous compare items found. Do you want to restore them?"
          );

          if (shouldRestore) {
            const restored = productData.filter(
              (p) => ids.includes(p.id) || ids.includes(String(p.id))
            );
            setSelected(restored);
          } else {
            localStorage.removeItem("compare_items");
            setSelected([]);
          }
        }
      } catch (e) {
        localStorage.removeItem("compare_items");
      }
    }

    setHydrated(true);
  }, []);

  // ✅ Save compare items to localStorage (only after hydration)
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "compare_items",
      JSON.stringify(selected.map((p) => p.id))
    );
  }, [selected, hydrated]);

  // Theme persistence
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  // Close drawer if selected < 2
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
    localStorage.removeItem("compare_items");
  };

  const openCompare = () => setDrawerOpen(true);
  const closeCompare = () => setDrawerOpen(false);

  return (
    <div className="app">
      <header className="header">
        <h1 className="app-title">📱 Product Compare</h1>

        <div className="header-actions">
          <SearchBar value={query} onChange={setQuery} />
          <ThemeToggle theme={theme} setTheme={setTheme} />
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

      <CompareDrawer
        open={drawerOpen}
        onClose={closeCompare}
        selected={selected}
        onRemove={removeFromCompare}
        onClear={clearCompare}
      />
    </div>
  );
}
