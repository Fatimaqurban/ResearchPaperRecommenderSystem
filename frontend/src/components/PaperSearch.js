import React, { useState } from 'react';

const PaperSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter DOI or title of the paper"
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Search
      </button>
    </form>
  );
};

export default PaperSearch;