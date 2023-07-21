import { useState } from 'react';

const ListPage = () => {
   const [shortUrls, setShortUrls] = useState(Object.keys(localStorage));
   const [longUrl, setLongUrl] = useState('');

   const handleDelete = (shortUrl) => {
      localStorage.removeItem(shortUrl);
      setShortUrls((prevShortUrls) => prevShortUrls.filter((url) => url !== shortUrl));
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      if (!longUrl) {
         return;
      }

      const shortUrl = Math.random().toString(36).substr(2, 8);
      localStorage.setItem(shortUrl, longUrl);
      setShortUrls([...shortUrls, shortUrl]);
      setLongUrl('');
   };

   return (
      <div className="max-w-4xl mx-auto mt-8">
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               placeholder="Enter a long URL"
               value={longUrl}
               onChange={(e) => setLongUrl(e.target.value)}
               className="border border-gray-400 px-4 py-2 rounded mr-2"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
               Generate Short URL
            </button>
         </form>
         <div className="max-h-80 overflow-y-auto mt-4">
            <table className="w-full border-collapse border border-gray-400 rounded">
               <thead>
                  <tr className="bg-blue-500 text-white">
                     <th className="px-4 py-2">Short URL</th>
                     <th className="px-4 py-2">Long URL</th>
                     <th className="px-4 py-2">Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {shortUrls.map((shortUrl) => (
                     <tr key={shortUrl} className="bg-white">
                        <td className="border px-4 py-2">
                           <a href={localStorage.getItem(shortUrl)} target="_blank" rel="noopener noreferrer">
                              {shortUrl}
                           </a>
                        </td>
                        <td className="border px-4 py-2">{localStorage.getItem(shortUrl)}</td>
                        <td className="border px-4 py-2">
                           <button onClick={() => handleDelete(shortUrl)} className="bg-red-500 text-white px-2 py-1 rounded">
                              Delete
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default ListPage;