import React, { useMemo, useState } from "react";

export default function CompareDrawer({ open, onClose, selected, onClear }) {
  const [showDiffOnly, setShowDiffOnly] = useState(false);

  const rows = useMemo(
    () => [
      { label: "Brand", key: "brand" },
      { label: "Price", key: "price" },
      { label: "Battery", key: "battery" },
      { label: "Display", key: "display" },
      { label: "Camera", key: "camera" },
      { label: "Processor", key: "processor" },
    ],
    []
  );

  const getRawValue = (product, key) => {
    if (!product) return "";

    if (key === "brand") return product.brand ?? "";
    if (key === "price") return product.price ?? 0;
    return product?.features?.[key] ?? "";
  };

  const getDisplayValue = (product, key) => {
    if (!product) return "-";

    if (key === "brand") return product.brand ?? "-";
    if (key === "price")
      return product.price
        ? `₹${product.price.toLocaleString("en-IN")}`
        : "-";

    return product?.features?.[key] ?? "-";
  };

  const normalize = (val) => {
    if (val === null || val === undefined) return "";
    if (typeof val === "number") return val;
    return String(val).toLowerCase().replace(/\s+/g, " ").trim();
  };

  // ✅ Precompute which keys are different
  const diffMap = useMemo(() => {
    const map = {};

    for (const row of rows) {
      const values = selected.map((p) => normalize(getRawValue(p, row.key)));
      map[row.key] = new Set(values).size > 1;
    }

    return map;
  }, [rows, selected]);

  const visibleRows = useMemo(() => {
    if (!showDiffOnly) return rows;
    return rows.filter((r) => diffMap[r.key]);
  }, [rows, showDiffOnly, diffMap]);

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
        role="dialog"
        aria-modal="true"
        aria-label="Compare products drawer"
      >
        {/* Header */}
        <div className="drawer-header">
          <div>
            <h3 className="drawer-title">Compare Products</h3>
            <p className="muted small">Selected: {selected.length}/3</p>
          </div>

          <button className="drawer-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        {/* Toolbar */}
        <div className="drawer-toolbar">
          <label className="diff-toggle">
            <input
              type="checkbox"
              checked={showDiffOnly}
              onChange={(e) => setShowDiffOnly(e.target.checked)}
            />
            Show differences only
          </label>
        </div>

        {/* Table */}
        <div className="drawer-table-scroll">
          <table className="compare-table">
            <thead>
              <tr>
                {selected.map((p) => (
                  <th key={p.id}>
                    <div className="table-product-head">
                      <img
                        className="table-product-img"
                        src={p.image}
                        alt={p.name}
                      />
                      <div className="table-product-meta">
                        <div className="table-product-name">{p.name}</div>
                        <div className="table-product-price">
                          ₹{p.price.toLocaleString("en-IN")}
                        </div>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {visibleRows.map((row) => {
                const diff = diffMap[row.key];

                return (
                  <React.Fragment key={row.key}>
                    {/* Label row */}
                    <tr className="spec-label-row">
                      <td className="spec-label" colSpan={selected.length}>
                        {row.label}{" "}
                      </td>
                    </tr>

                    {/* Values row */}
                    <tr className="spec-value-row">
                      {selected.map((p) => (
                        <td
                          key={p.id}
                          className={`spec-value ${diff ? "diff" : ""}`}
                        >
                          {getDisplayValue(p, row.key)}
                        </td>
                      ))}
                    </tr>
                  </React.Fragment>
                );
              })}

              {visibleRows.length === 0 && (
                <tr>
                  <td
                    colSpan={selected.length}
                    style={{ padding: "14px", textAlign: "center" }}
                    className="muted"
                  >
                    No differences found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer actions */}
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
