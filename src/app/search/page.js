'use client'
// pages/search.js
import { useState } from 'react';
import SearchBar from '../components/SearchBar';

const SearchPage = () => {
  const [results, setResults] = useState([]);

  // Example data (client-side)
  const data = [
    { id: 1, name: 'Jeans' },
    { id: 2, name: 'shirts' },
    { id: 3, name: 'hoodie' },
  ];

  const handleSearch = (query) => {
    // Client-side filtering
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div>
      {/* <h1>Search Page</h1> */}
      <SearchBar onSearch={handleSearch} />
      <ul>
        {results.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;