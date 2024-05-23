import { FC } from "react";
import QRCodeView from 'react-qr-code';

type QRCodeProps = {
  url: string,
  size: number,
}

const QRCode: FC<QRCodeProps> = ({
  url,
  size
}: QRCodeProps) => {
  return (
    <div
      id="generated"
      className="max-w-5xl m-auto flex flex-col text-center align-center justify-center mt-8"
    >
      <div id="qrcode" className="m-auto">
          <QRCodeView  value={url} size={size} />
        </div>
    </div>
  );
};

export default QRCode;
