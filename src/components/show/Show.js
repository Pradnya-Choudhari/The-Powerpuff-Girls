import React, { Component } from 'react';
import './Show.css';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { getEpisodeList } from '../actions/ShowAction';

class Show extends Component {
  state = {
    showDetails: ''
  }

  componentDidMount() {
    if (this.props.location.state && this.props.location.state.showDetails) {
      this.props.getEpisodeList(this.props.location.state.showDetails.id);
      this.setState({ showDetails: this.props.location.state.showDetails });
    }
  }

  render() {
    if (!this.state.showDetails) {
      return (<div className="row">
        There seems to be some error.  Click <Link to="/">here</Link> to go to Home page.
      </div>);
    }
    return (
      <div>
        <div className="row">
          <div className="col-sm-4">
            <img alt={this.state.showDetails.name} className="img-fluid" height="300px" width="300px" src={this.state.showDetails.image ? this.state.showDetails.image.original : ''}></img>
          </div>

          <div className="col-sm-8">
            <h1>{this.state.showDetails.name}</h1>
            <div dangerouslySetInnerHTML={{ __html: this.state.showDetails.summary }}>
            </div>

          </div>
        </div>
        <br />
        <br />
        <h1>Episode list</h1>
        <table>
          <tr>
            <th>Episode</th>
            <th>Name</th>
            <th>Airdate</th>
          </tr>

          {this.props.episodes.map(function (item) {
            return (
              <tr>
                <td>S{ ("0" + item.season).slice(-2)}E{ ("0" + item.number).slice(-2)}</td>
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
