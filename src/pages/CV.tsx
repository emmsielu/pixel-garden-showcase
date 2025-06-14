import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const experience = [
  {
    title: "Senior/ Lead Experience/ Product Designer (UX/ UI)",
    company: "Freelance",
    date: "Nov '14 - present",
    details: [
      "Worked on a wide range of agency and client-side projects for The Financial Times, Nikkei, DigitasLBi, AK/QA, Sapient, Dare, JWT, Beyond and AMV BBDO.",
      "Covered many aspects of UX: interaction design, information architecture, prototyping, research, interviews and UI design.",
      "Projects ranged from pitches, simple brochureware sites to complex, big-build web software for clients (Google, Nike Foundation, RBS, Sainsbury’s, AstraZeneca, Legal & General, Guinness, and more)."
    ]
  },
  {
    title: "Experience Designer",
    company: "Bright North",
    date: "Jan '14 - Nov '14",
    details: [
      "Used data insights to improve customer experience. Projects included lead XD on an eCommerce platform, a recruitment platform, and internal projects for The Guardian and Sky."
    ]
  },
  {
    title: "User Experience Designer",
    company: "Nonsense",
    date: "Dec '12 - Nov '13",
    details: [
      "Responsible for all UX design and presentation to stakeholders including Bacardi global, SSAFA, ABF Soldier's Charity, Cancer Research, Macmillan, Diabetes UK, RSPCA, Friends of the Earth, The Children’s Society."
    ]
  },
  {
    title: "Associate Experience Architect",
    company: "DigitasLBi",
    date: "Oct '11 - Dec '12",
    details: [
      "Worked closely with visual designers and developers to build global solutions for BT, Lloyds Bank, AstraZeneca, Turkcell, E.On."
    ]
  },
  {
    title: "User Experience Designer",
    company: "Spring Digital",
    date: "Jul '11 - Oct '11",
    details: [
      "Sole UX, all documentation and presenting to clients for new startups."
    ]
  },
  {
    title: "PhD Candidate / PM",
    company: "Queen Mary University/ Inition",
    date: "Sep '10 - Jul '11",
    details: [
      "Media Arts Technology PhD (full scholarship), 3-mo placement at Inition, project with BBC; developed Windows App (PhD unfinished in favor of real-world work)."
    ]
  },
  {
    title: "User Experience Designer",
    company: "Teachers TV",
    date: "Jul '10 - Sep '10",
    details: [
      "Delivered solutions for rich media CMS features, functional specs, conducted usability interviews."
    ]
  },
  {
    title: "User Experience Designer",
    company: "Enterprise UK",
    date: "Oct '09 - Jul '10",
    details: [
      "Sole UX, third-party stakeholder liaison, produced all UX work & edited visual assets for Global Entrepreneurship Week (UK/global)."
    ]
  },
  {
    title: "Multimedia Designer",
    company: "IfM, Cambridge University",
    date: "Oct '05 - Oct '08",
    details: [
      "Produced graphics, print/web, motion, training documentation, video/audio for university partner in Trinidad."
    ]
  },
  {
    title: "Freelance Visual Designer",
    company: "Local businesses",
    date: "May '05 - Present",
    details: [
      "Branding, illustration, vehicle decals, 3D mockups, cards, packaging, letterheads, window frosting."
    ]
  }
];

const skills = [
  "Pitch work & strategy",
  "Requirements gathering",
  "Customer research interviews",
  "Usability interviews",
  "Complex problem solving",
  "Workshop facilitation",
  "Personas/ Pen portraits",
  "Storyboarding/ UJs",
  "Interaction diagrams",
  "Scamper/ Sketching",
  "Hi-fi wireframes",
  "Prototyping",
  "Formal Spec documentation",
  "Branding",
  "UI Design",
  "HTML/ CSS",
  "Arduino/ Processing"
];

const software = [
  "Figma",
  "ChatGPT",
  "Affinity Designer",
  "Photoshop",
  "Illustrator"
];

const education = [
  {
    course: "MA Design for Interactive Media (Merit)",
    school: "Middlesex University",
    notes: "Researched Emotion in HCI, built several Flash interfaces and multi-touch table for CREATE 09 conference."
  },
  {
    course: "BA (hons) Design for Interactive Media (First Class) - One year top up",
    school: "BA (hons) Industrial Design, UWIC, Cardiff",
    notes: "Researched Emotion in HCI, designed a remote interview platform & awarded best student."
  },
  {
    course: "BTEC Foundation Diploma in Art & Design (Distinction)",
    school: "Bridgend College of Technology",
    notes: "Fine art, graphics, and fashion, specialising in 3D design."
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
    With over 15 years working in Design, over 10 focusing on UX, and the last five working with branding, coding and product, I have a diverse background and a wide range of skills. I put a large emphasis on collaborating closely with colleagues to find the best way of working iteratively and quickly. Having worked both agency and client-side, I am fully-versed in agile project methodologies, designing device-agnostic solutions and working through the entire project cycle. I design experiences that carefully balance user, business and technology, using the most appropriate tools for the job.
  </>
);

const otherThings = (
  <>
    I like to make digital experiments about visualising emotion, in Processing (and previously Flash/ AS3), trying my hand at physical computing with Arduino and painting & sketching (<a href="https://emmsielu.co.uk" className="underline" target="_blank" rel="noopener noreferrer">emmsielu.co.uk</a>); I regularly perform with several improv groups, and also love bouldering, dancing and singing really loudly when nobody’s around (or more quietly when it’s musical improv.)
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
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl font-bold text-center mb-2 font-serif">
            Curriculum Vitae
          </h1>
          <Button asChild>
            <a href="/placeholder-cv.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
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
                ).reduce((prev, curr) => [prev, <span key="sep" className="mx-2">|</span>, curr])}
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
