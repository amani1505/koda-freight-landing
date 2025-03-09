
import React from "react";

interface KodaLogoProps {
  className?: string;
}

const KodaLogo: React.FC<KodaLogoProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g>
        <path
          d="M20,20 L40,20 L40,50 L60,20 L85,20 L60,50 L85,80 L60,80 L40,50 L40,80 L20,80 Z"
          fill="url(#koda-gradient)"
        />
        <circle cx="75" cy="30" r="10" fill="#ea7600" />
      </g>
      <defs>
        <linearGradient id="koda-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#27094b" />
          <stop offset="100%" stopColor="#ea7600" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default KodaLogo;
