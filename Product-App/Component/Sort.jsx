const Sort = ({ handelSortOrder }) => {
  return (
    <div>
      <label style={{ margin: "20px" }}>Sort By Order</label>
      <select
        onChange={(e) => {
          handelSortOrder(e.target.value);
        }}
      >
        <option value="">Default</option>
        <option value="Low-High">Low → High</option>
        <option value="High-Low">High → Low</option>
      </select>
    </div>
  );
};

export default Sort;
