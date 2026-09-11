import React from 'react'

const AddTask = ({value,setValue,handelSubmit}) => {
  return (
    <div>
      <h2>Create a todo list!</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button type="submit" onClick={handelSubmit}>
        Add Task
      </button>
    </div>
  );
}

export default AddTask
