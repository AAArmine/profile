import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/custom/layout';
import About from './components/about';
import Skills from './components/skills';
import Work from './components/work';
import Contact from './components/contact';
import PageOpenAnimation from './components/pageOpenAnimation';
import 'antd/dist/reset.css';
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
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/" element={<Layout largeContent />}>
        <Route path="/work" element={<Work />} />
      </Route>
    </Routes>
  );
}

export default App;
