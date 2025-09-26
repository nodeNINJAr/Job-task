import Blog from "@/components/home/Blog";
import Discount from "@/components/home/Discount";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";
import Navbar from "@/components/Navbar";
// import { usePathname } from "next/navigation";


export default function Home() {

  // 
  return (
      <>
      {/* hero */}
       <Hero/>
      {/* discount section */}
        <Discount/>
       {/* testimonials */}
       <Testimonials/>
       {/* blog section */}
       <Blog/>
      </>
  )
}
