import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div>
        <h2>Page does not Exist...</h2>
        <Link to="/">Redirect to Home Page</Link>
        </div>
  )
}

export default Error