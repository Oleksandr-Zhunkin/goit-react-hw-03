export const SearchBox = ({ setSearchValue, searchValue }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Enter contact name..."
      />
    </div>
  );
};
export default SearchBox;
