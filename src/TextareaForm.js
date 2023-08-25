import React, { useState } from 'react';

const TextareaForm = ({ onFormSubmit }) => {
  const [content, setContent] = useState('');

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(content);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={handleContentChange}
          rows="6"
          cols="50"
          placeholder="Enter your content here..."
        />
        <div className="btn">
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default TextareaForm;


