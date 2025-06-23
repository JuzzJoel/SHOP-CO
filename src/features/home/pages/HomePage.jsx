import React from 'react';
import Layout from '@/layout/pages/layout.jsx';
import Hero from '../hero/Hero'
import Brand from '../brands/Brands'
import PhotoGallery from '../../../ui/layout/PhotoGallery'
import random_data from '/src/data/randomized_products.json'
import NewArrivals from '../components/NewArrivals';
import TopSelling from '../components/TopSelling';


function HomePage() {

  return (
    <>
      <Layout>
        <Hero />
        <Brand />
        <NewArrivals/>
        <TopSelling/>

     
      </Layout>
    </>
  )
}

export default HomePage
