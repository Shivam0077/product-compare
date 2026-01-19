import React from "react";

/* =========================
   BATTERY ICON
========================= */
export function BatteryIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Battery"
      role="img"
      style={{ display: "inline-block" }}
    >
      {/* body */}
      <rect
        x="2"
        y="7"
        width="18"
        height="10"
        rx="2"
        stroke={color}
        strokeWidth="2"
      />
      {/* cap */}
      <path
        d="M22 10v4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* inner level */}
      <rect x="4.5" y="9.2" width="9" height="5.6" rx="1" fill={color} />
    </svg>
  );
}

/* =========================
   DISPLAY ICON
========================= */
export function DisplayIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Display"
      role="img"
      style={{ display: "inline-block" }}
    >
      <path
        d="M11 18H13M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================
   CAMERA ICON
========================= */
export function CameraIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Camera"
      role="img"
      style={{ display: "inline-block" }}
    >
      {/* body */}
      <path
        d="M7 7h2l1-2h4l1 2h2a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3Z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* lens */}
      <path
        d="M12 17a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"
        stroke={color}
        strokeWidth="2"
      />
      {/* flash */}
      <path
        d="M17.5 10.5h.01"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
