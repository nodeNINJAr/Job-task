"use-client"

import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import Password from '../ui/Password';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { closeModal, openLogin } from '@/redux/features/modal/modalSlice';
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterMutation } from '@/redux/features/auth/auth.api';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';




const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(3, {
        error: "Name is too short",
      })
      .max(50),
    email: z.email(),
    password: z.string().min(6, { error: "Password is too short" }),
});



// 
export function RegisterModal({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
// 
const dispatch = useDispatch();
const [register] = useRegisterMutation();
const router = useRouter();


  //
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      fullName:"",
      password: "",
    },
  });



  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const userInfo = {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
    };
    // 
    try {
     //  
      await register(userInfo).unwrap();
      dispatch(closeModal());
      toast.success("User created successfully");
      router.push("/dashboard");
     

    } catch (err) {
      console.error(err);

    }
  };




// 
  return (
   <div className={cn("flex flex-col gap-6 absolute top-2/3 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-sm w-11/12  p-4 md:p-6 md:w-[478px] rounded-sm", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center relative">
        <span className='absolute right-0 top-0 w-6 h-6 text-primary' onClick={()=>dispatch(closeModal())}><X/></span>
        <h1 className="text-3xl font-bold font-rubik my-6">Register</h1>
      </div>
      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/*  */}
             <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      className='!p-6 text-primary text-lg'
                      placeholder="Enter your name"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className='!p-6 text-primary text-lg'
                      placeholder="Enter Your email"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                      <Password {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full text-white bg-[#FF6A1A] text-lg font-semibold font-rubik py-7">
              Register
            </Button>
          </form>
        </Form>
            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-background px-2 text-secondary font-rubik font-semibold">
                Or Sign in with
            </span>
            </div>
          {/*  */}
         <div className="flex justify-center items-center gap-5">
            <Button variant={"outline"} className="py-5 w-1/2 m-auto flex justify-center items-center gap-2 text-lg font-semibold font-rubik"><FcGoogle size={26}/> Google</Button>
            <Button variant={"outline"} className="py-5 w-1/2 m-auto flex justify-center items-center gap-2 text-lg font-semibold font-rubik"><BsFacebook size={10} /> Facebook</Button>
         </div>
      </div>
      <div className="text-center text-sm font-semibold font-rubik">
        Already have an account?
        <span onClick={()=>dispatch(openLogin())} className="cursor-pointer underline underline-offset-4 text-[#FF6A1A] ml-1">
            Log In
        </span>
      </div>
    </div>
  );
};

export default RegisterModal;