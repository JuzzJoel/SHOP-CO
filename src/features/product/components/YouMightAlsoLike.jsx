import React from 'react'
import PhotoGallery from '../../../ui/layout/PhotoGallery'
import random_data from '/src/data/randomized_products.json'
function YouMightAlsoLike() {
  return (
    <div>

                 <PhotoGallery
  idGallery="#might-like"
        titleGallery="You Might Also Like"
  data={random_data}
  buttonText=""
        sortProp=""
        sortOrder="" 
        limit="4"
        filterProp=""
        filterValue=""
        random
/>  
    </div>

  )
}

export default YouMightAlsoLike
