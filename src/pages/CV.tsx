
import React from "react";

const CV = () => (
  <div className="flex min-h-screen items-center justify-center bg-background px-4 py-8">
    <div className="bg-card shadow-xl rounded-lg p-8 max-w-xl w-full space-y-8">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold font-serif tracking-tight mb-1">
          Curriculum Vitae
        </h1>
      </div>
      <section className="mb-6">
        <h2 className="text-xl font-semibold font-serif text-primary mb-1">
          Professional Summary
        </h2>
        <p className="text-muted-foreground">
          Brief summary/profile goes here. This should provide a quick introduction with your most compelling qualifications and overall career direction.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold font-serif text-primary mb-1">
          Key Skills
        </h2>
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          <li>Skill one</li>
          <li>Skill two</li>
          <li>Skill three</li>
          <li>Skill four</li>
          {/* Add more key/relevant skills as needed */}
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold font-serif text-primary mb-1">
          Experience
        </h2>
        <div className="space-y-4 text-muted-foreground">
          {/* Example Job */}
          <div>
            <div className="flex flex-wrap items-center justify-between font-semibold">
              <span>Job Title</span>
              <span className="text-sm font-normal">Company Name, Location</span>
              <span className="text-xs font-normal text-right">Jan 2020 – Dec 2023</span>
            </div>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>Achievement/accomplishment that shows impact.</li>
              <li>Responsibility or key deliverable.</li>
              {/* Add more experience points */}
            </ul>
          </div>
          {/* Add more jobs/projects as needed */}
        </div>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold font-serif text-primary mb-1">
          Education
        </h2>
        <ul className="space-y-3 text-muted-foreground">
          <li>
            <div className="font-semibold">Degree Name</div>
            <div className="text-sm">Institution Name, Year</div>
          </li>
          {/* Add more education entries as needed */}
        </ul>
      </section>
      {/* Optionally add more sections like Certifications, Projects, Awards */}
    </div>
  </div>
);

export default CV;
