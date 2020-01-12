import React, { Component } from 'react';
import './List.css';
import Show from '../show_details/Show';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from 'react-redux';
import { getShowList } from '../actions/ShowAction';

class List extends Component {

  componentDidMount() {
    this.props.getShowList();
  }

  render() {
    return (
      <div>
        <div className="List">
          <ul>
            {this.props.list.map(function (item) {
              return(
                <Link to={{
                    pathname: '/show',
                    state: {
                      showDetails: item ? item : ''
                    }
                }}>
                  <img key={item.id} style={{ margin: 10, width: 200, height: 200, borderRadius: 20 }} src={item.image ? item.image.medium : ''} />
                </Link>
              );              
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { list } = state.show;
  return { list };
};

export default connect(mapStateToProps, { getShowList })(List);
