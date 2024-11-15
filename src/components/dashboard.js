// import React from 'react';
// import { Box, Grid, Typography, Card, CardContent, CardMedia, Button, Drawer } from '@mui/material';
// import { AccountCircle, Chat, Search } from '@mui/icons-material';
// import { Navigate } from 'react-router-dom';
// // import {logout } from './logout'
// import { useDispatch } from 'react-redux';
// // import { logout } from '../redux/actions/authActions';
// // import { Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

 

// const dashboardStyles = {
//   container: {
//     display: 'flex',
//     minHeight: '100vh',
//   },
//   sidebar: {
//     width: 240,
//     backgroundColor: '#f4f4f4',
//     paddingTop: '20px',
//     position: 'fixed',
//     height: '100vh',
//   },
//   sidebarItem: {
//     padding: '15px',
//     margin: '10px 0',
//     display: 'flex',
//     alignItems: 'center',
//     cursor: 'pointer',
//   },
//   sidebarIcon: {
//     marginRight: '10px',
//   },
//   content: {
//     marginLeft: '240px',
//     padding: '20px',
//     flex: 1,
//   },
//   profileCard: {
//     marginBottom: '20px',
//   },
//   profileImage: {
//     height: '200px',
//     objectFit: 'cover',
//   },
// };

// const profiles = [
//   {
//     id: 1,
//     name: 'Priya Reddy',
//     age: 28,
//     image: 'https://via.placeholder.com/200',
//     description: 'Looking for a life partner who shares similar interests.',
//   },
//   {
//     id: 2,
//     name: 'Anil Kumar',
//     age: 30,
//     image: 'https://via.placeholder.com/200',
//     description: 'Professional, family-oriented, and fun-loving.',
//   },
//   {
//     id: 3,
//     name: 'Sneha Reddy',
//     age: 25,
//     image: 'https://via.placeholder.com/200',
//     description: 'Loves traveling and exploring new places.',
//   },
// ];

// const Dashboard = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // dispatch(logout());
//     navigate('/login');
//   };
//   return (
//     <Box sx={dashboardStyles.container}>
//       {/* Sidebar */}
//       <Box sx={dashboardStyles.sidebar}>
//         <div style={dashboardStyles.sidebarItem}>
//           <AccountCircle style={dashboardStyles.sidebarIcon} />
//           <Typography variant="h6">Profile</Typography>
//         </div>
//         <div style={dashboardStyles.sidebarItem}>
//           <Search style={dashboardStyles.sidebarIcon} />
//           <Typography variant="h6">Search Matches</Typography>
//         </div>
//         <div style={dashboardStyles.sidebarItem}>
//           <Chat style={dashboardStyles.sidebarIcon} />
//           <Typography variant="h6">Messages</Typography>
//         </div>
//       </Box>

//       {/* Main Content Area */}
//       <Box sx={dashboardStyles.content}>
//         <Typography variant="h4" gutterBottom>
//           Featured Profiles
//         </Typography>
//         <Grid container spacing={3}>
//           {profiles.map((profile) => (
//             <Grid item xs={12} sm={6} md={4} key={profile.id}>
//               <Card sx={dashboardStyles.profileCard}>
//                 <CardMedia
//                   component="img"
//                   height="200"
//                   image={profile.image}
//                   alt={profile.name}
//                   sx={dashboardStyles.profileImage}
//                 />
//                 <CardContent>
//                   <Typography variant="h6">{profile.name}, {profile.age}</Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {profile.description}
//                   </Typography>
//                   <Button variant="contained" color="primary" fullWidth>
//                     View Profile
//                   </Button>
//                   <Button onClick={handleLogout} variant="contained" color="secondary">
//       Logout
//     </Button>

//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom'; // Import Navigate for React Router v6
import { verifyToken } from './token'; // Import the verifyToken function

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Initializing as null to indicate loading state
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      // Assuming verifyToken returns a Promise that resolves with { isValid: true, user: {} }
      verifyToken(token).then((result) => {
        if (result.isValid) {
          setIsAuthenticated(true);
          setUserData(result.user);  // Save user data if token is valid
        } else {
          setIsAuthenticated(false);
          localStorage.removeItem('token'); // Remove invalid token
        }
      }).catch(() => {
        setIsAuthenticated(false);
        localStorage.removeItem('token'); // Remove invalid token if verification fails
      });
    } else {
      setIsAuthenticated(false); // No token found, set as unauthenticated
    }
  }, []);

  // Show loading state while authentication is being checked
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Authenticated, render dashboard content
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>Here is your protected content!</p>
      <p>Username: {userData.username}</p>
      <p>Email: {userData.email}</p>
      {/* Render more user data here */}
    </div>
  );
};

export default Dashboard;
