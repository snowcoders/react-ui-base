import * as React from "react";

import { UnstyledInput } from "@snowcoders/react-unstyled-input";
import "@snowcoders/react-unstyled-input/styles.css";

import { ExamplePageBase } from "../example-page-base";

export class ExamplePageUnstyledInput extends React.Component {
  render() {
    return (
      <ExamplePageBase
        componentDescription="The UnstyledInput is a HTMLInputElement with all the browser default styling removed so it looks like HTMLDivElement"
        componentName="Unstyled Input"
        exampleSrcUrl="https://github.com/snowcoders/react-ui-base/tree/master/src/components/example-page-unstyled-input"
        githubUrl="https://github.com/snowcoders/react-unstyled-input"
        npmPackageName="@snowcoders/react-unstyled-input"
        npmUrl="https://www.npmjs.com/package/@snowcoders/react-unstyled-input"
        examples={[
          {
            description: "An UnstyledInput with the exported styles disabled",
            example: (
              <UnstyledInput
                isBaseStylesDisabled={true}
                type="number"
                defaultValue="10"
              />
            ),
            source: `import "@snowcoders/react-unstyled-input/styles.css";
<UnstyledInput isBaseStylesDisabled={true} type="number" value="10" />`
          },
          {
            description: "An UnstyledInput with the exported styles",
            example: <UnstyledInput type="number" defaultValue="10" />,
            source: `import "@snowcoders/react-unstyled-input/styles.css";
<UnstyledInput type="number" value="10" />`
          },
          {
            description: "An UnstyledInput with custom styles",
            example: (
              <UnstyledInput
                className="sci-react-ui-base-example-page-unstyled-input"
                type="text"
                placeholder="Hint Text"
                defaultValue=""
              />
            ),
            source: `// CSS
.sci-react-unstyled-input.sci-react-ui-base-example-page-unstyled-input {
    // Box-Sizing
    height: 36px;
    line-height: 24px;
    display: inline-block;
    
    // Font
    font-size: 16px;
    font-family: Roboto,sans-serif;

    border-bottom: 1px solid #d0d0d0;
    transition: border 450ms;

    &::placeholder {
        color: #d0d0d0;
    }
    
    &:focus,
    &:hover { 
        border-bottom: 1px solid green;
    }
}

import "@snowcoders/react-unstyled-input/styles.css
<UnstyledInput className="sci-react-ui-base-example-page-unstyled-input" type="text" placeholder="Hint Text" defaultValue="" />`
          }
        ]}
      />
    );
  }

  onClick = () => {
    alert("Button was clicked");
  };
}
