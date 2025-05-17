import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="container">
      <h1>Users</h1>
      <div className="users-area">
        {users?.map((user, index) => (
          <li key={index}>{user?.name}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
