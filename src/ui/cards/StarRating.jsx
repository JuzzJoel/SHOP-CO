import { Star, StarHalf } from 'lucide-react';

function renderStars(rating) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(
        <span key={i} className="text-yellow-400">
          <Star size={16} />
        </span>
      );
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(
        <span key={i} className="text-yellow-400">
          <StarHalf size={16} />
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="text-gray-300">
          <Star size={16} />
        </span>
      );
    }
  }

  return stars;
}

function StarRating({ rating }) {
  return (
    <div className="flex items-center">
      {renderStars(rating)}
      <span className="ml-1 text-sm text-gray-500">
        {/* {rating.toFixed(1)}/5 */}
      </span>
    </div>
  );
}
export default StarRating;