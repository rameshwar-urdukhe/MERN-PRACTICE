const SearchProduct = ({ searchValue, setSearchValue, handleChange }) => {
  return (
    <div>
      <br />
      <br />
      <form onSubmit={(e) => e.preventDefault()}>
        <label style={{margin: '20px'}}>
          Search By Name
        </label>
        <input
          type="text"
          htmlFor="name"
          value={searchValue}
          onChange={(e) => {
            (setSearchValue(e.target.value), handleChange(e.target.value));
          }}
        />
      </form>
    </div>
  );
};

export default SearchProduct;
