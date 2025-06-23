import { useState } from 'react';
import PhotoGallery from '../../../ui/layout/PhotoGallery';
import random_data from '/src/data/randomized_products.json';



function NewArrivals() {

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
  idGallery="new-arrivals-gallery"
  titleGallery="new arrivals"
  data={random_data}
  buttonText={buttonText}

  sortProp="arrivalDate"
        sortOrder="desc" 
        limit={limit}
        filterProp=""
        filterValue=""
          viewAll={handleViewAll}

/>     
    </div>
  )
}

export default NewArrivals
