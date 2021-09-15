import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';

function App() {
 const [showContent, setShowContent] = useState('Home');

const handleContentCallback = (content) => {
  setShowContent(content);
}
  
  return (
    <div className="App">
      <Header handleContentCallback={handleContentCallback} />

      {showContent === 'Home' &&
       <Profile />
      }

      {showContent === 'Projects' &&
        <Projects />
      }
    </div>
  );
}

export default App;
