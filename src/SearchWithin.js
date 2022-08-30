import { useState } from "react";
const DIVISIONS = ["Pacific", "Southwest", "NorthWest", "Atlantic", "Central", "Southeast" ];
const SearchWithin = () => {
    const[location, setLocation] = useState("");
    const[division, setDivision] = useState("");
    return (
        <div className="search-params">
        <form>
            <label htmlFor="location">
                Location
                <input id="location" value={location} placeholder="Location"
                onChange={(e) => setLocation(e.target.value)}></input>
            </label>
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
            <button>Submit</button>
        </form>
    </div>
    );
};
export default SearchWithin;