"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "./product-card";
import { useGetAllProductsQuery } from "@/redux/features/products/product.api";
import { useState } from "react";
import { useGetAllCategotyQuery } from "@/redux/features/categoryApi/categoryApi";
import { IProduct } from "@/type/type";



// 
export default function ProductTabs() {

const [tab, setTab] = useState("all");
const {data:category} = useGetAllCategotyQuery(undefined)
const {data} = useGetAllProductsQuery(undefined)


  // 

const filteredCategory =
  tab === "all" ? null : category?.data.find((p) => p.categoryName === tab);

const filteredProducts =
  tab === "all"
    ? data?.data?.slice(0, 8) // 👈 first 8 products
    : data?.data?.filter((product:IProduct) => product.categoryId === filteredCategory?.id);


  return (
    <div className="w-full mx-auto pt-4">
      <Tabs value={tab} onValueChange={setTab} className="w-full m-auto">
        <TabsList className="flex flex-wrap justify-center gap-6 mb-8 m-auto bg-transparent font-rubik">
          <TabsTrigger className="data-[state=active]:bg-[#749B3F] data-[state=active]:text-white !py-4 !px-6 text-lg border text-[#A6A6A6] border-[#A6A6A6] " value="all">All</TabsTrigger>
          <TabsTrigger className="data-[state=active]:bg-[#749B3F] data-[state=active]:text-white  !py-4 !px-6 text-lg border text-[#A6A6A6] border-[#A6A6A6]" value="fruits">Fruits</TabsTrigger>
          <TabsTrigger className="data-[state=active]:bg-[#749B3F] data-[state=active]:text-white  !py-4 !px-6 text-lg border text-[#A6A6A6] border-[#A6A6A6]" value="Vegetable">Vegetables</TabsTrigger>
          <TabsTrigger className="data-[state=active]:bg-[#749B3F] data-[state=active]:text-white  !py-4 !px-6 text-lg border text-[#A6A6A6] border-[#A6A6A6]" value="Salad">Salad</TabsTrigger>
          <TabsTrigger className="data-[state=active]:bg-[#749B3F] data-[state=active]:text-white  !py-4 !px-6 text-lg border text-[#A6A6A6] border-[#A6A6A6]" value="Drinksss">Drinksss</TabsTrigger>
        </TabsList>

        <TabsContent value={tab} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20 md:py-10">
        {
             filteredProducts?.length > 0 ? 
             <>
              {filteredProducts?.map((item:IProduct) => (
              <ProductCard item={item} key={item?.id}/>
          ))}
          </> : <>
           <p className="text-center text-red-400">No data found</p>
        </>
        }  
  

        </TabsContent>
      </Tabs>
          
      <div className="flex justify-center align-middle mt-10 md:mt-0">
           <Button variant={"outline"} className="font-semibold text-lg font-rubik text-[#FF6A1A] !py-6 px-8"><Link href={"/shop"}>See All Products</Link></Button>
      </div>
       
    </div>
  );
}
