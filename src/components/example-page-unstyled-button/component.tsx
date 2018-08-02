import * as React from "react";

import { UnstyledButton } from "@snowcoders/react-unstyled-button";
import "@snowcoders/react-unstyled-button/styles.css";

import { ExamplePageBase } from "../example-page-base";

export class ExamplePageUnstyledButton extends React.Component {
  render() {
    return (
      <ExamplePageBase
        componentDescription="The unstyled button is an accessible version of a div with an onClick handler. Because it is a normal HTMLButtonElement it by default is tabbable, screen reader accessible and easy to manipulate via the css state selectors."
        componentName="Unstyled Button"
        exampleSrcUrl="https://github.com/snowcoders/react-ui-base/tree/master/src/components/example-page-unstyled-button"
        githubUrl="https://github.com/snowcoders/react-unstyled-button"
        npmPackageName="@snowcoders/react-unstyled-button"
        npmUrl="https://www.npmjs.com/package/@snowcoders/react-unstyled-button"
        examples={[
          {
            description: "An UnstyledButton with the exported styles disabled",
            example: (
              <UnstyledButton
                onClick={this.onClick}
                isBaseStylesDisabled={true}
              >
                Button that only has the functionality
              </UnstyledButton>
            ),
            source:
              "<UnstyledButton onClick={this.onClick} isBaseStylesDisabled={true}>Button that only has the functionality</UnstyledButton>"
          },
          {
            description: "An UnstyledButton with the exported styles",
            example: (
              <UnstyledButton onClick={this.onClick}>
                Button with default styles
              </UnstyledButton>
            ),
            source: `import "@snowcoders/react-unstyled-button/styles.css";
<UnstyledButton onClick={this.onClick}>Button with default styles</UnstyledButton>`
          },
          {
            description: "An UnstyledButton with some custom styling",
            example: (
              <UnstyledButton
                onClick={this.onClick}
                className="sci-react-ui-base-example-page-unstyled-button"
              >
                Button with custom styles added to the default styles
              </UnstyledButton>
            ),
            source: `import "@snowcoders/react-unstyled-button/styles.css";
<styles>
.sci-react-unstyled-button.sci-react-ui-base-example-page-unstyled-button {
    // Box-Sizing
    padding: 14px 40px;
    border-radius: 100px;
    border-width: 0px;
    border-style: solid;

    // Colors
    border-color: #16da00;
    background-color: green;
    color: white;
    
    // Sizes
    font-size: 16px;
    font-family: "Open Sans",X-LocaleSpecific,sans-serif;

    &:hover {
        background-color: darkgreen;
    }
}
</styles>
<UnstyledButton onClick={this.onClick} className ="sci-react-ui-base-example-page-unstyled-button">Button with custom styles added to the default styles</UnstyledButton>`
          }
        ]}
      />
    );
  }

  onClick = () => {
    alert("Button was clicked");
  };
}
