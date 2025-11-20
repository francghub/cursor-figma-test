/**
 * Book Cover Utilities
 * 
 * Helper functions for loading and managing book cover images
 */

import { Book } from '../data/books';

/**
 * Get the cover image path for a book
 * Falls back to placeholder if cover doesn't exist
 */
export function getBookCover(book: Book): string {
  const baseName = book.file.replace(/\.(epub|pdf)$/i, '');
  const fileName = baseName.split('/').pop() || baseName;
  
  // Return the cover path (extracted covers are saved as .jpg)
  return `/covers/${fileName}.jpg`;
}

/**
 * Preload cover images for better performance
 */
export function preloadCovers(books: Book[]): void {
  if (typeof window === 'undefined') return;
  
  books.forEach(book => {
    const coverPath = getBookCover(book);
    const img = new Image();
    img.src = coverPath;
  });
}

/**
 * Get fallback color for a book (used in CSS background)
 */
export function getBookColor(book: Book): string {
  return book.coverColor;
}

/**
 * Handle cover image load error - fallback to color placeholder
 */
export function handleCoverError(
  event: React.SyntheticEvent<HTMLImageElement>,
  book: Book
): void {
  const img = event.currentTarget;
  
  // Try SVG placeholder first
  const baseName = book.file.replace(/\.(epub|pdf)$/i, '');
  const fileName = baseName.split('/').pop() || baseName;
  const svgPath = `/covers/${fileName}.svg`;
  
  if (!img.src.endsWith('.svg')) {
    img.src = svgPath;
  } else {
    // If SVG also fails, hide image and show color background
    img.style.display = 'none';
  }
}

/**
 * Get book cover with proper fallbacks
 * Returns an object with image path and fallback color
 */
export function getBookCoverData(book: Book): {
  imagePath: string;
  fallbackColor: string;
  altText: string;
} {
  return {
    imagePath: getBookCover(book),
    fallbackColor: book.coverColor,
    altText: `${book.title} by ${book.author} - Book cover`,
  };
}

/**
 * Check if cover exists (client-side only)
 */
export async function checkCoverExists(coverPath: string): Promise<boolean> {
  if (typeof window === 'undefined') return false;
  
  try {
    const response = await fetch(coverPath, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

