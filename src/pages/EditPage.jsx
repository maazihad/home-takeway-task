import { useState } from 'react';

const EditPage = () => {
   const [shortUrl, setShortUrl] = useState('');
   const [longUrl, setLongUrl] = useState('');

   const handleEdit = () => {
      localStorage.setItem(shortUrl, longUrl);
      setShortUrl('');
      setLongUrl('');
   };

   return (
      <div className="max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded">
         <h2 className="text-2xl font-semibold mb-4">Edit URL</h2>
         <div className="mb-4">
            <input
               type="text"
               placeholder="Enter the short URL to edit"
               value={shortUrl}
               onChange={(e) => setShortUrl(e.target.value)}
               className="w-full px-4 py-2 border border-gray-300 rounded"
            />
         </div>
         <div className="mb-4">
            <input
               type="text"
               placeholder="Enter the new long URL"
               value={longUrl}
               onChange={(e) => setLongUrl(e.target.value)}
               className="w-full px-4 py-2 border border-gray-300 rounded"
            />
         </div>
         <button
            onClick={handleEdit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
         >
            Save Changes
         </button>
      </div>
   );
};

export default EditPage;