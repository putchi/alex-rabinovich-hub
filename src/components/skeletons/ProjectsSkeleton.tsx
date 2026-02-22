import { Skeleton } from "@/components/ui/skeleton";

const ProjectCard = () => (
  <div className="card-glass rounded-xl p-8 space-y-4">
    <div className="flex justify-between">
      <Skeleton className="h-6 w-40" />
      <Skeleton className="h-5 w-5" />
    </div>
    <div className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-3/4" />
    </div>
    <div className="flex gap-2">
      <Skeleton className="h-6 w-16 rounded-full" />
      <Skeleton className="h-6 w-14 rounded-full" />
      <Skeleton className="h-6 w-20 rounded-full" />
    </div>
  </div>
);

const ProjectsSkeleton = () => (
  <section id="projects" className="py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="mb-16">
        <Skeleton className="h-4 w-12 mb-4" />
        <Skeleton className="h-10 w-56" />
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  </section>
);

export default ProjectsSkeleton;
