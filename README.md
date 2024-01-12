[![Push Tests](https://github.com/ShortboxedInc/shortboxed-node/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/ShortboxedInc/shortboxed-node/actions/workflows/test.yml)
[![Push Tests](./coverage/badge.svg?branch=gh-pages)](https://github.com/ShortboxedInc/shortboxed-node/actions/workflows/coverage.yml)

# shortboxed-node
Node SDK for accessing Shortboxed's API.

## Installation

```sh
npm install shortboxed-node
```

## Usage

```javascript
import {Shortboxed} from 'shortboxed-node';

const shortboxed = new Shortboxed("YOUR_API_KEY");

const response = await shortboxed.comicSearch({
    title: "Amazing Spider-man",
    issueNumber: "1",
    year: 1963,
    publisher: "Marvel Comics"
});

console.log(response.issueId)
```