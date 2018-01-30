import * as React from 'react';

import { Manager, Target, Popper, Arrow } from '@snowcoders/react-popper';

import "@snowcoders/react-popover/styles.css";
import { TargetHover, TargetClick, PopperBlur, PopperClick, PopperHover } from '@snowcoders/react-popover';

import { ExampleComponentBase } from "../example-component-base";
import { ExamplePageBase } from '../example-page-base';

import * as classnames from "classnames";

export type AvailableClassNames = "hover" | "hard-dismiss" | "soft-dismiss";

export interface IExamplePagePopoverProps {
}

export interface IExamplePagePopoverState {
    classNameToApply: AvailableClassNames;
    isHoveringPopover: boolean;
    isHoveringTarget: boolean;
    isHardDismissOpen: boolean;
    isSoftDismissOpen: boolean;
}

export class ExamplePagePopover extends React.Component<IExamplePagePopoverProps, IExamplePagePopoverState> {
    constructor(props: IExamplePagePopoverProps) {
        super(props);

        this.state = {
            classNameToApply: "hover",
            isHoveringPopover: false,
            isHoveringTarget: false,
            isHardDismissOpen: false,
            isSoftDismissOpen: false
        };
    }

    render() {
        let classNameToName: { className: AvailableClassNames, name: string }[] = [{
            className: "hover",
            name: "Hover example"
        },
        {
            className: "hard-dismiss",
            name: "Hard dismiss example"
        },
        {
            className: "soft-dismiss",
            name: "Soft dismiss example"
        }];

        return <ExamplePageBase
            componentName="Popover"
            npmPackageName="@snowcoders/react-popover"
            componentDescription="The popover some element that expands more content from a parent element. Tooltips, dropdowns, selects, menus and more fit into this category. Instead of writing code for each of these individually, we instead wrote a few base helper classes which should allow a developer to customize them into any specific subtype."
            githubUrl="https://github.com/snowcoders/react-popover"
            npmUrl="https://www.npmjs.com/package/@snowcoders/react-popover"
            exampleSrcUrl="https://github.com/snowcoders/react-ui-base/tree/master/src/components/example-page-popover"
            examples={[{
                description: "A few different popover examples",
                source: "import \"@snowcoders/react-popover/styles.css\";\nimport { Manager, Arrow } from '@snowcoders/react-popper';\nimport { TargetHover, TargetClick, PopperBlur, PopperClick, PopperHover } from '@snowcoders/react-popover';\n\n",
                example:
                    <div className="sci-react-ui-base-example-page-popover">
                        <div className="styleSelector">
                            {
                                classNameToName.map((value) => {
                                    return <label key={value.className}><input type="radio" name="style" onChange={this.getOnClick(value.className)} defaultChecked={this.state.classNameToApply === value.className} />{value.name}</label>
                                })
                            }
                        </div>
                        <div className="popover-example">
                            <Manager>
                                <div className={classnames("container", "mouse-over", { visible: this.state.classNameToApply === "hover" })}>
                                    <div className="example">
                                        <span>The hover example uses a</span>
                                        {" "}
                                        <TargetHover
                                            className="target"
                                            onHoverChange={(isHovering: boolean) => {
                                                this.setState({ isHoveringTarget: isHovering })
                                            }}>
                                            TargetHover
                                    </TargetHover>
                                        <PopperHover
                                            positionFixed={true}
                                            placement="right"
                                            className={classnames("popper", { visible: this.state.isHoveringTarget || this.state.isHoveringPopover })}
                                            onHoverChange={(isHovering: boolean) => { this.setState({ isHoveringPopover: isHovering }) }}
                                        >
                                            I'm <button onClick={() => { alert("hi"); }}>the</button> popover
                                    </PopperHover>
                                        {" "}
                                        <span>along with a PopoverHover.</span>
                                    </div>
                                    <p>The popover will dismiss when the mouse is hovering on neither the Target Box or the popover</p>
                                    <p>
                                        Examples of this style:
                                        <ul>
                                            <li><a href="https://material-ui-next.com/demos/tooltips/" target="_blank">Material UI's Tooltip</a></li>
                                        </ul>
                                    </p>
                                </div>
                            </Manager>
                            <Manager>
                                <div className={classnames("container", "hard-dismiss", { visible: this.state.classNameToApply === "hard-dismiss" })}>
                                    <div className="example">
                                        <span>The hard dismiss uses a</span>
                                        {" "}
                                        <TargetClick
                                            className="target"
                                            onClick={() => {
                                                this.setState({ isHardDismissOpen: true })
                                            }}>
                                            TargetClick
                                    </TargetClick>
                                        <PopperClick
                                            positionFixed={true}
                                            placement="right"
                                            className={classnames("popper", { visible: this.state.isHardDismissOpen })}
                                            onDismiss={() => { this.setState({ isHardDismissOpen: false }) }}
                                        >
                                            I'm <button onClick={() => { alert("hi"); }}>the</button> popover
                                    </PopperClick>
                                        {" "}
                                        <span> along with a PopoverClick.</span>
                                    </div>
                                    <p>The PopoverClick requires the user to explicitly click on the background to dismiss the popover.</p>
                                    <p>
                                        Examples of this style:
                                        <ul>
                                            <li><a href="https://material-ui-next.com/demos/menus/" target="_blank">Material UI's Menus</a></li>
                                        </ul>
                                    </p>
                                </div>
                            </Manager>
                            <Manager>
                                <div className={classnames("container", "soft-dismiss", { visible: this.state.classNameToApply === "soft-dismiss" })}>
                                    <div className="example">
                                        <span>The soft dismiss uses a</span>
                                        {" "}
                                        <TargetClick
                                            className="target"
                                            onClick={() => {
                                                this.setState({ isSoftDismissOpen: true })
                                            }}>
                                            TargetClick
                                    </TargetClick>
                                        <PopperBlur
                                            positionFixed={true}
                                            placement="right"
                                            className={classnames("popper", { visible: this.state.isSoftDismissOpen })}
                                            onDismiss={() => { this.setState({ isSoftDismissOpen: false }) }}
                                        >
                                            I'm <button onClick={() => { alert("hi"); }}>the</button> popover
                                    </PopperBlur>
                                        {" "}
                                        <span> along with a PopoverBlur.</span>
                                    </div>
                                    <p>The PopoverBlur requires the user to click on the background to dismiss the popover but unlike the hard dismiss, the click will be propagated.</p>
                                    <p>
                                        Examples of this style:
                                        <ul>
                                            <li><a href="https://jqueryui.com/selectmenu/" target="_blank">jQuery UI's Select menu</a></li>
                                        </ul>
                                    </p>
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