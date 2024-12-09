"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast.success("Message Sent");
      form.reset();
    }, 2000);
  }

  return (
    <div className="container mx-auto px-4 py-16 mt-10 space-y-16">
      <section className="text-center">
        <h1 className="text-cu-secondary-sec dark:text-cu-primary-sec font-playfairDisplay text-[54px] font-bold mb-4">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          We&apos;d love to hear from you! Whether you have a question about our
          coffee, want to book an event, or just want to say hello, don&apos;t
          hesitate to reach out.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="font-playfairDisplay text-2xl">
              Send Us a Message
            </CardTitle>
            <CardDescription>
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
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
                        <Input placeholder="Your email" {...field} />
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
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  variant="primary"
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-playfairDisplay text-2xl">
              Contact Information
            </CardTitle>
            <CardDescription>
              You can also reach us through the following channels:
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <MapPin className="text-cu-secondary-sec dark:text-cu-primary-sec" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-muted-foreground">
                  123 Coffee Lane, Brewville, BV 12345
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-cu-secondary-sec dark:text-cu-primary-sec" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-muted-foreground">(555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-cu-secondary-sec dark:text-cu-primary-sec" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">hello@brewhaven.com</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <section className="text-center bg-primary-card p-8 rounded-lg">
        <h2 className="font-clickerScript text-4xl md:text-5xl mb-4">
          Visit Our Coffee Shop
        </h2>
        <p className="text-lg mb-2">Open daily from 7 AM to 8 PM</p>
        <p className="text-lg text-muted-foreground">
          We can&apos;t wait to serve you the perfect cup!
        </p>
      </section>
    </div>
  );
}
