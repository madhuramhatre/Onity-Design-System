import React from "react";
import "./button.css";

const sizeConfig = {
  Regular: {
    minHeight: 40,
    paddingX: 16,
    paddingY: 10,
    fontSize: 14,
    iconSize: 16,
    gap: 8,
  },
  Small: {
    minHeight: 32,
    paddingX: 12,
    paddingY: 8,
    fontSize: 12,
    iconSize: 12,
    gap: 6,
  },
};

const variantAliases = {
  "primary filled": "primary",
  "primary": "primary",
  "secondary filled": "secondary",
  "secondary": "secondary",
  "primary outlined": "outline",
  "outline": "outline",
  "primary link": "link",
  "link": "link",
  "error filled": "danger",
  "danger": "danger",
  "white outlined": "white",
  "white": "white",
};

function normalizeVariant(type) {
  const normalized = String(type ?? "Primary Filled").trim().toLowerCase();
  return variantAliases[normalized] ?? "primary";
}

function normalizeState(state, disabled) {
  if (disabled) {
    return "disabled";
  }

  const normalized = String(state ?? "Default").trim().toLowerCase();
  if (normalized.includes("hover")) {
    return "hover";
  }
  if (normalized.includes("pressed")) {
    return "pressed";
  }
  return "default";
}

function normalizeSize(size) {
  return String(size ?? "Regular").trim().toLowerCase() === "small" ? "small" : "regular";
}

const Icon = ({ direction = "right" }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={`onity-button__icon onity-button__icon--${direction}`}>
    <path d="M7 17L17 7" />
    <path d="M10 7h7v7" />
  </svg>
);

export const buttonVariants = [
  { type: "Primary Filled", state: "Default", size: "Regular", label: "Primary / Default / Regular" },
  { type: "Primary Filled", state: "Hover", size: "Regular", label: "Primary / Hover / Regular" },
  { type: "Primary Filled", state: "Pressed", size: "Regular", label: "Primary / Pressed / Regular" },
  { type: "Primary Filled", state: "Disabled", size: "Regular", label: "Primary / Disabled / Regular" },
  { type: "Primary Filled", state: "Default", size: "Small", label: "Primary / Default / Small" },
  { type: "Secondary Filled", state: "Default", size: "Regular", label: "Secondary / Default / Regular" },
  { type: "Secondary Filled", state: "Hover", size: "Regular", label: "Secondary / Hover / Regular" },
  { type: "Secondary Filled", state: "Pressed", size: "Regular", label: "Secondary / Pressed / Regular" },
  { type: "Secondary Filled", state: "Disabled", size: "Regular", label: "Secondary / Disabled / Regular" },
  { type: "Primary Outlined", state: "Default", size: "Regular", label: "Outline / Default / Regular" },
  { type: "Primary Outlined", state: "Hover", size: "Regular", label: "Outline / Hover / Regular" },
  { type: "Primary Outlined", state: "Pressed", size: "Regular", label: "Outline / Pressed / Regular" },
  { type: "Primary Outlined", state: "Disabled", size: "Regular", label: "Outline / Disabled / Regular" },
  { type: "Primary Link", state: "Default", size: "Regular", label: "Link / Default / Regular" },
  { type: "Error Filled", state: "Default", size: "Regular", label: "Danger / Default / Regular" },
  { type: "White Outlined", state: "Default", size: "Regular", label: "White / Default / Regular" },
];

