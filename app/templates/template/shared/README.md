# <%= name %>

<%= description %>

Please &#9733; this repo if you found it useful &#9733; &#9733; &#9733;

<% if (features && features.length > 0) { %>
## Features
<% for (var feature in features) { %>
* <%= feature %><% } %>
<% } %>
<% if (demo && demo.length > 0) { %>
## Demo

See a [demo](<%= demo %>)
<% } %>
<% if (installation && installation.length > 0) { %>
## Installation

```sh
<%= installation %>
```
<% } %>
<% if (dependencies && dependencies.length > 0) { %>
## Dependencies
<% for (var i in dependencies) { %>
* [<%= dependencies[i].name %>](<%= dependencies[i].url %>)<% } %>
<% } %>

## Usage

[Contribute](<%= repository %>/readme/blob/master/CONTRIBUTING.md) usage docs


## Support

Submit an [issue](https://github.com/<%= githubUsername %>/readme/issues/new)


## Screenshots

[Contribute](<%= repository %>/readme/blob/master/CONTRIBUTING.md) a screenshot


## Contributing

Review the [guidelines for contributing](<%= repository %>/readme/blob/master/CONTRIBUTING.md)


## License

[<%= license %> License](<%= repository %>/readme/blob/master/LICENSE)

[<%= authorName %>](<%= authorUrl %>) &copy; <%= moment().format('YYYY') %>


## Changelog

Review the [changelog](<%= repository %>/readme/blob/master/CHANGELOG.md)


## Credits

* [<%= authorName %>](<%= authorUrl %>) - Author


## Support on Beerpay (actually, I drink coffee)

A ridiculous amount of coffee :coffee: :coffee: :coffee: was consumed in the process of building this project.

[Add some fuel](https://beerpay.io/<%= githubUsername %>/<%= name %>) if you'd like to keep me going!

[![Beerpay](https://beerpay.io/<%= githubUsername %>/<%= name %>/badge.svg?style=beer-square)](https://beerpay.io/<%= githubUsername %>/<%= name %>)  [![Beerpay](https://beerpay.io/<%= githubUsername %>/<%= name %>/make-wish.svg?style=flat-square)](https://beerpay.io/<%= githubUsername %>/<%= name %>?focus=wish)