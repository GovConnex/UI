export interface Shadow {
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: string;
}

export const shadowFromProp = ({x, y, blur, spread, color}: Shadow) =>
  `${x}px ${y}px ${blur}px ${spread}px ${color};`;
