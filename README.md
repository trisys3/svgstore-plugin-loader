# svgstore-plugin-loader

A set of tools for running svgstore in webpack

## Install

```npm i svgstore-plugin-loader```

## Usage
The loader is designed to be used after html-loader. For example,

```js
rules: [{
  test: /\.html$/,
  use: {
    loader: 'html-loader',
    loader: 'svgstore-loader',
  },
}]
```

If you're using the plugin, you probably only want it in production. Something like:

```js
const {plugin: SvgstorePlugin} = require('svgstore-plugin-loader');

if(process.env.NODE_ENV) {
  exports.plugins = [new SvgstorePlugin()];
}
```

## Loader Options

None yet.

## Plugin Options

None yet.

## License

[MIT](./LICENSE)
