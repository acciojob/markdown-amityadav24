import React, { useState, useEffect } from "react";
import MarkdownEditor from "./MarkdownEditor";
import "./styles.css";

function App() {
  const [markdownText, setMarkdownText] = useState("");

  useEffect(() => {
  }, [markdownText]);

  return (
    <div className="app">
      <MarkdownEditor markdownText={markdownText} setMarkdownText={setMarkdownText} />
    </div>
  );
}

export default App;
