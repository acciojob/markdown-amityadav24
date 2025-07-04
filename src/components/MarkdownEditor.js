import React, { useState, useEffect } from "react";
import { marked } from "marked";

const MarkdownEditor = () => {
  const [markdownText, setMarkdownText] = useState("");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    setPreview(marked.parse(markdownText));
  }, [markdownText]);

  return (
    <>
      <textarea
        className="textarea"
        value={markdownText}
        onChange={(e) => setMarkdownText(e.target.value)}
        placeholder="Enter markdown here..."
      />
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: preview }}
      />
    </>
  );
};

export default MarkdownEditor;
