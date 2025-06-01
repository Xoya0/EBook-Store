import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import AuthForm from './components/AuthForm';
import BuyerHome from './pages/buyerhome.jsx';
import SellerHome from './pages/sellerhome.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/buyerhome" element={<BuyerHome />} />
        <Route path="/sellerhome" element={<SellerHome />} />
      </Routes>
    </Router>
  );
}

export default App;
