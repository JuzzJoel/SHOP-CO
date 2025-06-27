import React from 'react'
import ProductGrid from '../components/ProductGrid.jsx'
import FilterPanel from '../components/FilterPanel.jsx'
import RangeSlider from '../components/atoms/RangeSlider.jsx'
function CategoryPageMain() {
  return (
    <div>
      <FilterPanel />
      {/* <ProductGrid/> */}
      <RangeSlider />
    </div>
  )
}

export default CategoryPageMain
