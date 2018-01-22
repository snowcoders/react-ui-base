import * as React from 'react';

import { IPopperProps, Popper, Arrow } from 'react-popper';

import * as classnames from "classnames";

export interface PopperMouseHoverProps extends IPopperProps {
    /**
     * If undefined renders a span with the className popper__arrow
     * If null renders nothing
     * If defined renders provided values - TODO
     */
    arrowElement?: React.ReactElement<any>;
    children: React.ReactNode,
    onHoverChange: (isHovering: boolean) => void;
}

export interface PopperMouseHoverState {
    isPopperHovering: boolean;
    isArrowHovering: boolean;
}

export class PopperMouseHover extends React.Component<PopperMouseHoverProps, PopperMouseHoverState> {
    constructor(props: PopperMouseHoverProps) {
        super(props);
        this.state = {
            isPopperHovering: false,
            isArrowHovering: false,
        }
    }
    render() {
        let { arrowElement, children, onHoverChange, ...popperProps } = this.props;
        return <Popper
            {...popperProps}
            onMouseOver={() => { this.onPopperHover(true) }}
            onMouseOut={() => { this.onPopperHover(false) }}
        >
            {children}
            {
                arrowElement === undefined &&
                <Arrow>
                    {({ arrowProps }) => (
                        <span 
                            {...arrowProps} 
                            className="popper__arrow" 
                            onMouseOver={() => { this.onArrowHover(true) }}
                            onMouseOut={() => { this.onArrowHover(false) }}
                        />
                    )}</Arrow>
            }
            {
                arrowElement != null &&
                <Arrow>
                    {({ arrowProps }) => (
                        <span {...arrowProps} className="popper__arrow" />
                    )}</Arrow>
            }
        </Popper>;
    }

    private onPopperHover(isHovering: boolean) {
        if (isHovering === this.state.isPopperHovering) {
            return;
        }

        this.setState({
            isPopperHovering: isHovering
        }, () => {
            this.props.onHoverChange(isHovering);
        });
    }

    private onArrowHover(isHovering: boolean) {
        if (isHovering === this.state.isArrowHovering) {
            return;
        }

        this.setState({
            isArrowHovering: isHovering
        }, () => {
            this.props.onHoverChange(isHovering);
        });
    }
}
