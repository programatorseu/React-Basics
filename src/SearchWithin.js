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