import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { useNavigate } from 'react-router-dom';

const QRCodeGenerator = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate();


  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="text"
        placeholder="Enter text to generate QR code"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="p-2 border rounded"
      />
      {text && <QRCodeCanvas value={text} size={256} />}

      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 mt-5 rounded hover:bg-blue-600"
      >
        HOME
      </button>
    </div>
  );
};

export default QRCodeGenerator;
