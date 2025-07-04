import React from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor = ({ markdownText, setMarkdownText }) => {
  const handleChange = (e) => {
    setMarkdownText(e.target.value);
  };

  return (
    <>
      <textarea
        className="textarea"
        value={markdownText}
        onChange={handleChange}
        placeholder="Write your markdown here..."
      />
      <div className="preview">
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </div>
    </>
  );
};

export default MarkdownEditor;
