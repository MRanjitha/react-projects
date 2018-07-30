import React from 'react';
import { Link } from 'react-router-dom';

export default class HomePageTemplate extends React.Component {
  render() {
    return (
      <div>
        <Link to={'/home/project/'} >
            ProjectCode
        </Link>
      </div>
    )
  }
}
