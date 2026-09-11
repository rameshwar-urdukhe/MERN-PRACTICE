import React from 'react'

const TaskList = ({todo, delTask, comTask}) => {
  return (
    <div>
      <h1>Todo-List</h1>
      <div>
        {todo.map((task, index) => {
          return (
            <div key={index}>
              <h3>{task}</h3>
              <button
                onClick={() => {
                  delTask(index);
                }}
              >
                Del
              </button>
              <button
                onClick={() => {
                  comTask(index);
                }}
              >
                Completed
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TaskList
