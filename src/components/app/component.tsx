import * as React from 'react';

import { HashRouter, Link, Switch, Route } from 'react-router-dom';

import { Home } from "../home";
import { Usage } from "../usage";
import { Styling } from "../styling";
import { ExamplePageUnstyledInput } from "../example-page-unstyled-input";
import { ExamplePageUnstyledButton } from "../example-page-unstyled-button";
import { ExamplePagePopover } from '../example-page-popover';
import { ExamplePageTabs } from '../example-page-tabs';
import { ExamplePageDialog } from '../example-page-dialog';
import { ExamplePageCheckbox } from '../example-page-checkbox';

export interface IAppProps {
}

export interface IAppState {
}

export class App extends React.Component<IAppProps, IAppState> {
    render() {
        let documentationLinkConfig = [
            {
                name: "Usage",
                url: "/usage",
                component: Usage
            },
            {
                name: "Styling",
                url: "/styling",
                component: Styling
            }
        ];
        let componentLinkConfig = [
            {
                name: "Checkbox",
                url: "/checkbox",
                component: ExamplePageCheckbox
            },
            {
                name: "Dialog",
                url: "/dialog",
                component: ExamplePageDialog
            },
            {
                name: "Tabs",
                url: "/tabs",
                component: ExamplePageTabs
            },
            {
                name: "Popover",
                url: "/popover",
                component: ExamplePagePopover
            },
            {
                name: "Unstyled Button",
                url: "/unstyled-button",
                component: ExamplePageUnstyledButton
            },
            {
                name: "Unstyled Input",
                url: "/unstyled-input",
                component: ExamplePageUnstyledInput
            },
        ];

        // Sort them just in case we were idiots and cant sort things
        componentLinkConfig.sort((a, b) => {
            return a.url.localeCompare(b.url);
        });

        return (
            <HashRouter>
                <div className="sci-react-ui-base">
                    <div className="header">
                        <div className="app-title">
                            <Link to="/">React UI Base</Link>
                        </div>
                        <div className="links">
                            <a href="https://github.com/snowcoders/react-ui-base" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 16 16" width="32" height="32" version="1.1"><path fillRule="evenodd" d="M 8 0 C 3.58 0 0 3.58 0 8 c 0 3.54 2.29 6.53 5.47 7.59 c 0.4 0.07 0.55 -0.17 0.55 -0.38 c 0 -0.19 -0.01 -0.82 -0.01 -1.49 c -2.01 0.37 -2.53 -0.49 -2.69 -0.94 c -0.09 -0.23 -0.48 -0.94 -0.82 -1.13 c -0.28 -0.15 -0.68 -0.52 -0.01 -0.53 c 0.63 -0.01 1.08 0.58 1.23 0.82 c 0.72 1.21 1.87 0.87 2.33 0.66 c 0.07 -0.52 0.28 -0.87 0.51 -1.07 c -1.78 -0.2 -3.64 -0.89 -3.64 -3.95 c 0 -0.87 0.31 -1.59 0.82 -2.15 c -0.08 -0.2 -0.36 -1.02 0.08 -2.12 c 0 0 0.67 -0.21 2.2 0.82 c 0.64 -0.18 1.32 -0.27 2 -0.27 c 0.68 0 1.36 0.09 2 0.27 c 1.53 -1.04 2.2 -0.82 2.2 -0.82 c 0.44 1.1 0.16 1.92 0.08 2.12 c 0.51 0.56 0.82 1.27 0.82 2.15 c 0 3.07 -1.87 3.75 -3.65 3.95 c 0.29 0.25 0.54 0.73 0.54 1.48 c 0 1.07 -0.01 1.93 -0.01 2.2 c 0 0.21 0.15 0.46 0.55 0.38 A 8.013 8.013 0 0 0 16 8 c 0 -4.42 -3.58 -8 -8 -8 Z" /></svg>
                            </a>
                        </div>
                    </div>
                    <div className="page">
                        <div className="navigation">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>
                                    <span>Documentation</span>
                                    <ul>
                                        {
                                            documentationLinkConfig.map((value) => {
                                                return <li key={value.name}><Link to={value.url}>{value.name}</Link></li>;
                                            })
                                        }
                                    </ul>
                                </li>
                                <li>
                                    <span>Components</span>
                                    <ul>
                                        {
                                            componentLinkConfig.map((value) => {
                                                return <li key={value.name}><Link to={value.url}>{value.name}</Link></li>;
                                            })
                                        }
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="content">
                            <Switch>
                                {
                                    documentationLinkConfig.map((value) => {
                                        return <Route key={value.name} exact path={value.url} component={value.component} />;
                                    }).concat(
                                        componentLinkConfig.map((value) => {
                                            return <Route key={value.name} exact path={value.url} component={value.component} />;
                                        }))
                                }
                                <Route path='*' component={Home} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </HashRouter >
        );
    }
}