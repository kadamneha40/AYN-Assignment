import React, { PureComponent } from 'react'

import Webcam from 'react-webcam'
import { storage } from './firebase'
import './App.css'

var myImgArr = []

class App extends PureComponent {
  state = {
    username: 'test@gmail.com',
    password: 'test1234',
    isOpen: true,
    image: '',
    status: false,
    image_data: [],
  }

  componentDidMount() {
    setInterval(this.reloadFun, 30000)
  }

  reloadFun = () => {
    this.capture()
  }

  handleSubmit = () => {
    this.setState({ isOpen: false })
  }

  capture = () => {
    const screenshot = this.webcam.getScreenshot()

    this.setState({ image: screenshot, status: true })
    myImgArr.push(screenshot)
    this.setState({ image_data: myImgArr })

    if (screenshot === null) {
      alert('Camera has been blocked, Please Allow your camera')
    }
  }

  render() {
    const videoConstraints = {
      width: 300,
      height: 300,
      facingMode: 'user',
    }
    const webcamStyle = {
      width: '300px',
      border: '2px solid',
    }

    const { username, password, isOpen, status, image, image_data } = this.state

    return (
      <div className="p-5">
        {isOpen ? (
          <div className="col-md-6">
            <div>
              <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" value={username} />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="row">
              <div className="col-md-4">
                <Webcam
                  id="image"
                  audio={false}
                  style={webcamStyle}
                  height="auto"
                  videoConstraints={videoConstraints}
                  ref={(webcam) => (this.webcam = webcam)}
                  screenshotFormat="image/jpeg"
                />
                <br />
               
              </div>
             
            </div>

            <div className="m-5">
              <h3>Show All Images</h3>

              {status && (
                <div className="mt-4">
                  {image_data.map((val, key) => (
                    <div className="d-inline-flex mt-4" key={key}>
                      <div className="col-lg-8">
                        <img src={val} alt="image" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default App
