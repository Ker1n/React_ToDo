import React from "react";
import { AlertContext } from "../context/alert/alertContext";
import { FireBaseContext } from "../context/firebase/firebaseContext";

export const Form = () => {
  const [value, setValue] = React.useState("");

  const alert = React.useContext(AlertContext);

  const firebase = React.useContext(FireBaseContext)

  const submitHandler = (event) => {
    event.preventDefault()

    if (value.trim()) {
      firebase.addNote(value.trim()).then(() => { 
        alert.show(" Note was created", "success")
      }).catch(()=> { 
        alert.show(" Something went wrong", "danger");
      })
      setValue("");
    }     
    else {
      alert.show(" input note title");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="enter note title"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};
