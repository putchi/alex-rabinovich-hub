import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
};

export default Index;
