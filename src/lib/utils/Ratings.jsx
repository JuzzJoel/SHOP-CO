import { Star, StarHalf } from 'lucide-react';

export default  function renderStars(rating) {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
  
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <span key={i} className="text-yellow-400">
            <Star size={16} fill="currentColor" />
          </span>
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <span key={i} className="relative text-yellow-400">
            <Star size={16} className="absolute" fill="currentColor" style={{ clipPath: 'inset(0 50% 0 0)' }} />
            <Star size={16} className="text-transparent" />
          </span>
        );
      }
    }
    return stars;
  }
  