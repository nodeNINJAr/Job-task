"use-client"

import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import Password from '../ui/Password';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { closeModal, openRegister } from '@/redux/features/modal/modalSlice';



// 
export function LoginModal({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
// 
const dispatch = useDispatch();



  //
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe:false,
    },
  });




//   
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
    } catch (err) {
      console.error(err);

    }
  };



//   

  return (
   <div className={cn("flex flex-col gap-6 absolute top-2/3 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-sm w-11/12  p-4 md:p-6 md:w-[478px] rounded-sm", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center relative">
        <span className='absolute right-0 top-0 w-6 h-6 text-primary' onClick={()=>dispatch(closeModal())}><X/></span>
        <h1 className="text-3xl font-bold font-rubik my-6">Login</h1>
      </div>
      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className='!p-6 text-primary text-lg'
                      placeholder="Enter Your Email"
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

      <div className="flex justify-between items-center gap-10">
            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <label className="flex items-center space-x-1 ">
                      <input
                        className='h-4 w-4 !text-[#FF6A1A] !border-[#FF6A1A] !bg-[#FF6A1A]'
                        type="checkbox"
                        checked={field.value || false}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        name={field.name}
                        ref={field.ref}
                      />
                      <span className='text-[12px] font-rubik font-medium'>Remember me</span>
                    </label>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <Link href="#" className="text-sm font-semibold font-rubik underline text-[#4A4A52]">Forgot Password</Link>
          </div>

            <Button type="submit" className="w-full text-white bg-[#FF6A1A] text-lg font-semibold font-rubik py-7">
              Login
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
         Don’t have an account? 
        <span onClick={() =>  dispatch(openRegister())} className="cursor-pointer underline underline-offset-4 text-[#FF6A1A] ml-1">
           Sign up
        </span>
      </div>
    </div>
  );
};

export default LoginModal;