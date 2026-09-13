import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState([])
  const [searchByName, setSearchByName] = useState('')
  const [loadig, setLoading] = useState(true)
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(()=>{
   const apiRes = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    setUserData(data)
    setFilteredUsers(data)
    setLoading(false)
   }
   apiRes();
  },[])

  function searchNameBy(){
   const filteredUsers = userData.filter((u) =>
     u.name.toLowerCase().includes(searchByName.trim().toLowerCase()),
   );

     setFilteredUsers(filteredUsers);

  }
  return (
    <>
      <div>
        <h1>User Search App</h1>
        <br />
        <br />
      </div>
      <div>
        <input
          type="text"
          value={searchByName}
          onChange={(e) => {
            setSearchByName(e.target.value);
          }}
        />
        <button onClick={searchNameBy}>Search By Name</button>
        <br />
        <br />
      </div>
      {loadig ? (
        <h5>Loading..</h5>
      ) : (
        filteredUsers.map((user) => (
          <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>City: {user.address.city}</p>
          </div>
        ))
      )}
    </>
  );
}

export default App;
