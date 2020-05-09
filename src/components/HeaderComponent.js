import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  NavbarToggler,
  Jumbotron,
  Collapse,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };

  render() {
    return (
      <div>
        <Navbar light expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand href="/">
              <strong>Confusion</strong> Resto
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <NavLink
                    className="nav-link pr-5 font-weight-bold"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link pr-5 font-weight-bold"
                    to="/menu"
                  >
                    Menu
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className="nav-link pr-5 font-weight-bold"
                    to="/contactus"
                  >
                    Contact
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link pr-5 font-weight-bold"
                    to="/aboutus"
                  >
                    About
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>

        <Jumbotron>
          <div className="container">
            <div className="row mt-3 mb-3">
              <div className="col-sm-8 m-auto text-align-center ">
                <h1>Confusion Resto</h1>
                <p>
                  We take inspiration from the{" "}
                  <span className="text-success">World's best cuisines</span>,
                  and create a unique fusion experience. Our lipsmacking
                  creations will tickle your culinary senses!
                </p>
              </div>
              <div className="col-sm-4 pl-3">
                <img
                  src="/assets/images/bg.png"
                  alt="bg"
                  style={{ height: "250px", width: "100%" }}
                />
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;
