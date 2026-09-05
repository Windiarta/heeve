import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = (props: P) => ({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  width: 16,
  height: 16,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.2,
  "aria-hidden": true,
  ...props,
});

export function BurgerIcon(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M1.5 4h13M1.5 8h13M1.5 12h13" strokeLinecap="square" />
    </svg>
  );
}

export function SearchIcon(props: P) {
  return (
    <svg {...base(props)}>
      <circle cx="7" cy="7" r="4.6" />
      <path d="M10.6 10.6 14.5 14.5" strokeLinecap="square" />
    </svg>
  );
}

export function PinIcon(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M8 1.5c-2.6 0-4.7 2-4.7 4.6 0 3.4 4.7 8.4 4.7 8.4s4.7-5 4.7-8.4c0-2.6-2.1-4.6-4.7-4.6Z" />
      <circle cx="8" cy="6" r="1.8" />
    </svg>
  );
}

export function BagIcon(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M3 5h10l.8 9.5H2.2L3 5Z" />
      <path d="M5.6 7V4.4a2.4 2.4 0 0 1 4.8 0V7" />
    </svg>
  );
}

export function ArrowBoldLeftIcon(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M14.5 8h-13M6 3.5 1.5 8 6 12.5" strokeLinecap="square" />
    </svg>
  );
}

export function ArrowBoldRightIcon(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M1.5 8h13M10 3.5 14.5 8 10 12.5" strokeLinecap="square" />
    </svg>
  );
}

export function PauseIcon(props: P) {
  return (
    <svg {...base(props)} width={14} height={14} viewBox="0 0 14 14" fill="currentColor" stroke="none">
      <rect x="3" y="2" width="3" height="10" />
      <rect x="8" y="2" width="3" height="10" />
    </svg>
  );
}

export function PlayIcon(props: P) {
  return (
    <svg {...base(props)} width={14} height={14} viewBox="0 0 14 14" fill="currentColor" stroke="none">
      <path d="M3 1.5 12 7 3 12.5V1.5Z" />
    </svg>
  );
}

export function CloseIcon(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M3 3l10 10M13 3 3 13" strokeLinecap="square" />
    </svg>
  );
}
