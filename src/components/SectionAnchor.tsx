import './SectionAnchor.css'
import LogoAnimated from './LogoAnimated'

interface SectionAnchorProps {
  className?: string;
}

export default function SectionAnchor({ className = "" }: SectionAnchorProps) {
  return (
    <div className={`section-anchor ${className}`}>
      <LogoAnimated size={24} />
    </div>
  );
}
