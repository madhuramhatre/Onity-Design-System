import React from "react";
// If button.css is already imported globally in .storybook/preview.js (or your
// app entry point), remove this import to avoid loading it twice.
import "./button.css";

/**
 * Maps the Figma "Type" variant to the .onity-button modifier class
 * defined in button.css.
 */
const TYPE_CLASS_MAP = {
  "Primary Filled": "primary",
  "Secondary Filled": "secondary",
  "Primary Outlined": "outline",
  "Primary Link": "link",
  "Error Filled": "danger",
  "White Outlined": "white",
};

/**
 * Maps the Figma "Size" variant to the .onity-button size modifier class.
 */
const SIZE_CLASS_MAP = {
  Regular: "regular",
  Small: "small",
};

const ButtonIcon = () => (
  <span className="onity-button__icon" aria-hidden="true">
    <img src="./assets/accessibility.svg" alt="" />
  </span>
);

/**
 * ----- Button -----
 * Prop-driven Button matching the Figma "Button" component, styled via the
 * project's real .onity-button BEM classes (button.css) — NOT Tailwind
 * arbitrary values and NOT --buttons-* custom properties (neither exists
 * in this project).
 *
 *   Type: Primary Filled | Secondary Filled | Primary Outlined | Primary Link | Error Filled | White Outlined
 *   State: Default | Hover | Pressed | Disabled
 *   Size: Regular | Small
 *
 * Note on State: Hover/Pressed are rendered here as forced modifier classes
 * (so Storybook can show them without a real mouse interaction). In actual
 * app usage the real :hover/:active states in button.css will take over
 * naturally — you generally won't pass state="Hover" from application code.
 */
export const Button = ({
  label = "Button",
  type = "Primary Filled",
  state = "Default",
  size = "Regular",
  leftIcon = false,
  rightIcon = false,
  disabled = false,
  onClick,
  ...rest
}) => {
  const isDisabled = disabled || state === "Disabled";
  const effectiveState = isDisabled ? "Disabled" : state;

  const typeClass = TYPE_CLASS_MAP[type] ?? "primary";
  const sizeClass = SIZE_CLASS_MAP[size] ?? "regular";

  const stateClass =
    effectiveState === "Hover"
      ? "onity-button--hover"
      : effectiveState === "Pressed"
      ? "onity-button--pressed"
      : effectiveState === "Disabled"
      ? "onity-button--disabled"
      : "";

  const className = [
    "onity-button",
    `onity-button--${typeClass}`,
    `onity-button--${sizeClass}`,
    stateClass,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      disabled={isDisabled}
      aria-disabled={isDisabled ? "true" : undefined}
      onClick={onClick}
      className={className}
      {...rest}
    >
      {leftIcon && <ButtonIcon />}
      <span className="onity-button__label">{label}</span>
      {rightIcon && <ButtonIcon />}
    </button>
  );
};

/**
 * ----- Full variant matrix (matches live Figma component) -----
 * 6 types x 4 states x 2 sizes = 48 combinations
 */
const TYPES = [
  "Primary Filled",
  "Secondary Filled",
  "Primary Outlined",
  "Primary Link",
  "Error Filled",
  "White Outlined",
];
const STATES = ["Default", "Hover", "Pressed", "Disabled"];
const SIZES = ["Regular", "Small"];

export const buttonVariants = TYPES.flatMap((type) =>
  STATES.flatMap((state) =>
    SIZES.map((size) => ({
      id: `${TYPE_CLASS_MAP[type]}-${state.toLowerCase()}-${size.toLowerCase()}`,
      type,
      state,
      size,
      label: "Button",
    }))
  )
);

/**
 * ----- Backward-compat exports -----
 * Kept in case other files still import these names.
 */
export const Box = Button;
export const createButton = Button;
export default Button;