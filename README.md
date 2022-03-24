# LMU Klinikum Styles

Provides CSS in line with the LMU Klinikum corporate identity.
Automatically styles buttons, forms, headings and tables on a page where the styles are
embedded and the body has the class "lmu-klinikum" applied to it.

## Usage

1. Add the package to your project:

```
npm install -d @lmu-med/styles
```

2. Import css from the module's dist folder:

```html
<link href="node_modules/@lmu-med/styles/dist/lmu.css" rel="stylesheet" />
```

Or, when using a build tool like webpack:

```javascript
// add to your entry JS:
import "@lmu-med/styles/dist/lmu.css";
```

Syntax for SCSS or SASS:

```css
@import "@lmu-med/styles/dist/lmu.css";
```

3. Apply the required class "lmu-klinikum" to the html's body:

```html
<body class="lmu-klinikum"></body>
```

4. Profit

### Available classes for styling

The minute you include the stylesheet in your project, these elements are automatically styled in accordance with the LMU Klinikum CI:

```css
form > input
button
```

Additionally, by adding the class `lmu-klinikum` to the body tag, these elements are styled, too:

```css
table > tbody > tr > th
table > tbody > tr > td
h1, h2, h3, h4, h5, h6, p
ul, li
```

For styling of buttons you have class definitions for size and colour available:

```css
/* Size classes */
button-lg button-md button-sm

/* Colour classes */
grassgreen orange gold sel-red sel-light-gray sel-gray sel-dark-gray sel-distinct

/* Contoured colors */
grassgreen-invers orange-invers gold-invers sel-red-invers sel-light-gray-invers sel-gray-invers sel-dark-gray-invers sel-distinct-invers
```

For more info and examples, follow the instructions at "Development"

### Adding Roboto font-family

To add Roboto to your project, use [FontSource](https://www.fontsource.org/)

```
npm install @fontsource/roboto
```

In your application.js or css:

```
import "@fontsource/roboto";

body { font-family: 'Roboto' }
```

## Development

Checkout this project and run

```
npm i
```

To test your package run:

```
npm start
```

This starts a webserver at localhost:8080 showing examples for all the elements that are being styled by this module.

## Releasing

To compile a release, run:

```
npm run compile
```

...then commit and push.

## Publishing

To publish a new release, login as user `lmu-med-wad` with this command:

    npm login

Finally, to publish the new package to NPM, run this:

    npm publish

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/KUMteamIM/lmu-med-styles.

## License

The project is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
