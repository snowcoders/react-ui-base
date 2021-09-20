# Deprecation

After several years of career growth and browser support, I've decided that at this point, none of the components that were originally in this toolkit are needed anymore. The biggest shift has been the deprecation of IE 11. Below you'll find alternatives or suggestions for each component and how to move forward.

## @snowcoders/react-checkbox

Instead of guessing what css properties need to be turned off per browser, there is a new [all: unset](https://caniuse.com/css-all) property which will clear all browser customizations for you. This makes the css that is gained by this toolkit's component obsolete.

## @snowcoders/react-dialog

I highly suggest using the HTML Dialog element with a polyfill. The key thing with our dialog is that it created a "tab zone" around the dialog so when the dialog is open the user tabs only inside the dialog and not back into the main page. Well the new dialog html element solves that problem.

## @snowcoders/react-popover

Though the concept is still useful, popper.js has new hook options that make implementing the scenarios in here much easier. I highly recommend looking at [their documentation](https://popper.js.org/docs/v2/modifiers/) directly

## @snowcoders/react-tabs

Very quickly I found that there are many ways to do tabs and that very few of them it's smart to combine both the tab selection and the content of the tabs into one component. It results in a very inflexible structure that requires a lot of css to be able to position things correctly.

In addition, hooking it up to react-router for deep links within a page can be troublesome.

## @snowcoders/react-unstyled-button

Instead of guessing what css properties need to be turned off per browser, there is a new [all: unset](https://caniuse.com/css-all) property which will clear all browser customizations for you. This makes the css that is gained by this toolkit's component obsolete.

## @snowcoders/react-unstyled-input

Instead of guessing what css properties need to be turned off per browser, there is a new [all: unset](https://caniuse.com/css-all) property which will clear all browser customizations for you. This makes the css that is gained by this toolkit's component obsolete.

## react-popper

The official version of react-popper has reached 1.0.0 and this library is now deprecated and will not receive new updates. Please contribute to and use https://github.com/FezVrasta/react-popper instead!
