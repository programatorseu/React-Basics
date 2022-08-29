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
### 2.2 JSX
- takes html  and translates into `React.createElement()`
JSX transform by Babel 

we can delete import React - it will be imported automatically for us 
we have been writing XML  - JS was mimic 
mvc into small component / seperation of concerns seperate into componets 
we do not need to name Team.babel.js :). - so we do not need to name .jsx 

```js
const Team = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.city}</h2>
            <h2>{props.player}</h2>
        </div>
    );
};
export default Team;
```
```js
import {render} from 'react-dom';
import Team from "./Team";

const App = () => {
    return(
        <div>
            <Team name="Maverics" city="Dallas" player="Luka Doncic" /> 
            <Team name="Lakes" city="Los Angeles" player="Lebron James" /> 
            <Team name="Nuggets" city="Denver" player="Nikola Jokic" /> 
        </div>

    );
};
render(<App/>, document.getElementById("root"));
```

**Configure ESLint wih JS**
```bash
npm install -D eslint-plugin-import@2.25.4 eslint-plugin-jsx-a11y@6.5.1 eslint-plugin-react@7.28.0
```
* import allow to run eslint across files , react allow eslint to understand more features 

* a11y - basic accessibility (make sure that images are not buttons for example)

* disable 2 rules inside eslint
    * react in jsx turn off -problem with leaving empty space without import 
    * prop-types --> making sure that right type is assigned - also turn off
* another option is to add to eslin react version detection :