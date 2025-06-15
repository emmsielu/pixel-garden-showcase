
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold text-center mb-4">My Work</h1>
        <p className="text-xl text-muted-foreground text-center mb-12">
          A selection of projects that I'm proud of.
        </p>
      </motion.div>

      <div className="grid grid-cols-12 gap-8">
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants} className="col-span-12 md:col-span-6 lg:col-span-4">
            <ProjectCard
              id={project.id}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              imageUrl={project.imageUrl}
              showReadMore={true}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
