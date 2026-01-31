import { motion } from "framer-motion";
import { Code2, Brain, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building scalable web applications with modern frameworks and best practices.",
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Helping businesses leverage AI tools to automate workflows and boost productivity.",
    },
    {
      icon: Rocket,
      title: "Go Tech Co-founder",
      description: "Leading a tech company focused on innovative solutions and developer education.",
    },
    {
      icon: Users,
      title: "YouTube Educator",
      description: "Teaching thousands of developers how to integrate AI into their projects.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="pill">About</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Building the Future with Code & AI
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As the Co-founder of Go Tech, I'm on a mission to democratize technology education. 
              With years of experience in full-stack development and AI consulting, I help 
              businesses and individuals harness the power of modern technology.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through my YouTube channel, I share practical tutorials on AI integration, 
              web development, and professional programming courses—making complex concepts 
              accessible to developers at all levels.
            </p>

            {/* Code block styled element */}
            <div className="code-block mt-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-destructive/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <code className="text-muted-foreground">
                <span className="text-foreground">const</span> juma = {"{"}
                <br />
                <span className="pl-4">role:</span> <span className="text-green-400">"Full Stack Developer"</span>,
                <br />
                <span className="pl-4">passion:</span> <span className="text-green-400">"Teaching AI"</span>,
                <br />
                <span className="pl-4">mission:</span> <span className="text-green-400">"Empower developers"</span>
                <br />
                {"}"};
              </code>
            </div>
          </motion.div>

          {/* Right grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-card border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
