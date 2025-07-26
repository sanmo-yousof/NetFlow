import React from 'react';
import { Link } from 'react-router-dom'; // or use `next/link` for Next.js

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-6">
      <h1 className="text-6xl font-bold text-green-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
