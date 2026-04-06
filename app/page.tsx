import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 to-black flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Dashy!</h1>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link className="text-lg hover:underline" to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link className="text-lg hover:underline" to="/ai-tools">AI Tools</Link>
            </li>
            <li>
              <Link className="text-lg hover:underline" to="/content-generator">Content Generator</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;