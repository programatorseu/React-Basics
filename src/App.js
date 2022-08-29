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