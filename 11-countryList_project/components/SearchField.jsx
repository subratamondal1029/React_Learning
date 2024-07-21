const SearchField = ({ queryState, mode }) => {
  const [query, setQuery] = queryState
  
  return (
    <div id="inputField" className={mode}>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        id="search"
        onChange={(e) => setQuery({ ...query, name: e.target.value.trim() }) }
      />
    </div>
  );
};

export default SearchField;
