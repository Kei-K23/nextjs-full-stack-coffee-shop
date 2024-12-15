import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Coffee } from "lucide-react";

export function AuthCardHeader() {
  return (
    <CardHeader className="space-y-4 text-center">
      <div className="flex items-center justify-center space-x-2">
        <Coffee className="h-8 w-8 text-cu-secondary dark:text-cu-primary" />
        <h2 className="font-clickerScript text-5xl font-bold text-cu-secondary dark:text-cu-primary">
          Brew Haven
        </h2>
      </div>
      <CardTitle className="text-2xl text-cu-secondary dark:text-cu-primary">
        Sign in to your account
      </CardTitle>
      <CardDescription className="text-muted-foreground">
        Choose your preferred method to continue
      </CardDescription>
    </CardHeader>
  );
}
