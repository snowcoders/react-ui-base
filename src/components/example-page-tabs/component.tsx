import * as React from 'react';

import "@snowcoders/react-tabs/styles.css";
import { Tabs } from "@snowcoders/react-tabs";

import { ExampleComponentBase } from "../example-component-base";
import { ExamplePageBase } from '../example-page-base';

import * as classnames from "classnames";

export type AvailableClassNames = "" | "google" | "office" | "jquery-ui";

export interface IExamplePageTabsProps {
}

export interface IExamplePageTabsState {
    classNameToApply: AvailableClassNames;
}

export class ExamplePageTabs extends React.Component<IExamplePageTabsProps, IExamplePageTabsState> {
    constructor(props: IExamplePageTabsProps) {
        super(props);

        this.state = {
            classNameToApply: "jquery-ui"
        };
    }

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
                example: (
                    <div className="sci-react-ui-base-example-page-tabs">
                        <div className="styleSelector">
                            <label><input type="radio" name="style" onClick={this.getOnClick("")} value="" checked={this.state.classNameToApply === ""} />None</label>
                            <label><input type="radio" name="style" onClick={this.getOnClick("google")} value="google" checked={this.state.classNameToApply === "google"} />Google's Material UI</label>
                            <label><input type="radio" name="style" onClick={this.getOnClick("office")} value="office" checked={this.state.classNameToApply === "office"} />Microsoft Office Fabric</label>
                            <label><input type="radio" name="style" onClick={this.getOnClick("jquery-ui")} value="jquery-ui" checked={this.state.classNameToApply === "jquery-ui"} />JQuery UI</label>
                        </div>
                        <Tabs className={classnames(this.state.classNameToApply)} tabs={[1, 2, 3, 4].map((value) => {
                            return {
                                header: <div>Tab {value}</div>,
                                content: <div>Tab {value}'s content</div>
                            };
                        })} />
                    </div>),
                source: `TODO`
            }]}
        />;
    }

    getOnClick(className: AvailableClassNames) {
        return () => {
            this.setState({
                classNameToApply: className
            });
        };
    }
}