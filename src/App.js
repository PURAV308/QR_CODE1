import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QrCode from './QrCode'; // Assuming you created this in the same folder
import QRCodeGenerator from './QRCodeGenerator'; // Add your generator component
import QRCodeScanner from './QRCodeScanner'; // Add your scanner component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QrCode />} />
        <Route path="/generate" element={<QRCodeGenerator />} />
        <Route path="/scanner" element={<QRCodeScanner />} />
      </Routes>
    </Router>
  );
}

export default App;
