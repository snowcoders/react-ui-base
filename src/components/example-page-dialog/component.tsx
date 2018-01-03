import * as React from 'react';

import "@snowcoders/react-dialog/styles.css";
import { Dialog } from "@snowcoders/react-dialog";

import { ExampleComponentBase } from "../example-component-base";
import { ExamplePageBase } from '../example-page-base';

import * as classnames from "classnames";

export type AvailableClassNames = "google" | "office" | "jquery-ui" | "default";

export interface IExamplePageDialogProps {
}

export interface IExamplePageDialogState {
    classNameToApply: AvailableClassNames;
    isDialogOpen: boolean;
}

export class ExamplePageDialog extends React.Component<IExamplePageDialogProps, IExamplePageDialogState> {
    constructor(props: IExamplePageDialogProps) {
        super(props);

        this.state = {
            classNameToApply: "google",
            isDialogOpen: false,
        };
    }

    render() {

        let classNameToName: { className: AvailableClassNames, name: string }[] = [{
            className: "google",
            name: "Google's Material UI"
        }, {
            className: "office",
            name: "Microsoft Office's Fabric UI"
        }];

        return <ExamplePageBase
            componentName="Dialog"
            npmPackageName="@snowcoders/react-dialog"
            componentDescription="The dialog is a basic positioning component that puts the content centered on the screen over the rest of the page"
            githubUrl="https://github.com/snowcoders/react-dialog"
            npmUrl="https://www.npmjs.com/package/@snowcoders/react-dialog"
            exampleSrcUrl="https://github.com/snowcoders/react-ui-base/tree/master/src/components/example-page-dialog"
            examples={[{
                description: "Dialog component with styling of a few UI libraries",
                example: (
                    <div className="sci-react-ui-base-example-page-dialog">
                        <div className="styleSelector">
                            {
                                classNameToName.map((value) => {
                                    return <label key={value.className}><input type="radio" name="style" onChange={this.getOnClick(value.className)} defaultChecked={this.state.classNameToApply === value.className} />{value.name}</label>
                                })
                            }
                        </div>
                        <div>
                            <button onClick={this.getOnOpenDialogToggle(true)}>
                                Open dialog
                            </button>
                        </div>
                        <Dialog
                            className={classnames(this.state.classNameToApply)}
                            isVisible={this.state.isDialogOpen}
                            onBackgroundClick={this.getOnOpenDialogToggle(false)}
                        >
                            <h3 tab-index="1">Dialog</h3>
                            <div className="content">
                                <span>Often times there are cancel, submit and close buttons inside the dialog. These vary from library to library so we left the contents of this div to be whatever you may wish. That said, you do get a few things for free:</span>
                                <ul>
                                    <li>Clicking the grey overlay fires a callback, which you can either close or not close the dialog</li>
                                </ul>
                                <span>Some future work to be done</span>
                                <ul>
                                    <li>Pressing escape will close this dialog</li>
                                    <li>Tabbing in the dialog will not leave this dialog</li>
                                </ul>
                                <span>If you need to support accessibility scenarios, here are some suggestions</span>
                                <ul>
                                    <li>Always have some sort of button to close the dialog. Without this a screen reader will not announce how to close the dialog</li>
                                </ul>
                            </div>
                        </Dialog>
                    </div>)
            }]}
        />;
    }

    getOnOpenDialogToggle = (isDialogOpen: boolean) => {
        return () => {
            this.setState({
                isDialogOpen: isDialogOpen
            });
        }
    };

    getOnClick(className: AvailableClassNames) {
        return () => {
            this.setState({
                classNameToApply: className
            });
        };
    };
}