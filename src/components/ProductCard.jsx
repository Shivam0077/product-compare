import React from "react";
import BrandIcon from "./icons/BrandIcon";

export default function ProductCard({ product, isSelected, onToggleCompare }) {
  return (
    <div className="card">
      <img className="card-img" src={product.image} alt={product.name} />
      <div className="card-body">
        <div className="card-title">
        <span className="card-title">
         <BrandIcon brand={product.brand} size={16} />

          <h3>{product.name}</h3>
          </span>

        </div>

        <p className="price">₹{product.price.toLocaleString("en-IN")}</p>



        <ul className="feature-list">
          <li>🔋 {product.features.battery}</li>
          <li>📺 {product.features.display}</li>
          <li>📷 {product.features.camera}</li>
        </ul>

        <button
          className={`btn ${isSelected ? "btn-danger" : "btn-primary"}`}
          onClick={() => onToggleCompare(product)}
        >
          {isSelected ? "Remove" : "Add to Compare"}
        </button>
      </div>
    </div>
  );
}
