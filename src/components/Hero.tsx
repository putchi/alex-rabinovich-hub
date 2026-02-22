import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const ownerName = import.meta.env.VITE_OWNER_NAME || 'Your Name';
  const ownerTitle = import.meta.env.VITE_OWNER_TITLE || 'Your Title';
  const firstName = ownerName.split(' ')[0];
  const lastName = ownerName.split(' ').slice(1).join(' ');

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]" style={{ background: "var(--gradient-hero)" }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 text-center max-w-4xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted-foreground font-body text-sm tracking-[0.3em] uppercase mb-6"
        >
          {ownerTitle}
        </motion.p>

        <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] mb-8">
          <span className="text-foreground">{firstName}</span>
          <br />
          <span className="text-gradient">{lastName}</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-muted-foreground font-body text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Engineering leader in Fintech and distributed systems — focused on reliability,
          scale, and making AI work in production, not just in demos. 11+ years building
          and leading distributed teams across geographies. I operate at the intersection
          of hands-on architecture and people leadership, and I take seriously how AI systems
          are built, evaluated, and deployed - keeping engineering judgment firmly human.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-12 z-10 cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
