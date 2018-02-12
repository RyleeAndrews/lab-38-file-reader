import React from 'react';


class EditForm extends React.Component {
  constructor(props){
    super(props);



    this.editTask = this.editTask.bind(this);
    this.editDescription = this.editDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      task: this.props.task,
      description: this.props.description,
      _id: this.props.catID,
      categoryID: this.props.categoryID,
    };
  }

  editTask(event){
    event.preventDefault();
    this.setState({task: event.target.value});
  }

  editDescription(event){
    event.preventDefault();
    this.setState({description: event.target.value});
  }

  onSubmit(event){
    event.preventDefault();
    console.log('lsjg', this.props);
    this.props.update(Object.assign({}, this.state));
  }
  render(){

    return(
      <div>
        <form onSubmit={this.onSubmit}>
          Edit your task:
          <input value={this.state.task} onChange={this.editTask}/>
          <br/>
          Edit your description:
          <input value={this.state.description} onChange={this.editDescription}/>
          <button type="submit"> submit </button>
        </form>
      </div>
    );
  }
}

export default EditForm;
