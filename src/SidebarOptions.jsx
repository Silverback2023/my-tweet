import React from "react";
import "./SidebarOptions.css";
import PropTypes from 'prop-types';
import TwitterIcon from "@mui/icons-material/Twitter";

const SidebarOptions = ({ active, text, Icon }) => {
    return (
      <div className="sidebarOptions">
<Icon />
        <h2>{text}</h2>
      </div>
    );
  };
  
  SidebarOptions.propTypes = {
    active: PropTypes.bool,
    text: PropTypes.string,
    Icon: PropTypes.elementType,
  };
  
  export default SidebarOptions;
