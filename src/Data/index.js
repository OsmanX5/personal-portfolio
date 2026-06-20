export const navLinks = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "experience", title: "Experience" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

// Curated showcase of shipped XR/AR/MR work (with video demos).
// API `Projects` (e.g. Dev-Resume) are merged in front of these at render time,
// so anything added to the resume API appears automatically.
export const featuredProjects = [
  {
    title: "Ground Handling VR Training",
    description:
      "Immersive VR training for aviation ground-handling staff — realistic, safety-focused simulations running on HTC Vive and Meta Quest.",
    tags: ["Unity", "VR", "C#", "Aviation"],
    videoUrl: "https://www.youtube.com/embed/bTvnUCT1TCU?si=IqR0_k60kfcme5B_",
  },
  {
    title: "VR for Biomedical Training",
    description:
      "A Quest 2 learning platform letting biomedical engineering students disassemble, inspect and reassemble medical devices — with PCB-level detail and datasheets.",
    tags: ["Unity", "XR", "C#", "Education"],
    videoUrl: "https://www.youtube.com/embed/zoc31WjlzzA?si=rRaZqMe_fcqwd0n2",
  },
  {
    title: "Aircraft Engine Simulation (MR)",
    description:
      "A mixed-reality experience to explore and interact with a virtual aircraft engine anchored in the real world.",
    tags: ["Unity", "MR", "Magic Leap"],
    videoUrl: "https://www.youtube.com/embed/SbvP3mihHXs?si=2uBvjeDyyRr-FWhc",
  },
  {
    title: "Chemistry Lab VR",
    description:
      "An immersive VR chemistry lab where students explore molecular structures and run reactions safely in a virtual environment.",
    tags: ["Unity", "VR", "C#", "Education"],
    videoUrl: "https://www.youtube.com/embed/4ehJzpnkzGE?si=iA7LaToFmqZ4t_OO",
  },
  {
    title: "Electrical Circuits Lab VR",
    description:
      "Students build and test virtual electrical circuits, learning core concepts hands-on without any hardware risk.",
    tags: ["Unity", "VR", "Education"],
    videoUrl: "https://www.youtube.com/embed/YRB2bLWqlAI?si=hxbQLfV5K0vbjWH7",
  },
  {
    title: "Space AR",
    description:
      "An AR app to learn about planets — their shape, mass, radius and moons — aligned to the Cambridge grade-6 science syllabus and printable on any color printer.",
    tags: ["Unity", "AR", "Education"],
    videoUrl: "https://www.youtube.com/embed/4ehJzpnkzGE?si=iA7LaToFmqZ4t_OO",
  },
];
