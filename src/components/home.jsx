import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-500">HisabBook</h1>
        <p className="text-lg md:text-xl text-gray-300 mt-2">
          Simplify Your Business & Personal Accounting
        </p>
        <p className="text-sm md:text-base text-gray-400 mt-1">
          Track expenses, generate receipts, and download PDFs with ease.
        </p>
      </header>

      <div className="flex flex-wrap gap-6">
        <button
          onClick={() => navigate('/business')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
        >
          Business (व्यापार)
        </button>
        <button
          onClick={() => navigate('/personal')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
        >
          Personal (निजी)
        </button>
      </div>

      <footer className="mt-12 text-center text-gray-400 text-sm">
        Built with ❤️ using React & TailwindCSS
      </footer>
    </div>
  );
};

export default Home;
