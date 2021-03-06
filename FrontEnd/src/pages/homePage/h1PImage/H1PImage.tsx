import * as React from "react";
import "./H1PImageStyle.css";

class H1PImage extends React.Component<H1P1ImageProps> {
  constructor(props: H1P1ImageProps) {
    super(props);
  }

  public render() {
    return (
      <div className="container">
        <div className="H1_P">
          <h1> {this.props.h1} </h1>
          <p> {this.props.p} </p>
        </div>
        <div className="image">
          <img src={this.props.img} alt="" />
        </div>
      </div>
    );
  }
}

export default H1PImage;
