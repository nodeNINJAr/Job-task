import { CountdownTimer } from "../ui/countdown-timer";

export default function Discount() {

  const initialDuration = {
    days: 3,
    hours: 18,
    minutes: 54,
    seconds: 21,
  };
  // 
  return (
    <section className="bg-image py-24">
          <div className=" max-w-6xl m-auto">
              <span className=" text-xl font-rubik font-medium text-[#749B3F] bg-[#749B3F1A] py-1 px-3 rounded-md">Special Offer</span>
              <h1 className="text-7xl text-primary font-medium mb-4 mt-4 ">Seasonal Fruit Bundle</h1>
              <h2 className="text-5xl text-primary font-medium mb-3">Discount up to <span className="text-[#FF6A1A]">80% OFF</span></h2>
              {/* counter */}
               <CountdownTimer initialDuration={initialDuration} />
              <h3 className="bg-[#176D38] text-white font-semibold text-3xl inline-block py-4 px-8 rounded-full  mt-10 ">CODE : <span className="text-[#FAC714]">FRESH28</span></h3>
          </div>
    </section>
  )
}
