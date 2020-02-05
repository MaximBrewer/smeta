import React from 'react';
import {
  Link
} from "react-router-dom";
import axios from "axios";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LinkUI from '@material-ui/core/Link';

export default function ListItems(props) {

  const logout = (e) => {
    e.preventDefault();

    axios
      .post(
        "/logout",
        {
          "_token": window.csrf_token
        }
      )
      .then(res => {
        window.location.href = '/';
      })
      .catch(err => {
        if (err.response && err.response.data && err.response.data.errors) { }
      });
  };
  return (
    <div>
      <Link to="/personal">
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={window.__('Dashboard')} />
        </ListItem>
      </Link>
      <Link to="/personal/projects">
        <ListItem button>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary={window.__('Projects')} />
        </ListItem>
      </Link>
      <Link to="/personal/products">
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary={window.__('Products')} />
        </ListItem>
      </Link>
      <a href="/logout" onClick={logout}>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary={window.__('Logout')} />
        </ListItem>
      </a>
    </div>
  );
}