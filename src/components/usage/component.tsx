import * as React from 'react';

export class Usage extends React.Component {
    render() {
        return (
            <div className="sci-react-ui-base-usage">
                <h1>Usage and versioning</h1>
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