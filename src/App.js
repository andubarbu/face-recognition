import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/facerecognition/FaceRecognition';
import SignIn from './components/signin/SignIn';
import Register from './components/register/Register';

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
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  onRouteChange = (newRoute) => {
    if (newRoute === 'signin') {
      this.setState({isSignedIn: false})
    } else if (newRoute === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: newRoute});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }


  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onButtonSubmit = () => {
    this.setState({imgUrl: this.state.input});
      app.models
        .predict(
          Clarifai.FACE_DETECT_MODEL,
          this.state.input)
        .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
        .catch(err => console.log(err));
      }

  render() {
    return(
      <div className="App">
        <Particles params={particlesOptions} className='particles'/>
        <div className='heading'>
          <Logo />
          <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
        </div>
        {this.state.route === 'signin'
          ? <SignIn onRouteChange={this.onRouteChange} />
          : this.state.route === 'home'
          ? <div className='center-vertical up-top'>
              <Rank />
              <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
              <FaceRecognition box={this.state.box} imgUrl={this.state.imgUrl}/>
            </div>
          : this.state.route === 'register'
          ? <Register onRouteChange={this.onRouteChange}/>
          : <h1>Error 404</h1>
        }
      </div>
    );
  }
}

export default App;
