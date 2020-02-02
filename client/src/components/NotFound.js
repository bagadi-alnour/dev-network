import React, { Fragment } from "react";

export default function NotFound() {
  return (
    <Fragment className="container">
      <h1 className="x-large text-primary">
        <i className="fas fa-exclamanation-triangle" /> Page Not Found
      </h1>
      <p className="lagre">Sorry, This page does not exist</p>
    </Fragment>
  );
}
