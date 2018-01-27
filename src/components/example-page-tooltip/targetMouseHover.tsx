import * as React from 'react';

import { Manager, Target, Popper, Arrow } from '@snowcoders/react-popper';

import * as classnames from "classnames";

export interface TargetMouseHoverProps {
    children: React.ReactNode,
    onHoverChange: (isHovering: boolean) => void;
}

export interface TargetMouseHoverState {
}

export class TargetMouseHover extends React.Component<TargetMouseHoverProps, TargetMouseHoverState> {

    constructor(props: TargetMouseHoverProps) {
        super(props);
        this.validateProps(props);
    }

    componentWillUpdate(props: Readonly<TargetMouseHoverProps>) {
        this.validateProps(props);
    }

    render() {
        let child = React.Children.toArray(this.props.children)[0];
        if (React.isValidElement(child)) {
            let child_reactElement = child as React.ReactElement<any>;
            return <Target componentFactory={(targetProps) => (
                React.cloneElement(child_reactElement, {
                    ...targetProps,
                    onMouseOver: () => { this.props.onHoverChange(true) },
                    onMouseOut: () => { this.props.onHoverChange(false) }
                })
            )} />
        }
        else {
            return <Target componentFactory={(targetProps) => (
                <span
                    {...targetProps}
                    onMouseOver={() => { this.props.onHoverChange(true) }}
                    onMouseOut={() => { this.props.onHoverChange(false) }}>
                    {child}
                </span>
            )} />;
        }
    }

    private validateProps(props: TargetMouseHoverProps) {
        if (props.children == null) {
            throw new Error("TargetMouseHover: Expected children to be defined and have one element");
        }
        if (React.Children.count(props.children) !== 1) {
            throw new Error("TargetMouseHover: Expected only one child to be defined... only using the first child");
        }
    }
}