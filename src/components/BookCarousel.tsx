import { useState, useEffect, useRef } from 'react'
import { books } from '../data/books'
import BookCard from './BookCard'
import './BookCarousel.css'

export default function BookCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const touchStartRef = useRef(0)

  // Navigate to specific book
  const goToBook = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, books.length - 1)))
  }

  // Navigate left/right
  const goToPrevious = () => {
    goToBook(currentIndex - 1)
  }

  const goToNext = () => {
    goToBook(currentIndex + 1)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex])

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX)
    setScrollLeft(currentIndex)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX
    const walk = (startX - x) / 200 // Sensitivity
    const newIndex = Math.round(scrollLeft + walk)
    if (newIndex !== currentIndex) {
      goToBook(newIndex)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStartRef.current - touchEnd

    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) {
        goToNext()
      } else {
        goToPrevious()
      }
    }
  }

  return (
    <div className="book-carousel-wrapper">
      <div 
        ref={carouselRef}
        className="book-carousel-container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="book-carousel-track">
          {books.map((book, index) => {
            const offset = index - currentIndex
            const isCenter = index === currentIndex
            
            return (
              <BookCard
                key={book.id}
                book={book}
                isCenter={isCenter}
                offset={offset}
                onClick={() => goToBook(index)}
              />
            )
          })}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        className="carousel-nav carousel-nav-left"
        onClick={goToPrevious}
        disabled={currentIndex === 0}
        aria-label="Previous book"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <button
        className="carousel-nav carousel-nav-right"
        onClick={goToNext}
        disabled={currentIndex === books.length - 1}
        aria-label="Next book"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Indicators */}
      <div className="carousel-indicators">
        {books.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToBook(index)}
            aria-label={`Go to book ${index + 1}`}
          />
        ))}
      </div>

      {/* Book info */}
      <div className="book-info">
        <h3 className="book-info-title">{books[currentIndex].title}</h3>
        <p className="book-info-author">{books[currentIndex].author}</p>
        <p className="book-info-counter">
          {currentIndex + 1} / {books.length}
        </p>
      </div>
    </div>
  )
}

