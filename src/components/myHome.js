// import React, { useState } from 'react';
// import { AppBar,Box, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Container,List,ListItem,ListItemText, InputAdornment,TextField } from '@mui/material';
// import { AccountCircle } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
// //  import {searchIcon} from '@mui/icons-material/Search';
// const Header = () => {
//   // State for the user menu
//   const [anchorEl, setAnchorEl] = React.useState(null);
 
//   const [searchQuery, setSearchQuery] = useState('');
//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };


//     const data = [
//       { id: 1, name: 'John Doe' },
//       { id: 2, name: 'Jane Smith' },
//       { id: 3, name: 'Ravi Kumar' },
//       { id: 4, name: 'Sita Devi' },
//       { id: 5, name: 'Srinivas Reddy' },
//     ];
  
//     const handleSearchChange = (event) => {
//       setSearchQuery(event.target.value);
//     };
  


//     // Filter the data based on search query
//     const filteredData = data.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

    
//   return (
// //  <>
// //     <div>
// //      <AppBar position="sticky" color="#00FF00">
// //       <Toolbar>
// //         {/* Logo */}
// //         <Typography color="inherit" variant="h6"sx={{ flexGrow: 1 } }>
// //         Agnikula kshatriya Matrimony 
// //         </Typography>

// //         {/* Navigation Links */}
// //         <Button color="inherit" component={Link} to="/">
// //           Home
// //         </Button>
// //         <Button color="inherit" component={Link} to="/about">
// //           About Us
// //         </Button>
// //         <Button color="inherit" component={Link} to="/services">
// //           Services
// //         </Button>
// //         <Button color="inherit" component={Link} to="/contact">
// //           Contact
// //         </Button>
// //         <Button color="inherit" component={Link} to="/register">
// //           Register
// //         </Button>
// //         <Button color="inherit" component={Link} to="/login">
// //           Login
// //         </Button>

// //         {/* User Account Section */}
// //         <IconButton
// //           size="large"
// //           edge="end"
// //           color="inherit"
// //           onClick={handleMenu}
// //           aria-controls="menu-appbar"
// //           aria-haspopup="true"
// //         >
// //           <AccountCircle />
// //         </IconButton>

// //         <Menu
// //           anchorEl={anchorEl}
// //           anchorOrigin={{
// //             vertical: 'top',
// //             horizontal: 'right',
// //           }}
// //           keepMounted
// //           transformOrigin={{
// //             vertical: 'top',
// //             horizontal: 'right',
// //           }}
// //           open={Boolean(anchorEl)}
// //           onClose={handleClose}
// //         >
// //           <MenuItem onClick={handleClose}>Profile</MenuItem>
// //           <MenuItem onClick={handleClose}>My Account</MenuItem>
// //           <MenuItem onClick={handleClose}>Logout</MenuItem>
// //         </Menu>
    
// //       </Toolbar>
     
// //     </AppBar>
//     <Box
//       sx={{
//         position: 'relative',
//         width: '100%',
//         height: '400px', // Adjust the height of the container
//         backgroundImage: 'url(https://via.placeholder.com/800x400)', // Your image URL
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <TextField
//         label="Search"
//         variant="outlined"
//         value={searchQuery}
//         onChange={handleSearchChange}
//         sx={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           width: '60%', // Width of the search bar
//           backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background for better visibility on the image
//         }}
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <IconButton>
//                 <SearchIcon />
//               </IconButton>
//             </InputAdornment>
//           ),
//         }}
//       />
    
//     </Box>
//   );
// };
  




// export default Header;




import React, { useState } from 'react';
import { AppBar,Box, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Container,List,ListItem,ListItemText, InputAdornment,TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import backgroundimg from "../Images/background.jpg"
import { Link } from 'react-router-dom';
import { AccountCircle } from '@mui/icons-material';
const SearchOnImage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
 

  const handleMenu = (event) => {
   setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
   };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>

      <AppBar position="sticky" color="#00FF00">
       <Toolbar>
         {/* Logo */}
         <Typography color="inherit" variant="h6"sx={{ flexGrow: 1 } }>
         Agnikula kshatriya Matrimony 
         </Typography>
         {/* Navigation Links */}
         <Button color="inherit" component={Link} to="/dashboard">
           Home
         </Button>
         <Button color="inherit" component={Link} to="/about">
           About Us
         </Button>
         <Button color="inherit" component={Link} to="/services">
           Services
         </Button>
         <Button color="inherit" component={Link} to="/contact">
           Contact
         </Button>
         <Button color="inherit" component={Link} to="/register">
           Register
         </Button>
         <Button color="inherit" component={Link} to="/login">
          Login
         </Button>

         {/* User Account Section */}
         <IconButton
           size="large"
           edge="end"
           color="inherit"
           onClick={handleMenu}
           aria-controls="menu-appbar"
           aria-haspopup="true"
         >
           <AccountCircle />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
           }}
          keepMounted
         transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
         }}
         open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
         <MenuItem onClick={handleClose}>My Account</MenuItem>
         <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
    
      </Toolbar>
     
    </AppBar>
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '680px', // Adjust the height of the container
        backgroundImage: `url(${backgroundimg})`, // Your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <TextField
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%', // Width of the search bar
          backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background for better visibility on the image
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
    </>
  );
};

export default SearchOnImage;
