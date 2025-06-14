import React from "react";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

// Updated content extracted from the user's CV image:

const experience = [
  {
    title: "Freelance Senior Experience/Product Designer (UX/UI)",
    company: "Contract & Agency",
    date: "Nov 2014 – Present",
    details: [
      "Agency-side projects for The Financial Times, Google, Sainsbury's, BT, Nike Foundation, AstraZeneca, Guinness, and more.",
      "Covering interaction design, IA, user research & interviews, prototyping, UI design, pitches, and agile cycles.",
      "Long-term client-side design lead: established user research cycles, led UX/UI for 2 new SaaS platforms from pre-product discovery, and hired/directed cross-functional teams."
    ]
  },
  {
    title: "Experience Designer",
    company: "Bright North",
    date: "Jan 2014 – Nov 2014",
    details: [
      "Data-led UX strategy and design for e-commerce, recruitment and publisher platforms (inc. The Guardian, Sky)."
    ]
  },
  {
    title: "User Experience Designer",
    company: "Nonsense",
    date: "Dec 2012 – Nov 2013",
    details: [
      "All UX and client presentation for: Bacardi, SSAFA, ABF, Cancer Research, Macmillan, Friends of the Earth, The Children's Society."
    ]
  },
  {
    title: "Associate Experience Architect",
    company: "DigitasLBi",
    date: "Oct 2011 – Dec 2012",
    details: [
      "Worked closely with designers and developers to build global digital solutions for BT, Lloyds Bank, AstraZeneca, Turkcell, E.On."
    ]
  },
  {
    title: "User Experience Designer",
    company: "Spring Digital",
    date: "Jul 2011 – Oct 2011",
    details: [
      "Sole UX on startup SaaS for multiple clients."
    ]
  },
  {
    title: "PhD (Media Arts Technology), Placement & PM",
    company: "Queen Mary University/ Inition",
    date: "Sep 2010 – Jul 2011",
    details: [
      "Full scholarship; placement at Inition, BBC project; Windows App prototyping (PhD unfinished for industry roles)."
    ]
  },
  {
    title: "User Experience Designer",
    company: "Teachers TV",
    date: "Jul 2010 – Sep 2010",
    details: [
      "Rich media CMS features, functional specs, usability interviews."
    ]
  },
  {
    title: "User Experience Designer",
    company: "Enterprise UK",
    date: "Oct 2009 – Jul 2010",
    details: [
      "Sole UX, all wireframes & visual asset editing for Global Entrepreneurship Week."
    ]
  },
  {
    title: "Multimedia Designer",
    company: "IfM, Cambridge University",
    date: "Oct 2005 – Oct 2008",
    details: [
      "Graphics, print/web/motion, training docs, video/audio for university partners."
    ]
  },
  {
    title: "Freelance Visual Designer",
    company: "Local Businesses",
    date: "May 2005 – Present",
    details: [
      "Branding, illustration, decals, packaging, cards, letterheads, signage."
    ]
  }
];

const skills = [
  "Pitching & strategy",
  "Requirements gathering",
  "User research interviews",
  "Usability interviews",
  "Complex problem solving",
  "Workshop facilitation",
  "Personas/Pen portraits",
  "Storyboarding",
  "Interaction diagrams",
  "Rapid ideation/sketching",
  "Hi-fi wireframes",
  "Prototyping",
  "Spec documentation",
  "Branding",
  "UI Design",
  "HTML/CSS",
  "Arduino/Processing"
];

const software = [
  "Figma",
  "Affinity Designer",
  "Photoshop",
  "Illustrator",
  "ChatGPT"
];

const education = [
  {
    course: "MA Design for Interactive Media (Merit)",
    school: "Middlesex University",
    notes: "Researched emotion in HCI, developed Flask interfaces and a multi-touch demo for CREATE 09 conference."
  },
  {
    course: "BA (Hons) Design for Interactive Media (1st Class, one year top-up)",
    school: "UWIC, Cardiff",
    notes: "Researched emotion in HCI, designed a remote interview platform & awarded best student."
  },
  {
    course: "BTEC Foundation Diploma in Art & Design (Distinction)",
    school: "Bridgend College of Technology",
    notes: "Fine art, graphics, fashion. Specialised in 3D Design."
  }
];

