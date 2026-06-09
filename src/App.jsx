import ProfilePhoto from './components/LeftColumn/ProfilePhoto.jsx'
import Contact from './components/LeftColumn/Contact.jsx'
import Skills from './components/LeftColumn/Skills.jsx'
import Languages from './components/LeftColumn/Languages.jsx'

import HeaderName from './components/RightColumn/HeaderName.jsx'
import PersonalStatement from './components/RightColumn/PersonalStatement.jsx'
import Experience from './components/RightColumn/Experience.jsx'
import Education from './components/RightColumn/Education.jsx'

export default function App() {
  return (
    <div className="cv-container">
      {/* LEFT COLUMN */}
      <aside className="left-column">
        <ProfilePhoto />
        <Contact />
        <Skills />
        <Languages />
      </aside>

      {/* RIGHT COLUMN */}
      <main className="right-column">
        <HeaderName />
        <PersonalStatement />
        <Experience />
        <Education />
      </main>
    </div>
  )
}
