import React from 'react';

import uuid from 'uuid/v1';


class CatForm extends React.Component {
  constructor(props){
    super(props);

    this.onChangeOfTask = this.onChangeOfTask.bind(this);
    this.onChangeOfDescription = this.onChangeOfDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      task:'',
      description: '',
      categoryID: uuid(),
    };
  }

  onChangeOfTask(event){
    event.preventDefault();
    this.setState({task: event.target.value});
  }

  onChangeOfDescription(event){
    event.preventDefault();
    this.setState({description: event.target.value});
  }

  onSubmit(event){
    event.preventDefault();
    this.props.handler(Object.assign({}, this.state));
  }

  render(){
    console.log('cats', this.state.categoryID);
    return(
      <div>
        <form className="catForm" onSubmit={this.onSubmit}>
          Add a Task Name:
          <input value={this.state.task} onChange={this.onChangeOfTask}/>
          Add a Description:
          <input value={this.state.description} onChange={this.onChangeOfDescription}/>
          <button type="submit"> submit </button>
        </form>
      </div>
    );
  }
}

export default CatForm;
