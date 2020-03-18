import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    console.log(this.props)
    return this.props.opacity < 0.2 ? null : (
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        <ColorBox opacity={this.props.opacity-0.1}/>
      </div>
    )
  }

}

