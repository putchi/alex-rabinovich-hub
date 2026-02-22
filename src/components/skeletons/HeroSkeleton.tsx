import { Skeleton } from "@/components/ui/skeleton";

const HeroSkeleton = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
    <div className="relative z-10 text-center max-w-4xl w-full space-y-8">
      {/* title line */}
      <Skeleton className="h-4 w-48 mx-auto" />
      {/* name lines */}
      <Skeleton className="h-20 w-80 mx-auto" />
      <Skeleton className="h-20 w-64 mx-auto" />
      {/* bio paragraph */}
      <div className="space-y-3 max-w-2xl mx-auto">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-5/6" />
        <Skeleton className="h-5 w-3/4" />
      </div>
    </div>
  </section>
);

export default HeroSkeleton;
