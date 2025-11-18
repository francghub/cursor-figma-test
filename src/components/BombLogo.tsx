import React from "react";

interface BombLogoProps {
  size?: number;
  color?: string;
  animated?: boolean;
  speed?: number;
  className?: string;
}

export default function BombLogo({
  size = 80,
  color = "white",
  animated = false,
  speed = 1.5,
  className = "",
}: BombLogoProps) {
  const sparkStyle = (delay: number): React.CSSProperties => ({
    animation: animated ? `spark ${speed}s infinite` : "none",
    animationDelay: animated ? `${delay}s` : "0s",
  });

  return (
    <div className={`bomb-logo-container ${className}`} style={{ display: 'flex', justifyContent: 'center', margin: '2rem auto' }}>
      <svg
        width={size}
        height={size * 1.3}
        viewBox="0 0 200 260"
        fill="none"
        stroke={color}
        strokeWidth={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <style>
          {`
            @keyframes spark {
              0%   { opacity: 0; }
              15%  { opacity: 1; }
              30%  { opacity: 0; }
              100% { opacity: 0; }
            }
          `}
        </style>
        {/* Fuse */}
        <path d="M110 70c0 20 -20 20 -20 0" />
        {/* Animated spark lines */}
        <line
          x1="130"
          y1="40"
          x2="160"
          y2="20"
          style={sparkStyle(0)}
        />
        <line
          x1="140"
          y1="65"
          x2="180"
          y2="65"
          style={sparkStyle(0.3)}
        />
        <line
          x1="130"
          y1="90"
          x2="160"
          y2="115"
          style={sparkStyle(0.6)}
        />
        {/* Bomb Body */}
        <circle cx="100" cy="160" r="80" />
        {/* Asterisk */}
        <line x1="100" y1="110" x2="100" y2="210" />
        <line x1="60" y1="135" x2="140" y2="185" />
        <line x1="60" y1="185" x2="140" y2="135" />
      </svg>
    </div>
  );
}

