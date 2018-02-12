import React from 'react';
import EditForm from './edit.js';

class CatItem extends React.Component {
  constructor(props){
    super(props);

    this.editToggle = this.editToggle.bind(this);
    this.state = {
      isEditing: false,
    };
  }

  editToggle(){
    this.setState({isEditing: !this.state.isEditing});
  }

  render(){
    return(
      <div>
        <button onClick={this.editToggle}> edit </button>
        {
          this.state.isEditing ? (
            <div>
            <EditForm catID={this.props.catID}
            task={this.props.task}
            description={this.props.description}
            cats={this.props.cats}
            categoryID={this.props.categoryID}
            update={this.props.update}/>
            <button type="submit" onClick={this.editToggle}> return </button>
            </div>
          )
          : null
        }
        <button onClick={() => this.props.delete(this.props.catID)} type="submit"> delete </button>
      </div>
    );
  }
}

export default CatItem;
