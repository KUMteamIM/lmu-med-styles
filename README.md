# Lmu-Styles

Provides CSS in line with the LMU Klinikum corporate identity.
Automatically styles buttons, forms, headings and tables on a page where the styles are
embedded and the body has the class "lmu-klinikum" applied to it.

## Usage

1. Add the package to your project:

```
npm install -d KUMteamIM/lmu-styles.git
```

2. Import css from the module's dist folder:

```
@import 'lmu-styles/dist/lmu.css'
```

or in a project running with webpack, add this to your entry JS:

```
import 'lmu-styles/dist/lmu.css'
```

3. Apply the required class "lmu-klinikum" to the html's body:

```html
<body class="lmu-klinikum"></body>
```

4. Profit

### Available classes for styling

Given the class `lmu-klinikum` is applied to the body, these HTML tags are automatically styled according to the LMU Klinikum CI:

```css
table > tbody > tr > th
table > tbody > tr > td
form > input
button
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

...then commit and push. At the moment (Dec 2021), the master branch is inferred directly and no versioning is in place.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/KUMteamIM/lmu-styles.

## License

The project is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
