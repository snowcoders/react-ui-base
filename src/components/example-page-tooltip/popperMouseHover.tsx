import * as React from 'react';

import { IPopperProps, Manager, Target, Popper, Arrow } from 'react-popper';

import * as classnames from "classnames";

export interface PopperMouseHoverProps extends IPopperProps {
    children: React.ReactNode,
    onHoverChange: (isHovering: boolean) => void;
}

export interface PopperMouseHoverState {
}

export class PopperMouseHover extends React.Component<PopperMouseHoverProps, PopperMouseHoverState> {
    render() {
        let { children, onHoverChange, ...popperProps } = this.props;
        return <Popper
            {...popperProps}
            onMouseOver={() => { this.setState({ isHoveringTooltip: true }) }}
            onMouseOut={() => { this.setState({ isHoveringTooltip: false }) }}
        >
            <span>I'm the tooltip</span>
            <Arrow>
                {({ arrowProps }) => (
                    <span {...arrowProps} className="popper__arrow" onMouseOver={() => { this.setState({ isHoveringTooltip: true }) }} onMouseOut={() => { this.setState({ isHoveringTooltip: false }) }} />
                )}</Arrow>
        </Popper>;
    }
}
