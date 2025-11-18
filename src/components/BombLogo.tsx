import './BombLogo.css'

interface BombLogoProps {
  size?: number;
  animated?: boolean;
  className?: string;
}

export default function BombLogo({ size = 80, animated = true, className = "" }: BombLogoProps) {
  return (
    <div className={`bomb-logo-container ${className}`}>
      <svg 
        width={size} 
        height={size * 1.3} 
        viewBox="0 0 200 260" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={animated ? 'bomb-animated' : 'bomb-static'}
        style={{ display: 'block' }}
      >
        {animated && (
          <style>{`
            @keyframes sparkSequence {
              0%, 100% { opacity: 0; }
              33% { opacity: 1; }
              66% { opacity: 0; }
            }
            .spark-1 { animation: sparkSequence 1.5s infinite; animation-delay: 0s; }
            .spark-2 { animation: sparkSequence 1.5s infinite; animation-delay: 0.5s; }
            .spark-3 { animation: sparkSequence 1.5s infinite; animation-delay: 1s; }
          `}</style>
        )}
        
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
        
        {/* Sparks */}
        <line 
          className={animated ? 'spark-1' : ''} 
          x1="140" y1="25" x2="140" y2="5" 
          stroke="currentColor" 
          strokeWidth="10" 
          strokeLinecap="round"
        />
        <line 
          className={animated ? 'spark-2' : ''} 
          x1="165" y1="35" x2="185" y2="25" 
          stroke="currentColor" 
          strokeWidth="10" 
          strokeLinecap="round"
        />
        <line 
          className={animated ? 'spark-3' : ''} 
          x1="165" y1="55" x2="185" y2="65" 
          stroke="currentColor" 
          strokeWidth="10" 
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
