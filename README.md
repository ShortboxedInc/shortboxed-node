[![Push Tests](https://github.com/ShortboxedInc/shortboxed-node/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/ShortboxedInc/shortboxed-node/actions/workflows/test.yml)
![Coverage](https://raw.githubusercontent.com/ShortboxedInc/shortboxed-node/4750f57098defdcf7867908411aa443b813caf3e/badges.svg)

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