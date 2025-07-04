import React, { useState } from "react";
import MarkdownEditor from "./MarkdownEditor";
import "./styles.css";

function App() {
  const [markdownText, setMarkdownText] = useState("");

  return (
    <div className="app">
      <MarkdownEditor markdownText={markdownText} setMarkdownText={setMarkdownText} />
    </div>
  );
}

export default App;
