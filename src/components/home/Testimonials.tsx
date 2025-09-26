import Heading from "../ui/heading";
import { TestimonialCarousel } from "../ui/testimonial-carousel";



export default function Testimonials() {


const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    role: "Professional Chef",
    quote: "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious...",
    avatar: "https://i.ibb.co.com/LzvktKLs/32958.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Home Cook",
    quote: "Fresh Harvest changed my meal prep game. The veggies are picked at peak ripeness...",
    avatar: "https://i.ibb.co.com/9kgwJwLz/18778.jpg",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Nutritionist",
    quote: "Fresh Harvest has revolutionized how I source ingredients for my clients. The organic produce is top-notch, and the delivery service is incredibly reliable—perfect for maintaining a healthy lifestyle!",
    avatar: "https://i.ibb.co.com/9xNThNC/59335.jpg",
  },
];


    //
  return (
    <section className="bg-white max-w-6xl m-auto pt-36" >
        {/*  */}
        <Heading subtitle={"Testimonial"} title={"What Our Customers Say"} desc={"Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:"}/>
        {/* blog card */}
        <div className="">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
    </section>
  )
}
