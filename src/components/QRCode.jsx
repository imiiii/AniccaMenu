import { QRCodeSVG } from 'qrcode.react';

const QRCode = ({ url, size = 200 }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
      <QRCodeSVG 
        value={url} 
        size={size}
        level="H"
        includeMargin={true}
      />
      <p className="mt-4 text-sm text-gray-600 text-center max-w-[200px] break-all">
        {url}
      </p>
    </div>
  );
};

export default QRCode;

