import './App.css';
import Home from './components/home';
import Business from './components/business';
import Personal from './components/personal';
import B_Download from './components/b_download';
import P_Download from './components/p_download';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/b_download" element={<B_Download />} />
          <Route path="/p_download" element={<P_Download />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
