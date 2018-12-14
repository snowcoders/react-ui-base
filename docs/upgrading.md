# Upgrading packages

We use (Semver)[https://semver.org/] in a very specific way to help manage upgrades while not completely breaking your system as we fix bugs. For our packages, please read the following:

1. MAJOR version - Javascript nor CSS is backwards compatible... you'll need to rewrite the component
1. MINOR version - Javascript is backwards compatible but CSS is not but it is a very minor change and should take you less than a quarter of a day to upgrade.
1. PATCH version - Javascript and CSS is backwards compatible, so keep moving!

Given these scenarios, we highly recommend that you use the minor version (e.g. `~1.2.0`) when depending on our packages. An easy way to do this is add `save-prefix ~` to any npm install you perform. For example, `npm install @snowcoders/react-button --save-prefix ~`

# Other interesting pages

- [Contributing](./contributing.md)
- [Developing](./developing.md)
- [Overriding our styles](./overrides.md)
- [Upgrading our packages](./upgrading.md)
