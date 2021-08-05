<!-- BEGIN title -->

# CLIENT

<!-- END title -->

<!-- BEGIN TREE -->

![dependency graph](./client.svg)

<!-- END TREE -->

<!-- BEGIN TOC -->

- public
- src
  - api-calls
    - [hello.js](#clientsrcapi-callshellojs)
  - components
    - [header.js](#clientsrccomponentsheaderjs)
  - handlers
  - init
    - [index.js](#clientsrcinitindexjs)
  - listeners
  - logic
- styles

---

<!-- END TOC -->

---

<!-- BEGIN DOCS -->

# /public

---

# /src

## /api-calls

<details><summary><a href="../../client/src/api-calls/hello.js" id="clientsrcapi-callshellojs">../client/src/api-calls/hello.js</a></summary>

<a name="hello"></a>

## hello ⇒ <code>Promise.&lt;string&gt;</code>

Fetches text from the /api/hello route.

**Returns**: <code>Promise.&lt;string&gt;</code> - - A promise resolving to the /api/hello text.  
**Throws**:

- <code>Error</code> HTTP error! Status: {number}.

</details>

---

## /components

<details><summary><a href="../../client/src/components/header.js" id="clientsrccomponentsheaderjs">../client/src/components/header.js</a></summary>

<a name="header"></a>

## header ⇒ <code>HTMLHeadingElement</code>

Renders some text into a header with class "fancy".

**Returns**: <code>HTMLHeadingElement</code> - A header containing the text.

| Param  | Type                | Default                               | Description         |
| ------ | ------------------- | ------------------------------------- | ------------------- |
| [text] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The text to render. |

</details>

---

## /handlers

---

## /init

<details><summary><a href="../../client/src/init/index.js" id="clientsrcinitindexjs">../client/src/init/index.js</a></summary>

</details>

---

## /listeners

---

## /logic

---

---

# /styles

---

<!-- END DOCS -->
