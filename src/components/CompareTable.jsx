import React from "react";

export default function CompareTable({ selected }) {
  if (selected.length < 2) return null;

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
    return product.features[key];
  };

  const isDifferent = (key) => {
    const values = selected.map((p) => getValue(p, key));
    return new Set(values).size > 1;
  };

  return (
    <div className="compare-table-wrap">
      <h2 className="section-title">Comparison</h2>

      <div className="table-scroll">
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

      <p className="muted small">
        *Highlighted rows show differences between selected products.
      </p>
    </div>
  );
}
