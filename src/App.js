import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch a simple message from backend
    fetch("https://render-fullstack-6g0k.onrender.com/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error fetching message:", err));

    // Fetch users list from backend
    fetch("https://render-fullstack-6g0k.onrender.com/api/hello")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🚀 MERN App</h1>

      <h2>Message from Backend:</h2>
      <p>{message || "Loading..."}</p>

      <h2>Users List:</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((u, i) => (
            <li key={i}>{u.name}</li>
          ))}
        </ul>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
}

export default App;