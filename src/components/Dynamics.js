import React from "react";
import PropTypes from "prop-types";

const Dynamics = ({ imageSrc, children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      }}
    >
      {children}
    </div>
  );
};

Dynamics.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Dynamics;
