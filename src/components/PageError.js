import React from "react";
import "./styles/PageError.scss";

function PageError(props) {
  return <div className="PageError"><span role="img" aria-label="emoji">👽</span>{props.error.message}<span role="img" aria-label="emoji">🚫</span></div>;
}

export default PageError;
