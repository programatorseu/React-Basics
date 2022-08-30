import {render, useState} from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from './Details';
import SearchWithin from './SearchWithin';
import ThemeContext from './ThemeContext';
// import at top
import { StrictMode } from "react";



const App = () => {
    const theme = useState("darkblue");
    return(
        <StrictMode>
            <ThemeContext.Provider value={theme}>
            <BrowserRouter>
                <h1> Adop Me! </h1>
                <Routes>
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/" element={<SearchWithin />} />
                </Routes>
            </BrowserRouter>
            </ThemeContext.Provider>
      </StrictMode>
    );
};
render(<App/>, document.getElementById("root"));