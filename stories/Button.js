import { useState } from "react";

type ButtonState =
  | "primary-filled-default"
  | "primary-filled-hover"
  | "primary-filled-pressed"
  | "primary-filled-disabled"
  | "secondary-filled-default"
  | "secondary-filled-hover"
  | "secondary-filled-pressed"
  | "secondary-filled-disabled"
  | "primary-outlined-default"
  | "primary-outlined-hover"
  | "primary-outlined-pressed"
  | "primary-outlined-disabled"
  | "primary-link-default"
  | "primary-link-hover"
  | "primary-link-pressed"
  | "primary-link-disabled"
  | "dark-default"
  | "dark-hover"
  | "dark-pressed";

interface ButtonVariant {
  id: ButtonState;
  label: string;
  leftIcon: string;
  rightIcon: string;
  buttonClassName: string;
  textClassName: string;
  wrapperClassName?: string;
  disabled?: boolean;
}

const buttonVariants: ButtonVariant[] = [
  {
    id: "primary-filled-default",
    label: "Button",
    leftIcon: "/keyboard-arrow-left-3.svg",
    rightIcon: "/keyboard-arrow-right-3.svg",
    wrapperClassName: "shadow-elevation-lvl-1",
    buttonClassName: "bg-[color:var(--buttons-primary-filled-default-bg)]",
    textClassName: "text-[color:var(--buttons-primary-filled-default-text)]",
  },
  {
    id: "primary-filled-hover",
    label: "Button",
    leftIcon: "/keyboard-arrow-left.svg",
    rightIcon: "/keyboard-arrow-right-4.svg",
    wrapperClassName: "shadow-elevation-lvl-2",
    buttonClassName: "bg-[color:var(--buttons-primary-filled-hover-bg)]",
    textClassName: "text-[color:var(--buttons-primary-filled-hover-text)]",
  },
  {
    id: "primary-filled-pressed",
    label: "Button",
    leftIcon: "/keyboard-arrow-left-3.svg",
    rightIcon: "/keyboard-arrow-right-3.svg",
    wrapperClassName: "shadow-elevation-lvl-3",
    buttonClassName: "bg-[color:var(--buttons-primary-filled-pressed-bg)]",
    textClassName: "text-[color:var(--buttons-primary-filled-pressed-text)]",
  },
  {
    id: "primary-filled-disabled",
    label: "Button",
    leftIcon: "/keyboard-arrow-left-4.svg",
    rightIcon: "/keyboard-arrow-right-2.svg",
    buttonClassName: "bg-[color:var(--buttons-primary-filled-disabled-AA-bg)]",
    textClassName:
      "text-[color:var(--buttons-primary-filled-disabled-AA-text)]",
    disabled: true,
  },
  {
    id: "secondary-filled-default",
    label: "Button",
    leftIcon: "/keyboard-arrow-left.svg",
    rightIcon: "/keyboard-arrow-right-4.svg",
    wrapperClassName: "shadow-elevation-lvl-1",
    buttonClassName: "bg-[color:var(--buttons-secondary-filled-default-bg)]",
    textClassName: "text-[color:var(--buttons-secondary-filled-default-text)]",
  },
  {
    id: "secondary-filled-hover",
    label: "Button",
    leftIcon: "/keyboard-arrow-left-3.svg",
    rightIcon: "/keyboard-arrow-right-3.svg",
    wrapperClassName: "shadow-elevation-lvl-2",
    buttonClassName: "bg-[color:var(--buttons-secondary-filled-hover-bg)]",
    textClassName: "text-[color:var(--buttons-secondary-filled-hover-text)]",
  },
  {
    id: "secondary-filled-pressed",
    label: "Button",
    leftIcon: "/keyboard-arrow-left-3.svg",
    rightIcon: "/keyboard-arrow-right-3.svg",
    wrapperClassName: "shadow-elevation-lvl-3",
    buttonClassName: "bg-[color:var(--buttons-secondary-filled-pressed-bg)]",
    textClassName: "text-[color:var(--buttons-secondary-filled-pressed-text)]",
  },
  {
    id: "secondary-filled-disabled",
    label: "Button",
    leftIcon: "/keyboard-arrow-left-4.svg",
    rightIcon: "/keyboard-arrow-right-2.svg",
    buttonClassName:
      "bg-[color:var(--buttons-secondary-filled-disabled-AA-bg)]",
    textClassName:
      "text-[color:var(--buttons-secondary-filled-disabled-AA-text)]",
    disabled: true,
  },
  {
    id: "primary-outlined-default",
    label: "Button",
    leftIcon: "/keyboard-arrow-left-2.svg",
    rightIcon: "/keyboard-arrow-right.svg",
    wrapperClassName: "shadow-elevation-lvl-1",
    buttonClassName:
      "bg-[color:var(--buttons-primary-outlined-default-bg)] border border-solid border-[color:var(--buttons-primary-outlined-default-stroke)]",
    textClassName: "text-[color:var(--buttons-primary-outlined-default-text)]",
  },
  {
    id: "primary-outlined-hover",
    label: "Button",
    leftIcon: "/keyboard-arrow-left.svg",
    rightIcon: "/keyboard-arrow-right-4.svg",
    wrapperClassName: "shadow-elevation-lvl-2",
    buttonClassName:
      "bg-[color:var(--buttons-primary-outlined-hover-bg)] border border-solid border-[color:var(--buttons-primary-outlined-hover-stroke)]",
    textClassName: "text-[color:var(--buttons-primary-outlined-hover-text)]",
  },
  {
    id: "primary-outlined-pressed",
    label: "Button",
    leftIcon: "/image.svg",
    rightIcon: "/keyboard-arrow-right-5.svg",
    wrapperClassName: "shadow-elevation-lvl-3",
    buttonClassName:
      "bg-[color:var(--buttons-primary-outlined-pressed-bg)] border-2 border-solid border-[color:var(--buttons-primary-outlined-pressed-stroke)]",
    textClassName: "text-[color:var(--buttons-primary-outlined-pressed-text)]",
  },
  {
    id: "primary-outlined-disabled",
    label: "Button",
    leftIcon: "/keyboard-arrow-left-4.svg",
    rightIcon: "/keyboard-arrow-right-2.svg",
    buttonClassName:
      "bg-[color:var(--buttons-primary-outlined-disabled-AA-bg)] border border-solid border-[color:var(--buttons-primary-outlined-disabled-AA-stroke)]",
    textClassName:
      "text-[color:var(--buttons-primary-outlined-disabled-AA-text)]",
    disabled: true,
  },
  {
    id: "primary-link-default",
    label: "Button",
    leftIcon: "/keyboard-arrow-left-2.svg",
    rightIcon: "/keyboard-arrow-right.svg",
    wrapperClassName: "shadow-elevation-lvl-1",
    buttonClassName: "bg-[color:var(--buttons-primary-link-default-bg)]",
    textClassName: "text-[color:var(--buttons-primary-link-default-text)]",
  },
  {
    id: "primary-link-hover",
    label: "Button",
    leftIcon: "/keyboard-arrow-left.svg",
    rightIcon: "/keyboard-arrow-right-4.svg",
    wrapperClassName: "shadow-elevation-lvl-2",
    buttonClassName: "bg-[color:var(--buttons-primary-link-hover-bg)]",
    textClassName: "text-[color:var(--buttons-primary-link-hover-text)]",
  },
  {
    id: "primary-link-pressed",
    label: "Button",
    leftIcon: "/image.svg",
    rightIcon: "/keyboard-arrow-right-5.svg",
    wrapperClassName: "shadow-elevation-lvl-3",
    buttonClassName: "bg-[color:var(--buttons-primary-link-pressed-bg)]",
    textClassName: "text-[color:var(--buttons-primary-link-pressed-text)]",
  },
  {
    id: "primary-link-disabled",
    label: "Button",
    leftIcon: "/keyboard-arrow-left-4.svg",
    rightIcon: "/keyboard-arrow-right-2.svg",
    buttonClassName: "bg-[color:var(--buttons-primary-link-disabled-AA-bg)]",
    textClassName: "text-[color:var(--buttons-primary-link-disabled-AA-text)]",
    disabled: true,
  },
  {
    id: "dark-default",
    label: "Button",
    leftIcon: "/keyboard-arrow-left-3.svg",
    rightIcon: "/keyboard-arrow-right-3.svg",
    wrapperClassName: "shadow-elevation-lvl-1",
    buttonClassName: "",
    textClassName: "text-[color:var(--color-palette-base-white)]",
  },
  {
    id: "dark-hover",
    label: "Button",
    leftIcon: "/keyboard-arrow-left-3.svg",
    rightIcon: "/keyboard-arrow-right-3.svg",
    wrapperClassName: "shadow-elevation-lvl-2",
    buttonClassName: "bg-[color:var(--color-palette-gray-800)]",
    textClassName: "text-[color:var(--color-palette-base-white)]",
  },
  {
    id: "dark-pressed",
    label: "Button",
    leftIcon: "/keyboard-arrow-left-3.svg",
    rightIcon: "/keyboard-arrow-right-3.svg",
    wrapperClassName: "shadow-elevation-lvl-3",
    buttonClassName: "bg-[color:var(--color-palette-gray-900)]",
    textClassName: "text-[color:var(--color-palette-base-white)]",
  },
];

