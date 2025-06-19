import { useState } from 'react';
import axios from 'axios';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import InputModal from './components/InputModal';
import QrCodePreview from './components/QrCodePreview';

function App() {
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateQrCode = async (link) => {
    if(!link) {
      setError('Por favor, insira um link para gerar o QrCode.');
      return;
    }
    
    setIsLoading(true);
    setError('');
    setQrCodeUrl('');

    try {
      const requestBody = { text: link };
      const response = await axios.post('http://localhost:8080/qrcode', requestBody);
      setQrCodeUrl(response.data.url); 

    } catch (err) {
      if(err.response && err.response.data && err.response.data.message){
        setError(err.response.data.message);
      } else {
        setError("Não foi possível conectar-se com o servidor.");
      }
      console.error("Erro ao gerar QrCode: ", err);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="flex flex-col w-full h-full bg-white dark:bg-gray-950">
      <HeaderComponent/>
      <h1 className='text-4xl font-semibold text-center p-8'>Transforme seu link em um QrCode com poucos cliques!</h1>
      <div className='w-full flex justify-center gap-5 p-4'>
        <InputModal 
          onGenerate={handleGenerateQrCode} 
          isLoading={isLoading} 
          error={error} 
        />
        <QrCodePreview 
          qrCodeUrl={qrCodeUrl} 
          isLoading={isLoading} 
        />
      </div>
    </div>
  );
}

export default App;