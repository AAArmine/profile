import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
      <Route path="/about" element={<Layout />}>
        about
      </Route>
      <Route path="/contact" element={<Layout />}>
        contact
      </Route>
    </Routes>
  );
}

export default App;
