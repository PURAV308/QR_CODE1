import React, { useState, useEffect } from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';
import { useNavigate } from 'react-router-dom';

const QRCodeScanner = () => {
  const [scannedTexts, setScannedTexts] = useState([]);
  const [cameraError, setCameraError] = useState(null);
  const scannedSet = new Set();
  const navigate = useNavigate();

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    // Check if the browser supports getUserMedia
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(() => {
          const scanQRCode = () => {
            codeReader
              .decodeOnceFromVideoDevice(undefined, 'video')
              .then((result) => {
                if (!scannedSet.has(result.text)) {
                  scannedSet.add(result.text);
                  setScannedTexts((prev) => [...prev, result.text]);
                }
                scanQRCode(); // Keep scanning
              })
              .catch((err) => {
                console.error(err);
                setCameraError('Error accessing camera: ' + err.message);
                setTimeout(scanQRCode, 1000); // Retry scanning after 1 second
              });
          };
          scanQRCode(); // Start scanning
        })
        .catch((err) => {
          setCameraError('Camera permission denied: ' + err.message);
        });
    } else {
      setCameraError('Camera access is not supported by your browser.');
    }

    return () => {
      codeReader.reset(); // Clean up when the component unmounts
    };
  }, []);

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <video id="video" width="300" height="300" className="border border-gray-300" />

      {cameraError && <p className="text-red-500">{cameraError}</p>}

      {scannedTexts.length > 0 && (
        <div className="text-lg text-green-500">
          <h3>Scanned QR Codes:</h3>
          <ul>
            {scannedTexts.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 mt-5 rounded hover:bg-blue-600"
      >
        HOME
      </button>
    </div>
  );
};

export default QRCodeScanner;
