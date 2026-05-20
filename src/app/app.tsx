import { Mail, Phone, Github, Linkedin, Code, Database, Brain, Award, Briefcase, GraduationCap } from 'lucide-react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
}
