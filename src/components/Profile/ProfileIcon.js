import React, {Component} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class ProfileIcon extends Component {
    constructor(props) {
        super(props);

        // this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        }
    };

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    };
    // className="b--transparent shadow-5" style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}

    render() {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="pa4 tc">
                <DropdownToggle
                    tag="span"
                    data-toggle="dropdown"
                    aria-expanded={this.state.dropdownOpen}>
                    <img src="http://tachyons.io/img/logo.jpg" alt="avatar" className="br-100 ba h3 w3 dib" />
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem onClick={this.props.toggleModal}>View Profile</DropdownItem>
                    <DropdownItem onClick={() => this.props.onRouteChange('signout')}>Sign Out</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }

}

export default ProfileIcon;