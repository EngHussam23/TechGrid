import React from "react";

type IconProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  size?: number;
  color?: string;
};

function RectangleList({
  className,
  style,
  onClick,
  size = 24,
  color = "none",
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
      <path d="M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4ZM7 16C6.448 16 6 15.552 6 15C6 14.448 6.448 14 7 14C7.552 14 8 14.448 8 15C8 15.552 7.552 16 7 16ZM7 13C6.448 13 6 12.552 6 12C6 11.448 6.448 11 7 11C7.552 11 8 11.448 8 12C8 12.552 7.552 13 7 13ZM7 10C6.448 10 6 9.552 6 9C6 8.448 6.448 8 7 8C7.552 8 8 8.448 8 9C8 9.552 7.552 10 7 10ZM17 16H11C10.447 16 10 15.552 10 15C10 14.448 10.447 14 11 14H17C17.553 14 18 14.448 18 15C18 15.552 17.553 16 17 16ZM17 13H11C10.447 13 10 12.552 10 12C10 11.448 10.447 11 11 11H17C17.553 11 18 11.448 18 12C18 12.552 17.553 13 17 13ZM17 10H11C10.447 10 10 9.552 10 9C10 8.448 10.447 8 11 8H17C17.553 8 18 8.448 18 9C18 9.552 17.553 10 17 10Z" />
    </svg>
  );
}

export default RectangleList;
