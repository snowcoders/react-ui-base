import * as React from 'react';
import { CodeHighlighter } from '../code-highlighter';

export class Usage extends React.Component {
    render() {
        return (
            <div className="sci-react-ui-base-usage">
                <h1>Usage</h1>
                <p>When overriding our base styles, we recommend overriding based on specificity. Taking our react-unstyled-button component as an example, the following is the suggested way to override styles</p>
                <CodeHighlighter javascriptSourceCode={`.sci-react-unstyled-button.my-custom-button-class {
    margin: 50px;
}`}></CodeHighlighter>
                <p>Remember that these components are not meant to be a UI library themselves but the core basics to allow you to create your own</p>
                <h1>Versioning</h1>
                <p>We use <a href="https://semver.org/">Semver</a> in a very specific way to help manage upgrades while not completely breaking your system as we fix bugs. For our packages, please read the following:</p>
                <ol>
                    <li>Major version - Javascript nor CSS is backwards compatible... you'll need to rewrite the component</li>
                    <li>Minor version - Javascript is backwards compatible but CSS is not but it is a very minor change and should take you less than a quarter of a day to upgrade.</li>
                    <li>Patch version - Javascript and CSS is backwards compatible, so keep moving!</li>
                </ol>
                <p>Given these scenarios, we highly recommend that you use the minor version (e.g. <code>~1.2.0</code>) when depending on our packages. An easy way to do this is add <code>save-prefix "~"</code> to any npm install you perform. For example, <code>npm install @snowcoders/react-button --save-prefix "~"</code></p>
            </div>
        );
    }
}