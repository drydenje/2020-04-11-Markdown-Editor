import React from "react";
import "../Styles/App.css";
import { useState, createContext } from "react";

import Editor from "./Editor";
import Preview from "./Preview";

export const MarkdownContext = createContext();

function App() {
  const [markdown, updateMarkdown] = useState();

  const update = (markdownText) => {
    console.log("MD:", markdownText);

    updateMarkdown(markdown + markdownText);
  };

  return (
    <MarkdownContext.Provider value={{ markdown, update }}>
      <div className="App">
        <Editor />
        <Preview />
      </div>
    </MarkdownContext.Provider>
  );
}

export default App;
