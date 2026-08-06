import React from "react";

const imgVector = "https://www.figma.com/api/mcp/asset/bde88dd5-1e69-4873-a5b4-fc057da465b9.svg";
const imgVector1 = "https://www.figma.com/api/mcp/asset/a4330e61-af97-404f-a319-ca20ce5b2e58.svg";
const imgVector2 = "https://www.figma.com/api/mcp/asset/78fa6ed3-5fbd-4d93-ba4b-ab3f10a2f336.svg";
const imgVector3 = "https://www.figma.com/api/mcp/asset/a9b3da54-9acd-4559-8219-a17f2036be3e.svg";
const imgVector4 = "https://www.figma.com/api/mcp/asset/5347ca75-3f91-4d8c-b021-a7dfd5cd7da2.svg";
const imgVector5 = "https://www.figma.com/api/mcp/asset/3b0e2098-9493-4498-a697-a15e3e0f285f.svg";
const imgVector6 = "https://www.figma.com/api/mcp/asset/bcede952-b6a8-4655-9ae9-1307b5e47919.svg";
const imgVector7 = "https://www.figma.com/api/mcp/asset/bef3fd4e-cab6-44bc-a362-a9f2c53b116b.svg";
const imgVector8 = "https://www.figma.com/api/mcp/asset/123cf551-2cf1-40cc-9ce3-19660e312a7f.svg";
const imgVector9 = "https://www.figma.com/api/mcp/asset/a4b1a86f-030b-43a3-8234-9d0243949f07.svg";
const imgVector10 = "https://www.figma.com/api/mcp/asset/04833d5d-8828-4ef3-a222-1e557c1fc8a8.svg";
const imgVector11 = "https://www.figma.com/api/mcp/asset/e9efdf43-dbdd-492b-b223-e835063cfb4f.svg";
const imgVector12 = "https://www.figma.com/api/mcp/asset/25da88f4-e651-4c90-b043-6c09cc7edc3d.svg";
const imgVector13 = "https://www.figma.com/api/mcp/asset/ae716c7b-666b-49fb-ac1f-9753fa17e506.svg";
const imgVector14 = "https://www.figma.com/api/mcp/asset/639cd63b-fe25-4710-b57c-b283620056cd.svg";
const imgVector15 = "https://www.figma.com/api/mcp/asset/0ee53cff-4c5f-4530-a1e9-f26cd3f193bc.svg";

const sizeConfig = {
  Regular: {
    minHeight: 40,
    paddingX: 16,
    paddingY: 12,
    fontSize: 14,
    iconSize: 16,
    gap: 4,
  },
  Small: {
    minHeight: 32,
    paddingX: 12,
    paddingY: 8,
    fontSize: 12,
    iconSize: 12,
    gap: 4,
  },
};

