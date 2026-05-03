import { SECTION_IDS } from './constants';
import useScrollSpy from './hooks/useScrollSpy';
import useTheme from './hooks/useTheme';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy(SECTION_IDS);

  return (
    <>
      <Nav activeSection={activeSection} theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
