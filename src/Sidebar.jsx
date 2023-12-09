import React from 'react'
import PropTypes from 'prop-types'
import './Sidebar.css'
import TwitterIcon from "@mui/icons-material/Twitter"

const Sidebar = props => {
  return (
    <div className="Sidebar">
      <TwitterIcon className= "sidebar_TwitterIcon" />
    </div>
  );
};

Sidebar.propTypes = {

}

export default Sidebar
