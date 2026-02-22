import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useAboutData } from "@/hooks/useSanityData";
import AboutSkeleton from "@/components/skeletons/AboutSkeleton";

const About = () => {
  const { data: about, isLoading } = useAboutData();

  if (isLoading) return <AboutSkeleton />;

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">About</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-8">
            A bit about me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-secondary-foreground font-body text-lg leading-relaxed">
              {about?.paragraph1}
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              {about?.paragraph2}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground font-body text-sm uppercase tracking-widest mb-4">Technologies</p>
            <div className="flex flex-wrap gap-3">
              {about?.skills?.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-body text-sm border border-border hover:border-primary/40 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center mt-16 cursor-pointer"
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
