import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';

const Header = () => {
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      xs={12}
    >
      <Typography variant="h3">Dio Shopping</Typography>
      <Link to="/">
        <Button color="primary">Home</Button>
      </Link>
      <Link to="/contacts">
        <Button color="primary">Contact</Button>
      </Link>
      <Cart />
    </Grid>
  );
};

export default Header;
