import React from "react";

export default function CompareDrawer({
  open,
  onClose,
  selected,
  onRemove,
  onClear,
}) {
  const rows = [
    { label: "Brand", key: "brand" },
    { label: "Price", key: "price" },
    { label: "Battery", key: "battery" },
    { label: "Display", key: "display" },
    { label: "Camera", key: "camera" },
    { label: "Processor", key: "processor" },
  ];

  const getValue = (product, key) => {
    if (key === "brand") return product.brand;
    if (key === "price") return `₹${product.price.toLocaleString("en-IN")}`;
    return product.features?.[key] ?? "-";
  };

  const isDifferent = (key) => {
    const values = selected.map((p) => getValue(p, key));
    return new Set(values).size > 1;
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`drawer-overlay ${open ? "open" : ""}`}
        onClick={onClose}
        style={{ pointerEvents: open ? "auto" : "none" }}
      />

      {/* Drawer */}
      <aside
        className={`drawer ${open ? "open" : ""}`}
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        <div className="drawer-header">
          <div>
            <h3 className="drawer-title">Compare Products</h3>
            <p className="muted small">Selected: {selected.length}/3</p>
          </div>

          <button className="drawer-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        {/* Selected chips */}
        <div className="drawer-chips">
          {selected.map((p) => (
            <div key={p.id} className="compare-chip">
              <span>{p.name}</span>
              <button className="chip-btn" onClick={() => onRemove(p.id)}>
                ✖
              </button>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="drawer-table-scroll">
          <table className="compare-table">
            <thead>
              <tr>
                <th>Feature</th>
                {selected.map((p) => (
                  <th key={p.id}>{p.name}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row) => (
                <tr key={row.key}>
                  <td className="feature-name">{row.label}</td>
                  {selected.map((p) => (
                    <td
                      key={p.id}
                      className={isDifferent(row.key) ? "diff" : ""}
                    >
                      {getValue(p, row.key)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Actions */}
        <div className="drawer-footer">
          <button className="btn btn-outline" onClick={onClose}>
            Continue Browsing
          </button>

          <button className="btn btn-danger" onClick={onClear}>
            Clear All
          </button>
        </div>
      </aside>
    </>
  );
}
