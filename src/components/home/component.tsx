import * as React from 'react';

export class Home extends React.Component {
    render() {
        return (
            <div className="sci-react-ui-base-home">
                <h1 className="title">React UI Base</h1>
                <p className="tag-line">The building blocks of UI libraries</p>
                <div className="introduction">
                    <p>Looking around the internet, whenever you come across a large company, it's very obvious that their website has a clear design language that someone carefully and painstakingly thought about. After everything is designed, developers have to work at getting not only the styling but the logic of these components to work correctly. Making sure the spinner is correctly centered, date pickers all have the proper locales, dropdowns all position themselves correctly, etc. What if you didn't have to worry about all this?</p>
                    <p>This library is meant to be a base template to make implementing that design language easier. The goal is to have the shared logic of those base components that are available in almost every library (date pickers, accordions, dropdowns, modal, dialogs, etc) and have them be extensible through CSS alone. This means when your company or organization moves to a completely different design language, all that has to be changed is CSS.</p>
                </div>
                <div className="reasons">
                    <h2>Why use us as the base of your components?</h2>
                    <ul>
                        <li>When we version, we account for both CSS and JavaScript meaning you can customize our classes using specificity</li>
                        <li>We use pure css so customizations are extremely easy</li>
                        <li>Goal of 72 hour responses to all github issues</li>
                    </ul>
                </div>
            </div>
        );
    }
}