import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { YouTubeIcon, XTwitterIcon, GitHubIcon, LinkedInIcon } from "./SocialIcons";

const Contact = () => {
  const socials = [
    { icon: YouTubeIcon, label: "YouTube", href: "https://youtube.com" },
    { icon: XTwitterIcon, label: "Twitter/X", href: "https://x.com" },
    { icon: GitHubIcon, label: "GitHub", href: "https://github.com" },
    { icon: LinkedInIcon, label: "LinkedIn", href: "https://linkedin.com" },
  ];

  return (
    <section id="contact" className="py-24 relative">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <span className="pill">
            <Mail className="w-3 h-3 mr-1" />
            Contact
          </span>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gradient">
            Let's Build Something Amazing
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you have a project in mind, want to collaborate, or just want to say hello—
            I'd love to hear from you.
          </p>

          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="p-8 rounded-2xl bg-card border border-border inline-block"
          >
            <p className="text-muted-foreground mb-4">Send me an email at</p>
            <a
              href="mailto:hello@jumamaseko.com"
              className="text-2xl md:text-3xl font-semibold hover:text-gradient transition-all duration-300"
            >
              hello@jumamaseko.com
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="hero" size="lg" className="group">
              Get in Touch
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="lg">
              Download Resume
            </Button>
          </div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center justify-center gap-4 pt-8"
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-accent hover:border-muted-foreground/50 transition-all duration-300 text-muted-foreground hover:text-foreground"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
