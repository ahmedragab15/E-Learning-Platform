"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema, loginSchemaValues } from "@/schema/loginSchema";
import Link from "next/link";

const LoginForm = () => {
  const form = useForm<loginSchemaValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: loginSchemaValues) {
    console.log(values);
  }

  return (
    <div className="flex flex-col gap-4 items-center w-96 max-w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" className="bg-white" {...field} />
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
                  <Input placeholder="Enter your password" type="password" className="bg-white" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" fullwidth className="rounded-none">
            Login
          </Button>
        </form>
      </Form>
      <span className="block text-sm">Or Sign in with</span>
      <Button variant="outline" fullwidth>
        Sign in with Google
      </Button>
      <span className="text-sm">
        Not registered yet?{" "}
        <Link href="/register" className="text-primary">
          Create an Account
        </Link>
      </span>
    </div>
  );
};

export default LoginForm;
