import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Bot, Workflow, Code, Database, Zap } from "lucide-react";

const Discover = () => {
  const courses = [
    {
      icon: Bot,
      title: "AI Integration Masterclass",
      description: "Learn to integrate ChatGPT, Claude, and other LLMs into your applications.",
      tag: "Popular",
      color: "from-blue-500/10 to-purple-500/10",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Automate repetitive tasks using AI agents and modern automation tools.",
      tag: "New",
      color: "from-green-500/10 to-emerald-500/10",
    },
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Build production-ready applications with React, Node.js, and databases.",
      tag: "Beginner Friendly",
      color: "from-orange-500/10 to-red-500/10",
    },
    {
      icon: Database,
      title: "Backend Architecture",
      description: "Design scalable APIs and database schemas for enterprise applications.",
      tag: "Advanced",
      color: "from-cyan-500/10 to-blue-500/10",
    },
    {
      icon: Sparkles,
      title: "AI Prompt Engineering",
      description: "Master the art of crafting prompts that get the best results from AI.",
      tag: "Hot",
      color: "from-pink-500/10 to-rose-500/10",
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Build MVPs and prototypes in days, not months using AI tools.",
      tag: "Coming Soon",
      color: "from-yellow-500/10 to-amber-500/10",
    },
  ];

  return (
    <section id="discover" className="py-24 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="pill">
            <Sparkles className="w-3 h-3 mr-1" />
            Discover
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            Explore Courses & Tutorials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Level up your development skills with hands-on courses covering AI integration, 
            web development, and professional programming practices.
          </p>
        </motion.div>

        {/* Course cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative p-6 rounded-2xl bg-card border border-border card-hover h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <course.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <span className="pill text-xs">{course.tag}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient transition-all duration-300">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-grow">
                  {course.description}
                </p>

                {/* Action */}
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Learn more</span>
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-foreground" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            View all tutorials on YouTube
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Discover;
