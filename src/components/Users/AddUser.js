import React, { useState, useRef } from "react";
import Button from "../UI/Button";

import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [error, setError] = useState();
  const userInputRef = useRef()
  const ageInputRef = useRef()

  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName = userInputRef.current.value
    const enteredUserAge = ageInputRef.current.value
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age.",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Age must be > 0",
      });
      return;
    }

    props.onAddUser(enteredName, enteredUserAge);
    userInputRef.current.value = ''
    ageInputRef.current.value = ''
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={userInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
