import React from 'react';

const CitationsList = ({ citations }) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold mb-2">Citations</h3>
      <ul className="list-disc pl-5">
        {citations.map((citation, index) => (
          <li key={index}>{citation}</li>
        ))}
      </ul>
    </div>
  );
};

export default CitationsList;