import * as React from 'react';

import { Manager, Target, Popper, Arrow } from '@snowcoders/react-popper';
import { TargetMouseHover } from "./targetMouseHover";
import { PopperMouseHover } from "./popperMouseHover";

import { ExampleComponentBase } from "../example-component-base";
import { ExamplePageBase } from '../example-page-base';

import * as classnames from "classnames";

export type AvailableClassNames = "mouse" | "dismiss";

export interface IExamplePageTooltipProps {
}

export interface IExamplePageTooltipState {
    classNameToApply: AvailableClassNames;
    isHoveringTooltip: boolean;
    isHoveringTarget: boolean;
    hardDismiss: boolean;
}

export class ExamplePageTooltip extends React.Component<IExamplePageTooltipProps, IExamplePageTooltipState> {
    constructor(props: IExamplePageTooltipProps) {
        super(props);

        this.state = {
            classNameToApply: "mouse",
            isHoveringTooltip: false,
            isHoveringTarget: false,
            hardDismiss: false
        };
    }

    render() {
        let classNameToName: { className: AvailableClassNames, name: string }[] = [{
            className: "mouse",
            name: "Mouse over example"
        },
        {
            className: "dismiss",
            name: "Click background to dismiss"
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
                            <Manager>
                                <span className={classnames("container", "mouse-over", { visible: this.state.classNameToApply === "mouse" })}>
                                    <span>I'm text</span>
                                    {" "}
                                    <span>before the</span>
                                    {" "}
                                    <TargetMouseHover
                                        onHoverChange={(isHovering: boolean) => {
                                            this.setState({ isHoveringTarget: isHovering })
                                        }}>
                                        Target Box
                                </TargetMouseHover>
                                    <PopperMouseHover
                                        positionFixed={false}
                                        placement="right"
                                        className={classnames("popper", { visible: this.state.isHoveringTarget || this.state.isHoveringTooltip })}
                                        onHoverChange={(isHovering: boolean) => { this.setState({ isHoveringTooltip: isHovering }) }}
                                    >
                                        I'm the tooltip
                                    </PopperMouseHover>
                                    {" "}
                                    <span>for the mouse hover popover</span>
                                </span>
                            </Manager>
                            <Manager>
                                <div className={classnames("container", "hard-dismiss", { visible: this.state.classNameToApply === "dismiss" })}>
                                    <span>I'm text</span>
                                    {" "}
                                    <span>before the</span>
                                    {" "}
                                    <Target componentFactory={(targetProps) => (
                                        <span
                                            {...targetProps}
                                            onClick={() => { this.setState({ hardDismiss: true }) }}
                                        >
                                            Target Box
                                        </span>
                                    )} />
                                    <span
                                        className={classnames("overlay", { visible: this.state.hardDismiss })}
                                        onClick={() => { this.setState({ hardDismiss: false }) }}>
                                        <Popper
                                            placement="right"
                                            positionFixed={true}
                                            componentFactory={(popperProps) => (
                                                <span
                                                    {...popperProps}
                                                    className={classnames("popper", { visible: this.state.hardDismiss })}
                                                    onClick={() => { }}
                                                >
                                                    I'm the tooltip
                                                    <Arrow componentFactory={(arrowProps) => (
                                                        <span
                                                            {...arrowProps}
                                                            className="popper__arrow"
                                                        />
                                                    )} />
                                                </span>
                                            )} />
                                    </span>
                                    {" "}
                                    <span>for the hard dismiss popover</span>
                                </div>
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