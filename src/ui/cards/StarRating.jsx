import { Star, StarHalf } from 'lucide-react';
import renderStars from '../../lib/utils/Ratings';

function StarRating({ rating }) {
  return (
    <div className="flex items-center">
  {renderStars(rating)}
  <span className="ml-1 text-xs font-normal md:text-sm font-secondary">
        {rating.toFixed(1)}<span className='font-light'>/5</span>
      </span>
    </div>
  );
}
export default StarRating;