import Blog from "@/components/home/Blog";
import Discount from "@/components/home/Discount";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";
import Categories from "@/components/home/Categories";
import About from "@/components/home/About";



// 
export default function Home() {

  // 
  return (
      <>
      {/* hero */}
       <Hero/>
       {/* categories sections */}
       <Categories/>
       {/* about */}
       <About/>
      {/* discount section */}
        <Discount/>
       {/* testimonials */}
       <Testimonials/>
       {/* blog section */}
       <Blog/>
      </>
  )
}
