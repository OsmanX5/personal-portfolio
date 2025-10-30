import { unity } from "../assets";

import {
  // Tech imports
  javascript,
  typescript,
  html,
  css,
  reactJs as reactjs,
  redux,
  tailwind,
  nodeJs as nodejs,
  mongoDb as mongodb,
  git,
  figma,
  docker,
  threeJs as threejs,

  // Company imports
  codeSudan,
  riftDigitalLab,
  suMakers as sumakers,
  threeLinesXr as threeLines,

  // Services imports
  vrDev as vr_dev,
  frontEnd,
} from "../assets/Icons";
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
    iconBg: "#fff",
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
    iconBg: "#222",
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
    company_link: "https://www.linkedin.com/company/codesudan/about/",
    icon: codeSudan,
    iconBg: "#fff",
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
    iconBg: "#fff",
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
    iconBg: "#fff",
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
    name: "VR for BME Training",
    description: `Training and Learning platform in VR with Quest 2 allows Biomedical Engineering students to learn more 
about devices and reassemble them with little cost against the real devices. 
The user can see animations for the device disassembling and show information about every part. 
Showing the electrical components in the PCB and showing the datasheets. 
Taking the device parts and reassembling the device. 
Showing surgery room and main devices catalogs.`,
    tags: [
      { name: "unity", color: "blue-text-gradient" },
      { name: "xr", color: "green-text-gradient" },
      { name: "csharp", color: "pink-text-gradient" },
    ],
    videoUrl: "https://www.youtube.com/embed/zoc31WjlzzA?si=rRaZqMe_fcqwd0n2",
  },
  {
    name: "Chemistry LAB VR",
    description: `An immersive VR experience for chemistry students to explore molecular structures and chemical reactions in a virtual lab environment.`,
    tags: [
      { name: "unity", color: "blue-text-gradient" },
      { name: "xr", color: "green-text-gradient" },
      { name: "csharp", color: "pink-text-gradient" },
    ],
    videoUrl: "https://www.youtube.com/embed/4ehJzpnkzGE?si=iA7LaToFmqZ4t_OO",
  },
  {
    name: "Space AR",
    description: `Space AR is an application using AR to learn more about planets and know information about their shapes, mass, radius, and moons this is my first AR Application and it’s a very promising field the app will work in any android, iOS phone, and the images can be printed with any colored printer. this project was designed according to the Cambridge grade 6 science book for all international school students.`,
    tags: [
      { name: "unity", color: "blue-text-gradient" },
      { name: "ar", color: "green-text-gradient" },
    ],
    videoUrl: "https://www.youtube.com/embed/4ehJzpnkzGE?si=iA7LaToFmqZ4t_OO",
  },
  {
    name: "Ballistics AR",
    description: `An AR application that demonstrates the principles of ballistics by allowing users to visualize projectile trajectories in their real-world environment.`,
    tags: [
      { name: "unity", color: "blue-text-gradient" },
      { name: "ar", color: "green-text-gradient" },
    ],
    videoUrl: "https://www.youtube.com/embed/rOFBNLN4fS0?si=pSkp7GVm-URoP6fh",
  },
  {
    name: "Electrical Circuits Lab VR",
    description: `An immersive VR experience for students to learn about electrical circuits by building and testing virtual circuits in a safe environment.`,
    tags: [
      { name: "unity", color: "blue-text-gradient" },
      { name: "vr", color: "green-text-gradient" },
    ],
    videoUrl: "https://www.youtube.com/embed/YRB2bLWqlAI?si=hxbQLfV5K0vbjWH7",
  },
  {
    name: "Aircraft Engine Simulation (MR)",
    description: `A mixed reality application that allows users to explore and interact with a virtual aircraft engine in a real-world environment.`,
    tags: [
      { name: "unity", color: "blue-text-gradient" },
      { name: "ar", color: "green-text-gradient" },
    ],
    videoUrl: "https://www.youtube.com/embed/SbvP3mihHXs?si=2uBvjeDyyRr-FWhc",
  },
  {
    name: "Ground Handling VR Training",
    description: `Developed an immersive VR training application for aviation ground-handling staff, enhancing operational efficiency and safety through realistic simulations on HTC Vive and Meta Quest platforms.`,
    tags: [
      { name: "unity", color: "blue-text-gradient" },
      { name: "vr", color: "green-text-gradient" },
    ],
    videoUrl: "https://www.youtube.com/embed/bTvnUCT1TCU?si=IqR0_k60kfcme5B_",
  },
];

export { services, technologies, experiences, testimonials, projects };
