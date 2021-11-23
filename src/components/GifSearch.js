import React from "react";

export default class GifSearch extends React.Component {

  state ={ 
    userInput: ""
  }
  render(){
    return <div>
      <form onSubmit={this.submitHandler}>
        <input type="text"  value={this.state.userInput} onChange={event => this.setState({userInput: event.target.value})} />
        <button type="submit">Submit</button>
      </form>
    </div>
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.gifSearch(this.state.userInput)
  }

}