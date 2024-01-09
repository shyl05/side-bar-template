import * as React from 'react';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import './Sidebar.css';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';


export default function SideBar() {
  return (
    <Sidebar className="app">
        <Menu>
            <MenuItem className="menu1">
                <img src={require('../assets/pie-chart.png')} className="app-logo-style" alt="app-logo" />
            </MenuItem>
            <MenuItem icon={<HomeOutlinedIcon />}/>
            <MenuItem icon={<GridViewOutlinedIcon />}/>
            <MenuItem icon={<TextSnippetOutlinedIcon />}/>
            <MenuItem icon={<MessageOutlinedIcon />}/>
            <MenuItem icon={<ShowChartOutlinedIcon />}/>
            <MenuItem icon={<PersonIcon />}/>
            <MenuItem icon={<SettingsIcon />}/>
        </Menu>
    </Sidebar>
  );
}