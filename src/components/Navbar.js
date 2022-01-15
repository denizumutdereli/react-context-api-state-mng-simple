import React from 'react';
import PropTypes from 'prop-types'; // ES6

function Navbar(props) {

    const { title, counts } = props

    return (

        <div>

            <h3>{title + " " + counts + " aktif kullanıcı"}</h3>

        </div>

    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    //counts : PropTypes.number.isRequired
}

Navbar.defaultProps = {

    title: "OK",
    counts: 12

}
export default Navbar;
