import React from 'react'
import reviewsData from '../../../stores/reviews.json';
import ReviewCard from '../../../ui/cards/ReviewCard';
function ReviewGallery() {
    const reviews = reviewsData.ratings;

  return (
      <>
          <section className="h-[500px] w-screen bg-white flex flex-col gap-4 justify-center items-center">
              <div className="w-9/10 flex items-end justify-between bg-red-400 h-15 max-w-[77.5rem]">
                  <h1 className="text-[32px] leading-[36px] md:leading-0 flex items-center bg-green-600  h-full text-left md:text-[40px] uppercase font-primary font-black text-black ">
                  our happy customers
                  </h1>
                  <div className="flex  justify-between gap-4">
                      <img src="/images/vectors/arrow-down-bold 2.png" alt="" className='w-6 h-6' />  
                      <img src="/images/vectors/arrow-down-bold 1.png" alt=""  className='w-6 h-6 '/>   
   
              </div>
              </div>
              <div className="h-auto flex w-screen filter blur-100 gap-5">
              {reviews
            .filter((review) => review.rating > 4.5)
            .map((review) => (
                <ReviewCard
                key={review.id}
                id={review.id}
                ratings={review.rating}
                name={review.name}
                comment={review.comment}
              />
                    ))}

              </div>
              
          </section>
      
    </>
  )
}

export default ReviewGallery
