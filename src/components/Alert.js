import React from "react";
import { AlertContext } from "../context/alert/alertContext";
import { CSSTransition } from 'react-transition-group';

export const Alert = () => {

  const {alert, hide} = React.useContext(AlertContext)



  return (
    <CSSTransition
    in={alert.visible}
    timeout={1000}
    classNames={'alert'}
    mountOnEnter
    unmountOnExit>
    <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
      <strong>Attention!</strong> 
      {alert.text}
      <button
        onClick = {hide}
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    </CSSTransition>
  );
};
