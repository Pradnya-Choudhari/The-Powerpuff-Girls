import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
class Episode extends Component {
  state = {
    episodeDetails: ''
  }

  componentDidMount() {
    if (this.props.location.state && this.props.location.state.episodeDetails) {
      this.setState({ episodeDetails: this.props.location.state.episodeDetails });
    }
  }

  render() {

    if (!this.state.episodeDetails) {
      return (<div className="row">
        There seems to be some error.  Click <Link to="/">here</Link> to go to Home page.
      </div>);
    }

    return (
      <div>
        <div className="row">
          <div className="col-sm-5">
            <img alt={this.state.episodeDetails.name} height="400px" width="400px" src={this.state.episodeDetails.image ? this.state.episodeDetails.image.original : ''}></img>
          </div>
          <div className="col-sm-7">
            <h1>{this.state.episodeDetails.name}</h1>

            <div dangerouslySetInnerHTML={{ __html: this.state.episodeDetails.summary }}>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Episode;
