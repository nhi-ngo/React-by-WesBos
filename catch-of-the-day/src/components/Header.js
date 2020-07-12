import React from 'react';
<<<<<<< HEAD
=======
import PropTypes from 'prop-types';
>>>>>>> 8f49e58aab8cfc747fb863ad8d6b566b80714de0

const Header = props => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
<<<<<<< HEAD
      <span>{props.tagline}</span>
=======
      <span>{props.tagline}></span>
>>>>>>> 8f49e58aab8cfc747fb863ad8d6b566b80714de0
    </h3>
  </header>
);

<<<<<<< HEAD
=======
Header.propTypes = {
  tagline: PropTypes.string.isRequired,
};

>>>>>>> 8f49e58aab8cfc747fb863ad8d6b566b80714de0
export default Header;
