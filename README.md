# React

### 1. Install Tools
unpkg allows us to load things from NPM via CDN
we can get from 
react@17.0.2/umd/react.development.js
and react-dom version 

```bash
npm init -y
npm install prettier --save-dev
npm install -D eslint@8.8.0 eslint-config-prettier@8.3.0
npm install parcel --save-dev
npm install react@17.0.2 react-dom@17.0.2 --save-dev
```

create 2 files
.prettierrc
.eslintrc.json

    -> extends : (prettier comes last) - it will shut down any conflicts
    -> parserOptions - what js / type of source(module) / features
    -> env - what environment we are working with ()

```json
{
    "extends": ["eslint:recommended", "prettier"],
    "plugins": [],
    "parserOptions": {
      "ecmaVersion": 2022,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "env": {
      "es6": true,
      "browser": true,
      "node": true
    }
  }
```
create 2 files

.prettierrc
.eslintrc.json

### 2. Core Concepts
#### 2.1 Components

```jsx
import React from "react";

export default function Team({name, city, bestPlayer}) {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, city),
        React.createElement("p", {}, bestPlayer),
    ]);
}
```
or second way of creating component
```jsx
const Team = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.city),
        React.createElement("p", {}, props.player),
    ]);
};

export default Team;
```

inside template file remember about denoting that we work with module syntax
```html
<div id="root"></div>
      </body>
      <script type="module" src="./App.js"></script>
```