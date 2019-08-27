import React, { Fragment } from 'react'

const NotFound = () => {
  return (
    <Fragment>
      <h1 className="x-large text-primary">
        <i className="fas fa-exclamation-triangle"></i>
        Page Not found
        <p className="large">Sorry, this page does not exists</p>
      </h1>
    </Fragment>
  )
}

export default NotFound
