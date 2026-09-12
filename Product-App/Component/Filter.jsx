const Filter = ({ handelFilter }) => {
  return (
    <div>
      <label style={{ margin: "20px" }}>Filter By Category</label>
      <select
        onChange={(e) => {
          handelFilter(e.target.value);
        }}
      >
        <option value="">Select Category</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Grocery">Grocery</option>
      </select>
    </div>
  );
};

export default Filter;
