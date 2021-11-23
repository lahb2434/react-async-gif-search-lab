import React from "react";
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  gifSearch = (userInput) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(({data}) => {
      data = data.slice(0,3);
      // data.map(gif => console.log(gif.images.original.url))
      this.setState({gifs: data.map( gif => ({ url: gif.images.original.url }) ) }, ()=>console.log(this.state))
    })
  }


  render(){
    return <div>
      <GifSearch gifSearch={this.gifSearch}/>
      <GifList gifs={this.state.gifs}/>
    </div>
  }

}
