import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./index.styles";
export default function Index({ title }) {
    const classes = useStyles();
    return (
      <AppBar position='static' color='secondary'>
        <Toolbar className={classes.headerToolBar} >
          <Typography variant='h3'>{ title }</Typography>
        </Toolbar>
      </AppBar>
    );
  }
  