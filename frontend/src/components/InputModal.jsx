import React, { useState } from 'react';

const InputModal = ({ onGenerate, isLoading, error }) => {
  const [link, setLink] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onGenerate(link);
  };

  return (
    <div className='w-180 h-100 p-5 bg-gray-800 rounded-xl'>
        <h3 className='text-2xl'>Cole o link que deseja transformar em QrCode:</h3>
        <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              value={link} 
              onChange={(e) => setLink(e.target.value)} 
              disabled={isLoading} 
              className='mt-5 p-2 bg-gray-900 rounded-lg w-150' 
              placeholder='Ex: "https://youtube.com"'
            />
            <button 
              type='submit' 
              disabled={isLoading} 
              className='bg-blue-500 p-2 rounded-lg mt-5 cursor-pointer hover:bg-blue-600 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed'
            >
              {isLoading ? "Gerando..." : "Gerar QR Code"}
            </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}

export default InputModal;