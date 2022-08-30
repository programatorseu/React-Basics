import {render} from 'react-dom';
import Team from "./Team";
import SearchWithin from './SearchWithin';

const App = () => {
    return(
       <SearchWithin /> 
    );
};
render(<App/>, document.getElementById("root"));