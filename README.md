# shortboxed-node
Node SDK for accessing Shortboxed's API

## Installation

```sh
npm install shortboxed-node
```

## Usage

```javascript
const shortboxed = new Shortboxed("YOU_API_KEY");

const response = await shortboxed.comicSearch({
    title: "Amazing Spider-man",
    issueNumber: "1",
    year: 1962,
    publisher: "Marvel Comics"
});

console.log(response.issueId)
```