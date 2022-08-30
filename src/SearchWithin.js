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