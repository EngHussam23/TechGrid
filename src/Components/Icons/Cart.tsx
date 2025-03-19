import React from "react";

type IconProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  size?: number;
  color?: string;
};

function Cart({
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
      <path d="M0.0538828 0.641837C0.227426 0.141671 0.76824 -0.121251 1.26184 0.0546063L1.64255 0.190233C2.4213 0.467644 3.08274 0.703264 3.60325 0.962076C4.15983 1.23881 4.63711 1.57972 4.99607 2.11201C5.35225 2.64019 5.4993 3.21966 5.56717 3.85502C5.59755 4.13943 5.61358 4.45423 5.62203 4.80025H19.0596C21.188 4.80025 23.1039 4.80025 23.6646 5.5389C24.2254 6.27757 24.0062 7.39054 23.5677 9.6165L22.9364 12.7201C22.5384 14.6771 22.3393 15.6555 21.6424 16.231C20.9456 16.8065 19.9597 16.8065 17.9879 16.8065H11.2896C7.76679 16.8065 6.0054 16.8065 4.91101 15.6368C3.81661 14.4671 3.73674 13.2246 3.73674 9.45939V6.12928C3.73674 5.18216 3.73545 4.5483 3.68346 4.06163C3.63378 3.59655 3.54574 3.36434 3.43173 3.19526C3.3205 3.03032 3.15165 2.87618 2.76863 2.68574C2.36084 2.48298 1.80663 2.28388 0.963346 1.98344L0.6334 1.86589C0.139802 1.69004 -0.119648 1.14202 0.0538828 0.641837Z" />
      <path d="M6.89486 20.16C7.94129 20.16 8.78957 21.0197 8.78957 22.08C8.78957 23.1404 7.94129 24 6.89486 24C5.84843 24 5.00015 23.1404 5.00015 22.08C5.00015 21.0197 5.84843 20.16 6.89486 20.16Z" />
      <path d="M18.2631 20.16C19.3095 20.16 20.1579 21.0196 20.1579 22.08C20.1579 23.1404 19.3095 24 18.2631 24C17.2168 24 16.3684 23.1404 16.3684 22.08C16.3684 21.0196 17.2168 20.16 18.2631 20.16Z" />
    </svg>
  );
}

export default Cart;
