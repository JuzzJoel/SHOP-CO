import { useState } from 'react'
import React from 'react'
import PhotoGallery from '../../../ui/layout/PhotoGallery'
import random_data from '/src/data/randomized_products.json'

function TopSelling() {
  const [limit, setLimit] = useState(4);
  const [buttonText, setButtonText] = useState('View All');

  const handleViewAll = () => {
    if (limit === 4) {
      setLimit(random_data.products.length);
      setButtonText('View Less');
    } else {
      setLimit(4);
      setButtonText('View All');
    }
  };


  return (

    <div>
                 <PhotoGallery
  idGallery="top sales"
  titleGallery="top selling"
  data={random_data}
buttonText={buttonText}
        sortProp="salesCount"
        sortOrder="desc" 
        limit={limit}
        filterProp=""
        filterValue=""
        random=""
          viewAll={handleViewAll}

/>  
    </div>
  )
}

export default TopSelling
