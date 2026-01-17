import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search by name or brand..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
