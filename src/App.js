import React, { useState } from 'react';
import './App.css';
import TextareaForm from './TextareaForm';

const App = () => {
  const [wordCount, setWordCount] = useState([]);

  const handleFormSubmit = (content) => {
    const words = content.split(/\s+/);
    const wordMap = {};

    words.forEach((word) => {
      const cleanWord = word.toLowerCase().replace(/[^\w\s]/g, '');
      if (cleanWord !== '') {
        if (wordMap[cleanWord]) {
          wordMap[cleanWord]++;
        } else {
          wordMap[cleanWord] = 1;
        }
      }
    });

    const sortedWords = Object.keys(wordMap).sort((a, b) => wordMap[b] - wordMap[a]);

    setWordCount(sortedWords.map((word) => `${word} (${wordMap[word]})`));
  };

  return (
    <div className="App">
      <h1>Word Counter</h1>
      <TextareaForm onFormSubmit={handleFormSubmit} />
      <div className="word-list">
      <h2 className='result'>Result:</h2>
  {wordCount.length > 0 && (
    <div className="grid-word-list">
      {wordCount.map((word, index) => (
        <span key={index}>
          {word}
        </span>
      ))}
    </div>
  )}
</div>

    </div>
  );
};

export default App;

