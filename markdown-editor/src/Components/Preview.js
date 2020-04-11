import React from "react";
import ReactMarkdown from "react-markdown";

const Preview = () => {
  const input = "# This is a markdown header\n\nAnd this is a paragraph";
  return (
    <div className="preview-pane">
      <ReactMarkdown source={input} />
    </div>
  );
};

export default Preview;
