import React from 'react';
import HomePageTemplate from './HomePageTemplate';
import { Switch,Route } from 'react-router-dom';
import ProjectPage from './ProjectPage'

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
          <HomePageTemplate/>
          <Switch>
				<Route path={'/home/project/'} component={ProjectPage}/> 
			</Switch>
      </div>
    )
  }
}
