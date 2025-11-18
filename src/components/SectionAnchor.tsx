import React from 'react';
import LogoAnimated from './LogoAnimated';
import './SectionAnchor.css';

interface SectionAnchorProps {
  darkBackground?: boolean;
}

const SectionAnchor: React.FC<SectionAnchorProps> = ({ darkBackground = false }) => {
  return (
    <div className={`section-anchor ${darkBackground ? 'dark' : 'light'}`}>
      <LogoAnimated size={24} />
    </div>
  );
};

export default SectionAnchor;

