import { useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const QRCode = ({ url, size = 200 }) => {
  const { language } = useLanguage();
  const t = translations[language];
  const qrRef = useRef(null);

  const downloadQRCode = () => {
    // Find the SVG element inside the ref
    const container = qrRef.current;
    if (!container) return;
    
    const svg = container.querySelector('svg');
    if (!svg) return;

    // Get SVG as string
    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);

    // Create image from SVG
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      try {
        // Create canvas
        const canvas = document.createElement('canvas');
        const padding = 40;
        canvas.width = size + padding;
        canvas.height = size + padding;
        const ctx = canvas.getContext('2d');
        
        // Fill white background
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw QR code
        ctx.drawImage(img, padding / 2, padding / 2, size, size);
        
        // Convert to PNG and download
        canvas.toBlob((blob) => {
          if (!blob) {
            console.error('Failed to create blob');
            return;
          }
          const downloadUrl = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = downloadUrl;
          link.download = 'qrcode-menu.png';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(downloadUrl);
        }, 'image/png');
      } catch (error) {
        console.error('Error creating image:', error);
      }
      
      URL.revokeObjectURL(svgUrl);
    };
    
    img.onerror = (error) => {
      console.error('Error loading image:', error);
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
        {t.ui.downloadQR}
      </button>
    </div>
  );
};

export default QRCode;

