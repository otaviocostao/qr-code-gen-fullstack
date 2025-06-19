
const QrCodePreview = ({ qrCodeUrl, isLoading }) => {
  return (
    <div className='flex flex-col w-120 h-100 p-5 bg-gray-800 rounded-xl justify-around items-center'>
      <h3 className='text-2xl text-center'>Seu QR Code:</h3>
      
      <div className='w-64 h-64 bg-gray-900 flex justify-center items-center rounded-lg'>
        {isLoading && <p>Carregando...</p>}
        
        {!isLoading && qrCodeUrl && <img src={qrCodeUrl} alt="QR Code gerado" />}

        {!isLoading && !qrCodeUrl && <p className="text-gray-400 text-center p-4">Seu QR Code aparecerá aqui</p>}
      </div>

      {qrCodeUrl && !isLoading && (
        <a href={qrCodeUrl} download="qrcode.png">
          <button className='bg-blue-500 p-2 rounded-lg mt-2 cursor-pointer hover:bg-blue-600 transition-colors'>
            Download
          </button>
        </a>
      )}
    </div>
  );
}

export default QrCodePreview;