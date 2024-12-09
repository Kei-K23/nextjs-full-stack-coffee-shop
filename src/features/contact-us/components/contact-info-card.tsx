import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfoCard() {
  return (
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
  );
}
