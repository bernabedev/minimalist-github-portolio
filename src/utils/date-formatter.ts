// src/utils/dateFormatter.js

/**
 * Format a date to a human-readable string
 */
export function formatDate(date: Date | string): string {
  if (!(date instanceof Date)) {
    date = new Date(date)
  }

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}
