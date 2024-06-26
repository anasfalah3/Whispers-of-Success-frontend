import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FcGoogle } from "react-icons/fc";
// import Cookies from 'js-cookie';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import  useAuthContext  from "@/context/AuthContext";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(30),
});

export default function Login() {
  const { login, errors } = useAuthContext();

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "anasfalah3@gmail.com",
      password: "12345678",
    },
  });

  // 2. Define a submit handler.

  async function onSubmit({email,password}) {
    await login({email, password})
  }

  return (
    <div className="my-4 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Log In
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600 dark:text-gray-400">
          Enter your email and password to sign in!
        </p>

        <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-slate-100 hover:cursor-pointer dark:bg-slate-700">
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Sign In with Google
          </h5>
        </div>
        <div className="mb-6 flex items-center  gap-3">
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> or </p>
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="exemple@whispers.com" {...field} />
                  </FormControl>
                  {errors.email && <FormMessage>{errors.email[0]}</FormMessage>}
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="****" {...field} />
                  </FormControl>
                  {errors.password && <FormMessage>{errors.password[0]}</FormMessage>}
                </FormItem>
              )}
            />
            <div className="mb-4 flex items-center justify-between px-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Keep me logged In
                </label>
              </div>
              <Link
                className="text-sm font-bold text-indigo-600 hover:text-indigo-900 dark:text-white"
                to={" "}>
                Forgot Password?
              </Link>
            </div>
            <Button
              disabled={form.formState.isSubmitting}
              className="linear mt-2 w-full rounded-xl bg-indigo-600 py-[12px] text-base font-bold text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
              type="submit">
              {form.formState.isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                ""
              )}
              Log In
            </Button>
          </form>
        </Form>
        <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-400">
            Not registered yet?
          </span>
          <Link
            to={"/register"}
            className="ml-1 text-sm font-bold text-indigo-600 hover:text-indigo-900 dark:text-white">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}
