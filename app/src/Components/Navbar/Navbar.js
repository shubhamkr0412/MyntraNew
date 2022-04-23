import styled from "@emotion/styled";
import { AppBar, Avatar, InputBase, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import { Box } from "@mui/system";

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Link } from 'react-router-dom';
import { MenuItemUnstyled } from "@mui/base";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "lightgray",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  width: "40%"

}))
const Icons = styled(Box)(({ theme }) => ({
  backgroundColor: "white",

}))

const Navbar = ({ CartItems }) => {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const filter = 0;

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Link to='/'><Avatar sx={{ width: 50, height: 50 }} src="https://images.indianexpress.com/2021/01/myntra.png" /></Link>

        <Link to='/mens'><Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Men
        </Typography></Link>
        <Link to='/womens'> <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Women
        </Typography></Link>
        <Link to='/kids'> <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Kids
        </Typography></Link>
        <Link to='/kids'> <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Home & Living
        </Typography></Link>
        <Link to='/kids'> <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Beauty
        </Typography></Link>

        <Link to='/kids'> <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Studio
        </Typography></Link>

        <Search><InputBase placeholder="search..." /></Search>

        <PermIdentityIcon onClick={e => setOpen(true)} />

        <FavoriteBorderIcon />
        <ShoppingBagIcon onClick={() => setCartOpen(true)} />
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"

          open={open}
          onClose={e => setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem >Profile</MenuItem>
          <MenuItem >My account</MenuItem>
          <MenuItem >Logout</MenuItem>
        </Menu>

        <Menu
          id="cart-items"
          aria-labelledby="demo-positioned-button"

          open={cartOpen}
          onClose={() => setCartOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          {CartItems && CartItems.map((item) => (
            <MenuItem>
              {item.Category} <br />
              {item.price}
            </MenuItem>
          ))}
        </Menu>
      </StyledToolbar>

    </AppBar>
  );
};

export default Navbar;
