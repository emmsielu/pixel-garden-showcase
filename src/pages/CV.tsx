
import React from "react";

const CV = () => (
  <div className="flex items-center justify-center min-h-screen bg-background px-4 py-8">
    <div className="bg-card shadow-xl rounded-lg p-8 max-w-lg w-full space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold font-serif mb-2">Name Surname</h1>
        <p className="text-lg text-primary mb-2">Job Title</p>
        <div className="flex flex-wrap justify-center gap-3 text-muted-foreground text-sm">
          <a href="#" className="hover:text-primary underline">website.com</a>
          <span>|</span>
          <a href="#" className="hover:text-primary underline">linkedin.com/in/username</a>
          <span>|</span>
          <a href="#" className="hover:text-primary underline">email@example.com</a>
        </div>
      </div>
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold font-serif text-primary mb-2">About</h2>
          <p className="text-muted-foreground">Brief description about yourself. What do you do? What sets you apart?</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold font-serif text-primary mb-2">Experience</h2>
          <p className="text-muted-foreground">List your relevant work experiences or projects here.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold font-serif text-primary mb-2">Skills</h2>
          <p className="text-muted-foreground">Key skills and technologies go here.</p>
        </section>
      </div>
    </div>
  </div>
);

export default CV;
