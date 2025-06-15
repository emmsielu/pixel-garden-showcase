
import React from "react";

const CV = () => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h1 className="text-4xl font-bold text-center mb-12">Curriculum Vitae</h1>

    <div className="grid grid-cols-12 gap-x-8">
      <div className="col-span-12 xl:col-span-10 xl:col-start-2">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Professional Summary
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Brief summary/profile goes here. This should provide a quick introduction with your most compelling qualifications and overall career direction.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
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

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Experience
          </h2>
          <div className="space-y-8">
            {/* Example Job */}
            <div>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between font-semibold">
                <span className="text-lg">Job Title</span>
                <span className="text-sm font-normal md:ml-4">Company Name, Location</span>
                <span className="text-xs font-normal text-muted-foreground md:ml-4">Jan 2020 – Dec 2023</span>
              </div>
              <ul className="list-disc list-inside ml-4 mt-2 text-muted-foreground space-y-1">
                <li>Achievement/accomplishment that shows impact.</li>
                <li>Responsibility or key deliverable.</li>
                {/* Add more experience points */}
              </ul>
            </div>
            {/* Add more jobs/projects as needed */}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">
            Education
          </h2>
          <ul className="space-y-4 text-muted-foreground text-lg">
            <li>
              <div className="font-semibold text-foreground">Degree Name</div>
              <div className="text-base text-muted-foreground">Institution Name, Year</div>
            </li>
            {/* Add more education entries as needed */}
          </ul>
        </section>
      </div>
    </div>
  </div>
);

export default CV;
