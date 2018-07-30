import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const todos  = [
  {
    todoTitle: "My first todo",
    todoResponsible: "Ranjitha",
    todoDescription: "My first todo description",
    todoPriority: 'Low'
  },
  {
    todoTitle: "My second todo",
    todoResponsible: "Ranjitha",
    todoDescription: "My second todo description",
    todoPriority: 'Medium'
  },
  {
    todoTitle: "My third todo",
    todoResponsible: "Ranjitha",
    todoDescription: "My third todo description",
    todoPriority: 'High'
  }
]

class App extends Component {
      constructor(props){
        super(props);

        this.state ={
          todos : []
        };
        this.handleAddTodo = this.handleAddTodo.bind(this);
      }
      componentDidMount(){
        console.log(localStorage.getItem("todos"));
         let todos = JSON.stringify(localStorage.getItem("todos"));
         if(todos){
          this.setState({todos:todos});
         }
      }
      // handleEditTodo(index){
      //   this.setState({todos: [...this.state.todos, todo]})
      // }
      handleRemoveTodo(index){
        this.setState({
          todos: this.state.todos.filter(function(e, i){
            return i !== index;
          })
        })  
      }

      handleAddTodo(todo){
        console.log('called');
        localStorage.setItem('name', 'ranjitha');
        console.log('state array ',this.state.todos);
        const tem = this.state.todos;
        tem.push(todo);
        this.setState({todos: tem});
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
      }
      
  render() {
    return (
      <div className="container">
        <h4>Todo Count: <span className="badge">{this.state.todos.length}</span></h4>
        <hr />
        <TodoInput onAddTodo={this.handleAddTodo}></TodoInput>
        <hr />
        <ul className="list-group">
          {this.state.todos.map((todo, index) =>
          <li className="list-group-item" key={index}>
            <h4 className="list-group-item-heading">{todo.todoTitle}<small><span className="label label-info">{todo.todoPriority}</span></small></h4>
            <p><span className="glyphicon glyphicon-user"></span>{todo.todoResponsible}</p>
            <p>{todo.todoDescription}</p>
            <div className= "row">
              <button className="btn btn-primary btn-sm" id="edit" ><span className="glyphicon glyphicon-edit"></span>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={this.handleRemoveTodo.bind(this, index)}><span className="glyphicon glyphicon-trash"></span>Delete</button>
            </div>
          </li>
          )}
        </ul>
      </div>
    );
  }
}

class TodoInput extends Component{
  constructor(props){
    super(props);

    this.state = {
      todoTitle: '',
      todoResponsible: '',
      todoDescription: '',
      todoPriority: 'Lowest'
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    //  console.log("1",this.state);
    this.setState({
      [name]: value
    });
    // console.log("2",this.state); 
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddTodo(this.state);
    // this.setState({
    //   todoTitle: '',
    //   todoResponsible: '',
    //   todoDescription: '',
    //   todoPriority: 'Lowest'
    // });
    // console.log(this.state);
  }

  render() {
    return(

<div className="container">

  {/* <!-- Trigger the modal with a button --> */}
  <button type="button" className="btn btn-info sm" data-toggle="modal" data-target="#myModal">Add New Todo</button>
  {/* Modal  */}
  <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
    
      {/* <!-- Modal content--> */}
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Add new Todo </h4>
        </div>
        <div className="modal-body">
          {/* <p>Some text in the modal.</p> */}
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
             <div className="form-group">
               <label htmlFor="inputTodoTitle" className="col-sm-2 control-label">Todo</label>
               <div className="col-sm-10">
                 <input name="todoTitle" 
                   type="text"
                     className="form-control"
                     id="inputTodoTitle"
                     value={this.state.todoTitle}
                     onChange={this.handleInputChange}
                     placeholder="Title">
                 </input>
               </div>
             </div>
             <div className="form-group">
               <label htmlFor="inputTodoResponsible" className="col-sm-2 control-label">Responsible</label>
               <div className="col-sm-10">
                 <input name="todoResponsible" 
                   type="text"
                   className="form-control"
                   id="inputTodoResponsible"
                   value={this.state.todoResponsible}
                   onChange={this.handleInputChange}
                   placeholder="Responsible">
                 </input>
               </div>
             </div>
             <div className="form-group">
               <label htmlFor="inputTodoDesc" className="col-sm-2 control-label">Description</label>
               <div className="col-sm-10">
                 <textarea name="todoDescription" 
                   className="form-control"
                   rows="3"
                   id="inputTodoDesc"
                   value={this.state.todoDescription}
                   onChange={this.handleInputChange}>
                 </textarea>
               </div>
             </div>
             <div className="form-group">
               <label htmlFor="inputTodoPriority" className="col-sm-2 control-label">Priority</label>
               <div className="col-sm-10">
                 <select name="todoPriority" 
                   className="form-control"
                   id="inputTodoPriority"
                   value={this.state.todoPriority}
                   onChange={this.handleInputChange}>
                   <option>Lowest</option>
                   <option>Low</option>
                   <option>Medium</option>
                   <option>High</option>
                   <option>Highest</option>
                 </select>
               </div>
             </div>

             <div className="form-group">
               <div className="col-sm-offset-2 col-sm-10">
                 <button type="submit" className="btn btn-success">Add Todo</button>
               </div>
             </div>
         </form>
        </div>
      </div> 
    </div>
  </div>
</div>
 );
    
  }
}

export default App;
