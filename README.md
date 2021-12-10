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

or in a rails app, in `application.js`:

```
import 'lmu-styles/dist/lmu.css'
```

3. Apply the required class "lmu-klinikum" to the html's body:

```html
<body class="lmu-klinikum"></body>
```

4. Profit

## Development

Checkout this project and run

```
npm i
```

To test your package run:

```
npm start
```

To compile a release, run:

```
npm run compile
```

...and commit after. At the moment (Dec 2021), the master branch is inferred directly and no versioning is in place.

## Releasing

Run npm version major, minor or patch to bump the version number in package.json. Then tag with the new version number and push the new tag.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/KUMteamIM/lmu-styles.

## License

The project is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
