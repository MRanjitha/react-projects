import React, { Component } from 'react';
import './App.css';
// import ProjectForm from './ProjectForm'

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			projects: [
				{
					"projectName" : "Consul Project",
					"projectDescription": "Consul Description",
					"projectIndustry" : "Government",
					"created": "1468871425"
				}
			], 
		};
		this.updateName = this.updateName(this);
		this.getForm = this.getForm.bind(this);

	}

	updateName(e){
		alert("updateName");
		console.log("updateName");
		console.log(e.target);
	}
	
	getForm(){
		alert("First getForm");
		console.log("getForm");
		return(
			<div>
				<button className= "btn btn-primary btn-sm"  data-toggle="modal" data-target="#exampleModal" id= "Addnewproject">Add New Project</button>
				<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">Add New Project</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<div className="form-group row">
									<label  className="col-sm-4 col-form-label">ProjectName</label>
									<div className="col-sm-8">
										<input type="text" className="form-control"  id="ProjectName" placeholder="ProjectName" onChange={this.updateName} />
									</div>
								</div>
								<div className="form-group row">
									<label  className="col-sm-4 col-form-label">ProjectDescription</label>
									<div className="col-sm-8">
										<textarea className="form-control" id="ProjectDescription" rows="3"></textarea>
									</div>
								</div>
								<div className="form-group row">
									<label  className="col-sm-4 col-form-label">Industry</label>
									<div className="col-sm-8">
										<select  className="form-control col-sm-8" id="Industry">
											<option>Government</option>
											<option>Public</option>
											<option>others</option>
										</select>
									</div>
								</div>	
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
								<button type="button" className="btn btn-primary">Save changes</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	

	
  render() {
    return (
    <div className="App">
		{this.getForm()}
		{
			this.state.projects.map(function(project,index){
				return(
					<div className="projectDetails" key={project.created}>
						<div>
							{project.projectName}
						</div>
						<div>
							{project.projectDescription}
						</div>
						<div>
							{project.projectIndustry}
						</div>
					</div>
				)
			},this)
		}
    </div>
    );
  }
}

export default App;
