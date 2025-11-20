import { Book } from '../data/books'
import './BookCard.css'

interface BookCardProps {
  book: Book;
  isCenter: boolean;
  offset: number;
  onClick: () => void;
}

export default function BookCard({ book, isCenter, offset, onClick }: BookCardProps) {
  // Calculate scale and opacity based on distance from center
  const scale = isCenter ? 1 : Math.max(0.7, 1 - Math.abs(offset) * 0.15);
  const opacity = isCenter ? 1 : Math.max(0.5, 1 - Math.abs(offset) * 0.2);
  const translateZ = isCenter ? 0 : -50 * Math.abs(offset);
  const rotateY = offset * 15; // Subtle rotation for 3D effect
  
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

  return (
    <div 
      className={`book-card ${isCenter ? 'book-card-center' : ''}`}
      style={style}
      onClick={onClick}
    >
      <div className="book-cover" style={{ backgroundColor: book.coverColor }}>
        <div className="book-spine"></div>
        <div className="book-content">
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

