import React from 'react';

import { CssBaseline, Grid } from '@material-ui/core';

import Header from './components/Header/Header';
import Information from './components/Information/Information';
import List from './components/List/List';

const App = () => {

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{width: '100%' }}>
                <Grid item xs={12} md={12}>
                    <Information />
                    <List />
                </Grid>
            </Grid>
        </>
    )
}

export default App;