
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60"
              alt="John Doe"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold mb-4">Hi, I'm John Doe.</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              I am a passionate and results-driven designer and developer with a knack for creating engaging and user-friendly digital experiences. With over 5 years in the industry, I have honed my skills in UI/UX design, front-end development, and branding.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              My philosophy is to bridge the gap between aesthetics and functionality. I believe that great design is not just about looking good, but also about solving problems and creating intuitive interactions for the user. I thrive on collaboration and am always eager to learn new technologies to push the boundaries of what's possible.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              When I'm not designing or coding, you can find me exploring nature, trying out new coffee shops, or getting lost in a good book.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
