import React from 'react'
import { Button } from '../ui/button'
import { Apple, ShoppingCart } from 'lucide-react'
import Navbar from '../Navbar'

export default function Hero() {

 return (

<section className='bg-banner min-h-[1000px] pb-40'>
        {/* navigation */}
        <Navbar/>
      {/*  */}
    <div className='max-w-6xl m-auto flex flex-col items-start justify-center space-y-8'>
        {/* Left content */}
        <div className='text-left p-4 md:p-0'>
            <span className="text-sm md:text-xl font-rubik font-medium text-[#749B3F] bg-[#749B3F1A] py-1 px-3 rounded-md">Welcome to Fresh Harvest</span>
            <h1 className="text-5xl md:text-7xl text-primary font-medium mt-5 mb-4 leading-12 md:leading-20">Fresh Fruits and <br/> Vegetables</h1>
            <p className="text-secondary text-sm leading-6 max-w-md mb-6">At Fresh Harvests, we are passionate about providing you with the freshest and most flavorful fruits and vegetables</p>
            <div><Button className='bg-[#FF6A1A] py-8 px-10 rounded-md text-white text-lg font-semibold font-rubik'>Shop Now</Button></div>
            {/* discount badge */}
            <div className='mt-8 inline-flex justify-start items-center bg-[#EBEBEB] rounded-xl py-2 px-3 md:ml-60'>
                <div className='flex flex-col items-start justify-center'>
                   <span className='text-[#176D38] font-rubik font-semibold md:text-sm text-[8px]'>Special Offer</span>
                    <h3 className='text-base md:text-3xl font-medium font-rubik mt-1 text-primary'>Fresh Salad</h3>
                    <p className='text-base font-rubik font-semibold mb-2'>Up to <strong>70%</strong> off</p>
                    <h3 className="bg-[#176D38] text-white font-semibold text-[7px] md:text-[12px] inline-block py-[6px] px-3 rounded-full">CODE: <span className="text-[#FAC714]">FRESH28</span></h3>
                 </div>
                <div><img className='w-20 md:w-[149px] h-20 md:h-[149px]' src="https://i.ibb.co.com/nMZCVsbh/img-1.png" alt='food-image' width={149} height={146}/></div>
            </div>
            {/* hero footer */}
            <div className='mt-6'>
                <h3 className="mb-3 text-[12px] font-medium">Download App:</h3>
                    <div className=" flex gap-5 space-y-2">
                    <Button variant="outline" className="justify-start bg-primary text-white size-5/12 md:size-4/12">
                        <Apple className="size-8 mr-2 text-white" />
                        <div className="flex flex-col justify-start items-start gap-0"><p className="text-[12px]">Download on the</p> <h3 className="text-lg -m-1">App Store</h3> </div>
                        </Button>
                        <Button variant="outline" className="justify-start bg-primary text-white size-5/12 md:size-4/12">
                        <ShoppingCart className="size-8 mr-2 text-white" />
                            <div className="flex flex-col justify-start items-start gap-0"><p className="text-[12px]">Download on the</p> <h3 className="text-lg -m-1">Google Play</h3> </div>
                    </Button>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
