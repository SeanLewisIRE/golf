import Nav from 'react-bootstrap/Nav'
import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';

function NavBar(props) {
    const logged_out_nav = (
        <ul>
            <li onClick={() => props.display_form('login')}>login</li>
            <li onClick={() => props.display_form('signup')}>signup</li>
        </ul>
    );

    const logged_in_nav = (
        <ul>
            <li onClick={props.handle_logout}>logout</li>
        </ul>
    );
    return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default NavBar;

Nav.propTypes = {
    logged_in: PropTypes.bool.isRequired,
    display_form: PropTypes.func.isRequired,
    handle_logout: PropTypes.func.isRequired
};