import * as React from 'react';

import { UnstyledButton as Base } from "./component.base";
import { UnstyledButton as Styled } from "./component.styled";
import { UnstyledButton as Override } from "./component.override";

export class ExampleUnstyledButton extends React.Component {
    render() {
        return (
            <div>
                <h1>Unstyled Button</h1>
                <Base onClick={this.onClick} isBaseStylesDisabled={true}>Button that only has the functionality</Base>
                <Styled onClick={this.onClick}>Button with default styles</Styled>
                <Override onClick={this.onClick} className="override">Button with custom styles added to the default styles</Override>
            </div>
        );
    }

    onClick = () => {
        alert("Button was clicked");
    };
}