import './CTAButton.css'

interface CTAButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
}

export default function CTAButton({ text, href = "#", onClick }: CTAButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a 
      href={href} 
      className="cta-button" 
      onClick={handleClick}
    >
      {text}
    </a>
  );
}
