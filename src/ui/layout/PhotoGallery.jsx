import React from 'react'

function PhotoGallery({id,title,products,button}) {
  return (
    <>
      <section id={id} className="h-[800px] border w-screen flex items-center justify-center">
        <div className="w-9/10 max-w-[77.5rem] h-full bg-yellow-100  flex items-center justify-around flex-col">
          <h1 className="text-[32px] uppercase font-black font-primary lg:text-5xl">
{title}
          </h1>
          <div className="w-full h-[400px]">
            {products}
          </div>
              {button && (
            <div className="mt-4 w-full h-auto flex items-center justify-center">
              <button className='px-[54px] capitalize text-center flex items-center  justify-center py-[16px] rounded-full  bg-white border border-black/10 text-black text-[14px]  w-[360px] h-[46px] gap-[12] xl:font-[16px] xl:h-[52px] xl:w-[218px] xl:text-[16px] hover:bg-black/60 hover:text-white transition duration-300 cursor-pointer'>{button}</button>
            </div>
          )}


        </div>
      </section>
    </>
  )
}

export default PhotoGallery
