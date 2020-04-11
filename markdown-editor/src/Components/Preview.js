import React from "react";
import ReactMarkdown from "react-markdown";
import { useContext } from "react";
import { MarkdownContext } from "./App";

const Preview = () => {
  const { markdown } = useContext(MarkdownContext);
  return (
    <div className="preview-pane">
      {/* Takes a string of markdown text and renders to a component */}
      <ReactMarkdown source={markdown} />
    </div>
  );
};

export default Preview;
