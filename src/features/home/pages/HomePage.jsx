import React from 'react';
import Layout from '@/layout/pages/layout.jsx';
import Hero from '../hero/Hero'
import Brand from '../brands/Brands'
import NewArrivals from '../components/NewArrivals';
import TopSelling from '../components/TopSelling';
import DressByStyle from '../components/BrowseByStyle';
import ReviewGallery from '../components/ReviewGallery';


function HomePage() {

  return (
    <>
      <Layout>
        <Hero />
        <Brand />
        <NewArrivals/>
        <TopSelling/>
        <DressByStyle />
        <ReviewGallery/>
     
      </Layout>
    </>
  )
}

export default HomePage
