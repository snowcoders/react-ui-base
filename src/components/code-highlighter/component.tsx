import * as React from "react";

import { highlightBlock } from "highlight.js";
import "highlight.js/styles/atom-one-light.css";

export interface ICodeHighlighterProps {
  javascriptSourceCode: string;
}

export class CodeHighlighter extends React.Component<ICodeHighlighterProps> {
  private ref: null | HTMLPreElement;

  componentDidMount() {
    if (this.ref != null) {
      highlightBlock(this.ref);
    }
  }

  render() {
    return (
      <pre
        ref={ref => {
          this.ref = ref;
        }}
      >
        <code>{this.props.javascriptSourceCode}</code>
      </pre>
    );
  }
}
