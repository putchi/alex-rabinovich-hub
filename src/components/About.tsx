import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const About = () => {
  const skills = [
    "Go", "TypeScript", "Java", "Node.js",
    "React", "AWS", "Microservices", "Kafka",
  ];

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
              I'm an engineering leader who loves solving problems at the intersection of scale, reliability, and
              business impact. I lead distributed teams building global payments infrastructure —
              where uptime isn't a metric, it's a responsibility.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Beyond core engineering work, I explore AI and LLM architectures hands-on — working with agentic AI workflows and RAG architectures 
              and bringing that experience directly into engineering decisions. 
              I lead POCs, shape AI integration strategy, and think carefully about where AI actually adds business value versus where it adds noise. 
              I care about how these systems are designed, evaluated, and deployed responsibly, while keeping engineering judgment firmly human.
              I believe the best engineers stay curious, stay humble, and never stop shipping.
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
              {skills.map((skill) => (
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
