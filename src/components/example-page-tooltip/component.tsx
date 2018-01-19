import * as React from 'react';

import { Manager, Target, Popper, Arrow } from 'react-popper';
import { TargetMouseHover } from "./targetMouseHover";

import { ExampleComponentBase } from "../example-component-base";
import { ExamplePageBase } from '../example-page-base';

import * as classnames from "classnames";

export type AvailableClassNames = "google";

export interface IExamplePageTooltipProps {
}

export interface IExamplePageTooltipState {
    classNameToApply: AvailableClassNames;
    isHoveringTooltip: boolean;
    isHoveringTarget: boolean;
}

export class ExamplePageTooltip extends React.Component<IExamplePageTooltipProps, IExamplePageTooltipState> {
    constructor(props: IExamplePageTooltipProps) {
        super(props);

        this.state = {
            classNameToApply: "google",
            isHoveringTooltip: false,
            isHoveringTarget: false
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
                                <TargetMouseHover
                                    onHoverChange={(isHovering: boolean) => {
                                        this.setState({ isHoveringTarget: isHovering })
                                    }}>
                                    <span>Target Box</span>
                                </TargetMouseHover>
                                <Popper
                                    placement="right"
                                    className={classnames("popper", { visible: this.state.isHoveringTarget || this.state.isHoveringTooltip })}
                                    onMouseOver={() => { this.setState({ isHoveringTooltip: true }) }}
                                    onMouseOut={() => { this.setState({ isHoveringTooltip: false }) }}
                                >
                                    <span>I'm the tooltip</span>
                                    <Arrow>
                                        {({ arrowProps }) => (
                                            <span {...arrowProps} className="popper__arrow" onMouseOver={() => { this.setState({ isHoveringTooltip: true }) }} onMouseOut={() => { this.setState({ isHoveringTooltip: false }) }} />
                                        )}</Arrow>
                                </Popper>
                                {" "}
                                <span>and I'm after it</span>
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