const ButtonIcon = ({ src }: { src: string }): JSX.Element => (
  <span
    aria-hidden="true"
    className="relative h-6 w-6 shrink-0 bg-[100%_100%]"
    style={{ backgroundImage: `url(${src})` }}
  />
);

export const Box = (): JSX.Element => {
  const [announcement, setAnnouncement] = useState("");

  const handleButtonClick = (label: string) => {
    setAnnouncement(`${label} activated`);
  };

  return (
    <main className="h-[898px] w-[867px]">
      <section
        aria-label="Button component variants"
        className="fixed left-10 top-10 flex w-[867px] flex-wrap items-start gap-x-[89px] gap-y-[165px] overflow-hidden rounded-[5px] border border-dashed border-[#9747ff] px-4 py-[19px]"
      >
        {buttonVariants.map((variant) => (
          <div
            key={variant.id}
            className={`inline-flex items-start ${variant.wrapperClassName ?? ""}`}
          >
            <button
              type="button"
              disabled={variant.disabled}
              aria-disabled={variant.disabled ? "true" : undefined}
              onClick={() => handleButtonClick(variant.label)}
              className={`all-unset box-border inline-flex h-10 items-center justify-center gap-[var(--buttons-button-base-icon-text-icon-gap)] rounded-[var(--primitives-sizing-size-2)] pt-[var(--buttons-button-base-padding-top)] pr-[var(--buttons-button-base-padding-right)] pb-[var(--buttons-button-base-padding-bottom)] pl-[var(--buttons-button-base-padding-left)] ${variant.buttonClassName}`}
            >
              <ButtonIcon src={variant.leftIcon} />
              <span className="inline-flex flex-[0_0_auto] items-center justify-center gap-2.5">
                <span
                  className={`relative mt-[-1px] flex w-fit items-center whitespace-nowrap font-arial-button-2 text-[length:var(--arial-button-2-font-size)] font-[number:var(--arial-button-2-font-weight)] tracking-[var(--arial-button-2-letter-spacing)] leading-[var(--arial-button-2-line-height)] [font-style:var(--arial-button-2-font-style)] ${variant.textClassName}`}
                >
                  {variant.label}
                </span>
              </span>
              <ButtonIcon src={variant.rightIcon} />
            </button>
          </div>
        ))}
      </section>
      <p className="sr-only" aria-live="polite">
        {announcement}
      </p>
    </main>
  );
};
