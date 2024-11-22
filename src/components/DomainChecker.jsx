"use client"
import { useState } from 'react';

const DomainChecker = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCheck = async () => {
    if (websiteUrl.trim() === '') {
      alert('Please enter a website URL.');
      return;
    }

    const url = `https://domain-da-pa-check.p.rapidapi.com/?target=${websiteUrl}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5fb4b13ba9mshbf642a318c81514p142c6bjsn9b3bacfd22d5',
        'X-RapidAPI-Host': 'domain-da-pa-check.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (data.result === 'success') {
        setResult(data.body);
        setError(null);
      } else {
        setError('Failed to retrieve data for the specified website.');
        setResult(null);
      }
    } catch (error) {
      console.error(error);
      setError('Failed to fetch data from the API.');
      setResult(null);
    }
  };

  return (
    <div className="container">
      <h1>Domain PA and DA Checker</h1>
      <div className="form-container">
        <label htmlFor="websiteUrl">Enter Website URL</label>
        <input
          type="text"
          id="websiteUrl"
          placeholder="E.g., www.blissnaija.com"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
        />
        <button onClick={handleCheck}>Check PA and DA</button>
      </div>
      <div className="result-container">
        {result && (
          <div id="result">
            <h2>
              Result for <a href={result.target}>{result.target}</a>
            </h2>
            <p>DA Score: {result.da_score}</p>
            <p>PA Score: {result.pa_score}</p>
            <p>Spam Score: {result.spam_score}</p>
            <p>Total Backlinks: {result.total_backlinks}</p>
          </div>
        )}
        {error && (
          <div id="result">
            <h2>Error:</h2>
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DomainChecker;
