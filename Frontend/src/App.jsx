import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import AuthForm from './components/AuthForm';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/auth" element={<AuthForm />} />
      </Routes>
    </Router>
  );
}

export default App;
