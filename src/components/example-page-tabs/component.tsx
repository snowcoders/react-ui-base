import * as React from 'react';

import { Tabs } from "@snowcoders/react-tabs";
import "@snowcoders/react-tabs/styles.css";

import { ExampleComponentBase } from "../example-component-base";
import { ExamplePageBase } from '../example-page-base';

import * as classnames from "classnames";

export type AvailableClassNames = "default" | "google" | "jquery-ui" | "office";

export interface IExamplePageTabsProps {
}

export interface IExamplePageTabsState {
    classNameToApply: AvailableClassNames;
}

export class ExamplePageTabs extends React.Component<IExamplePageTabsProps, IExamplePageTabsState> {
    constructor(props: IExamplePageTabsProps) {
        super(props);

        this.state = {
            classNameToApply: "google"
        };
    }

    render() {

        let classNameToName: { className: AvailableClassNames, name: string }[] = [{
            className: "default",
            name: "No custom styling"
        }, {
            className: "google",
            name: "Google's Material UI"
        }, {
            className: "jquery-ui",
            name: "Jquery UI"
        }, {
            className: "office",
            name: "Microsoft Office's Fabric UI"
        }];

        return <ExamplePageBase
            componentDescription="The Tabs is a HTMLInputElement with all the browser default styling removed so it looks like HTMLDivElement"
            componentName="Unstyled Input"
            examples={[{
                description: "Tabs component with styling of a few UI libraries",
                example: (
                    <div className="sci-react-ui-base-example-page-tabs">
                        <div className="styleSelector">
                            {
                                classNameToName.map((value) => {
                                    return <label key={value.className}><input type="radio" name="style" onChange={this.getOnClick(value.className)} value={value.className} checked={this.state.classNameToApply === value.className} />{value.name}</label>
                                })
                            }
                        </div>
                        <Tabs
                            className={classnames(this.state.classNameToApply)}
                            tabs={[1, 2, 3, 4].map((value) => {
                                return {
                                    header: <div>Tab {value}</div>,
                                    content: <div>Tab {value}'s content</div>
                                };
                            })} />
                    </div>)
            }]}
            exampleSrcUrl="https://github.com/snowcoders/react-ui-base/tree/master/src/components/example-page-tabs"
            githubUrl="https://github.com/snowcoders/react-tabs"
            npmPackageName="@snowcoders/react-tabs"
            npmUrl="https://www.npmjs.com/package/@snowcoders/react-tabs"
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