import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class IconButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    }
  }

  render() {
    return (
      <div className="d-inline">
        <button
          className="bg-dpg-teal bg-gradient rounded-circle dpg-dyn-btn-size"
          onClick={() => this.setState({isActive: !this.state.isActive})}>
          &nbsp;
          {this.state.isActive
            ? <FontAwesomeIcon icon="fa-solid fa-x"/>
            : <FontAwesomeIcon icon="fa-solid fa-bars"/>
          }
          &nbsp;
        </button>
      </div>
    );
  }
}

export default IconButton
