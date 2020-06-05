import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/facerecognition/FaceRecognition';

const app = new Clarifai.App({
 apiKey: '4ea4832839fa4e8ba507c6420d5708a0'
});

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imgUrl: '',
      box: {}
    }
  }

  calculateFaceLocation = () => {

  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imgUrl: this.state.input});
      app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.input).then(
        function(response) {
          var concepts = response.outputs[0].data.regions[0].region_info.bounding_box;
          console.log(concepts);
          this.calculateFaceLocation(response);
        },
        function(err) {
          console.log(err);
    }
  );
  }

  render() {
    return(
      <div className="App">
        <Particles params={particlesOptions} className='particles'/>
        <Navigation />
        <Logo />
        <div className='center-vertical'>
          <Rank />
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
          <FaceRecognition imgUrl={this.state.imgUrl}/>
        </div>
      </div>
    );
  }
}

export default App;
