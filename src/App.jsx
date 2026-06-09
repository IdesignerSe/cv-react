import Header from './components/RightColumn/HeaderName.jsx';
import About from './components/About.jsx';
import Skills from './components/LeftColumn/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/RightColumn/Education.jsx';
import Contact from './components/LeftColumn/Contact.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
