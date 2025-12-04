import { useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const QRCode = ({ url, size = 200 }) => {
  const qrRef = useRef(null);

  const downloadQRCode = () => {
    const svg = qrRef.current;
    if (!svg) return;

    // Get SVG as string
    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);

    // Create image from SVG
    const img = new Image();
    img.onload = () => {
      // Create canvas
      const canvas = document.createElement('canvas');
      canvas.width = size + 40; // Add padding
      canvas.height = size + 40;
      const ctx = canvas.getContext('2d');
      
      // Fill white background
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw QR code
      ctx.drawImage(img, 20, 20, size, size);
      
      // Convert to PNG and download
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'qrcode-menu.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 'image/png');
      
      URL.revokeObjectURL(svgUrl);
    };
    img.src = svgUrl;
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
      <div ref={qrRef}>
        <QRCodeSVG 
          value={url} 
          size={size}
          level="H"
          includeMargin={true}
        />
      </div>
      <p className="mt-4 text-sm text-gray-600 text-center max-w-[200px] break-all">
        {url}
      </p>
      <button
        onClick={downloadQRCode}
        className="mt-4 px-6 py-2 bg-terracotta text-white rounded-lg hover:bg-terracotta/90 transition-colors font-medium"
      >
        Download QR Code
      </button>
    </div>
  );
};

export default QRCode;

