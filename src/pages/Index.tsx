import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Discover from "@/components/Discover";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Fixed full-page background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/images/juma-profile.jpeg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />
      {/* Dark gradient overlay */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.92) 100%)",
        }}
      />
      <div className="relative z-10">
      <Navigation />
      <ScrollToTop />
      <main>
        <Hero />
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <About />
        </motion.div>
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <Discover />
        </motion.div>
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <Services />
        </motion.div>
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <Contact />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
