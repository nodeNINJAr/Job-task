"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "./product-card";

const products = [
  { id: "1", name: "Mushroom", price: 2.3, unit: "kg", category: "vegetables", image: "https://i.ibb.co.com/4B3rn91/img-1-2.png" },
  { id: "2", name: "Mustard", price: 1.3, unit: "kg", category: "vegetables", image: "https://i.ibb.co.com/k2Pw3RXH/img-1-1.png" },
  { id: "3", name: "Orange", price: 4.2, unit: "kg", category: "fruits", image: "https://i.ibb.co.com/4B3rn91/img-1-2.png" },
  { id: "5", name: "Pomegranate", price: 11.2, unit: "kg", category: "fruits", image: "https://i.ibb.co.com/4B3rn91/img-1-2.png" },
];



// 
export default function ProductTabs() {
  const [tab, setTab] = React.useState("all");

  const filteredProducts =
    tab === "all" ? products : products.filter((p) => p.category === tab);

  return (
    <div className="w-full mx-auto pt-4">
      <Tabs value={tab} onValueChange={setTab} className="w-full m-auto">
        <TabsList className="flex justify-center gap-6 mb-8 m-auto bg-transparent font-rubik">
          <TabsTrigger className="data-[state=active]:bg-[#749B3F] data-[state=active]:text-white !py-4 !px-6 text-lg border text-[#A6A6A6] border-[#A6A6A6] " value="all">All</TabsTrigger>
          <TabsTrigger className="data-[state=active]:bg-[#749B3F] data-[state=active]:text-white  !py-4 !px-6 text-lg border text-[#A6A6A6] border-[#A6A6A6]" value="fruits">Fruits</TabsTrigger>
          <TabsTrigger className="data-[state=active]:bg-[#749B3F] data-[state=active]:text-white  !py-4 !px-6 text-lg border text-[#A6A6A6] border-[#A6A6A6]" value="vegetables">Vegetables</TabsTrigger>
          <TabsTrigger className="data-[state=active]:bg-[#749B3F] data-[state=active]:text-white  !py-4 !px-6 text-lg border text-[#A6A6A6] border-[#A6A6A6]" value="salad">Salad</TabsTrigger>
        </TabsList>

        <TabsContent value={tab} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
        {
             filteredProducts.length > 0 ? 
             <>
              {filteredProducts.map((item) => (
              <ProductCard item={item} key={item?.id}/>
          ))}
          </> : <>
           <p className="text-center text-red-400">No data found</p>
        </>
        }  
  

        </TabsContent>
      </Tabs>
          
      <div className="flex justify-center align-middle">
           <Button variant={"outline"} className="font-semibold text-lg font-rubik text-[#FF6A1A] !py-6 px-8"><Link href={"/shop"}>See All Products</Link></Button>
      </div>
       
    </div>
  );
}
