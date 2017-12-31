import * as React from 'react';

export interface IExampleComponentBaseProps {
    description?: string;
    example: JSX.Element;
    source?: string;
}

export interface IExampleComponentBaseState {
    isCodeShowing: boolean;
}

export class ExampleComponentBase extends React.Component<IExampleComponentBaseProps, IExampleComponentBaseState> {
    constructor(props: IExampleComponentBaseProps) {
        super(props);

        this.state = {
            isCodeShowing: false
        };
    }
    render() {
        return (
            <div className="sci-react-ui-base-example-component-base">
                <div className="header">
                    <div className="description">{this.props.description}</div>
                    {
                        this.props.source &&
                        <button className="toggle" onClick={this.toggleView}>{this.computeToggleButtonName()}</button>}
                </div>
                <div className="visual">
                    {
                        !this.state.isCodeShowing &&
                        this.props.example
                    }
                    {
                        this.state.isCodeShowing &&
                        <pre>
                            <code>
                                {this.props.source}
                            </code>
                        </pre>
                    }
                </div>
            </div>
        );
    }

    private computeToggleButtonName() {
        if (this.state.isCodeShowing) {
            return "Show example";
        } else {
            return "Show code";
        }
    }

    private toggleView = () => {
        this.setState({
            isCodeShowing: !this.state.isCodeShowing
        });
    };
}