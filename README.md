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

If you're using the plugin, you probably only want it in production. Therefore,

```js
const {plugin: SvgstorePlugin} = require('svgstore-plugin-loader');

exports.plugins = [new SvgstorePlugin()];
```
