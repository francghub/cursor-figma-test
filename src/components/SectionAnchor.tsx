import LogoAnimated from './LogoAnimated';
import './SectionAnchor.css';

interface SectionAnchorProps {
  color?: string;
}

export default function SectionAnchor({ color = "#000000" }: SectionAnchorProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="section-anchor">
      <LogoAnimated size={24} color={color} onClick={scrollToTop} />
    </div>
  );
}
