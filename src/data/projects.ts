
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  details: {
    client: string;
    role: string;
    year: number;
    technologies: string[];
    gallery: string[];
  };
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Stellar Visions',
    subtitle: 'Web Design & Development',
    description: 'A complete redesign and development for a leading tech startup. The focus was on creating a modern, intuitive user experience that showcases their innovative products.',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60',
    details: {
      client: 'Tech Innovators Inc.',
      role: 'Lead Designer & Developer',
      year: 2024,
      technologies: ['React', 'TypeScript', 'Node.js', 'Figma'],
      gallery: [
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60',
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60'
      ]
    }
  },
  {
    id: 'project-2',
    title: 'Urban Canvas',
    subtitle: 'Branding & Identity',
    description: 'Developed a new brand identity for a city-wide art festival. The project included logo design, marketing materials, and a style guide to ensure consistency.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
    details: {
      client: 'City Arts Council',
      role: 'Brand Strategist',
      year: 2023,
      technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
      gallery: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
      ]
    }
  },
  {
    id: 'project-3',
    title: 'EcoEats',
    subtitle: 'Mobile App Design',
    description: 'Designed a mobile app that connects users with sustainable food sources. The UI/UX was crafted to be engaging, informative, and easy to use.',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60',
    details: {
        client: 'GreenPlate Startup',
        role: 'UI/UX Designer',
        year: 2023,
        technologies: ['Figma', 'Sketch', 'Principle'],
        gallery: [
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60',
        ]
    }
  },
    {
    id: 'project-4',
    title: 'DataDash',
    subtitle: 'Dashboard UI Kit',
    description: 'A comprehensive UI kit for data visualization dashboards, designed for scalability and ease of use.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60',
     details: {
      client: 'SaaS Solutions',
      role: 'Product Designer',
      year: 2024,
      technologies: ['Figma', 'React', 'Storybook'],
       gallery: [
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60',
      ]
    }
  },
  {
    id: 'project-5',
    title: "Nature's Whisper",
    subtitle: 'Photography Portfolio',
    description: 'A visually stunning portfolio website for a nature photographer, focusing on large, immersive images.',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=60',
     details: {
      client: 'Jane Evergreen',
      role: 'Web Designer',
      year: 2022,
      technologies: ['Wordpress', 'Photography', 'Photoshop'],
       gallery: [
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=60',
      ]
    }
  },
  {
    id: 'project-6',
    title: 'MindWell',
    subtitle: 'Wellness App Branding',
    description: 'Branding for a new mental wellness app, designed to be calming, trustworthy, and approachable.',
    imageUrl: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&auto=format&fit=crop&q=60',
     details: {
      client: 'MindWell Inc.',
      role: 'Brand Designer',
      year: 2023,
      technologies: ['Figma', 'Illustrator'],
       gallery: [
        'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&auto=format&fit=crop&q=60',
      ]
    }
  },
  {
    id: 'project-7',
    title: 'Future Forward',
    subtitle: 'Conference Identity',
    description: 'Visual identity and promotional materials for a major tech conference about the future of AI.',
    imageUrl: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&auto=format&fit=crop&q=60',
     details: {
      client: 'Innovate Events',
      role: 'Graphic Designer',
      year: 2024,
      technologies: ['Photoshop', 'InDesign', 'Illustrator'],
       gallery: [
        'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&auto=format&fit=crop&q=60',
      ]
    }
  },
  {
    id: 'project-8',
    title: "Nomad's Nook",
    subtitle: 'E-commerce Platform',
    description: 'An e-commerce website for a travel gear company, with a focus on a seamless shopping experience.',
    imageUrl: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&auto=format&fit=crop&q=60',
     details: {
      client: 'Nomad Gear Co.',
      role: 'UX/UI Designer & Developer',
      year: 2023,
      technologies: ['Shopify', 'Liquid', 'Figma'],
       gallery: [
        'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&auto=format&fit=crop&q=60',
      ]
    }
  },
  {
    id: 'project-9',
    title: 'SoundWave',
    subtitle: 'Music Streaming Service',
    description: 'UI/UX design for a new music streaming platform, focusing on discovery and social features.',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60',
     details: {
      client: 'AudioSphere',
      role: 'Product Designer',
      year: 2024,
      technologies: ['Sketch', 'Proto.io', 'Figma'],
       gallery: [
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60',
      ]
    }
  },
  {
    id: 'project-10',
    title: "Artisan's Touch",
    subtitle: 'Handmade Goods Marketplace',
    description: 'A marketplace for artisans to sell their handmade goods. The design emphasizes authenticity and craftsmanship.',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60',
     details: {
      client: 'Craft Collective',
      role: 'Lead Designer',
      year: 2022,
      technologies: ['Figma', 'Webflow'],
       gallery: [
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60',
      ]
    }
  }
];
