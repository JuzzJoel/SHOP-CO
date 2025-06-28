import React from 'react'
import renderStars from '../../lib/utils/Ratings';


function ReviewCard({id,rating,name,comment}) {
    return (
        <>
            <div key={id} className='w-90 md:w-100 h-[190px] rounded-[20px] md:h-60 px-6 py-6 md:px-8 md:py-7   border border-black/10'>

                <div className="flex w-30 h-5 md:w-[140px] md:h-[23px">
  {renderStars(rating)}
                </div>
                <div className="flex font-bold  items-center  h-[90px] w-5 md:w-[111px] md:h-6 capitalize  after:content-[url('/images/vectors/check-mark.png')] after:pl-1 after:w-5 after:h-5 whitespace-nowrap  ">{name}
                 
                </div>
                <div className="font-secondary before:content-[``] after:content-[``] text-black/60  text-[14px] leading-[20px] md:text-[16px] md:leading-[22px]">
                    {comment}
                </div>

            </div>
        </>
    )
}

export default ReviewCard
