import {render} from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from './Details';
import SearchWithin from './SearchWithin';
// import at top
import { StrictMode } from "react";



const App = () => {
    return(
        <StrictMode>
            <BrowserRouter>
                <h1> Adop Me! </h1>
                <Routes>
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/" element={<SearchWithin />} />
                </Routes>
            </BrowserRouter>
      </StrictMode>
    );
};
render(<App/>, document.getElementById("root"));