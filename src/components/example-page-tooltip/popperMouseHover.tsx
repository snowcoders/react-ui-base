import * as React from 'react';

import { IPopperProps, Popper, Arrow } from '@snowcoders/react-popper';
import PopperJS from 'popper.js';

import * as classnames from "classnames";

export interface PopperMouseHoverProps extends PopperJS.PopperOptions {
    className?: string,
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
        let { children, onHoverChange, className, ...popperProps } = this.props;
        return <Popper {...popperProps} componentFactory={(popperChildProps) => {
            return [
                <span
                    key="content"
                    {...popperChildProps}
                    className={className}
                    onMouseOver={() => { this.onPopperHover(true) }}
                    onMouseOut={() => { this.onPopperHover(false) }}>
                    {children}
                    <Arrow
                        key="arrow"
                        componentFactory={(arrowProps) => (
                            <span
                                {...arrowProps}
                                className="popper__arrow"
                                onMouseOver={() => { this.onArrowHover(true) }}
                                onMouseOut={() => { this.onArrowHover(false) }}
                            />
                        )} />
                </span>
            ];
        }} />;
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
