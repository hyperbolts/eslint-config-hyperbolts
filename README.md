# HyperBolts ESLint Config
**Part of the [HyperBolts](https://hyperbolts.io) family, developed by [Pace IT](https://www.paceit.co.uk). Contact us for bespoke development, consultancy and commercial support options.**

**Looking for a new role working with cutting edge tools and technologies? [We're hiring!](https://www.paceit.co.uk/contact/developer-jobs)**

## Summary
ESLint sharable config used by HyperBolts projects.

## Installation
Install the packages globally:

```
npm install -g eslint eslint-plugin-react eslint-config-hyperbolts
```

Create a file named `.eslintrc` at the root of your project:

```
{
  "root": true,
  "extends": "hyperbolts"
}
```

Create a file named `.eslintignore` to ingore files and folders:

```
dist/**
node_modules/**
```

## Usage
Lint directory (recursive):

```
eslint --ext .js --ext .jsx .
```

Lint a singular file:

```
eslint file.js
```

## Change Log
This project adheres to [Semantic Versioning](http://semver.org/). Every release, along with the migration instructions, is documented on the Github [Releases](https://github.com/hyperbolts/eslint-config-hyperbolts/releases) page.

## License
The MIT License (MIT)

Copyright © 2015-present Pace IT Systems Ltd

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
