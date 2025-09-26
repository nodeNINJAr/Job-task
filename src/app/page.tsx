import Blog from "@/components/home/Blog";
import Discount from "@/components/home/Discount";
import Testimonials from "@/components/home/Testimonials";


export default function Home() {


  return (
      <>
      {/* discount section */}
        <Discount/>
       {/* testimonials */}
       <Testimonials/>
       {/* blog section */}
       <Blog/>
      </>
  )
}
