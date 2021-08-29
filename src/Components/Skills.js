import React, { Component } from 'react'
import {Canvas} from 'react-canvas-js'
 
const particleOptions = [
  {
    'maxParticles': 50,
    'colors': ['#2E1D62', '#513D91', '#487EEF', '#11A887', '#fc5c65', '#fed330'],
    'shapes': ['rectangle', 'square'],
    'size': 1000,
    'minSpeed': 0.05,
    'maxSpeed': 0.20,
    'alpha': 0.70,
    'backgroundColor': '#1E1F29'
  }
]
 
export default class Skills extends Component {
  render () {
    return (
      <Canvas options={particleOptions} />
    )
  }
}