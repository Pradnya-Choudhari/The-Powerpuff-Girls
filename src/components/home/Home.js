import React, { Component } from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getShowList } from '../actions/ShowAction';

class Home extends Component {

  componentDidMount() {
    this.props.getShowList();
  }

  render() {
    return (
      
        <div class="row">
          {
            this.props.list.map(function (item) {
              return (
                <div class="d-flex flex-column">
                  <Link to={{
                    pathname: '/show',
                    state: {
                      showDetails: item ? item : ''
                    }
                  }}>
                    <img class="img-fluid" key={item.id} style={{ margin: 10, width: 200, height: 200, borderRadius: 20 }} src={item.image ? item.image.medium : ''} />
                  </Link>
                </div>
              );
            })
          }

        </div>
    );
  }
}

const mapStateToProps = state => {
  const { list } = state.show;
  return { list };
};

export default connect(mapStateToProps, { getShowList })(Home);
