import React from "react";
import BrandIcon from "./icons/BrandIcon";

export default function CompareBar({ selected, onRemove, onClear, onCompare }) {
  if (selected.length < 2) return null;

  return (
    <div className="compare-bar sticky">
      <div className="compare-items">
        {selected.map((p) => (
          <div key={p.id} className="compare-chip">
            <span>{p.name}</span>
            <BrandIcon brand={p.brand} size={14} />
            <button className="chip-btn" onClick={() => onRemove(p.id)}>
              ✖
            </button>
          </div>
        ))}

        <p className="muted small" style={{ margin: 0 }}>
  Select 2–3 products to compare
</p>

      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <button className="btn btn-primary" onClick={onCompare}>
          Compare
        </button>

        <button className="btn btn-danger" onClick={onClear}>
          Clear All
        </button>
      </div>
    </div>
  );
}
