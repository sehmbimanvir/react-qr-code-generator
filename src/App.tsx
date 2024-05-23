import Header from 'components/Header';
import Logo from 'assets/qr-code.svg';
import { useState } from 'react';
import QRCode from 'components/QRCode';
import Form from 'components/Form';
import Banner from 'components/Banner';
import 'App.css';

function App() {
  const [formData, setFormData] = useState<IFormData>({
    url: '',
    size: 0,
  });

  const onSubmitForm = (formData: IFormData) => {
    console.log('A', formData);
    setFormData(formData);
  };

  return (
    <>
      <Header title="QR Code Generator" />
      <main>
        <div className="flex flex-col-reverse align-center justify-center m-auto md:max-w-4xl p-10 md:flex-row">
          <div className="w-full md:w-2/3 mr-24">
            <Banner />
            <Form onSubmit={onSubmitForm} />
          </div>
          <div className="w-full md:w-1/3 self-center">
            <div className="mb-10 flex justify-center">
              {formData.url && formData.size ? (
                <QRCode {...formData} />
              ) : (
                <div className="logo">
                  <Logo />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
