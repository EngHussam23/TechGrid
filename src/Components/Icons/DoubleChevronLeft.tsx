import React from "react";

type IconProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  size?: number;
  color?: string;
};

function DoubleChevronLeft({
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
      <path d="M10.6597 19C10.3064 18.9999 9.9677 18.8526 9.71796 18.5903L4.38999 12.9972C4.14028 12.735 4 12.3794 4 12.0086C4 11.6378 4.14028 11.2822 4.38999 11.02L9.71796 5.42688C9.84083 5.29333 9.98781 5.1868 10.1503 5.11352C10.3128 5.04024 10.4876 5.00167 10.6645 5.00005C10.8413 4.99844 11.0167 5.03382 11.1804 5.10412C11.3441 5.17443 11.4928 5.27826 11.6179 5.40955C11.743 5.54084 11.8419 5.69696 11.9089 5.8688C11.9758 6.04064 12.0095 6.22477 12.008 6.41043C12.0065 6.5961 11.9697 6.77958 11.8999 6.95017C11.8301 7.12077 11.7286 7.27506 11.6014 7.40405L7.21515 12.0086L11.6014 16.6131C11.7876 16.8087 11.9144 17.0578 11.9658 17.329C12.0172 17.6002 11.9908 17.8813 11.89 18.1368C11.7892 18.3922 11.6185 18.6106 11.3995 18.7643C11.1806 18.9179 10.9231 18.9999 10.6597 19Z" />
      <path d="M18.6516 19C18.2984 18.9999 17.9597 18.8526 17.7099 18.5903L12.3819 12.9972C12.1322 12.735 11.992 12.3794 11.992 12.0086C11.992 11.6378 12.1322 11.2822 12.3819 11.02L17.7099 5.42688C17.8328 5.29333 17.9798 5.1868 18.1423 5.11352C18.3048 5.04024 18.4796 5.00167 18.6564 5.00005C18.8333 4.99844 19.0087 5.03382 19.1724 5.10412C19.3361 5.17443 19.4848 5.27826 19.6099 5.40955C19.7349 5.54084 19.8338 5.69696 19.9008 5.8688C19.9678 6.04064 20.0015 6.22477 20 6.41043C19.9984 6.5961 19.9617 6.77958 19.8919 6.95017C19.8221 7.12077 19.7206 7.27506 19.5934 7.40405L15.2071 12.0086L19.5934 16.6131C19.7796 16.8087 19.9064 17.0578 19.9578 17.329C20.0091 17.6002 19.9828 17.8813 19.882 18.1368C19.7812 18.3922 19.6105 18.6106 19.3915 18.7643C19.1725 18.9179 18.915 18.9999 18.6516 19Z" />
    </svg>
  );
}

export default DoubleChevronLeft;
