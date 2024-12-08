import { Feature } from "@/types";

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const { Icon, name, description } = feature;
  return (
    <div className="bg-primary-card flex items-center justify-center flex-col hover:bg-primary-card-sec py-5 transition-all">
      <Icon className="size-[80px]" />
      <div className="flex items-center justify-center flex-col p-4 px-14">
        <p className="text-2xl font-bold text-cu-secondary-sec dark:text-cu-primary-sec">
          {name}
        </p>
        <p className="text-xl text-center text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
