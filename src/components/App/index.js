import React from 'react';
import './style.css';
import AppHeader from '../AppHeader';
import AboutMe from '../AboutMe';
import Resume from '../Resume';
import Contact from '../Contact';
import Game from '../Game';

function App() {
  return (
    <React.Fragment>
      <AppHeader
        goTo="about"
        descriptions={[
          'student 👩‍🎓',
          1000,
          'developer 👩‍💻',
          1000,
          'feminist 🙅‍♀️',
          1000,
          'life-long learner 📚',
          1000,
          'art enthusiast 🎨',
          1000,
        ]}
      />
      <AboutMe
        interests={[
          'Software Engineering',
          'Machine Learning',
          'Security',
          'Mobile Development',
          'Web Application Development',
          'UX/UI',
          'Brain Computer Intefaces',
          'VR',
        ]}
      />
      <Resume />
      <Game />
      <Contact />
    </React.Fragment>
  );
}

export default App;
