"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { registerSchema, registerSchemaValues } from "@/schema/registerSchema";
import Link from "next/link";
import { RegisterFormInputs } from "@/constants";
import { createUserAction } from "@/actions/userActions";

const RegisterForm = () => {
  const form = useForm<registerSchemaValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: registerSchemaValues) {
    console.log(values);
    createUserAction(values);
  }

  return (
    <div className="flex flex-col gap-4 items-center w-96 max-w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
          {RegisterFormInputs.map((input, index) => (
            <FormField
              key={index}
              control={form.control}
              name={input.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{input.label}</FormLabel>
                  <FormControl>
                    <Input placeholder={input.placeholder} className="bg-white" type={input.type} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button type="submit" fullwidth className="rounded-none">
            Create Account
          </Button>
        </form>
      </Form>
      <span className="block text-sm">Or Sign in with</span>
      <Button variant="outline" fullwidth>
        Sign in with Google
      </Button>
      <span className="text-sm">
        Already registered?{" "}
        <Link href="/login" className="text-primary">
          Login
        </Link>
      </span>
    </div>
  );
};

export default RegisterForm;
