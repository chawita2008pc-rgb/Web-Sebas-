import React from 'react';

const LOGO_FILES = [
  'sigma.png',
  'perego.png',
  'antonini.png',
  'falorni.png',
  'famor.png',
  'oms.png',
  'glass-export.png'
];

export const LogoDebug: React.FC = () => {
  // Only show in development or if manually enabled
  const [isOpen, setIsOpen] = React.useState(false);

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 bg-red-600 text-white text-xs p-1 z-50 rounded opacity-50 hover:opacity-100"
      >
        Debug Logos
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/90 z-[9999] overflow-auto p-8 text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Logo Path Debugger</h2>
        <button 
          onClick={() => setIsOpen(false)}
          className="bg-white text-black px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
      
      <p className="mb-4 text-yellow-400">
        IMPORTANT: Files must exist in <code>public/logos/</code> folder.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {LOGO_FILES.map(filename => (
          <div key={filename} className="border border-white/20 p-4 rounded bg-gray-900">
            <p className="text-xs mb-2 text-gray-400">/logos/{filename}</p>
            <div className="h-20 bg-white/10 flex items-center justify-center rounded overflow-hidden relative">
              <img 
                src={`/logos/${filename}`} 
                alt={filename}
                className="max-h-full max-w-full object-contain"
                onLoad={(e) => {
                  (e.target as HTMLImageElement).style.border = '2px solid green';
                }}
                onError={(e) => {
                   const target = e.target as HTMLImageElement;
                   target.style.border = '2px solid red';
                   // Add visual text for error
                   target.parentElement?.insertAdjacentHTML('beforeend', '<span style="color:red; font-size:10px; position:absolute;">FAILED</span>');
                }}
              />
            </div>
            <p className="text-[10px] mt-2 text-center text-gray-500">
              Green Border = Loaded<br/>
              Red Border = Missing
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
