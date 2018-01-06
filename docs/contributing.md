
# Requesting new components
First and foremost keep in mind that this library is meant to be a base for other UI libraries. Given that, when requesting a component, please provide several examples of other existing UI libraries that have that same component. Great UI libraries to look from would be:
 - [JQuery UI](https://jqueryui.com/)
 - [Google's Material UI](www.material-ui.com/)
 - [Microsoft Office's Fabric UI](https://developer.microsoft.com/en-us/fabric#/components)

When requesting new components, please reference these or other UI libraries that have similar components. This helps see all the different ways people may use the component which helps us build it in a more flexible way.

# Adding new components
Hearing the idea of this library and thinking, "This is awesome! I want to help write new components!", that's awesome! Here is the process for getting into our library:
1. Feel free to write your component in a public repository.
1. After you feel that it's in a pretty solid state, just open an issue and we can review your repository.
1. Once we agree it's in a solid state, we can fork it into our repository and help you create an example page on this site. We will likely start it with the Beta flag first mainly because once it's in the larger scope, there maybe scenarios that we just didn't think of.
1. After a set period of time, we will remove the beta flag!

# Css rules
1. Avoid descendant selectors - Never know what a subcomponent may have the same name as your class
1. Avoid root level classes - They pollute the base class name space. Further, if you have a very flat css structure, it is likely hiding bugs where instead we would rather fail fast and fail big so that someone notices and opens an issue.
1. Do use child selectors - This does mean that our css is tied to our DOM structure. This is on purpose as it's hard to override things if you don't know the structure of it.
1. Do prefix your library - Imagine someone uses your library and someone else's library but neither of you prefixed your button elements. Who's styles win? Safer just to prefix with a short name (we prefixed this library with `sci`)
1. Avoid using browser specific selectors - Our components are meant to be used cross browser, not just for specific and individual browsers
1. Support the latest 2 major versions of an in support browser. These include:
    - Chrome
    - Firefox
    - Safari
    - Edge

# Other interesting pages
