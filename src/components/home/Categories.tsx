import React from 'react'
import ProductTabs from '../ui/category-tabs'
import Heading from '../ui/heading'

export default function Categories() {
  return (
    <section className='max-w-6xl m-auto pt-48'>
         {/* heading */}
          <Heading subtitle='Our Products' title='Our Fresh Products' desc="We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients."/>
        {/* tabs */}
        <ProductTabs/>
    </section>
  )
}
