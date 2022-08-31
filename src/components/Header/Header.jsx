import React from 'react';
import {AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Flight Search
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Search for flights
                    </Typography>

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder="From..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                        <InputBase placeholder="To..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                    </div>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;