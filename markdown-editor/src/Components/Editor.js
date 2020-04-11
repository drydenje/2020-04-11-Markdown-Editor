import React from "react";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-github";

import { useContext } from "react";
import { MarkdownContext } from "./App";

const Editor = () => {
  const { markdown, updateMarkdown } = useContext(MarkdownContext);

  const onChange = (newValue) => {
    updateMarkdown(newValue);
  };

  return (
    <div className="markdown-pane">
      <AceEditor
        mode="markdown"
        theme="github"
        onChange={onChange}
        name=""
        width="50vw"
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
};

export default Editor;
