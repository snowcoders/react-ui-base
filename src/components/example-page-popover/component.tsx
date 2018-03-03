import * as React from 'react';

import { Manager, Target, Popper, Arrow } from '@snowcoders/react-popper';

import "@snowcoders/react-popover/styles.css";
import { Popover, PopperType, TargetType } from '@snowcoders/react-popover';

import { ExampleComponentBase } from "../example-component-base";
import { ExamplePageBase } from '../example-page-base';

import * as classnames from "classnames";

export interface IExamplePagePopoverProps {
}

export interface IExamplePagePopoverState {
    targetType: TargetType,
    popperType: PopperType,
}

export class ExamplePagePopover extends React.Component<IExamplePagePopoverProps, IExamplePagePopoverState> {
    constructor(props: IExamplePagePopoverProps) {
        super(props);

        this.state = {
            targetType: "hover",
            popperType: "hover"
        };
    }

    render() {
        let popperTypeToName: { popperType: PopperType, name: string }[] = [
            {
                popperType: "blur",
                name: "Blur"
            },
            {
                popperType: "click",
                name: "Click"
            }, {
                popperType: "hover",
                name: "Hover"
            }];
        let targetTypeToName: { targetType: TargetType, name: string }[] = [
            {
                targetType: "click",
                name: "Click"
            }, {
                targetType: "hover",
                name: "Hover"
            }];

        return <ExamplePageBase
            componentName="Popover"
            npmPackageName="@snowcoders/react-popover"
            componentDescription="The popover some element that expands more content from a parent element. Tooltips, dropdowns, selects, menus and more fit into this category. Instead of writing code for each of these individually, we instead wrote a few base helper classes which should allow a developer to customize them into any specific subtype."
            faq={[<span>If your arrow is showing up in the upper left hand corner, please make sure you are installing popper.js version <code>1.13.0-next.1</code> or higher. We require the <code>positionFixed</code> property to be available.</span>]}
            githubUrl="https://github.com/snowcoders/react-popover"
            npmUrl="https://www.npmjs.com/package/@snowcoders/react-popover"
            exampleSrcUrl="https://github.com/snowcoders/react-ui-base/tree/master/src/components/example-page-popover"
            examples={[{
                description: "A few different popover examples",
                example:
                    <div className="sci-react-ui-base-example-page-popover">
                        <div className="styleSelector">
                            Target Type
                        {
                                targetTypeToName.map((value) => {
                                    return <label key={value.targetType}><input type="radio" name="target" onChange={this.getOnTargetTypeClick(value.targetType)} defaultChecked={this.state.targetType === value.targetType} />{value.name}</label>
                                })
                            }
                        </div>
                        <div className="styleSelector">
                            Popper Type
                            {
                                popperTypeToName.map((value) => {
                                    return <label key={value.popperType}><input type="radio" name="popper" onChange={this.getOnPopperTypeClick(value.popperType)} defaultChecked={this.state.popperType === value.popperType} />{value.name}</label>
                                })
                            }
                        </div>
                        <div className="popover-example">
                            <div className="example">
                                <Popover
                                    popperContent={"Popper type - " + this.state.popperType}
                                    popperOptions={{
                                        placement: "right"
                                    }}
                                    popperType={this.state.popperType}
                                    targetContent={"Target type - " + this.state.targetType}
                                    targetType={this.state.targetType}
                                />
                            </div>
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
            }]} />;
    }

    getOnTargetTypeClick(targetType: TargetType) {
        return () => {
            this.setState({
                targetType: targetType
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
}