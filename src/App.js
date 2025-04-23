import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import Reflection from './Reflection';
import './App.css'; // or Tailwind styles if you need

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/reflection" element={<Reflection />} />
      </Routes>
    </Router>
  );
}

export default App