export default function Button({
  label = "Button",
  type = "Primary Filled",
  state = "Default",
  size = "Regular",
  leftIcon = false,
  rightIcon = false,
  disabled = false,
  onClick,
  className = "",
}) {
  const variant = normalizeVariant(type);
  const visualState = normalizeState(state, disabled);
  const normalizedSize = normalizeSize(size);
  const sizeValue = sizeConfig[normalizedSize === "small" ? "Small" : "Regular"];
  const isDisabled = disabled || visualState === "disabled";

  return (
    <button
      type="button"
      onClick={isDisabled ? undefined : onClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      className={["onity-button", `onity-button--${variant}`, `onity-button--${normalizedSize}`, visualState !== "default" ? `onity-button--${visualState}` : "", className].filter(Boolean).join(" ")}
    >
      {leftIcon ? <Icon direction="left" /> : null}
      <span className="onity-button__label">{label}</span>
      {rightIcon ? <Icon direction="right" /> : null}
      <style>{`
        .onity-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: ${sizeValue.gap}px;
          min-height: ${sizeValue.minHeight}px;
          padding: ${sizeValue.paddingY}px ${sizeValue.paddingX}px;
          border: 1px solid transparent;
          border-radius: 6px;
          font-family: Arial, sans-serif;
          font-size: ${sizeValue.fontSize}px;
          font-weight: 700;
          line-height: 1.2;
          cursor: pointer;
          transition: transform 120ms ease, box-shadow 120ms ease, background-color 120ms ease, color 120ms ease, border-color 120ms ease;
          white-space: nowrap;
          box-sizing: border-box;
        }

        .onity-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(56, 56, 56, 0.12);
        }

        .onity-button:active {
          transform: translateY(0);
          box-shadow: none;
        }

        .onity-button:disabled,
        .onity-button--disabled {
          cursor: not-allowed;
          opacity: 0.65;
          box-shadow: none;
        }

        .onity-button--primary {
          background-color: #2F20EF;
          color: #FFFFFF;
        }
        .onity-button--primary.onity-button--hover {
          background-color: #1d12d0;
          color: #FFFFFF;
        }
        .onity-button--primary.onity-button--pressed {
          background-color: #150cb8;
          color: #FFFFFF;
        }
        .onity-button--primary.onity-button--disabled {
          background-color: #E0E0E0;
          color: #939393;
        }

        .onity-button--secondary {
          background-color: #939393;
          color: #FFFFFF;
        }
        .onity-button--secondary.onity-button--hover {
          background-color: #7a7a7a;
          color: #FFFFFF;
        }
        .onity-button--secondary.onity-button--pressed {
          background-color: #616161;
          color: #FFFFFF;
        }
        .onity-button--secondary.onity-button--disabled {
          background-color: #E0E0E0;
          color: #939393;
        }

        .onity-button--outline {
          background-color: transparent;
          color: #2F20EF;
          border-color: #2F20EF;
        }
        .onity-button--outline.onity-button--hover {
          color: #1d12d0;
          border-color: #1d12d0;
        }
        .onity-button--outline.onity-button--pressed {
          color: #150cb8;
          border-color: #150cb8;
        }
        .onity-button--outline.onity-button--disabled {
          color: #939393;
          border-color: #939393;
        }

        .onity-button--link {
          background-color: transparent;
          border-color: transparent;
          color: #2F20EF;
          padding-left: 0;
          padding-right: 0;
          min-height: auto;
        }
        .onity-button--link.onity-button--hover {
          color: #1d12d0;
        }
        .onity-button--link.onity-button--pressed {
          color: #150cb8;
        }
        .onity-button--link.onity-button--disabled {
          color: #939393;
        }

        .onity-button--danger {
          background-color: #C7040E;
          color: #FFFFFF;
        }
        .onity-button--danger.onity-button--hover {
          background-color: #8D0209;
          color: #FFFFFF;
        }
        .onity-button--danger.onity-button--pressed {
          background-color: #C7040E;
          color: #FFFFFF;
        }
        .onity-button--danger.onity-button--disabled {
          background-color: #EDEDED;
          color: #6B6B6B;
        }

        .onity-button--white {
          background-color: transparent;
          color: #FFFFFF;
          border-color: #FFFFFF;
        }
        .onity-button--white.onity-button--hover {
          color: #E5E5E5;
          border-color: #E5E5E5;
        }
        .onity-button--white.onity-button--pressed {
          color: #FFFFFF;
          border-color: #FFFFFF;
        }
        .onity-button--white.onity-button--disabled {
          color: #D1D1D1;
          border-color: #D1D1D1;
        }

        .onity-button__icon {
          width: 16px;
          height: 16px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
          flex-shrink: 0;
        }

        .onity-button__icon--left {
          transform: rotate(180deg);
        }
      `}</style>
    </button>
  );
}

export const Box = Button;
export const createButton = Button;