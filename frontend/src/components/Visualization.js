import React from 'react';

const Visualization = ({ type, data }) => {
  return (
    <div className="mt-4 border p-4 rounded">
      <h3 className="text-lg font-bold mb-2">{type} Visualization</h3>
      <p className="text-gray-600">Visualization placeholder for {type}</p>
      {/* Add actual visualization logic here */}
    </div>
  );
};

export default Visualization;