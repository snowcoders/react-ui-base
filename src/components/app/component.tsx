import * as React from 'react';

import { HashRouter, Link, Switch, Route } from 'react-router-dom'

import { Home } from "../home";
import { ExampleUnstyledButton } from "../example-unstyled-button";

export interface IAppProps {
}

export interface IAppState {
}

export class App extends React.Component<IAppProps, IAppState> {
    render() {
        return (
            <HashRouter>
                <div className="sci-react-ui-base">
                    <div>
                        <ul>
                            <li><Link to="/unstyled-button">Unstyled Button</Link></li>
                        </ul>
                    </div>
                    <div>
                        <Switch>
                            <Route exact path='/unstyled-button' component={ExampleUnstyledButton} />
                            <Route path='*' component={Home} />
                        </Switch>
                    </div>
                </div>
            </HashRouter>
        );
    }
}