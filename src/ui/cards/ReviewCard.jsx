import React from 'react'
import renderStars from '../../lib/utils/Ratings';


function ReviewCard({ id, rating, name, comment }) {
    return (
      <div 
        key={id} 
        className="w-[360px] md:w-[400px] flex flex-col justify-between h-[190px] rounded-[20px] md:h-[240px] px-6 py-6 md:px-8 md:py-7 gap-[15px] border border-black/10"
      >
        <div className="flex items-center h-5">
          {renderStars(rating)}
        </div>
        <div className="font-bold flex items-center h-6 capitalize after:content-[url('/images/vectors/check-mark.png')] after:pl-1 after:w-5 after:h-5 whitespace-nowrap">
          {name}
        </div>
        <div className="font-secondary text-black/60 text-[14px] leading-[20px] md:text-[16px] md:leading-[22px]">
          {comment}
        </div>
      </div>
    );
  }

export default ReviewCard
