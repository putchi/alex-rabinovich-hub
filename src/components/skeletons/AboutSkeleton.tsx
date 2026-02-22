import { Skeleton } from "@/components/ui/skeleton";

const AboutSkeleton = () => (
  <section id="about" className="py-32 px-6">
    <div className="max-w-5xl mx-auto">
      {/* section heading */}
      <Skeleton className="h-4 w-16 mb-4" />
      <Skeleton className="h-10 w-64 mb-16" />

      <div className="grid md:grid-cols-2 gap-16">
        {/* paragraphs */}
        <div className="space-y-4">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-5/6" />
          <div className="pt-2 space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
        {/* skill tags */}
        <div>
          <Skeleton className="h-4 w-28 mb-4" />
          <div className="flex flex-wrap gap-3">
            {Array.from({ length: 12 }).map((_, i) => (
              <Skeleton key={i} className="h-9 w-20 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSkeleton;
