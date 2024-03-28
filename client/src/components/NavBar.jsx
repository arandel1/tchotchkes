import * as React from "react";
import { useNavigate, Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ViewByCategory from "./ViewByCategory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight: 20,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "25vw",
  },
}));

// const navigate = useNavigate();

// const clickHandler = (category) => {
//   navigate(`/${product.category}`);
// };

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "25vw",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Link to="/">
            <img
              height="150px"
              margin="15px"
              src="../assets/tchotchke.png"
              alt="Tchotchke Home"
            />
          </Link>
          <Box display="flex">
            <div id="searchBox">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon></SearchIcon>
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <div id="itemViews">
                <ViewByCategory></ViewByCategory>
                {/* <Link to="/viewAllItems">
                  <button>View All Items</button>
                </Link> */}
              </div>
            </div>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <div id="userBox">
              <Link to="/login">
                <button>Login</button>
              </Link>
              <Link to="/register">
                <button>Register</button>
              </Link>
              <Link to="/cart">
                <button>
                  View Cart{" "}
                  <ShoppingCartIcon
                    sx={{ marginLeft: "5px", fontSize: "medium" }}
                  />
                </button>
              </Link>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
