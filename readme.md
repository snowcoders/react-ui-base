# React UI Base
React UI Base is a highly customizable React UI toolkit. The goal of this library is to only have one copy of all the core view model logic for basic components. With the core logic out of the way, developing end user facing libraries that express the voice of your applications becomes faster, easier and less costly to maintain.

# But how?
All of our components have two outputs
 - @snowcoders/{componentName} - The React.js component
 - @snowcoders/{componentName}/styles.css - The default css styling

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

# Recommendations
We don't recommend pulling in this bigger library directly. We don't upgrade the npm packages in here as often as we should and you'll likely be out of date faster. The better option is to depend on the components directly. Not only will you put less strain on your tree-shaking algorithm, it's much easier to know what dependencies are getting upgraded and how.

## Other documents
 - [Contributing](./docs/contributing.md)
 - [Developing](./docs/developing.md)
 - [Overriding our styles](./docs/overrides.md)
 - [Upgrading our packages](./docs/upgrading.md)