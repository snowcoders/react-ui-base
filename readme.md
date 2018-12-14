# React UI Base

React UI base is just that... the base pieces of UI that you need to build out a custom UI components library of your own.

The concept for this library came from a website http://www.csszengarden.com/. The basic idea is that if you treat React components like a Model (HTML), View (CSS) and Controller (JavaScript) this simplifies building out UI libraries considerably. Because honestly, most of our UI component libraries pretty much have the same Model and Controller, we are really just customizing the View.

That's what this library is, a collection of shared Models and Controllers, all driven by React, with template css so that you can implement your own views.

# Demo

See our demo website at [https://snowcoders.github.io/react-ui-base/](https://snowcoders.github.io/react-ui-base/)

# But how?

All of our components have two outputs

- @snowcoders/{componentName} - The React.js component
- @snowcoders/{componentName}/styles.css - The base css styling

So let's say you wish to customize our react-unstyled-button component

If you only want the core logic and will style the whole thing yourself

```
import { UnstyledButton } from "@snowcoders/react-unstyled-button";
```

If you want the logic and the button to look unstyled

```
import "@snowcoders/react-unstyled-button/styles.css";
import { UnstyledButton } from "@snowcoders/react-unstyled-button";
```

If you want to further customize the component

```
import "@snowcoders/react-unstyled-button/styles.css";
import "your-custom-styles.css";
import { UnstyledButton } from "@snowcoders/react-unstyled-button";
```

For the latter case, we highly suggest wrapping it into a component in your own system instead of having multiple duplicate import statements. More information about overrides can be found in the [overrides documentation](./docs/overrides.md).

This repository is full of working examples, feel free to wander and ask questions through Github Issues!

# Recommendations

We don't recommend pulling in this bigger library directly. We don't upgrade the npm packages in here as often as we should and you'll likely be out of date faster. The better option is to depend on the components directly. Not only will you put less strain on your tree-shaking algorithm, it's much easier to know what dependencies are getting upgraded and how.

# Other interesting pages

- [Contributing](./docs/contributing.md)
- [Developing](./docs/developing.md)
- [Overriding our styles](./docs/overrides.md)
- [Upgrading our packages](./docs/upgrading.md)
