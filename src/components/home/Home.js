import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getShowList } from '../actions/ShowAction';

class Home extends Component {

  componentDidMount() {
    this.props.getShowList();
  }

  render() {
    return (      
        <div className="row">
          {
            this.props.list.map(function (item) {
              return (
                <div key={item.id} className="d-flex flex-column">
                  <Link to={{
                    pathname: '/show',
                    state: {
                      showDetails: item ? item : ''
                    }
                  }}>
                    <img alt={item.name} className="img-fluid" style={{ margin: 10, width: 200, height: 200, borderRadius: 20 }} src={item.image ? item.image.medium : ''} />
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
