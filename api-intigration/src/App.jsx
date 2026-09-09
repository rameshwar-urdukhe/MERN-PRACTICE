import { useEffect, useState } from "react";

const App = () => {

  const [data, setData] = useState([])

    useEffect(()=>{
      async function getData() {
        let data = await fetch("https://jsonplaceholder.typicode.com/posts");
        let res = await data.json();
        setData(res);
      }
      console.log(data);
      
      getData();
    },[])

  console.log(data);
    
  return (
    <div>
      <h1>Api Integration</h1>
      <div>
        <h3>Users Data</h3>
        {
          data.map((user)=>(
            <div key={user.id}>
              {user.userId}
            </div>
          ))
        }
      </div>
      <button>Get Data</button>
    </div>
  );
}

export default App
