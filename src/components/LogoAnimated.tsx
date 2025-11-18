interface LogoAnimatedProps {
  size?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
}

export default function LogoAnimated({ 
  size = 24, 
  color = "currentColor",
  className = "",
  onClick
}: LogoAnimatedProps) {
  return (
    <svg 
      width={size} 
      height={size * 1.3} 
      viewBox="0 0 200 260" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      style={{ display: 'block', cursor: onClick ? 'pointer' : 'default' }}
    >
      <style>
        {`
          @keyframes sparkSequence {
            0%, 100% { opacity: 0; }
            20%, 80% { opacity: 1; }
          }
          .spark-1 { animation: sparkSequence 2s infinite; animation-delay: 0s; }
          .spark-2 { animation: sparkSequence 2s infinite; animation-delay: 0.4s; }
          .spark-3 { animation: sparkSequence 2s infinite; animation-delay: 0.8s; }
        `}
      </style>
      {/* Bomb Body */}
      <circle cx="100" cy="150" r="70" stroke={color} strokeWidth="10"/>
      {/* Asterisk */}
      <path 
        d="M100 110 V190 M60 150 H140 M75 125 L125 175 M125 125 L75 175"
        stroke={color} 
        strokeWidth="10" 
        strokeLinecap="round"
      />
      {/* Fuse */}
      <path 
        d="M100 80 C100 40 140 40 140 70" 
        stroke={color} 
        strokeWidth="10" 
        fill="none"
      />
      {/* Animated Sparks */}
      <line className="spark-1" x1="140" y1="25" x2="140" y2="5" stroke={color} strokeWidth="10" strokeLinecap="round"/>
      <line className="spark-2" x1="165" y1="35" x2="185" y2="25" stroke={color} strokeWidth="10" strokeLinecap="round"/>
      <line className="spark-3" x1="165" y1="55" x2="185" y2="65" stroke={color} strokeWidth="10" strokeLinecap="round"/>
    </svg>
  );
}
