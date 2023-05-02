import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import About from './components/about';
import Skills from './components/skills';
import Contact from './components/contact';
import PageOpenAnimation from './components/pageOpenAnimation';
import './App.scss';

function App() {
  const [showAnimation, setShowAnimation] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowAnimation(false);
    }, 3000); // Wait for 3 seconds before showing the home page

    return () => {
      clearTimeout(timeoutId);
    };
  }, [showAnimation]);

  return (
    <Routes>
      {showAnimation ? (
        <Route path="/" element={<PageOpenAnimation />} />
      ) : (
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
        </Route>
      )}
      <Route path="/" element={<Layout />}>
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
