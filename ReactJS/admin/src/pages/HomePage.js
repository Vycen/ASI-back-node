import React, {Component} from "react";
import {connect} from "react-redux";
import {} from "../actions";

import Main from "../components/mainPanel/Main";

class HomePage extends Component {

  render() {

    return (
      <div className={'mainContainer'}>
        <Main />
      </div>
    );
  }

}


function mapStateToProps(state, ownProps){
  return {
  }
}

export default connect(
  mapStateToProps, {}
)(HomePage)