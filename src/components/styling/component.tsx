import * as React from "react";

import { CodeHighlighter } from "../code-highlighter";

export class Styling extends React.Component {
  render() {
    return (
      <div className="sci-react-ui-base-styling">
        <h1>Customizing and Styling</h1>
        <p>
          We try to focus on using pure css methods of customization and
          styling. To that means, we recommend styling our components using
          specificity. For example, assume you want to customize the unstyled
          button. The code would look something like this:
        </p>
        <CodeHighlighter
          javascriptSourceCode={`import * as React from 'react';

import "@snowcoders/react-unstyled-button/styles.css";
import { UnstyledButton } from "@snowcoders/react-unstyled-button";

export class ExampleUnstyledButton extends React.Component {
    render() {
        return <UnstyledButton className="example-button">Click me!</UnstyledButton>
    }
}`}
        />
      </div>
    );
  }
}
