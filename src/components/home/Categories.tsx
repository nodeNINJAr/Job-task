import React from 'react'
import ProductTabs from '../ui/category-tabs'
import Heading from '../ui/heading'

export default function Categories() {
  return (
    <section className='max-w-6xl m-auto px-4 pt-20 md:pt-40'>
         {/* heading */}
          <Heading subtitle='Our Products' title='Our Fresh Products' desc="We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients."/>
        {/* tabs */}
        <ProductTabs/>
    </section>
  )
}
