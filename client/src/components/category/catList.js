import React from 'react';

import CatItem from './catItem.js';

class CatList extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    console.log('catsss', this.props.cats);
    return(
      <div>
        <ul>
          {
            this.props.cats.map((category,i) =>
              <li key={category._id} category={category}>
              {console.log('yooo', category._id)}
                <h2> {category.task} </h2>
                <h2> {category.description} </h2>
                <CatItem update={this.props.update}
                categoryID={category.categoryID}
                delete={this.props.delete}
                cats={this.props.cats} catID={category._id}
                task={category.task}
                description={category.description}
                categoryID={category.categoryID}
                />
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default CatList;
