import Header from './components/Layout/Header';
import Hero from './components/Sections/Hero';
import Projects from './components/Sections/Projects';
import Skills from './components/Sections/Skills';
import Footer from './components/Layout/Footer';

function App() {
  // Projects Data
  const projects = [
    {
      id: 1,
      title: "Sign Language Recognition",
      description: "AI-powered sign language recognition system using computer vision and machine learning to bridge communication gaps for the hearing impaired community.",
      technologies: ["Python", "OpenCV", "TensorFlow", "MediaPipe", "Deep Learning"],
      demoLink: "/sign.png",
      githubLink: "https://github.com/Logeshlogan01/sign-language-recognition"
    },
    {
      id: 2,
      title: "Quick Hire - Full Stack",
      description: "Doorstep platform connecting skilled laborers with local job opportunities. Features real-time booking, location services, and secure payments.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Payment Integration"],
      demoLink: "https://quickhire-kmdi.vercel.app",
      githubLink: "https://github.com/Logeshlogan01/Quick-hire"
    },
    {
      id: 3,
      title: "Carrer-Campus (React + Node.js)",
      description: "Platform connecting students through events, scholarships, and opportunities. Facilitates campus networking and career development resources.",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "REST APIs"],
      demoLink: "/ccmain.jpg",
      githubLink: "https://github.com/Logeshlogan01/Carrer-Campus"
    },
    {
      id: 4,
      title: "CareNet - Hospital Management",
      description: "Android application for hospital management with patient records, appointment scheduling, and medical staff coordination features.",
      technologies: ["Java", "Android Studio", "Firebase", "SQLite", "REST APIs"],
      demoLink: "myhealth.png",
      githubLink: "https://github.com/Logeshlogan01/CareNet"
    }
  ];

  // Skills Data
  const skills = {
    "Frontend": ["React", "JavaScript", "HTML/CSS", "Tailwind CSS", "Android Java"],
    "Backend": ["Node.js", "Express", "Python", "REST APIs", "Error handling-Debugging"],
    "Database": ["MongoDB", "PostgreSQL", "Firebase", "SQLite"],
    "AI/ML": ["TensorFlow", "OpenCV", "Computer Vision", "Deep Learning"],
    "Tools": ["Git", "Android Studio", "VS Code", "Figma", "Postman"]
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Footer />
    </div>
  );
}

export default App;
