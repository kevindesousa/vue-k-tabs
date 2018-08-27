# vue-k-tabs

[![npm](https://img.shields.io/npm/v/@kevindesousa/vue-k-tabs.svg) ![npm](https://img.shields.io/npm/dm/@kevindesousa/vue-k-tabs.svg)](https://www.npmjs.com/package/@kevindesousa/vue-k-tabs)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

A simple tabs components

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)

## Installation

```bash
$ npm install @kevindesousa/vue-k-tabs
```


## Initialisation

```javascript
import Vue from 'vue'
import KTabs from '@kevindesousa/vue-k-tabs'

Vue.use(KTabs)
```


## Utilisation


```html
     <k-tabs>
        <k-tab name="Tab 1" :tags="[{ content:'102002'}]" :selected="true">tab1</k-tab>
        <k-tab name="Tab 2">tab2</k-tab>
        <k-tab name="Tab 3">tab3</k-tab>
        <k-tab name="Tab 4">tab4</k-tab>
     </k-tabs>
```

## Liens

[Github](https://github.com/kevindesousa/vue-k-tabs)
[NPM Package](https://www.npmjs.com/package/@kevindesousa/vue-k-tabs)

---

## License

[MIT](http://opensource.org/licenses/MIT)
