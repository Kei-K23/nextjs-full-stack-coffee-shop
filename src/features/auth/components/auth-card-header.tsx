import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Coffee } from "lucide-react";

export function AuthCardHeader() {
  return (
    <CardHeader className="space-y-4 text-center">
      <div className="flex items-center justify-center space-x-2">
        <Coffee className="h-8 w-8 text-cu-secondary dark:text-cu-primary" />
        <h2 className="text-2xl font-bold text-cu-secondary dark:text-cu-primary">
          Coffee Haven
        </h2>
      </div>
      <CardTitle className="text-2xl text-cu-secondary dark:text-cu-primary">
        Sign in to your account
      </CardTitle>
      <CardDescription className="dark:text-gray-400">
        Choose your preferred method to continue
      </CardDescription>
    </CardHeader>
  );
}
