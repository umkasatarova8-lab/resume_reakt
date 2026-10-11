import resumeData from './data/resumeData';
import Header from './components/Header';
import Section from './components/Section';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import './App.css';

function App() {
  const { name, title, avatar, contacts, about, skills, languages, education, experience, projects } = resumeData;

  return (
    <div className="page">
      <div className="resume">
        <Header
          name={name}
          title={title}
          avatar={avatar}
          contacts={contacts}
        />

        <div className="body">
          {/* Левая колонка */}
          <aside className="sidebar">
            <Section title="Обо мне">
              <p>{about}</p>
            </Section>

            <Section title="Навыки">
              <Skills hard={skills.hard} soft={skills.soft} />
            </Section>

            <Section title="Языки">
              <ul className="lang-list">
                {languages.map((l) => (
                  <li key={l.lang}>
                    <strong>{l.lang}</strong> - {l.level}
                  </li>
                ))}
              </ul>
            </Section>
          </aside>

          {/* Правая колонка */}
          <main className="main">
            <Section title="Опыт работы">
              <Experience experience={experience} />
            </Section>

            <Section title="Образование">
              <Education education={education} />
            </Section>

            <Section title="Проекты">
              <Projects projects={projects} />
            </Section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
