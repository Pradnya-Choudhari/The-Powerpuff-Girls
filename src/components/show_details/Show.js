import React, { Component } from 'react';
import './Show.css';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { getEpisodeList } from '../actions/ShowAction';

class Show extends Component {
  state = {
    showDetails: ''
  }

  componentDidMount() {
    debugger;
    this.props.getEpisodeList(this.props.location.state.showDetails.id);
    this.setState({ showDetails: this.props.location.state.showDetails });
  }

  render() {
    return (
      <div>
        <h1>{this.state.showDetails.name}</h1>
        <div class="row">
          <img class="col" src={this.state.showDetails.image ? this.state.showDetails.image.medium : ''}></img>
          <div class="col">
            {this.state.showDetails.summary}
          </div>
        </div>

        <h1>Episodes</h1>
        <table>
          <tr>
            <th>Episode Number</th>
            <th>Episode Name</th>
            <th>Airdate</th>
          </tr>

          {this.props.episodes.map(function (item) {
            return (              
                <tr>
                  <td>S{item.season}E{item.number}</td>
                  <td><Link to={{
                pathname: '/episode',
                state: {
                  episodeDetails: item ? item : ''
                }
              }}>{item.name}</Link></td>
                  <td>{item.airdate}</td>
                </tr>
              
            );
          })}
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { episodes } = state.show;
  return { episodes };
};

export default connect(mapStateToProps, { getEpisodeList })(Show);
