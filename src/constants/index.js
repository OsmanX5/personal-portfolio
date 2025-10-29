import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  unity,
  threeLines,
  codeSudan,
  riftDigitalLab,
  sumakers,
  vr_dev,
  frontEnd,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Unity Developer",
    icon: unity,
  },
  {
    title: "VR Developer",
    icon: vr_dev,
  },
  {
    title: "Frontend Developer",
    icon: frontEnd,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer (Unity | XR )",
    company_name: "3 Lines XR",
    company_link: "https://xr.3lines.com.sa",
    icon: threeLines,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Present",
    points: [
      "Led XR aviation ground-handling training development for HTC Vive, Pico, and Meta Quest.",
      "Built immersive simulations aligned with industry training standards.",
      "Optimized performance and integration across PCVR and standalone XR platforms.",
      "Collaborated with aviation SMEs to ensure realism and effective training outcomes.",
      "Developed Mixed Reality features using Magic Leap devices.",
      "Applied strong version control practices and documented systems using UML.",
    ],
  },
  {
    title: "AR/VR Developer",
    company_name: "Rift Digital Lab",
    company_link: "https://www.riftdigital.net/",
    icon: riftDigitalLab,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Aug 2023",
    points: [
      "Developed 3 VR and 2 AR training applications using Unity and C#.",
      "Ensured seamless UX through collaboration with designers.",
      "Worked with Quest, Rift, Go, and HTC Vive devices.",
      "Delivered high-quality solutions with positive client/user feedback.",
      "Created educational VR applications for schools.",
      "Trained clients on XR hardware and software adoption.",
      "Researched XR trends contributing to product ideation.",
    ],
  },
  {
    title: "CS50 Instructor",
    company_name: "Code Sudan",
    company_link: "https://www.linkedin.com/company/codesudan/",
    icon: codeSudan,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Aug 2023",
    points: [
      "Delivered CS50-based fundamentals training: Scratch, C, Python, SQL.",
      "Built engaging interactive learning environments.",
      "Organized HackerRank contests to enhance problem-solving skills.",
      "Mentored students and supported their technical growth.",
      "Contributed to cultivating future computer scientists.",
    ],
  },
  {
    title: "Game Developer",
    company_name: "Moonrift Entertainment",
    company_link: "https://www.linkedin.com/company/moonrift-entertainment/",
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Aug 2023",
    points: [
      "Collaborated on game development for the upcoming title “Flame Runner.”",
      "Learned real-world game production workflows.",
      "Used Trello for task management and efficient team coordination.",
    ],
  },
  {
    title: "IoT Engineer & Educator",
    company_name: "Sumakers",
    company_link: "https://www.facebook.com/sumakerslab/",
    icon: sumakers,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Aug 2023",
    points: [
      "Designed IoT circuits and programmed embedded systems (Arduino, MicroC).",
      "Modeled 3D parts in SolidWorks and fabricated with 3D printers.",
      "Taught children electronics and programming with hands-on projects.",
      "Encouraged creativity and problem-solving through interactive learning.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ground Handling Training XR",
    description:
      "Comprehensive XR simulation for aviation ground handling training. Covers the full product lifecycle from GDD to MVP and global release. Features modular exercises, multi-headset support, and LMS integration.",
    tags: [
      { name: "unity", color: "blue-text-gradient" },
      { name: "xr", color: "green-text-gradient" },
      { name: "csharp", color: "pink-text-gradient" },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    source_code_link: "https://osmanelfaki.com/",
  },
  {
    name: "Trainee Activity Tracking & LMS Integration",
    description:
      "Custom tracking system to monitor trainee progress and sync results with a Learning Management System for training analytics and assessment.",
    tags: [
      { name: "unity", color: "blue-text-gradient" },
      { name: "backend", color: "green-text-gradient" },
      { name: "integration", color: "pink-text-gradient" },
    ],
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    source_code_link: "https://osmanelfaki.com/",
  },
  {
    name: "Modular Exercise System",
    description:
      "A modular architecture enabling quick creation and expansion of XR training exercises, improving scalability and content management.",
    tags: [
      { name: "unity", color: "blue-text-gradient" },
      { name: "architecture", color: "green-text-gradient" },
      { name: "xr", color: "pink-text-gradient" },
    ],
    videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
    source_code_link: "https://osmanelfaki.com/",
  },
  {
    name: "Unity Editor Automation Tools",
    description:
      "Custom Unity Editor extensions to automate repetitive development workflows, streamline builds, and boost team productivity.",
    tags: [
      { name: "unity-editor", color: "blue-text-gradient" },
      { name: "tooling", color: "green-text-gradient" },
      { name: "csharp", color: "pink-text-gradient" },
    ],
    videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
    source_code_link: "https://osmanelfaki.com/",
  },
  {
    name: "Cambridge VR Learning Apps",
    description:
      "Three VR applications designed to simplify 6th-grade Cambridge science topics through immersive 3D visualizations and interactive experiments.",
    tags: [
      { name: "unity", color: "blue-text-gradient" },
      { name: "vr", color: "green-text-gradient" },
      { name: "education", color: "pink-text-gradient" },
    ],
    videoUrl: "https://www.youtube.com/embed/2Vv-BfVoq4g",
    source_code_link: "https://osmanelfaki.com/",
  },
  {
    name: "Cambridge AR Learning Apps",
    description:
      "Two AR applications complementing Cambridge curriculum topics, enabling students to explore 3D models interactively using AR devices.",
    tags: [
      { name: "unity", color: "blue-text-gradient" },
      { name: "ar", color: "green-text-gradient" },
      { name: "education", color: "pink-text-gradient" },
    ],
    videoUrl: "https://www.youtube.com/embed/hFcLyDb6niA",
    source_code_link: "https://osmanelfaki.com/",
  },
  {
    name: "Digital Twins & WebXR Exhibits",
    description:
      "Created digital twins of real-world exhibits using 360° cameras, deployed via WebXR for cross-platform accessibility on mobile, VR, and browsers.",
    tags: [
      { name: "webxr", color: "blue-text-gradient" },
      { name: "360media", color: "green-text-gradient" },
      { name: "unity", color: "pink-text-gradient" },
    ],
    videoUrl: "https://www.youtube.com/embed/RGKi6LSPDL4",
    source_code_link: "https://osmanelfaki.com/",
  },
  {
    name: "Flame Runner (Prototype)",
    description:
      "Gameplay demo built in Unity that secured seed funding for the studio. Focused on core mechanics, physics, and gameplay polish.",
    tags: [
      { name: "unity", color: "blue-text-gradient" },
      { name: "gameplay", color: "green-text-gradient" },
      { name: "prototype", color: "pink-text-gradient" },
    ],
    videoUrl: "https://www.youtube.com/embed/BaW_jenozKc",
    source_code_link: "https://osmanelfaki.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
