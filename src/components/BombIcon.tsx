import './BombIcon.css'

interface BombIconProps {
  size?: number;
  color?: string;
}

function BombIcon({ size = 36, color = 'currentColor' }: BombIconProps) {
  return (
    <div className="bomb-icon-container">
      <svg
        width={size}
        height={size * 1.33} // Maintain aspect ratio
        viewBox="0 0 150 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="bomb-icon"
      >
        {/* Bomb Circle */}
        <circle
          cx="75"
          cy="120"
          r="50"
          stroke={color}
          strokeWidth="6"
          fill="none"
        />

        {/* Fuse Curve */}
        <path
          d="M75 70 C75 85 90 95 105 100"
          stroke={color}
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />

        {/* Spark (5 rays) */}
        <g stroke={color} strokeWidth="6" strokeLinecap="round">
          <line x1="110" y1="45" x2="110" y2="20" />
          <line x1="110" y1="45" x2="130" y2="35" />
          <line x1="110" y1="45" x2="130" y2="55" />
          <line x1="110" y1="45" x2="90" y2="35" />
          <line x1="110" y1="45" x2="90" y2="55" />
        </g>

        {/* Asterisk inside circle */}
        <g stroke={color} strokeWidth="10" strokeLinecap="round">
          <line x1="75" y1="90" x2="75" y2="150" />
          <line x1="45" y1="120" x2="105" y2="120" />
          <line x1="55" y1="100" x2="95" y2="140" />
          <line x1="55" y1="140" x2="95" y2="100" />
        </g>
      </svg>
    </div>
  )
}

export default BombIcon

