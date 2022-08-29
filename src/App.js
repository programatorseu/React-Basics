import React from 'react';
import {render} from 'react-dom';

import Team from "./Team";

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "NBA Team!"),
        React.createElement(Team, {
            name: "Mavericks",
            city: "Dallas", 
            player: "Luka Doncic"
        })
    ]);
};

render(React.createElement(App), document.getElementById("root"));
