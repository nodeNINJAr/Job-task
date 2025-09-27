"use client"

import { useGetAllProductsQuery, useGetProductByIdQuery } from '@/redux/features/products/product.api';
import Image from 'next/image';
import React, { useState } from 'react'
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Heart, Minus, Plus, ShoppingCart } from 'lucide-react';
import { useGetSingleCategotyQuery } from '@/redux/features/categoryApi/categoryApi';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import ProductCard from '../ui/product-card';
import Heading from '../ui/heading';


interface Props {
  productId: string;
}



export default function ProductDetails({productId}:Props) {
  const { data, error, isLoading } = useGetProductByIdQuery(productId);
    const [quantity, setQuantity] = useState(1);
    const [tab, setTab] = useState("Description");
    const product = data?.data;
    const {data:sCategory} = useGetSingleCategotyQuery(product?.categoryId);
    const {data:products} = useGetAllProductsQuery(undefined);

    const realtedProducts = products?.data?.filter( product =>product.categoryId === sCategory?.data?.id );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching product</p>;





  // 
  return (
    <div>
     <section className="grid md:grid-cols-2 gap-10 items-center max-w-6xl m-auto p-4 md:p-0">
      {/* Left: Image with badge */}
      <Card className="relative flex items-center justify-center md:p-10 shadow rounded h-96">
        {product?.images?.length > 0 ? (
                  <Image
                      src={product.images[0]}
                      alt={product.productName}
                      width={200}
                      height={200}
                      className="h-52 object-contain mx-auto"
                  />
                  ) : (
                  <Image
                      src="/placeholder.png" // fallback image
                      alt="No image available"
                      width={200}
                      height={200}
                      className="h-min object-contain mx-auto"
                  />
                  )}
      </Card>

      {/* Right: Product Info */}
      <div>
        {/* Category */}
        <span className="px-3 py-1 text-sm rounded-full bg-[#749B3F1A] text-[#749B3F] font-medium">
          {sCategory?.data?.categoryName}
        </span>

        {/* Title */}
        <h2 className="text-3xl font-bold mt-3 font-rubik text-primary">{product?.productName}</h2>

        {/* Rating */}
        <div className="flex items-center text-lg text-primary mt-2">
          <span className="text-yellow-500">★★★★★</span>
          <span className="ml-2 font-medium text-black">5.0</span>
          <span className="ml-1 text-muted-foreground">(1 review)</span>
        </div>

        {/* Price */}
        <p className="text-2xl font-bold text-orange-600 mt-4">
          ${product?.price}/kg
        </p>

        {/* Description */}
        <p className="text-secondary mt-4">{product?.description}</p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4 mt-6">
          <span className="font-medium">Quantity</span>
          <div className="flex items-center border rounded-md ">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span className="px-8 font-semibold font-rubik text-xl border-l border-r py-3">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setQuantity((q) => q + 1)}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <span className="text-sm text-muted-foreground">/kg</span>
        </div>

        {/* Actions */}
        <div className=" md:flex gap-4 mt-6">
          <Button
            variant="outline"
            className="w-full mb-6 md:mb-0 flex-1 flex gap-2 justify-center bg-[#F4F6F6] text-[#4A4A52] font-semibold text-lg !py-6"
          >
            <Heart className="w-6 h-6" /> Save as favorite
          </Button>
          <Button className="w-full flex-1 flex gap-2 justify-center bg-orange-600 hover:bg-orange-700  font-semibold text-lg !py-6">
            <ShoppingCart className="w-7 h-7" /> Add to cart
          </Button>
        </div>
      </div>
    </section>

    {/* desc and revies */}
     <section className='max-w-6xl m-auto pb-10 md:pb-36 px-4 md:px-0'>
           <Tabs value={tab} onValueChange={setTab} className="w-full">
                 <TabsList className="flex justify-start gap-3 md:gap-6 mb-8 bg-transparent font-rubik mt-10">
                   <TabsTrigger className="data-[state=active]:bg-[#749B3F] data-[state=active]:text-white font-medium p-5 md:px-8  md:!py-6 text-lg border text-[#A6A6A6] border-[#A6A6A6] " value="Description">Description</TabsTrigger>
                   <TabsTrigger className="data-[state=active]:bg-[#749B3F] data-[state=active]:text-white  medium p-5 md:px-8 md:!py-6 text-lg border text-[#A6A6A6] border-[#A6A6A6]" value="Reviews">Reviews(1)</TabsTrigger>
                 </TabsList>
         
                 <TabsContent value={tab} className="w-full md:w-8/12 grid grid-cols-1 gap-6 py-10 bg-[#F4F6F6] p-8 rounded-2xl">
                     {tab==="Description" ? <p className='text-lg '>{product.description}</p>:<>Products reviews</>}
                 </TabsContent>
               </Tabs>
     </section>

     {/* related products */}
     <section className='max-w-6xl mx-auto pt-10 pb-20 md:pb-28 px-4 md:px-0'>
         <div className='mb-8 md:mb-14'><Heading title='Related products' subtitle='Our Products' desc=""/></div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {realtedProducts?.map(product=>(
               <ProductCard key={product.id} item={product}/>
            ))}
         </div>
     </section>
    </div>
  );
}
