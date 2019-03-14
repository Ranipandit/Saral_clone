import React from "react";
import {
  Navbar,
  NavbarBrand,
} from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="green" light>
          <NavbarBrand href="/" className="mr-auto">
            Saral
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default Header;
