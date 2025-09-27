import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Dashboard() {
  return (
    <div className="flex flex-col justify-center items-center gap-20 space-y-10">
         <p className="text-red-500 font-rubik font-semibold capitalize text-center">thanks for your visiting dashboard is under contructions now</p>
        <Button variant={"outline"}> <Link href={"/dashboard/profile"}>Visit your Profile</Link></Button>
    </div>
  )
}
