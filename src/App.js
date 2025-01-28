import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import Button from "@mui/material/Button";
import './App.css';

const App = () => {
  const [link, setLink] = useState("");
  const [qrData, setQrData] = useState(null);

  const handleGenerate = () => {
    setQrData(link);
  };

  const handleDownload = () => {
    const canvas = document.getElementById("qrCanvas");
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "qrcode.png";
    link.click();
    // setLink("");
  };

  return (
    <div className="main">
      <div className="flex-center">
        <div>
          <h1 className="text-2xl font-bold mb-4">QR Code Generator</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your link here"
            className="border p-2 rounded mb-4 w-full max-w-md"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div>
          <Button className="generateButton" variant="contained" onClick={handleGenerate}>
            Generate QR Code
          </Button>
        </div>

        {qrData && (
          <div className="qr-container">
            <div>
              <QRCodeCanvas
                id="qrCanvas"
                value={qrData}
                size={200}
                className="mb-4"
              />
            </div>
            <div>
              <Button className="downloadButton" onClick={handleDownload}>
                Download QR Code
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;