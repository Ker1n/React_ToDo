import React, { Fragment } from "react";
import { Form } from "../components/Form.js";
import { Loader } from "../components/Loader.js";
import { Notes } from "../components/Notes.js";
import { FireBaseContext } from "../context/firebase/firebaseContext.js";

export const Home = () => {
  const { loading, notes, fetchNotes, removeNote } = React.useContext(FireBaseContext);

  React.useEffect(() => {
    fetchNotes()
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Form />
      <hr />
      {loading ? <Loader /> : <Notes notes={notes} onRemove={removeNote} />}
    </Fragment>
  );
};
