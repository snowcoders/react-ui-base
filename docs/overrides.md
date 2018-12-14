# How to override our css

All of our components allow for the `className` and `style` attributes so if you wish to use css, scss, less, glamor, connected styles or whatever the future may hold, you're more than welcome to!

To show how to override styles, we will use [@snowcoders/react-unstyled-button](https://www.npmjs.com/package/@snowcoders/react-unstyled-button) as an example.

The first step is to create a component that wraps the UnstyledButton

```
// File: ./batman-button.ts

import * as react from "React";

import "@snowcoders/react-unstyled-button/styles.css";
import "./batman-button.css"; // <---- Note that these will be your customer styles
import { UnstyledButton } from "@snowcoders/react-unstyled-button";

export class BatmanButton extends React.Component {
    render () {
        return <UnstyledButton className="app-batman-button" onClick={this._onClick}>Who am I?</UnstyledButton>
    }

    _onClick = () => {
        alert("I'm Batman!");
    };
}
```

Now, let's create our custom css file. Let's copy the original UnstyledButton's css file so we maintain it's element structure and delete all the actual properties

```
// File: ./batman-button.css

.sci-react-unstyled-button {

    &:hover {

    }
}

```

Now add your component name for specificity and any custom styles you may want

```
.sci-react-unstyled-button.app-batman-button {
    background-color: black;
    color: yellow;
    border: 1px solid black;

    &:hover {
        border: 1px solid yellow;
    }
}

```

And that's it! You have your first styled element!

A few lessons we learned for scalable css:

- Child selectors are your friend. Descendant selectors become issue filled when you have components nested in components.
- Global classes and descendant selectors (you'll likely have some) should be globally well defined. We found that `{npm-package-name}-{component-name}` though is long, is also very specific and doesn't interfere with other libraries when we imported them

Now your next goal is to keep everything up to date with as little breaking as possible, so head over to [upgrading](./upgrading.md) to learn how to do that.

# Other interesting pages

- [Contributing](./contributing.md)
- [Developing](./developing.md)
- [Overriding our styles](./overrides.md)
- [Upgrading our packages](./upgrading.md)
