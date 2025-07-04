import React, { useState, useEffect } from "react";
import { marked } from "marked";

const MarkdownEditor = () => {
  const [markdownText, setMarkdownText] = useState("");
  const [htmlPreview, setHtmlPreview] = useState("");

  useEffect(() => {
    setHtmlPreview(marked.parse(markdownText));
  }, [markdownText]);

  return (
    <>
      <textarea
        className="textarea"
        value={markdownText}
        onChange={(e) => setMarkdownText(e.target.value)}
        placeholder="Enter markdown text here..."
      />
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: htmlPreview }}
      />
    </>
  );
};

export default MarkdownEditor;
