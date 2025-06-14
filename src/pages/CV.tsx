import React from "react";
import { motion } from "framer-motion";

const CV = () => (
  <div className="container mx-auto px-4 py-12 max-w-6xl">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold font-serif mb-2">Name Surname</h1>
        <div className="text-xl text-primary font-serif mb-1">Job Title</div>
        {/* Contact */}
        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground justify-center mb-2">
          <span>
            {/* Contact Details */}
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
          </span>
        </div>
      </div>
      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Main Section */}
        <div className="flex-1 space-y-10">
          {/* Profile */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-3 font-serif">Profile</h2>
            <div className="text-base text-muted-foreground">
              Brief summary/profile goes here. This should provide a quick introduction.
            </div>
          </section>
          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-3 font-serif">Experience</h2>
            <div className="space-y-6">
              {/* Example role */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="font-semibold text-lg">Job Title</span>
                  <span className="text-muted-foreground text-base ml-0 sm:ml-3">Company Name</span>
                  <span className="text-muted-foreground text-sm sm:ml-auto">Jan 2023 – Present</span>
                </div>
                <ul className="list-disc list-inside ml-5 mt-1 text-foreground/80 space-y-1">
                  <li>Short description or achievement</li>
                  <li>Another summary point</li>
                </ul>
              </div>
              {/* Add more roles as needed */}
            </div>
          </section>
          {/* Other */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-3 font-serif">Other</h2>
            <div className="text-base text-muted-foreground">
              Other activities or interests (optional).
            </div>
          </section>
        </div>
        {/* Sidebar */}
        <aside className="w-full md:w-72 flex-shrink-0 space-y-8">
          {/* Skills */}
          <div>
            <h3 className="text-xl font-bold border-b border-primary pb-1 mb-2">Skills</h3>
            <ul className="text-base space-y-1">
              <li>Skill 1</li>
              <li>Skill 2</li>
              <li>Skill 3</li>
            </ul>
          </div>
          {/* Software */}
          <div>
            <h3 className="text-xl font-bold border-b border-primary pb-1 mb-2">Software</h3>
            <ul className="text-base space-y-1">
              <li>Software 1</li>
              <li>Software 2</li>
            </ul>
          </div>
          {/* Education */}
          <div>
            <h3 className="text-xl font-bold border-b border-primary pb-1 mb-2">Education</h3>
            <ul className="space-y-2">
              <li>
                <div className="font-semibold">Degree / Course</div>
                <div className="text-muted-foreground">School / University</div>
                <div className="text-sm">Summary or notes here.</div>
              </li>
              {/* Add more education as needed */}
            </ul>
          </div>
        </aside>
      </div>
    </motion.div>
  </div>
);

export default CV;
