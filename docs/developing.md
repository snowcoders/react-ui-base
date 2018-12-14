# Editing existing components

You'll need two repositories

1. The component you want to edit
1. This repository to view your changes

Using react-unstyled-button as an example, the following steps show you how to link, edit and contribute changes

1. Clone the two repositories
   1. `git clone https://github.com/snowcoders/react-ui-base`
   1. `git clone https://github.com/snowcoders/react-unstyled-button`
2. Setup react-ui-base to use your local version of react-unstyled-button
   1. `cd react-ui-base`
   1. `npm install`
   1. `npm link ..\react-unstyled-button`
3. Run the http server
   1. `npm run start`
4. Make your changes to react-ui-base
   1. Open a new terminal window
   1. `cd ..\react-unstyled-button`
   1. Make your edits
   1. npm run build

At this point, the http server should detect the files getting rebuilt and refresh the page

# Creating new components

Everything is effectively the same but obviously you don't have a component repository to clone. Instead of cloning an existing repository, just create a new folder for your component. You should still be able to npm link it without it being a git repository; just as long as it has a package.json.

# Other interesting pages

- [Contributing](./contributing.md)
- [Developing](./developing.md)
- [Overriding our styles](./overrides.md)
- [Upgrading our packages](./upgrading.md)
