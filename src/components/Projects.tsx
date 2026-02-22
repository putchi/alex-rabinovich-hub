import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useProjectsData } from "@/hooks/useSanityData";
import ProjectsSkeleton from "@/components/skeletons/ProjectsSkeleton";
import type { Project } from "@/sanity/types";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group block card-glass rounded-xl p-8 hover:border-primary/30 transition-all duration-500 hover:glow"
  >
    <div className="flex items-start justify-between mb-4">
      <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
        {project.title}
      </h3>
      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
    </div>

    <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2">
      {project.tags?.map((tag) => (
        <span key={tag} className="text-xs font-body text-muted-foreground bg-muted px-3 py-1 rounded-full">
          {tag}
        </span>
      ))}
    </div>
  </motion.a>
);

const Projects = () => {
  const { data: projects, isLoading } = useProjectsData();

  if (isLoading) return <ProjectsSkeleton />;

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Work</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            Selected Projects
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects?.map((project, i) => (
            <ProjectCard key={project._id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
