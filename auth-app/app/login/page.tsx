/** @format */
"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", user);
  };

  const isFormValid = () => {
    return user.email.length > 0 && user.password.length > 0;
  };

  return (
    <div className='h-screen bg-primary/5 flex items-center justify-center'>
      <Card className='w-[450px]'>
        <CardHeader className={cn(`text-3xl text-center`)}>Login</CardHeader>
        <form onSubmit={handleForm}>
          <CardContent>
            <div className='grid gap-2'>
              <Label>Email</Label>
              <Input
                placeholder='Enter Your Email'
                type='email'
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className='grid gap-2 mt-4'>
              <Label>Password</Label>
              <Input
                placeholder='Enter Your Password'
                type='password'
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
          </CardContent>
          <CardFooter className='flex-col justify-start items-start'>
            <Button className='w-full' type='submit' disabled={!isFormValid()}>
              Login
            </Button>
            <span className='block mt-1 font-light text-sm'>
              <span>Create a Account! Please </span>
              <Link href={"/signup"} className='text-primary'>
                Register
              </Link>
            </span>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Login;
