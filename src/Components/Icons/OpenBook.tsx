import React from "react";

type IconProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  size?: number;
  color?: string;
};

function OpenBook({
  className,
  style,
  onClick,
  color = "none",
  size = 24,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      onClick={onClick}
      fill={color}
    >
      <path d="M11 5.1857C9.06 4.52753 3.646 3.25323 2.293 4.58034C2.10716 4.76202 2.0019 5.00794 2 5.26492V17.6851C2 17.8568 2.04621 18.0255 2.13398 18.1741C2.22175 18.3228 2.34799 18.4462 2.50001 18.5321C2.65203 18.6179 2.82447 18.6631 3.00001 18.6631C3.17554 18.6631 3.34798 18.6179 3.5 18.5321C4.559 18.2485 9.765 19.289 11 19.999V5.1857Z" />
      <path d="M21.707 4.58034C20.353 3.25421 14.94 4.52753 13 5.1857V20C14.234 19.29 19.436 18.2504 20.5 18.533C20.6521 18.6189 20.8246 18.6641 21.0002 18.6641C21.1759 18.664 21.3484 18.6188 21.5004 18.5328C21.6525 18.4469 21.7787 18.3233 21.8664 18.1745C21.9541 18.0257 22.0002 17.8569 22 17.6851V5.26492C21.9981 5.00794 21.8928 4.76202 21.707 4.58034Z" />
    </svg>
  );
}

export default OpenBook;
