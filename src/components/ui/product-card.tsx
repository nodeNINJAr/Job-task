"use-client"

import React from 'react'
import { Card, CardContent, CardDescription, CardFooter } from './card'
import Image from 'next/image'
import { Button } from './button'
import { IProduct } from '@/type/type'


// 
export default function ProductCard({item}:{ item: IProduct }) {
    // 
  return (
        <Card key={item.id} className="flex flex-col items-center text-center shadow-lg !p-3 !rounded-[20px] gap-0 !text-lg">
                <CardContent className="bg-[#F4F6F6] w-full rounded-2xl h-52">
                    <Image src={item.image} alt={item.name} width={200} height={200} className=" object-contain mx-auto" />
                </CardContent>
                <CardDescription>
                    <h3 className="my-[6px] font-medium text-primary text-lg">{item.name}</h3>
                    <p className="text-secondary mb-3  text-lg">${item.price}/{item.unit}</p>
                </CardDescription>
                <CardFooter>
                    <Button
                    className={" hover:bg-[#FF6A1A] hover:text-white text-lg !py-3 w-60"}
                    variant={"outline"}
                    >
                    Add to cart
                    </Button>
                </CardFooter>
        </Card>
  )
}
