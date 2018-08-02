import * as React from 'react';

import { ExampleComponentBase, IExampleComponentBaseProps } from "../example-component-base";

import * as classnames from "classnames";

export interface IExamplePageBaseProps {
    className?: string;
    componentDescription: React.ReactNode;
    componentName: string;
    examples: IExampleComponentBaseProps[];
    exampleSrcUrl: string;
    faq?: React.ReactNode[];
    githubUrl: string;
    npmPackageName: string;
    npmUrl: string;
}

export class ExamplePageBase extends React.Component<IExamplePageBaseProps> {
    render() {
        return (
            <div className={classnames("sci-react-ui-base-example-page-base", this.props.className)}>
                <div className="title">
                    <h1>{this.props.componentName}</h1>
                    <code className="code">npm install --save {this.props.npmPackageName} --save-prefix "~"</code>
                </div>
                <div className="description">
                    <h2>Description</h2>
                    <p>{this.props.componentDescription}</p>
                </div>
                {this.props.faq && <div className="faq">
                    <h2>Frequent questions</h2>
                    {
                        this.props.faq.map((faq, index) => {
                            return <p
                                key={index}>{faq}</p>
                        })
                    }
                </div>
                }
                <div className="examples">
                    <h2>Examples</h2>
                    <p>The source code for these examples can be found <a href={this.props.exampleSrcUrl} target="_blank">here</a></p>
                    {this.props.examples.map((value, index) => {
                        return <ExampleComponentBase
                            key={index}
                            {...value} />;
                    })}
                </div>
                <div className="links-section">
                    <h2>References</h2>
                    <ul className="list">
                        <li><a href={this.props.githubUrl} target="_blank">Github</a></li>
                        <li><a href={this.props.npmUrl} target="_blank">npm</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}