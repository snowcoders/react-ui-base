import * as React from 'react';

import "@snowcoders/react-unstyled-input/styles.css";
import { UnstyledInput } from "@snowcoders/react-unstyled-input";

import { ExampleComponentBase } from "../example-component-base";
import { ExamplePageBase } from '../example-page-base';

export class ExamplePageUnstyledInput extends React.Component {
    render() {

        return <ExamplePageBase
            componentName="Unstyled Input"
            npmPackageName="@snowcoders/react-unstyled-input"
            componentDescription="The UnstyledInput is a HTMLInputElement with all the browser default styling removed so it looks like HTMLDivElement"
            githubUrl="https://github.com/snowcoders/react-unstyled-input"
            npmUrl="https://www.npmjs.com/package/@snowcoders/react-unstyled-input"
            exampleSrcUrl="https://github.com/snowcoders/react-ui-base/tree/master/src/components/example-page-unstyled-input"
            examples={[{
                description: "An UnstyledInput with the exported styles disabled",
                example: <UnstyledInput isBaseStylesDisabled={true} type="number" defaultValue="10" />,
                source: `import "@snowcoders/react-unstyled-input/styles.css";
<UnstyledInput isBaseStylesDisabled={true} type="number" value="10" />`
            }, {
                description: "An UnstyledInput with the exported styles",
                example: <UnstyledInput type="number" defaultValue="10" />,
                source: `import "@snowcoders/react-unstyled-input/styles.css";
<UnstyledInput type="number" value="10" />`
            }, {
                description: "An UnstyledInput with custom styles",
                example: <UnstyledInput className="sci-react-ui-base-example-page-unstyled-input" type="text" placeholder="Hint Text" defaultValue="" />,
                source: `TODO`
            }]}
        />;
    }

    onClick = () => {
        alert("Button was clicked");
    };
}