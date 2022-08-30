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

### 2.3 Search Component
State - interactivity 
Hooks are for adding statefulness for UI 

SearchWithin
```js
const SearchWithin = () => {
    const location = "Los Angeles, CA";
    return (
        <div className="search-params">
        <form>
            <label htmlFor="location">
                Location
                <input id="location" value={location} placeholder="Location"></input>
            </label>
            <button>Submit</button>
        </form>
    </div>
    );
};
export default SearchWithin;
```

```js

const App = () => {
    return(
       <SearchWithin /> 
    );
};
```
### 2.4 useState Hook
hook - always start with `use`
import useState from react  in the top 
- destructing value with useState `setMutator`
- call `onChange` on input -> inside call `onChange`
useState hook - we need to call in order 
- do not put in loops and if statements 

onChange inside input - > is not good idea / better call `onSubmit` 
on `form`

React emitates Event object of the browser but it is doing it much more faster

```js
import { useState } from "react";
const SearchWithin = () => {
    const[location, setLocation] = useState("");
    return (
        <div className="search-params">
        <form>
            <label htmlFor="location">
                Location
                <input id="location" value={location} placeholder="Location"
                onChange={(e) => setLocation(e.target.value)}></input>
            </label>
            <button>Submit</button>
        </form>
    </div>
    );
};
export default SearchWithin;
```

### 2.5 Mapping Data 
```bash
npm install -D eslint-plugin-react-hooks@4.3.0
```
```json
{
  "extends": [
    …
    "plugin:react-hooks/recommended",
    …
  ],
  "plugins": […, "react-hooks"],
}
```
map is going to take array and translate into list of React components 

we use map to translate into JSX 

```js
const DIVISIONS = ["Pacific", "Southwest", "NorthWest", "Atlantic", "Central", "Southeast" ];
...
 const[division, setDivision] = useState("");
```



we are going to use 

- onChange 

- onBlur (for screen reader and other similar tools that will not fire onChange event)

```js
            <label htmlFor="division">
                    Division
                    <select
                        id="animal"
                        value={division}
                        onChange={(e) => {
                            setDivision(e.target.value);
               
                        }}
                        onBlur={(e) => {
                            setDivision(e.target.value);
               
                        }}
                        >
                            <option/>
                            {DIVISIONS.map((division) => {
                                return(
                                    <option key={division} value={division}>
                                        {division}
                                    </option>
                                );
                            })}
                            
                    </select>
                </label>
```