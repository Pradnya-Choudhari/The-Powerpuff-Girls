import React, { Component } from 'react';

class Episode extends Component {
  state = {
    episodeDetails: ''
  }

  componentDidMount() {
    debugger;
    //this.props.getEpisodeList(this.props.location.state.showDetails.id);
    this.setState({ episodeDetails: this.props.location.state.episodeDetails });
  }

  render() {
    return (
      <div>
        <h1>{this.state.episodeDetails.name}</h1>
        <div class="row">
          <img class="col" src={this.state.episodeDetails.image ? this.state.episodeDetails.image.medium : ''}></img>
          <div class="col">
            {this.state.episodeDetails.summary}
          </div>
        </div>

        {/* <h1>Episodes</h1>
        <table>
          <tr>
            <th>Episode Number</th>
            <th>Episode Name</th>
            <th>Airdate</th>
          </tr>

          {this.props.episodes.map(function (item) {
            return (
              <Link to={{
                pathname: '/episode',
                state: {
                  episodeDetails: item ? item : ''
                }
              }}>
                <tr>
                  <td>S{item.season}E{item.number}</td>
                  <td>{item.name}</td>
                  <td>{item.airdate}</td>
                </tr>
              </Link>
            );
          })}
        </table> */}
      </div>
    );
  }
}

export default Episode;
