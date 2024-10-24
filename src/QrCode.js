import React from 'react';
import { useNavigate } from 'react-router-dom';

const QrCode = () => {
  const navigate = useNavigate();

  const handleGenerateClick = () => {
    navigate('/generate'); // Navigate to the QR Code Generator page
  };

  const handleScannerClick = () => {
    navigate('/scanner'); // Navigate to the QR Code Scanner page
  };

  return (
    <div className="w-screen h-screen bg-gray-100">
      <h2 className="text-xl text-center">QR Code</h2>

      <button
        onClick={handleGenerateClick}
        className="flex mb-5 bg-blue-300 mx-10 mt-20"
      >
        QR Code Generator
      </button>
      <button
        onClick={handleScannerClick}
        className="bg-blue-300 mx-10"
      >
        QR Code Scanner
      </button>
    </div>
  );
};

export default QrCode;
