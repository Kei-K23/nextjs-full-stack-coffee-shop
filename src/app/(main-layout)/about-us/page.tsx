import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-16 mt-10 space-y-16">
      <section className="text-center">
        <h1 className="text-cu-secondary-sec dark:text-cu-primary-sec text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Our Story
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Brew Haven was born from a passion for exceptional coffee and a desire
          to create a warm, welcoming space for our community. Since 2010,
          we&apos;ve been serving up artisanal brews and fostering connections,
          one cup at a time.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative h-64 md:h-full">
          <Image
            src="/img/coffee_shop.png"
            alt="Brew Haven Coffee Shop Interior"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <h2 className="font-playfairDisplay text-3xl md:text-4xl font-semibold">
            Our Values
          </h2>
          <ul className="space-y-2">
            {["Quality", "Community", "Sustainability", "Innovation"].map(
              (value) => (
                <li key={value} className="flex items-center">
                  <span className="mr-2 text-cu-secondary-sec dark:text-cu-primary-sec">
                    ✓
                  </span>
                  <span>{value}</span>
                </li>
              )
            )}
          </ul>
          <p className="text-muted-foreground">
            These core values guide everything we do, from sourcing our beans to
            serving our customers.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-playfairDisplay text-3xl md:text-4xl font-semibold text-center mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Emma Thompson",
              role: "Founder & Head Barista",
              image: "/img/user_1.jpg",
            },
            {
              name: "Liam Chen",
              role: "Master Roaster",
              image: "/img/user_3.png",
            },
            {
              name: "Sophia Patel",
              role: "Pastry Chef",
              image: "/img/user_2.jpg",
            },
          ].map((member) => (
            <Card key={member.name} className="overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <CardContent className="text-center p-4">
                <h3 className="font-playfairDisplay text-xl font-semibold">
                  {member.name}
                </h3>
                <p className="text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center bg-primary-card p-8 rounded-lg">
        <h2 className="font-clickerScript text-4xl md:text-5xl mb-4">
          Come Visit Us
        </h2>
        <p className="text-lg mb-4">123 Coffee Lane, Brewville, BV 12345</p>
        <p className="text-lg">Open daily from 7 AM to 8 PM</p>
      </section>
    </div>
  );
}
