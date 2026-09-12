
const Card = ({ ProductName, Price, Category }) => {
  return (
    <div>
      <p>{ProductName}</p>
      <p>{Price}</p>
      <p>{Category}</p>
    </div>
  );
};

export default Card
