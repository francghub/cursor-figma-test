import { useState } from 'react';
import { Book } from '../data/books';
import { getBookCoverData, handleCoverError } from '../utils/bookCovers';
import './BookCard.css';

interface BookCardWithCoverProps {
  book: Book;
  isCenter: boolean;
  offset: number;
  onClick: () => void;
}

export default function BookCardWithCover({ book, isCenter, offset, onClick }: BookCardWithCoverProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Calculate scale and opacity based on distance from center
  // Center: 1.2x scale, Sides: 0.8x scale with rotation
  const scale = isCenter ? 1.2 : Math.max(0.8, 1 - Math.abs(offset) * 0.1);
  const opacity = isCenter ? 1 : Math.max(0.6, 1 - Math.abs(offset) * 0.15);
  const translateZ = isCenter ? 0 : -80 * Math.abs(offset);
  const rotateY = isCenter ? 0 : offset * 25; // More pronounced rotation for sides
  
  const style = {
    transform: `
      translateX(${offset * 280}px) 
      translateZ(${translateZ}px) 
      scale(${scale}) 
      rotateY(${rotateY}deg)
    `,
    opacity,
    zIndex: isCenter ? 10 : Math.max(1, 10 - Math.abs(offset)),
  };

  const coverData = getBookCoverData(book);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setImageError(true);
    handleCoverError(e, book);
  };

  return (
    <div 
      className={`book-card ${isCenter ? 'book-card-center' : ''}`}
      style={style}
      onClick={onClick}
    >
      <div 
        className="book-cover book-cover-with-image" 
        style={{ backgroundColor: coverData.fallbackColor }}
      >
        <div className="book-spine"></div>
        
        {/* Cover Image */}
        <img
          src={coverData.imagePath}
          alt={coverData.altText}
          className={`book-cover-image ${imageLoaded ? 'loaded' : ''} ${imageError ? 'error' : ''}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy"
        />
        
        {/* Text overlay (shows if image fails or as overlay) */}
        <div className={`book-content ${imageLoaded && !imageError ? 'overlay' : ''}`}>
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">{book.author}</p>
          <div className="book-type-badge">{book.type.toUpperCase()}</div>
        </div>
      </div>
      
      {isCenter && (
        <div className="book-shadow"></div>
      )}
    </div>
  );
}

