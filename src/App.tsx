import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import Cabins from './pages/Cabins';
import Amenities from './pages/Amenities';
import Attractions from './pages/Attractions';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="amenities" element={<Amenities />} />
            <Route path="attractions" element={<Attractions />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;