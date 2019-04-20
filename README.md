# svgstore-plugin-loader

A set of tools for running svgstore in webpack

## Install

```console
npm i svgstore-plugin-loader
```

## Usage

This loader is designed to be used after html-loader, but can be used independently. If replacing html-loader, be sure you only want SVGs in your project. An example with html-loader:

```js
module.exports = {
  module: {
    rules: [{
      test: /\.html$/,
      use: {
        loader: 'html-loader',
        loader: 'svgstore-loader',
      },
    }],
  },
};
```

## Loader Options

None yet.

## License

[MIT](./LICENSE)
