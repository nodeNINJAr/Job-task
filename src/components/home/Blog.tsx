"use-client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Heading from "../ui/heading"

export default function Blog() {

  
//   
const blogData = [
  {
    "id": 1,
    "date": "2025-09-26",
    "title": "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
    "desc": "Discover the best seasonal produce available and learn how to incorporate fresh ingredients into your meals for optimal flavor and nutrition.",
    "image": "https://i.ibb.co.com/8LDS68q6/man-with-girl-blog-img.png"
  },
  {
    "id": 2,
    "date": "2025-09-26",
    "title": "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads",
    "desc": "Get expert tips on creating vibrant, healthy salads with balanced flavors, textures, and essential nutrients to elevate your daily diet.",
    "image": "https://i.ibb.co.com/1Y6816P6/green-vegitabls.png"
  },
  {
    "id": 3,
    "date": "2025-09-26",
    "title": "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
    "desc": "Learn efficient meal prepping techniques to prepare nutritious meals in advance, saving time while maintaining a healthy eating routine.",
    "image": "https://i.ibb.co.com/prnQChsB/green-vegitables-2.png"
  }
]


    //
  return (
        <section className="bg-white max-w-6xl m-auto py-10 px-4 md:px-0 md:py-36" >
            {/*heading */}
            <Heading subtitle="Our Blog" title="Fresh Harvest Blog" desc="Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration."/>
           {/* blog card */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
              {
                blogData?.map((blog) => (
                  <Card key={blog.id} className="text-xl font-rubik">
                    <CardHeader className="!p-0">
                      <Image className="rounded-[20px] w-full h-64" src={blog.image} alt={blog.title} width={384} height={260} />
                    </CardHeader>
                    <CardContent className="!p-0 space-y-4">
                      <p className="text-secondary font-questrial">{blog.date}</p>
                      <CardTitle className="text-primary font-semibold leading-6">{blog.title}</CardTitle> 
                    </CardContent >
                    <CardFooter className="!p-0 font-semibold text-[#FF6A1A] ">
                      <Link href={"#"} className="flex justify-center items-center gap-3"> Read More <ArrowRight /></Link>
                    </CardFooter>
                  </Card>
                ))
              }
           </div>
    </section>
  )
}
