import React from 'react';

const PaperDetails = ({ paper }) => {
  if (!paper) return null;

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-xl font-bold mb-2">{paper.title}</h2>
      <p><strong>Authors:</strong> {paper.authors}</p>
      <p><strong>Abstract:</strong> {paper.abstract}</p>
      <p><strong>Citations:</strong> {paper.citations_count}</p>
      <p><strong>References:</strong> {paper.references_count}</p>
    </div>
  );
};

export default PaperDetails;