import React, { useState } from 'react';
import axios from 'axios';
import PaperSearch from '../components/PaperSearch';
import PaperDetails from '../components/PaperDetails';
import CitationsList from '../components/CitationsList';
import SimilarPapers from '../components/SimilarPapers';
import Visualization from '../components/Visualization';

const CitationsPage = () => {
  const [paperData, setPaperData] = useState(null);
  const [similarPapers, setSimilarPapers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post('https://2577-34-83-1-174.ngrok-free.app/api/search', { query });
      setPaperData(response.data);

      const compareResponse = await axios.post('https://2577-34-83-1-174.ngrok-free.app/api/compare_citations', { metadata: response.data });
      setSimilarPapers(compareResponse.data.similar_papers || []);
    } catch (error) {
      console.error('Error fetching paper data:', error);
      setError('An error occurred while fetching the paper data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Citations</h2>
      <PaperSearch onSearch={handleSearch} />
      {isLoading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {paperData && (
        <>
          <PaperDetails paper={paperData} />
          <CitationsList citations={paperData.citations_titles} />
          <SimilarPapers papers={similarPapers} />
          <Visualization type="Similarity Matrix" data={similarPapers} />
        </>
      )}
    </div>
  );
};

export default CitationsPage;
