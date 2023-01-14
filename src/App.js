import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([
    { username: "mohsen", age: "34", id: Math.random().toString() },
  ]);

  const addUSerHandler = (username, age) => {
    setUsersList((oldUSersList) => [
      ...oldUSersList,
      { username, age, id: Math.random().toString() },
    ]);
  };

  return (
    <div>
      <AddUser onAddUser={addUSerHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
