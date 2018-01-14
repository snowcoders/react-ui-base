import * as React from 'react';

import { Manager, Target, Popper, Arrow } from 'react-popper';

import { ExampleComponentBase } from "../example-component-base";
import { ExamplePageBase } from '../example-page-base';

import * as classnames from "classnames";

export type AvailableClassNames = "google";

export interface IExamplePageTooltipProps {
}

export interface IExamplePageTooltipState {
    classNameToApply: AvailableClassNames;
}

export class ExamplePageTooltip extends React.Component<IExamplePageTooltipProps, IExamplePageTooltipState> {
    constructor(props: IExamplePageTooltipProps) {
        super(props);

        this.state = {
            classNameToApply: "google"
        };
    }

    render() {
        let classNameToName: { className: AvailableClassNames, name: string }[] = [{
            className: "google",
            name: "Material UI"
        }];

        return <ExamplePageBase
            componentName="Tooltip"
            npmPackageName="@snowcoders/react-tooltip"
            componentDescription="The tooltip is a wrapper around a <input type='tooltip' /> that allows for customization of the tooltip. The uncontrolled version of this component has two states, checked and unchecked"
            githubUrl="https://github.com/snowcoders/react-tooltip"
            npmUrl="https://www.npmjs.com/package/@snowcoders/react-tooltip"
            exampleSrcUrl="https://github.com/snowcoders/react-ui-base/tree/master/src/components/example-page-tooltip"
            examples={[{
                description: "An Tooltip with the exported styles disabled",
                example:
                    <div className="sci-react-ui-base-example-page-tooltip">
                        <div className="styleSelector">
                            {
                                classNameToName.map((value) => {
                                    return <label key={value.className}><input type="radio" name="style" onChange={this.getOnClick(value.className)} defaultChecked={this.state.classNameToApply === value.className} />{value.name}</label>
                                })
                            }
                        </div>
                        <div className="tooltip-example">
                            <Manager className="container">
                                <span>I'm text</span>
                                {" "}
                                <span>before the</span>
                                {" "}
                                <Target component="span" className="target">
                                    Target Box
                                </Target>
                                {" "}
                                <span>and I'm after it</span>
                                <Popper placement="top" className="popper">
                                    <span>I'm the tooltip</span>
                                    <Arrow className="popper__arrow"></Arrow>
                                </Popper>
                            </Manager>
                        </div>
                    </div>
            }]} />;
    }

    getOnClick(className: AvailableClassNames) {
        return () => {
            this.setState({
                classNameToApply: className
            });
        };
    };
}