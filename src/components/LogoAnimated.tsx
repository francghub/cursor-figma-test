import React from 'react';
import './LogoAnimated.css';

interface LogoAnimatedProps {
  size?: number;
  className?: string;
  onClick?: () => void;
}

const LogoAnimated: React.FC<LogoAnimatedProps> = ({ size = 24, className = '', onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`logo-animated-container ${className}`}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <svg 
        width={size} 
        height={size * 1.3} 
        viewBox="0 0 200 260" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
      >
        {/* Bomb Body */}
        <circle cx="100" cy="150" r="70" stroke="currentColor" strokeWidth="10"/>
        {/* Asterisk */}
        <path 
          d="M100 110 V190 M60 150 H140 M75 125 L125 175 M125 125 L75 175"
          stroke="currentColor" 
          strokeWidth="10" 
          strokeLinecap="round"
        />
        {/* Fuse */}
        <path 
          d="M100 80 C100 40 140 40 140 70" 
          stroke="currentColor" 
          strokeWidth="10" 
          fill="none"
        />
        {/* Animated Sparks */}
        <line 
          className="spark spark-1" 
          x1="140" y1="25" x2="140" y2="5" 
          stroke="currentColor" 
          strokeWidth="10" 
          strokeLinecap="round"
        />
        <line 
          className="spark spark-2" 
          x1="165" y1="35" x2="185" y2="25" 
          stroke="currentColor" 
          strokeWidth="10" 
          strokeLinecap="round"
        />
        <line 
          className="spark spark-3" 
          x1="165" y1="55" x2="185" y2="65" 
          stroke="currentColor" 
          strokeWidth="10" 
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default LogoAnimated;
