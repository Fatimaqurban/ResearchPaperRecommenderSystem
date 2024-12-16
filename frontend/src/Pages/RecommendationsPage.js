import React, { useState } from 'react';
import axios from 'axios';
import PaperSearch from '../components/PaperSearch';
import PaperDetails from '../components/PaperDetails';
import SimilarPapers from '../components/SimilarPapers';
import Visualization from '../components/Visualization';

const RecommendationsPage = () => {
  const [paperData, setPaperData] = useState(null);
  const [recommendedPapers, setRecommendedPapers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post('https://2577-34-83-1-174.ngrok-free.app/api/search', { query });
      setPaperData(response.data);
      setRecommendedPapers([]);
    } catch (error) {
      console.error('Error fetching paper data:', error);
      setError('An error occurred while fetching the paper data. Please try again.');
      setPaperData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchRecommendations = async (basis) => {
    if (!paperData) {
      setError('Please search for a paper first.');
      return;
    }
  
    setIsLoading(true);
    setError(null);
  
    try {
      const response = await axios.post('https://2577-34-83-1-174.ngrok-free.app/api/recommend', {
        basis,
        query: basis === 'author' ? paperData.authors : 
               basis === 'abstract' ? paperData.abstract : 
               paperData.title,
        exclude_title: paperData.title,
        top_k: 5
      });
  
      if (response.data.recommendations) {
        setRecommendedPapers(response.data.recommendations.map(paper => ({
          ...paper,
          similarity: parseFloat(paper.similarity || 0),
        })));
      } else {
        setError('No recommendations found.');
        setRecommendedPapers([]);
      }
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      setError('An error occurred while fetching the recommendations. Please try again.');
      setRecommendedPapers([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
      <PaperSearch onSearch={handleSearch} />
      {isLoading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {paperData && (
        <>
          <PaperDetails paper={paperData} />
          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => fetchRecommendations('author')}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Recommend by Author
            </button>
            <button
              onClick={() => fetchRecommendations('title')}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Recommend by Title
            </button>
            <button
              onClick={() => fetchRecommendations('abstract')}
              className="px-4 py-2 bg-purple-500 text-white rounded"
            >
              Recommend by Abstract
            </button>
          </div>
          {recommendedPapers.length > 0 && (
            <SimilarPapers papers={recommendedPapers} />
          )}
        </>
      )}
    </div>
  );
};

export default RecommendationsPage;