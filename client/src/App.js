import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Upload from './pages/UploadDoc';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="*" element={<h1>WRONG PAGE!</h1>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
