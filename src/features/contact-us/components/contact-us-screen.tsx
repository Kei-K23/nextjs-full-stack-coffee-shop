"use client";

import ContactForm from "@/features/contact-us/components/contact-form";
import ContactInfoCard from "@/features/contact-us/components/contact-info-card";
import { useNavbarStore } from "@/stores/use-navbar-store";
import { useEffect } from "react";

export default function ContactUsScreen() {
  const { resetState } = useNavbarStore();
  useEffect(() => {
    // Cleanup function to reset navbar store
    return () => {
      resetState();
    };
  }, [resetState]);

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
        <ContactForm />
        <ContactInfoCard />
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
