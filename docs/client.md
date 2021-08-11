<!-- BEGIN title -->

# CLIENT

<!-- END title -->

<!-- BEGIN TREE -->

![dependency graph](./client.svg)

<!-- END TREE -->

<!-- BEGIN TOC -->

- data
  - [state.js](#clientdatastatejs)
- public
- src
  - api-calls
    - [hello.js](#clientsrcapi-callshellojs)
  - components
    - layout
      - [footer.js](#clientsrccomponentslayoutfooterjs)
      - [navbar.js](#clientsrccomponentslayoutnavbarjs)
      - [page.js](#clientsrccomponentslayoutpagejs)
    - pages
      - home
        - [index.js](#clientsrccomponentspageshomeindexjs)
      - questions
        - [index.js](#clientsrccomponentspagesquestionsindexjs)
      - quiz
        - [index.js](#clientsrccomponentspagesquizindexjs)
      - [four-oh-four.js](#clientsrccomponentspagesfour-oh-fourjs)
    - shared
      - [input-greeting.js](#clientsrccomponentssharedinput-greetingjs)
  - handlers
    - [change-greeting.js](#clientsrchandlerschange-greetingjs)
  - init
    - [index.js](#clientsrcinitindexjs)
    - [router.js](#clientsrcinitrouterjs)
    - [state.js](#clientsrcinitstatejs)
  - logic
    - [reverse.js](#clientsrclogicreversejs)
  - [config.js](#clientsrcconfigjs)
  - [routes.js](#clientsrcroutesjs)
- styles

---

<!-- END TOC -->

---

<!-- BEGIN DOCS -->

# /data

<details><summary><a href="../../client/data/state.js" id="clientdatastatejs">../client/data/state.js</a></summary>

</details>

---

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

### /layout

<details><summary><a href="../../client/src/components/layout/footer.js" id="clientsrccomponentslayoutfooterjs">../client/src/components/layout/footer.js</a></summary>

<a name="footer"></a>

## footer ⇒ <code>HTMLDivElement</code>

The shared footer.

**Returns**: <code>HTMLDivElement</code> - A rendered footer element.

</details>

<details><summary><a href="../../client/src/components/layout/navbar.js" id="clientsrccomponentslayoutnavbarjs">../client/src/components/layout/navbar.js</a></summary>

<a name="navbar"></a>

## navbar ⇒ <code>HTMLDivElement</code>

The shared navbar.

**Returns**: <code>HTMLDivElement</code> - A rendered nav bar element.

| Param  | Type                | Description                          |
| ------ | ------------------- | ------------------------------------ |
| routes | <code>object</code> | A routes object, see /src/routes.js. |

</details>

<details><summary><a href="../../client/src/components/layout/page.js" id="clientsrccomponentslayoutpagejs">../client/src/components/layout/page.js</a></summary>

<a name="page"></a>

## page ⇒ <code>HTMLDivElement</code>

The page layout component.

**Returns**: <code>HTMLDivElement</code> - A rendered page element.  
**Throws**:

- <code>TypeError</code> When the bodyComponent is not a function or DOM element.

| Param         | Type                                              | Description                               |
| ------------- | ------------------------------------------------- | ----------------------------------------- |
| bodyComponent | <code>function</code> \| <code>HTMLElement</code> | The body for the newly rendered page.     |
| routes        | <code>object</code>                               | The application's routes, for the navbar. |

</details>

---

### /pages

#### /home

<details><summary><a href="../../client/src/components/pages/home/index.js" id="clientsrccomponentspageshomeindexjs">../client/src/components/pages/home/index.js</a></summary>

<a name="home"></a>

## home ⇒ <code>HTMLDivElement</code>

The home page.

**Returns**: <code>HTMLDivElement</code> - A rendered home page.

</details>

---

#### /questions

<details><summary><a href="../../client/src/components/pages/questions/index.js" id="clientsrccomponentspagesquestionsindexjs">../client/src/components/pages/questions/index.js</a></summary>

<a name="questions"></a>

## questions ⇒ <code>HTMLDivElement</code>

The questions page.

**Returns**: <code>HTMLDivElement</code> - A rendered questions page.

</details>

---

#### /quiz

<details><summary><a href="../../client/src/components/pages/quiz/index.js" id="clientsrccomponentspagesquizindexjs">../client/src/components/pages/quiz/index.js</a></summary>

<a name="quiz"></a>

## quiz ⇒ <code>HTMLDivElement</code>

The quiz page.

**Returns**: <code>HTMLDivElement</code> - A rendered quiz page.

</details>

---

<details><summary><a href="../../client/src/components/pages/four-oh-four.js" id="clientsrccomponentspagesfour-oh-fourjs">../client/src/components/pages/four-oh-four.js</a></summary>

</details>

---

### /shared

<details><summary><a href="../../client/src/components/shared/input-greeting.js" id="clientsrccomponentssharedinput-greetingjs">../client/src/components/shared/input-greeting.js</a></summary>

</details>

---

---

## /handlers

<details><summary><a href="../../client/src/handlers/change-greeting.js" id="clientsrchandlerschange-greetingjs">../client/src/handlers/change-greeting.js</a></summary>

</details>

---

## /init

<details><summary><a href="../../client/src/init/index.js" id="clientsrcinitindexjs">../client/src/init/index.js</a></summary>

</details>

<details><summary><a href="../../client/src/init/router.js" id="clientsrcinitrouterjs">../client/src/init/router.js</a></summary>

</details>

<details><summary><a href="../../client/src/init/state.js" id="clientsrcinitstatejs">../client/src/init/state.js</a></summary>

</details>

---

## /logic

<details><summary><a href="../../client/src/logic/reverse.js" id="clientsrclogicreversejs">../client/src/logic/reverse.js</a></summary>

<a name="reverse"></a>

## reverse ⇒ <code>string</code>

Reverses a string.

**Returns**: <code>string</code> - The reversed string.

| Param | Type                | Default                               | Description          |
| ----- | ------------------- | ------------------------------------- | -------------------- |
| [str] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | A string to reverse. |

</details>

---

<details><summary><a href="../../client/src/config.js" id="clientsrcconfigjs">../client/src/config.js</a></summary>

</details>

<details><summary><a href="../../client/src/routes.js" id="clientsrcroutesjs">../client/src/routes.js</a></summary>

<a name="module_routes"></a>

## routes

Defines the route URLs, names and callbacks.

</details>

---

# /styles

---

<!-- END DOCS -->
