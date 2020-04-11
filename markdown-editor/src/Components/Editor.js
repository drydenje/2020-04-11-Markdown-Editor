import React from "react";
// import { render } from "react-dom";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-github";

export default class Editor extends React.Component {
  onChange = (newValue) => {
    console.log("change:", newValue);
  };

  render() {
    return (
      <div className="markdown-pane">
        <AceEditor
          mode="markdown"
          theme="github"
          onChange={this.onChange}
          name=""
          editorProps={{ $blockScrolling: true }}
        />
      </div>
    );
  }
}
