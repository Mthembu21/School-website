import React from 'react';

const Announcements: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Announcements</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-gray-600">Stay tuned for the latest announcements from our school.</p>
        {/* Add announcement content here */}
      </div>
    </div>
  );
};

export default Announcements;