const variantStyles = {
  "Primary Filled": {
    Default: {
      Regular: { backgroundColor: "#2F20EF", textColor: "#FFFFFF", borderColor: "transparent", borderWidth: 1, iconSrc: imgVector },
      Small: { backgroundColor: "#2F20EF", textColor: "#FFFFFF", borderColor: "transparent", borderWidth: 1, iconSrc: imgVector2 },
    },
    Hover: {
      Regular: { backgroundColor: "#CFF91C", textColor: "#383838", borderColor: "transparent", borderWidth: 1, iconSrc: imgVector10 },
      Small: { backgroundColor: "#CFF91C", textColor: "#383838", borderColor: "transparent", borderWidth: 1, iconSrc: imgVector14 },
    },
    Pressed: {
      Regular: { backgroundColor: "#383838", textColor: "#FFFFFF", borderColor: "transparent", borderWidth: 1, iconSrc: imgVector },
      Small: { backgroundColor: "#383838", textColor: "#FFFFFF", borderColor: "transparent", borderWidth: 1, iconSrc: imgVector2 },
    },
    Disabled: {
      Regular: { backgroundColor: "#939393", textColor: "#FFFFFF", borderColor: "transparent", borderWidth: 1, iconSrc: imgVector },
      Small: { backgroundColor: "#939393", textColor: "#FFFFFF", borderColor: "transparent", borderWidth: 1, iconSrc: imgVector2 },
    },
  },
  "Secondary Filled": {
    Default: {
      Regular: { backgroundColor: "#CFF91C", textColor: "#383838", borderColor: "transparent", borderWidth: 1, iconSrc: imgVector10 },
      Small: { backgroundColor: "#CFF91C", textColor: "#383838", borderColor: "transparent", borderWidth: 1, iconSrc: imgVector14 },
    },
    Hover: {
      Regular: { backgroundColor: "#383838", textColor: "#FFFFFF", borderColor: "transparent", borderWidth: 1, iconSrc: imgVector },
      Small: { backgroundColor: "#383838", textColor: "#FFFFFF", borderColor: "transparent", borderWidth: 1, iconSrc: imgVector2 },
    },
    Pressed: {
      Regular: { backgroundColor: "#2F20EF", textColor: "#FFFFFF", borderColor: "transparent", borderWidth: 1, iconSrc: imgVector },
      Small: { backgroundColor: "#2F20EF", textColor: "#FFFFFF", borderColor: "transparent", borderWidth: 1, iconSrc: imgVector2 },
    },
    Disabled: {
      Regular: { backgroundColor: "#939393", textColor: "#FFFFFF", borderColor: "transparent", borderWidth: 1, iconSrc: imgVector },
      Small: { backgroundColor: "#939393", textColor: "#FFFFFF", borderColor: "transparent", borderWidth: 1, iconSrc: imgVector2 },
    },
  },
  "Primary Outlined": {
    Default: {
      Regular: { backgroundColor: "transparent", textColor: "#2F20EF", borderColor: "#2F20EF", borderWidth: 1, iconSrc: imgVector4 },
      Small: { backgroundColor: "transparent", textColor: "#2F20EF", borderColor: "#2F20EF", borderWidth: 1, iconSrc: imgVector12 },
    },
    Hover: {
      Regular: { backgroundColor: "transparent", textColor: "#383838", borderColor: "#383838", borderWidth: 1, iconSrc: imgVector10 },
      Small: { backgroundColor: "transparent", textColor: "#383838", borderColor: "#383838", borderWidth: 1, iconSrc: imgVector14 },
    },
    Pressed: {
      Regular: { backgroundColor: "transparent", textColor: "#2F20EF", borderColor: "#2F20EF", borderWidth: 1, iconSrc: imgVector4 },
      Small: { backgroundColor: "transparent", textColor: "#2F20EF", borderColor: "#2F20EF", borderWidth: 1, iconSrc: imgVector12 },
    },
    Disabled: {
      Regular: { backgroundColor: "transparent", textColor: "#939393", borderColor: "#939393", borderWidth: 1, iconSrc: imgVector6 },
      Small: { backgroundColor: "transparent", textColor: "#939393", borderColor: "#939393", borderWidth: 1, iconSrc: imgVector8 },
    },
  },
  "Primary Link": {
    Default: {
      Regular: { backgroundColor: "transparent", textColor: "#2F20EF", borderColor: "transparent", borderWidth: 0, iconSrc: imgVector4 },
      Small: { backgroundColor: "transparent", textColor: "#2F20EF", borderColor: "transparent", borderWidth: 0, iconSrc: imgVector12 },
    },
    Hover: {
      Regular: { backgroundColor: "transparent", textColor: "#383838", borderColor: "transparent", borderWidth: 0, iconSrc: imgVector10 },
      Small: { backgroundColor: "transparent", textColor: "#383838", borderColor: "transparent", borderWidth: 0, iconSrc: imgVector14 },
    },
    Pressed: {
      Regular: { backgroundColor: "transparent", textColor: "#2F20EF", borderColor: "transparent", borderWidth: 0, iconSrc: imgVector4 },
      Small: { backgroundColor: "transparent", textColor: "#2F20EF", borderColor: "transparent", borderWidth: 0, iconSrc: imgVector12 },
    },
    Disabled: {
      Regular: { backgroundColor: "transparent", textColor: "#939393", borderColor: "transparent", borderWidth: 0, iconSrc: imgVector6 },
      Small: { backgroundColor: "transparent", textColor: "#939393", borderColor: "transparent", borderWidth: 0, iconSrc: imgVector8 },
    },
  },
  "Error Filled": {
    Default: {
      Regular: { backgroundColor: "#C7040E", textColor: "#FFFFFF", borderColor: "transparent", borderWidth: 1, iconSrc: imgVector },
      Small: { backgroundColor: "#C7040E", textColor: "#FFFFFF", borderColor: "transparent", borderWidth: 1, iconSrc: imgVector2 },
    },
    Hover: {
      Regular: { backgroundColor: "#8D0209", textColor: "#FFFFFF", borderColor: "transparent", borderWidth: 1, iconSrc: imgVector },
      Small: { backgroundColor: "#8D0209", textColor: "#FFFFFF", borderColor: "transparent", borderWidth: 1, iconSrc: imgVector2 },
    },
    Pressed: {
      Regular: { backgroundColor: "#C7040E", textColor: "#FFFFFF", borderColor: "transparent", borderWidth: 1, iconSrc: imgVector },
      Small: { backgroundColor: "#C7040E", textColor: "#FFFFFF", borderColor: "transparent", borderWidth: 1, iconSrc: imgVector2 },
    },
    Disabled: {
      Regular: { backgroundColor: "#939393", textColor: "#FFFFFF", borderColor: "transparent", borderWidth: 1, iconSrc: imgVector },
      Small: { backgroundColor: "#939393", textColor: "#FFFFFF", borderColor: "transparent", borderWidth: 1, iconSrc: imgVector2 },
    },
  },
  "White Outlined": {
    Default: {
      Regular: { backgroundColor: "transparent", textColor: "#FFFFFF", borderColor: "#FFFFFF", borderWidth: 1, iconSrc: imgVector },
      Small: { backgroundColor: "transparent", textColor: "#FFFFFF", borderColor: "#FFFFFF", borderWidth: 1, iconSrc: imgVector2 },
    },
    Hover: {
      Regular: { backgroundColor: "transparent", textColor: "#939393", borderColor: "#939393", borderWidth: 1, iconSrc: imgVector6 },
      Small: { backgroundColor: "transparent", textColor: "#939393", borderColor: "#939393", borderWidth: 1, iconSrc: imgVector8 },
    },
    Pressed: {
      Regular: { backgroundColor: "transparent", textColor: "#FFFFFF", borderColor: "#FFFFFF", borderWidth: 1, iconSrc: imgVector },
      Small: { backgroundColor: "transparent", textColor: "#FFFFFF", borderColor: "#FFFFFF", borderWidth: 1, iconSrc: imgVector2 },
    },
  },
};

