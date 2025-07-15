"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { contactUs, contactUsValues } from "@/schema/ContactUsSchema";
import { Textarea } from "@/components/ui/textarea";
import { ContactFormInputs } from "@/constants";

const ContactUsForm = () => {
  const form = useForm<contactUsValues>({
    resolver: zodResolver(contactUs),
    defaultValues: {
      email: "",
      subject: "",
      description: "",
    },
  });

  function onSubmit(values: contactUsValues) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        {ContactFormInputs.map((input, index) => (
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
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Type your description here." className="bg-white resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" fullwidth className="rounded-none">
          Send
        </Button>
      </form>
    </Form>
  );
};

export default ContactUsForm;
