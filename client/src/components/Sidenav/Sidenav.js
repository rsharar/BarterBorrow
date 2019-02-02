import React from "react";
import './style.css'
import Sidebar from "react-sidebar";
import { Link } from 'react-router-dom'


class Sidenav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        sidebar={
          <div id="sidebar-items">
            <Link to="/users/profile" className="sidebar-link">
              <h4>Profile</h4>
            </Link>
            <Link to="/users/items" className="sidebar-link">
            <h4>My Items</h4>
            </Link>
            <Link to="/users/messages" className="sidebar-link">
            <h4>Messages/Proposals</h4>
            </Link>
            <Link to="/users/post" className="sidebar-link">
            <h4>Post an Item</h4>
            </Link>
          </div>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white", marginTop: "65px" }}}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button>
      </Sidebar>
    );
  }
}

export default Sidenav;