const buttonVariants = [];
for (const [type, states] of Object.entries(variantStyles)) {
  for (const [state, sizes] of Object.entries(states)) {
    for (const size of Object.keys(sizes)) {
      buttonVariants.push({
        type,
        state,
        size,
        label: `${type} / ${state} / ${size}`,
        disabled: state === "Disabled",
      });
    }
  }
}

const Icon = ({ src, size }) => (
  <img
    src={src}
    alt=""
    aria-hidden="true"
    style={{ width: size, height: size, display: "block", flexShrink: 0 }}
  />
);

function resolveVariant(type, state, size) {
  const variant = variantStyles[type]?.[state]?.[size];
  if (!variant) {
    return variantStyles["Primary Filled"].Default.Regular;
  }
  return variant;
}

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
  const resolvedVariant = resolveVariant(type, state, size);
  const sizeValue = sizeConfig[size];
  const isDisabled = disabled || state === "Disabled";

  return (
    <button
      type="button"
      onClick={isDisabled ? undefined : onClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: sizeValue.gap,
        borderRadius: 4,
        minHeight: sizeValue.minHeight,
        padding: `${sizeValue.paddingY}px ${sizeValue.paddingX}px`,
        fontFamily: '"Arial", sans-serif',
        fontSize: sizeValue.fontSize,
        fontWeight: 700,
        lineHeight: "normal",
        letterSpacing: "0.01em",
        cursor: isDisabled ? "not-allowed" : "pointer",
        backgroundColor: resolvedVariant.backgroundColor,
        color: resolvedVariant.textColor,
        border: `${resolvedVariant.borderWidth}px solid ${resolvedVariant.borderColor}`,
        opacity: isDisabled ? 0.7 : 1,
        boxSizing: "border-box",
        whiteSpace: "nowrap",
        transition: "transform 120ms ease, box-shadow 120ms ease",
      }}
    >
      {leftIcon ? <Icon src={resolvedVariant.iconSrc} size={sizeValue.iconSize} /> : null}
      <span>{label}</span>
      {rightIcon ? <Icon src={resolvedVariant.iconSrc} size={sizeValue.iconSize} /> : null}
    </button>
  );
}

export { buttonVariants };
export const Box = Button;
export const createButton = Button;
