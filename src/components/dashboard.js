import React from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia, Button, Drawer } from '@mui/material';
import { AccountCircle, Chat, Search } from '@mui/icons-material';
import { Navigate } from 'react-router-dom';
const dashboardStyles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
  },
  sidebar: {
    width: 240,
    backgroundColor: '#f4f4f4',
    paddingTop: '20px',
    position: 'fixed',
    height: '100vh',
  },
  sidebarItem: {
    padding: '15px',
    margin: '10px 0',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  sidebarIcon: {
    marginRight: '10px',
  },
  content: {
    marginLeft: '240px',
    padding: '20px',
    flex: 1,
  },
  profileCard: {
    marginBottom: '20px',
  },
  profileImage: {
    height: '200px',
    objectFit: 'cover',
  },
};

const profiles = [
  {
    id: 1,
    name: 'Priya Reddy',
    age: 28,
    image: 'https://via.placeholder.com/200',
    description: 'Looking for a life partner who shares similar interests.',
  },
  {
    id: 2,
    name: 'Anil Kumar',
    age: 30,
    image: 'https://via.placeholder.com/200',
    description: 'Professional, family-oriented, and fun-loving.',
  },
  {
    id: 3,
    name: 'Sneha Reddy',
    age: 25,
    image: 'https://via.placeholder.com/200',
    description: 'Loves traveling and exploring new places.',
  },
];

const Dashboard = () => {
  return (
    <Box sx={dashboardStyles.container}>
      {/* Sidebar */}
      <Box sx={dashboardStyles.sidebar}>
        <div style={dashboardStyles.sidebarItem}>
          <AccountCircle style={dashboardStyles.sidebarIcon} />
          <Typography variant="h6">Profile</Typography>
        </div>
        <div style={dashboardStyles.sidebarItem}>
          <Search style={dashboardStyles.sidebarIcon} />
          <Typography variant="h6">Search Matches</Typography>
        </div>
        <div style={dashboardStyles.sidebarItem}>
          <Chat style={dashboardStyles.sidebarIcon} />
          <Typography variant="h6">Messages</Typography>
        </div>
      </Box>

      {/* Main Content Area */}
      <Box sx={dashboardStyles.content}>
        <Typography variant="h4" gutterBottom>
          Featured Profiles
        </Typography>
        <Grid container spacing={3}>
          {profiles.map((profile) => (
            <Grid item xs={12} sm={6} md={4} key={profile.id}>
              <Card sx={dashboardStyles.profileCard}>
                <CardMedia
                  component="img"
                  height="200"
                  image={profile.image}
                  alt={profile.name}
                  sx={dashboardStyles.profileImage}
                />
                <CardContent>
                  <Typography variant="h6">{profile.name}, {profile.age}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {profile.description}
                  </Typography>
                  <Button variant="contained" color="primary" fullWidth>
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
