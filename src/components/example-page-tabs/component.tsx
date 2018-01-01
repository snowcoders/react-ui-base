import * as React from 'react';

import "@snowcoders/react-tabs/styles.css";
import { Tabs } from "@snowcoders/react-tabs";

import { ExampleComponentBase } from "../example-component-base";
import { ExamplePageBase } from '../example-page-base';

export class ExamplePageTabs extends React.Component {
    render() {

        return <ExamplePageBase
            componentName="Unstyled Input"
            npmPackageName="@snowcoders/react-tabs"
            componentDescription="The Tabs is a HTMLInputElement with all the browser default styling removed so it looks like HTMLDivElement"
            githubUrl="https://github.com/snowcoders/react-tabs"
            npmUrl="https://www.npmjs.com/package/@snowcoders/react-tabs"
            exampleSrcUrl="https://github.com/snowcoders/react-ui-base/tree/master/src/components/example-page-tabs"
            examples={[{
                description: "A Tabs with the exported styles",
                example: <Tabs className="sci-react-ui-base-example-page-tabs" tabs={[1, 2, 3, 4].map((value) => {
                    return {
                        header: <div>Tab {value}</div>,
                        content: <div>Tab {value}'s content</div>
                    };
                })} />,
                source: `TODO`
            }]}
        />;
    }

    onClick = () => {
        alert("Button was clicked");
    };
}