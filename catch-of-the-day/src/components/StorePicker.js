import React from 'react';
import {getFunName} from '../helpers.js'

class StorePicker extends React.Component {
  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }

  goToStore(e){
    // Prevent default submit
    e.preventDefault();
    console.log("Button submit");
    // First grab text from box
    console.log(this.storeInput.value);
    // Second transition from / to /store/:storeId
    this.context.router.transitionTo(`/store/${this.storeInput.value}`)
  }

  render(){
    // emmet ctrl + E when writing JS
    return (
      <form className="store-selector" onSubmit = {this.goToStore}>
        {/* Commenting within JSX*/}
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          required placeholder = "Store Name"
          defaultValue = {getFunName()}
          ref = {
            (input) => {this.storeInput=input}
          }
        />
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
}

// Tells React that the StorePicker component expects something called 'router ''. Within the router it provides a method called .transitionTo which allows us to navigate to other urls
StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export {StorePicker};
