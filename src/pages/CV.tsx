
import React from "react";
import { motion } from "framer-motion";

const CV = () => (
  <div className="container mx-auto px-4 py-12 max-w-2xl">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 font-serif">Name Surname</h1>
        <div className="text-xl text-primary font-serif mb-1">Job Title</div>
        <div className="flex flex-wrap gap-2 text-base text-muted-foreground justify-center mb-2">
          <a href="#" className="hover:text-primary underline">
            website.com
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-primary underline">
            linkedin.com/in/username
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-primary underline">
            email@example.com
          </a>
        </div>
      </div>
      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-primary mb-3 font-serif">Profile</h2>
          <div className="text-base text-muted-foreground">
            Brief summary/profile goes here. This should provide a quick introduction.
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-primary mb-3 font-serif">Experience</h2>
          <div className="text-base text-muted-foreground">
            List your work experiences, positions held, or relevant projects here.
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-primary mb-3 font-serif">Education</h2>
          <div className="text-base text-muted-foreground">
            Detail your educational background here.
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-primary mb-3 font-serif">Skills</h2>
          <div className="text-base text-muted-foreground">
            A list or summary of your skills can go here.
          </div>
        </section>
      </div>
    </motion.div>
  </div>
);

export default CV;

