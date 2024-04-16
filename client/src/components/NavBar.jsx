import * as React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// OLD NAVBAR CODE COMMENTED OUT BELOW
// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   marginRight: 20,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "25vw",
//   },
// }));

// const navigate = useNavigate();

// const clickHandler = (category) => {
//   navigate(`/${product.category}`);
// };

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   width: "100%",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     [theme.breakpoints.up("sm")]: {
//       width: "25vw",
//       "&:focus": {
//         width: "30ch",
//       },
//     },
//   },
// }));


  // return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="fixed">
    //     <Toolbar>
    //       <Link to="/">
    //         <img
    //           height="150px"
    //           margin="15px"
    //           src="../assets/tchotchke.png"
    //           alt="Tchotchke Home"
    //         />
    //       </Link>
    //       <Box display="flex">
    //         <div id="searchBox">
    //           <Search>
    //             <SearchIconWrapper>
    //               <SearchIcon></SearchIcon>
    //             </SearchIconWrapper>
    //             <StyledInputBase
    //               placeholder="Search…"
    //               inputProps={{ "aria-label": "search" }}
    //             />
    //           </Search>
    //           <div id="itemViews">
    //             <ViewByCategory></ViewByCategory>
    //             {/* <Link to="/viewAllItems">
    //               <button>View All Items</button>
    //             </Link> */}
    //           </div>
    //         </div>
    //       </Box>
          
    //       <Box sx={{ flexGrow: 1 }} />
    //       <Box sx={{ display: { xs: "none", md: "flex" } }}>
    //       <Button component={Link} to="/products" style={{ color: "white" }}>
    //           View All
    //         </Button>
    //         <Button component={Link} to="/login" style={{ color: "white" }}>
    //           Login
    //         </Button>
    //         <Button component={Link} to="/register" style={{ color: "white" }}>
    //           Register
    //         </Button>
            
    //         <Button component={Link} to="/cart" style={{ color: "white" }}>
    //             View Cart{" "}
    //             <ShoppingCartIcon
    //               sx={{ marginLeft: "5px", fontSize: "medium" }}
    //             />
    //         </Button>
    //       </Box>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
  // );

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top py-0 d-flex flex-wrap">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src="../assets/fleurdetchotchke-nobg.png"
            alt="Tchotchke Home"
            height="150px"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                View All
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/search" className="nav-link">
                {/* Search functionality goes here */}
                <span className="fas fa-search"></span> Search
              </Link>
            </li>
            {/* Add more navigation links here */}
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                View Cart{" "}
                <i className="fas fa-shopping-cart"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
