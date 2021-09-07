import { useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
 const [showContent, setShowContent] = useState('Home');

const handleContentCallback = (content) => {
  setShowContent(content);
}
  
  return (
    <div className="App">
      <Header handleContentCallback={handleContentCallback} />

      {showContent === 'Home' &&
        <h1>Home</h1>
      }

      {showContent === 'About' &&
        <h1>About</h1>
      }
    </div>
  );
}

export default App;
