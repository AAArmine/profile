import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import About from './components/about';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
      </Route>
      <Route path="/about" element={<Layout />}></Route>
      <Route path="/contact" element={<Layout />}>
        contact
      </Route>
    </Routes>
  );
}

export default App;
