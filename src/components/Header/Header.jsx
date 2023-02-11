import { LogoDev } from "@mui/icons-material";
import { Container, TextField } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Container maxWidth="fluid">
      <LogoDev />
      <TextField
        id="outlined-search"
        label="Nhập tên diễn viên, phim, ..."
        type="search"
      />
    </Container>
  );
};

export default Header;
