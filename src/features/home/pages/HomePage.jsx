import React from 'react';
import Layout from '@/layout/pages/layout.jsx';
import Hero from '../hero/Hero'
import Brand from '../brands/Brands'
import PhotoGallery from '../../../ui/layout/PhotoGallery';
function HomePage() {




  return (
    <>
      <Layout>
        <Hero />
        <Brand />
        <PhotoGallery id="new-arrivals" title="new arrivals" button="view all" />
        <PhotoGallery title="top selling" button="view all" />        
      </Layout>
    </>
  )
}

export default HomePage
