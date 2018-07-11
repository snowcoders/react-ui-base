import * as React from 'react';

import "@snowcoders/react-popover/styles.css";
import { Popover, PopperType, TargetType } from '@snowcoders/react-popover';

import { ExampleComponentBase } from "../example-component-base";
import { ExamplePageBase } from '../example-page-base';

import * as classnames from "classnames";

type PopperPositionOptions = "bottom" | "top" | "left" | "right";

export interface IExamplePagePopoverProps {
}

export interface IExamplePagePopoverState {
    targetType: TargetType,
    popperType: PopperType,
    position: PopperPositionOptions,
}

export class ExamplePagePopover extends React.Component<IExamplePagePopoverProps, IExamplePagePopoverState> {
    constructor(props: IExamplePagePopoverProps) {
        super(props);

        this.state = {
            targetType: "hover",
            popperType: "hover",
            position: "bottom",
        };
    }

    render() {
        let popperTypeToName: { popperType: PopperType, name: string }[] = [{
            popperType: "hover",
            name: "Hover"
        },
        {
            popperType: "blur",
            name: "Blur"
        },
        {
            popperType: "click",
            name: "Click"
        }, {
            popperType: "none",
            name: "None"
        }];
        let targetTypeToName: { targetType: TargetType, name: string }[] = [{
            targetType: "hover",
            name: "Hover"
        },
        {
            targetType: "click",
            name: "Click"
        }];
        let positionToName: { position: PopperPositionOptions, name: string }[] = [{
            position: "bottom",
            name: "Bottom"
        },
        {
            position: "top",
            name: "Top"
        },
        {
            position: "left",
            name: "Left"
        }, {
            position: "right",
            name: "Right"
        }];

        return <ExamplePageBase
            componentName="Popover"
            npmPackageName="@snowcoders/react-popover"
            componentDescription="The popover some element that expands more content from a parent element. Tooltips, dropdowns, selects, menus and more fit into this category. Instead of writing code for each of these individually, we instead wrote a few base helper classes which should allow a developer to customize them into any specific subtype."
            githubUrl="https://github.com/snowcoders/react-popover"
            npmUrl="https://www.npmjs.com/package/@snowcoders/react-popover"
            exampleSrcUrl="https://github.com/snowcoders/react-ui-base/tree/master/src/components/example-page-popover"
            examples={[{
                description: "Popover example showing off target and popper types",
                source: `import "@snowcoders/react-popover/styles.css";
import { Popover, PopperType, TargetType } from '@snowcoders/react-popover';

// Note that wrapperElementType and wrapperElementProps are only needed for React 15
<Popover
    wrapperElementType={"span"}
    wrapperElementProps={{ className: "react-15" }}
    popperContent={"Popper text"}
    popperOptions={{
        placement: "bottom"
    }}
    popperType={"hover"}
    targetContent={"Target text"}
    targetType={"hover"}
/>`,
                example:
                    <div className="sci-react-ui-base-example-page-popover">
                        <div className="left-pane">
                            <div className="options">
                                <div className="style-selector">
                                    Target Type
                        {
                                        targetTypeToName.map((value) => {
                                            return <label key={value.targetType}><input type="radio" name="target" onChange={this.getOnTargetTypeClick(value.targetType)} defaultChecked={this.state.targetType === value.targetType} />{value.name}</label>
                                        })
                                    }
                                </div>
                                <div className="style-selector">
                                    Popper Type
                            {
                                        popperTypeToName.map((value) => {
                                            return <label key={value.popperType}><input type="radio" name="popper" onChange={this.getOnPopperTypeClick(value.popperType)} defaultChecked={this.state.popperType === value.popperType} />{value.name}</label>
                                        })
                                    }
                                </div>
                                <div className="style-selector">
                                    Placement
                            {
                                        positionToName.map((value) => {
                                            return <label key={value.position}><input type="radio" name="position" onChange={this.getOnPositionClick(value.position)} defaultChecked={this.state.position === value.position} />{value.name}</label>
                                        })
                                    }
                                </div>
                            </div>
                            <div className="examples">
                                <p>
                                    Real world examples:
                            </p>
                                <ul>
                                    <li>Hover + Hover - <a href="https://material-ui-next.com/demos/tooltips/" target="_blank">Material UI's Tooltip</a></li>
                                    <li>Click + Click - <a href="https://material-ui-next.com/demos/menus/" target="_blank">Material UI's Menus</a></li>
                                    <li>Click + Blur - <a href="https://jqueryui.com/selectmenu/" target="_blank">jQuery UI's Select menu</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="popover-example">
                            <div className="example">
                                <Popover
                                    wrapperElementType={"span"}
                                    wrapperElementProps={{ className: "react-15" }}
                                    popperContent={"Popper type - " + this.state.popperType}
                                    popperOptions={{
                                        placement: this.state.position
                                    }}
                                    popperType={this.state.popperType}
                                    targetContent={"Target type - " + this.state.targetType}
                                    targetType={this.state.targetType}
                                />
                            </div>
                        </div>
                    </div>
            }]} />;
    }

    getOnTargetTypeClick(targetType: TargetType) {
        return () => {
            this.setState({
                targetType: targetType,
            });
        };
    };

    getOnPopperTypeClick(popperType: PopperType) {
        return () => {
            this.setState({
                popperType: popperType
            });
        };
    };

    getOnPositionClick(position: PopperPositionOptions) {
        return () => {
            this.setState({
                position: position
            });
        };
    };
}