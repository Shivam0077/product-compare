import React from "react";

/* =========================
   ICONS (INLINE)
========================= */

function AppleIcon({ size = 18, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Apple"
      role="img"
    >
      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
    </svg>
  );
}

function RealmeIcon({ size = 18 }) {
  const realmeBase64 =
    "data:image/png;base64,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";

  return (
    <img
      src={realmeBase64}
      alt="Realme"
      width={size}
      height={size}
      loading="lazy"
      style={{
        width: size,
        height: size,
        objectFit: "contain",
        borderRadius: 6,
        display: "inline-block",
      }}
    />
  );
}

function MotorolaIcon({ size = 18 }) {
  const motorolaBase64 =
    "data:image/png;base64,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";

  return (
    <img
      src={motorolaBase64}
      alt="Motorola"
      width={size}
      height={size}
      loading="lazy"
      style={{
        width: size,
        height: size,
        objectFit: "contain",
        borderRadius: 6,
        display: "inline-block",
      }}
    />
  );
}



function XiaomiIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Xiaomi"
      role="img"
      style={{ borderRadius: 6, overflow: "hidden" }}
    >
      <path fill="#f57921" d="M0 0h800v800H0z" />
      <path
        d="M541.82 603.47V311.85c0-66.258-53.699-119.979-119.95-119.979H84.68c-2.601 0-4.705 2.094-4.705 4.667v406.93c0 2.573 2.104 4.658 4.705 4.658h90.066a4.693 4.693 0 0 0 4.705-4.687V284.048a4.7 4.7 0 0 1 4.706-4.695h193.68c36.367 0 65.865 29.479 65.865 65.855v258.22a4.69 4.69 0 0 0 4.688 4.688h88.744c2.58 0 4.689-2.091 4.689-4.66"
        fill="#faf9f5"
      />
      <path
        d="M359.94 603.44a4.676 4.676 0 0 1-4.688 4.687h-90.046c-2.601 0-4.706-2.095-4.706-4.687V358.69a4.7 4.7 0 0 1 4.706-4.695h90.046a4.684 4.684 0 0 1 4.688 4.695v244.76-.01z"
        fill="#faf9f5"
      />
      <path
        d="M720.02 603.44c0 2.592-2.104 4.687-4.707 4.687h-90.026c-2.603 0-4.727-2.095-4.727-4.687V196.58c0-2.602 2.124-4.705 4.727-4.705h90.026a4.702 4.702 0 0 1 4.707 4.705v406.86z"
        fill="#faf9f5"
      />
    </svg>
  );
}

function GoogleIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-3 0 262 262"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      aria-label="Google"
      role="img"
    >
      <path
        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
        fill="#4285F4"
      />
      <path
        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
        fill="#34A853"
      />
      <path
        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
        fill="#FBBC05"
      />
      <path
        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
        fill="#EB4335"
      />
    </svg>
  );
}

/* ✅ SAMSUNG (YOUR SVG) */
function SamsungIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Samsung"
      role="img"
    >
      <path
        d="M292.588 332.165c3.486 8.609 2.419 19.708 .783 26.396c-2.988 11.811-11.028 23.906 -34.65 23.906c-22.341 0-35.859 -12.807 -35.859 -32.302l0-34.436l-95.482 0l-.071 27.535c0 79.331 62.469 103.309 129.421 103.309c64.39 0 117.396-21.986 125.792 -81.324c4.34-30.736 1.067 -50.872 -.356 -58.485c-15.013-74.493 -150.124 -96.763 -160.157 -138.385c-1.708-7.115 -1.21 -14.728 -.356 -18.783c2.49-11.313 10.246 -23.835 32.515 -23.835c20.776 0 33.084 12.878 33.084 32.302c0 6.546 0 21.985 0 21.985l88.723 0l0-24.973c0-77.553 -69.584 -89.648 -119.958 -89.648c-63.323 0-115.048 20.918 -124.511 78.833c-2.561 16.009-2.917 30.238 .783 48.097c15.582 72.643 141.943 93.704 160.299 139.808z"
        fill="#034ea2"
      />
    </svg>
  );
}




function OnePlusIcon({ size = 18, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="OnePlus"
      fill={color}
    >
      <path d="M0 3.74V24h20.26V12.428h-2.256v9.317H2.254V5.995h9.318V3.742zM18.004 0v3.74h-3.758v2.256h3.758v3.758h2.255V5.996H24V3.74h-3.758V0zm-6.45 18.756V8.862H9.562c0 .682-.228 1.189-.577 1.504-.367.297-.91.437-1.556.437h-.245v1.625h2.133v6.31h2.237z" />
    </svg>
  );
}

/* =========================
   NOTHING ICON (IMAGE)
========================= */

function NothingIcon({ size = 18, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Nothing"
      role="img"
      fill={color}
    >
      <path d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2zm11.762 44.508h-6.061L25.889 25.92v20.588h-5.65V17.492h6.357l11.518 20.231V17.492h5.648v29.016z" />
    </svg>
  );
}


/* =========================
   BRAND ICON (PUBLIC)
========================= */

export default function BrandIcon({ brand, size = 18 }) {
  if (brand === "Apple") return <AppleIcon size={size} />;
  if (brand === "Xiaomi") return <XiaomiIcon size={size} />;
  if (brand === "Google") return <GoogleIcon size={size} />;
  if (brand === "Samsung") return <SamsungIcon size={size} />;
  if (brand === "OnePlus") return <OnePlusIcon size={size} />;
  if (brand === "Nothing") return <NothingIcon size={size} />;
  if (brand === "Realme") return <RealmeIcon size={size} />;
  if (brand === "Motorola") return <MotorolaIcon size={size} />;
  
  

  // fallback badge
  return (
    <span
      style={{
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        border: "1px solid var(--border)",
        fontSize: 10,
        color: "var(--muted)",
        background: "var(--bg)",
      }}
      title={brand}
    >
      {brand?.[0] ?? "?"}
    </span>
  );
}
