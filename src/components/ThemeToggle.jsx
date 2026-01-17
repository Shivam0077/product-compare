import React from "react";

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      className="btn btn-outline"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
