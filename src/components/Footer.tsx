
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
