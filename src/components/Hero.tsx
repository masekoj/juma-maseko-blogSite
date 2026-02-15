import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import MagneticButton from "./MagneticButton";
import YouTubeLightbox from "./YouTubeLightbox";
import AnimatedCounter from "./AnimatedCounter";
import ParticleBackground from "./ParticleBackground";

const nameLetters = "Juma Maseko".split("");

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle background */}
      <ParticleBackground />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <span className="pill">Co-founder of Go Tech</span>
          </motion.div>

          {/* Main heading - kinetic typography */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            {nameLetters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: 0.4 + i * 0.06,
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="inline-block text-gradient hover:scale-110 transition-transform duration-200 cursor-default"
                style={{ display: letter === " " ? "inline" : "inline-block" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Full Stack Web Developer, Computer Programmer, and AI Consultant.
          </motion.p>

          {/* CTA Buttons with magnetic effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <MagneticButton>
              <Button variant="hero" size="lg" className="group">
                Get in Touch
                <motion.span
                  className="inline-flex"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", repeatDelay: 1 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button
                variant="heroOutline"
                size="lg"
                className="group"
                onClick={() => setIsVideoOpen(true)}
              >
                <Play className="w-4 h-4" />
                Watch on YouTube
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Stats with counter animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-8 pt-12 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <AnimatedCounter target={10} suffix="K+" />
              <span>YouTube Subscribers</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <AnimatedCounter target={50} suffix="+" />
              <span>AI Tutorials</span>
            </div>
            <div className="w-px h-6 bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <AnimatedCounter target={100} suffix="+" />
              <span>Projects Delivered</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* YouTube Lightbox */}
      <YouTubeLightbox isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  );
};

export default Hero;
