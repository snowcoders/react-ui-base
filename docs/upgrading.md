# Upgrading packages
We use (Semver)[https://semver.org/] in a very specific way to help manage upgrades while not completely breaking your system as we fix bugs. For our packages, please read the following:

1. MAJOR version - We completely rewrote the component and you'll likely have to rewrite your css overrides completely
1. MINOR version - We added a div in a place and it has a low risk of breaking but still a risk
1. PATCH version - We changed some javascript code that should have no effect on your styling

Given these scenarios, we highly recommend that you use the minor version (e.g. `~1.2.0`) when depending on our packages