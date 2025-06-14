
import React from "react";

const CV = () => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h1 className="text-4xl font-bold text-center mb-8">Curriculum Vitae</h1>
    <section className="mb-10 max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-2">
        Professional Summary
      </h2>
      <p className="text-muted-foreground text-lg">
        Brief summary/profile goes here. This should provide a quick introduction with your most compelling qualifications and overall career direction.
      </p>
    </section>
    <section className="mb-10 max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-2">
        Key Skills
      </h2>
      <ul className="list-disc list-inside text-muted-foreground text-lg space-y-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8">
        <li>Skill one</li>
        <li>Skill two</li>
        <li>Skill three</li>
        <li>Skill four</li>
        {/* Add more key/relevant skills as needed */}
      </ul>
    </section>
    <section className="mb-10 max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-2">
        Experience
      </h2>
      <div className="space-y-6">
        {/* Example Job */}
        <div>
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between font-semibold">
            <span className="text-lg">Job Title</span>
            <span className="text-sm font-normal md:ml-4">Company Name, Location</span>
            <span className="text-xs font-normal text-muted-foreground md:ml-4">Jan 2020 – Dec 2023</span>
          </div>
          <ul className="list-disc list-inside ml-4 mt-1 text-muted-foreground">
            <li>Achievement/accomplishment that shows impact.</li>
            <li>Responsibility or key deliverable.</li>
            {/* Add more experience points */}
          </ul>
        </div>
        {/* Add more jobs/projects as needed */}
      </div>
    </section>
    <section className="mb-10 max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-2">
        Education
      </h2>
      <ul className="space-y-3 text-muted-foreground text-lg">
        <li>
          <div className="font-semibold">Degree Name</div>
          <div className="text-sm text-muted-foreground">Institution Name, Year</div>
        </li>
        {/* Add more education entries as needed */}
      </ul>
    </section>
    {/* Optionally add more sections like Certifications, Projects, Awards */}
  </div>
);

export default CV;

