import { Avatar, Grid, TextField } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Grid container sx={{ alignItems: "center" }}>
      <Grid item xs={2}>
        <p>Logo is here</p>
      </Grid>
      <Grid item xs={7}>
        <TextField
          id="outlined-search"
          label="Nhập tên diễn viên, phim, ..."
          type="search"
        />
      </Grid>
      <Grid item xs={3}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </Grid>
    </Grid>
  );
};

export default Header;
