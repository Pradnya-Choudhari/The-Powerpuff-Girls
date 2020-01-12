import React, { Component } from 'react';
import logo from '../../assets/logo192.png';
import './Show.css';

class Show extends Component {

  render() {
    return (
      <div>
        <h1>Header</h1>
        <div style={{ flexDirection: 'row' }}>
          <img src={logo}></img>
          <div>
            The city of Townsville may be a beautiful, bustling metropolis, but don't be fooled! There's evil afoot! And only three things can keep the bad guys at bay: Blossom, Bubbles and Buttercup, three super-powered little girls, known to their fans (and villains everywhere) as The Powerpuff Girls. Juggling school, bedtimes, and beating up giant monsters may be daunting, but together the Powerpuff Girls are up to the task. Battling a who's who of evil, they show what it really means to "fight like a girl."
           </div>
        </div>

        <h1>Episodes</h1>
        <table>
          <tr>
            <th>Episode Name</th>
            <th>Airdate</th>
          </tr>
          <tr>
            <td>Peter</td>
            <td>Griffin</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Show;
