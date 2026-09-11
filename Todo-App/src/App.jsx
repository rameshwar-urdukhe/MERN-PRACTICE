import { useState } from 'react'
import './App.css'
import AddTask from './componet/AddTask'
import CompletedTask from "./componet/CompletedTask";
import TaskList from "./componet/TaskList";

function App() {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState('')
  const [taskCom, setTaskCom] = useState([])

  const handelSubmit = ()=>{
     if (!value.trim()) return;

     setTodo([...todo, value]);
     setValue("");
  }

  
  const delTask = (index) => {
  //  let copyTodo = todo.filter((task, i) => i !== index);
   setTodo(setTodo(todo.filter((task, i) => i !== index)));
  };

  
  const comTask = (index) => {
    const completedTask = todo[index];
    console.log(completedTask);
    
    setTaskCom([...taskCom, completedTask]);
    console.log(taskCom);
    setTodo(todo.filter((task, i) => i !== index));
  };

  return (
    <>
      <AddTask value={value} setValue={setValue} handelSubmit={handelSubmit} />
      <TaskList todo={todo} setTodo={setTodo} delTask={delTask} comTask={comTask} />
      <CompletedTask taskCom={taskCom} setTaskCom={setTaskCom} />
    </>
  );
}

export default App;