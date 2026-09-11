const CompletedTask = ({taskCom,}) => {
  return (
    <div>
      <h2>Completed Tasks</h2>
      <div>
        {taskCom.map((task, index) => (
          <h3 key={index}>
            <p style={{ textDecoration: "line-through" }}>{task}</p>
          </h3>
        ))}
      </div>
    </div>
  );
}

export default CompletedTask
