/** @format */

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
import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    userName: "",
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
        <CardHeader className={cn(`text-3xl text-center`)}>Register</CardHeader>
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
              <Label>UserName</Label>
              <Input
                placeholder='Enter Your Name'
                type='text'
                value={user.userName}
                onChange={(e) => setUser({ ...user, userName: e.target.value })}
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
            <Button type='submit' className='w-full' disabled={!isFormValid()}>
              Register
            </Button>
            <span className='block mt-1 font-light text-sm'>
              <span>Already have an account! Please </span>
              <Link href={"/login"} className='text-primary'>
                login
              </Link>
            </span>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Register;
