import React from 'react'
import StarRating from "./StarRating";


function ReviewCard(review) {
    return (
        <>
            <div key={review.id} className='w-90 md:w-100 h-[190px] rounded-[20px] md:h-60 px-6 py-6 md:px-8 md:py-7   border border-black/10'>

                <div className="flex w-30 h-5 md:w-[140px] md:h-[23px">
                    <StarRating ratings={review.ratings} />
                </div>
                <div className="flex relative items-center  h-[90px] w-5 md:w-[111px] md:h-6 capitalize  after:content-[url('/images/icons/checkmark.png')] after:absolute after:w-5 after:h-5 ">{review.name}</div>
                <div className="font-secondary text-black/60  text-[14px] leading-[20px] md:text-[16px] md:leading-[22px]">
                    {review.comment}
                </div>

            </div>
        </>
    )
}

export default ReviewCard
