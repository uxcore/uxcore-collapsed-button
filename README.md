## uxcore-collapsed-button

React collapsed button

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url] 
[![NPM downloads][downloads-image]][npm-url]

[![Sauce Test Status][sauce-image]][sauce-url]

[npm-image]: http://img.shields.io/npm/v/uxcore-collapsed-button.svg?style=flat-square
[npm-url]: http://npmjs.org/package/uxcore-collapsed-button
[travis-image]: https://img.shields.io/travis/uxcore/uxcore-collapsed-button.svg?style=flat-square
[travis-url]: https://travis-ci.org/uxcore/uxcore-collapsed-button
[coveralls-image]: https://img.shields.io/coveralls/uxcore/uxcore-collapsed-button.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/uxcore/uxcore-collapsed-button?branch=master
[dep-image]: http://img.shields.io/david/uxcore/uxcore-collapsed-button.svg?style=flat-square
[dep-url]: https://david-dm.org/uxcore/uxcore-collapsed-button
[devdep-image]: http://img.shields.io/david/dev/uxcore/uxcore-collapsed-button.svg?style=flat-square
[devdep-url]: https://david-dm.org/uxcore/uxcore-collapsed-button#info=devDependencies
[downloads-image]: https://img.shields.io/npm/dm/uxcore-collapsed-button.svg
[sauce-image]: https://saucelabs.com/browser-matrix/uxcore-collapsed-button.svg
[sauce-url]: https://saucelabs.com/u/uxcore-collapsed-button


### Development

```sh
git clone https://github.com/uxcore/uxcore-collapsed-button
cd uxcore-collapsed-button
npm install
npm run server
```

if you'd like to save your install time，you can use uxcore-tools globally.

```sh
npm install uxcore-tools -g
git clone https://github.com/uxcore/uxcore-collapsed-button
cd uxcore-collapsed-button
npm install
npm run dep
npm run start
```

### Test Case

```sh
npm run test
```

### Coverage

```sh
npm run coverage
```

## Demo

http://uxcore.github.io/components/collapsed-button

## Contribute

Yes please! See the [CONTRIBUTING](https://github.com/uxcore/uxcore/blob/master/CONTRIBUTING.md) for details.

## API

## Props

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
|type|string|-|''|触发下拉的元素的类型，默认是文字，‘button’是按钮|
|onClick|function|-|-|CollapsedButton.Item 的点击回调|


## 使用方法

```

import CollapsedButton from 'uxcore-collapsed-button';

handleClick() {}

render() {
  return (
    <CollapsedButton type="button">
      <CollapsedButton.Item onClick={this.handleClick.bind(this)}>
        按钮一
      </CollapsedButton.Item>
      <CollapsedButton.Item onClick={this.handleClick.bind(this)}>
        按钮二
      </CollapsedButton.Item>
      <CollapsedButton.Item>
        按钮三
      </CollapsedButton.Item>
    </CollapsedButton>
  );
}

```
