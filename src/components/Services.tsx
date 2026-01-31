import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code2, Cpu, Palette, MessageSquare } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Next.js, and Node.js. From landing pages to complex SaaS platforms.",
      features: ["React & Next.js", "API Development", "Database Design", "Cloud Deployment"],
    },
    {
      icon: Cpu,
      title: "AI Consulting",
      description: "Strategic guidance on integrating AI into your business workflows. Identify opportunities and implement solutions that drive real value.",
      features: ["AI Strategy", "LLM Integration", "Automation Setup", "Custom AI Agents"],
    },
    {
      icon: Palette,
      title: "Technical Training",
      description: "Customized training programs for your team. Learn to build with AI, modern web technologies, and industry best practices.",
      features: ["Team Workshops", "1-on-1 Mentoring", "Course Creation", "Corporate Training"],
    },
    {
      icon: MessageSquare,
      title: "Project Consulting",
      description: "Expert consultation on your existing projects. Code reviews, architecture decisions, and performance optimization.",
      features: ["Code Review", "Architecture Design", "Performance Audit", "Technical Writing"],
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="pill">Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            How I Can Help You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From development to consulting, I offer a range of services to help 
            you build better products and grow your technical capabilities.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl bg-card border border-border card-hover group"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                  <service.icon className="w-7 h-7 text-foreground" />
                </div>
                <div className="space-y-4 flex-grow">
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span key={feature} className="pill">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Ready to start a project or need consultation?
          </p>
          <Button variant="hero" size="lg">
            Schedule a Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