const contactInfo = [
  { label: 'Portfolio', value: "emmalucy.design", url: "https://emmalucy.design" },
  { label: 'LinkedIn', value: "emmalucybevan", url: "https://linkedin.com/in/emmalucybevan" },
  { label: 'Email', value: "emmalucybevan@gmail.com", url: "mailto:emmalucybevan@gmail.com" },
  { label: 'Mobile', value: "07427 683983" }
];

const intro = (
  <>
    Experienced, pragmatic and creative design leader—with long-term product vision, strong technical empathy, and exceptional collaboration skills. <br />
    <br />
    I help ambitious startups, scaleups and agencies build outstanding products and joyful user journeys, using a "whole-product" approach: research, concept, join-up, design and delivery. <br />
    <br />
    Versed in Agile ways of working and able to drive a vision through ambiguity. Deep experience in interaction design, product/UX, with strong visual skills. Friendly, collaborative and reliable.
  </>
);

const otherThings = (
  <>
    Interested in exploring emotion through digital experiments—using Processing and Arduino. Keen sketcher and painter (<a href="https://emmsielu.co.uk" className="underline" target="_blank" rel="noopener noreferrer">emmsielu.co.uk</a>). Performer with several improv groups, boulderer, dancer, and singer (quietly or otherwise).
  </>
);

const CV = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Centered Page Title */}
        <div className="flex flex-col items-center mb-12 text-center">
          <h1 className="text-4xl font-bold mb-2 font-serif">
            Curriculum Vitae
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content */}
          <div className="flex-1 space-y-10">
            {/* Name + Title */}
            <div>
              <h2 className="text-2xl font-serif font-semibold mb-1">Emma L. Bevan</h2>
              <div className="text-xl text-primary font-serif mb-2">Senior Product Designer</div>
              {/* Quick Contact */}
              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-4">
                <React.Fragment>
                  {contactInfo.map((item, idx) =>
                    item.url ? (
                      <a
                        key={item.label}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span key={item.label}>{item.value}</span>
                    )
                  ).reduce((prev, curr, idx) =>
                    idx === 0
                      ? [curr]
                      : [prev, <span key={`sep-${idx}`} className="mx-2">|</span>, curr]
                  )}
                </React.Fragment>
              </div>
              <div className="text-base">{intro}</div>
            </div>

            {/* Experience */}
            <section>
              <h3 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Experience</h3>
              <div className="space-y-7">
                {experience.map((role, idx) => (
                  <div key={role.title + idx}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                      <span className="font-semibold text-lg">{role.title}</span>
                      <span className="text-muted-foreground text-base ml-0 sm:ml-2">{role.company}</span>
                      <span className="text-muted-foreground text-sm sm:ml-auto">{role.date}</span>
                    </div>
                    <ul className="list-disc list-inside ml-3 mt-1 text-foreground/80 space-y-1">
                      {role.details.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Other things */}
            <section>
              <h3 className="text-xl font-semibold mt-8 mb-2 text-primary">Other things…</h3>
              <div className="text-base">{otherThings}</div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0 space-y-8">
            {/* Skills */}
            <div>
              <h4 className="text-xl font-bold border-b border-primary pb-1 mb-2">Skills</h4>
              <ul className="text-base space-y-1">
                {skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
            {/* Software */}
            <div>
              <h4 className="text-xl font-bold border-b border-primary pb-1 mb-2">Software</h4>
              <ul className="text-base space-y-1">
                {software.map((soft, i) => (
                  <li key={i}>{soft}</li>
                ))}
              </ul>
            </div>
            {/* Education */}
            <div>
              <h4 className="text-xl font-bold border-b border-primary pb-1 mb-2">Education</h4>
              <ul className="space-y-2">
                {education.map((ed, i) => (
                  <li key={i}>
                    <div className="font-semibold">{ed.course}</div>
                    <div className="text-muted-foreground">{ed.school}</div>
                    <div className="text-sm">{ed.notes}</div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </motion.div>
    </div>
  );
};

export default CV;
