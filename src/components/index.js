const SearchBar = () => (
  <div>
    <label htmlFor="search" className="sr-only">
      Search
    </label>
    <input type="search" id="search" placeholder="Search.." />
  </div>
);

export default SearchBar;