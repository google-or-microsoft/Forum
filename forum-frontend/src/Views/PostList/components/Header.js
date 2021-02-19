import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 1300px;
  padding: 50px;

  font-size: 30px;
`;

const Header = () => {
  return (
    <StyledHeader>
      My Post List
      <Button
        variant="outlined"
        color="primary"
        component={Link}
        to="/posts/new/edit"
      >
        ADD POST
      </Button>
    </StyledHeader>
  );
};

export default Header;
