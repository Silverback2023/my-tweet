import React from "react";
import "./Sidebar.css";
import PropTypes from 'prop-types';
import SidebarOptions from "./SidebarOptions";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { Button } from "@mui/material";

const Sidebar = props => {
  return (
    <div className="sidebar">
        <TwitterIcon className="sidebar_TwitterIcon" />
        
        <SidebarOptions active Icon={HomeIcon} text="Home" />
        <SidebarOptions Icon={SearchIcon} text="Search" />
        <SidebarOptions Icon={MailOutlineIcon} text="Messages" />
        <SidebarOptions Icon={NotificationsIcon} text="Notifications" />
        <SidebarOptions Icon={PermIdentityIcon} text="Profile" />
        <SidebarOptions Icon={ListAltIcon} text="Lists" />
        <Button variant="outlined" className="sidebar_TweetButton" fullWidth>
        Tweet
        </Button>

    </div>
  );
};

Sidebar.propTypes = {

}

export default Sidebar
