
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const CV = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">Curriculum Vitae</h1>
          <Button asChild>
            <a href="/placeholder-cv.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold border-b border-primary pb-2 mb-6">Experience</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold">Lead Designer & Developer</h3>
                <p className="text-muted-foreground">Creative Agency | 2021 - Present</p>
                <ul className="list-disc list-inside mt-2 text-foreground/80 space-y-1">
                  <li>Led design and development of over 20 web projects for clients in various industries.</li>
                  <li>Implemented responsive designs, improving mobile user engagement by 40%.</li>
                  <li>Mentored junior designers and developers, fostering a collaborative team environment.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Front-End Developer</h3>
                <p className="text-muted-foreground">Tech Startup | 2019 - 2021</p>
                <ul className="list-disc list-inside mt-2 text-foreground/80 space-y-1">
                  <li>Developed and maintained the company's main SaaS product using React and TypeScript.</li>
                  <li>Collaborated with UX/UI designers to translate mockups into functional components.</li>
                  <li>Improved application performance by optimizing component rendering and state management.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold border-b border-primary pb-2 mb-6">Education</h2>
            <div>
              <h3 className="text-2xl font-semibold">Bachelor of Science in Computer Science</h3>
              <p className="text-muted-foreground">University of Design & Technology | 2015 - 2019</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold border-b border-primary pb-2 mb-6">Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'UI/UX Design', 'Figma', 'Adobe XD',
                'HTML & CSS', 'JavaScript (ES6+)', 'TypeScript',
                'React', 'Vue.js', 'Node.js',
                'Tailwind CSS', 'Branding', 'Prototyping'
              ].map(skill => (
                <div key={skill} className="bg-secondary text-secondary-foreground rounded-md px-4 py-2 text-center">
                  {skill}
                </div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default CV;
