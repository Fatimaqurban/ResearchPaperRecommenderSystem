import React from 'react';

const SimilarPapers = ({ papers }) => {
  // Check if papers is an array and has items
  if (!Array.isArray(papers) || papers.length === 0) {
    return (
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Similar Papers</h3>
        <p>No similar papers found.</p>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold mb-2">Similar Papers</h3>
      <ul className="space-y-2">
        {papers.map((paper, index) => (
          <li key={index} className="bg-gray-100 p-2 rounded">
            <p className="font-semibold">{paper.title}</p>
            <p className="text-sm">Similarity Score: {paper.similarity ? paper.similarity.toFixed(4) : 'N/A'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimilarPapers;

