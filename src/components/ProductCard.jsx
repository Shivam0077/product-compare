import React from "react";
import BrandIcon from "./icons/BrandIcon";
import { BatteryIcon, DisplayIcon, CameraIcon } from "./icons/SpecsIcons";

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
          <li className="spec-item">
            <BatteryIcon size={16} />
            <span>{product.features.battery}</span>
          </li>

          <li className="spec-item">
            <DisplayIcon size={16} />
            <span>{product.features.display}</span>
          </li>

          <li className="spec-item">
            <CameraIcon size={16} />
            <span>{product.features.camera}</span>
          </li>
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
