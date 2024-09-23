"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  user_name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50),
  user_email: z.string().email(),
  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters." }),
});

const FormContactMe = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    const templateParams = {
      user_name: values.user_name,
      user_email: values.user_email,
      message: values.message,
    };
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_KEY;

    emailjs
      .send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
      })
      .then(() => {
        console.log("Email sent successfully");
        toast({
          description: "Email sent successfully",
        });
        form.reset();
      })
      .catch((error) => {
        console.error("Error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-5"
      >
        <FormField
          control={form.control}
          name="user_name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  name="user_name"
                  placeholder="Your Name"
                  type="text"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="user_email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  name="user_email"
                  placeholder="Your Email"
                  type="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  {...field}
                  name="message"
                  placeholder="How can i help?*"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={loading} className="h-12" type="submit">
          Get In Touch
        </Button>
      </form>
    </Form>
  );
};

export default FormContactMe;
