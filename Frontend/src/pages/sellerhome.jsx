import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import BookIcon from '@mui/icons-material/Book';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BarChartIcon from '@mui/icons-material/BarChart';
<<<<<<< HEAD

// Example: Recent activity data (dummy)
const recentActivities = [
  { action: 'Sold "React for Beginners"', time: '2 hours ago' },
  { action: 'Added new eBook "Node.js Mastery"', time: 'Yesterday' },
  { action: 'Updated price for "Python Essentials"', time: '2 days ago' },
];

function SellerHome() {
  // Dummy stats for illustration
=======
import Avatar from '@mui/material/Avatar';
import './sellerhome.css';

const recentActivities = [
  { action: 'Sold "React for Beginners"', time: '2 hours ago', type: 'sale' },
  { action: 'Added new eBook "Node.js Mastery"', time: 'Yesterday', type: 'add' },
  { action: 'Updated price for "Python Essentials"', time: '2 days ago', type: 'update' },
];

function SellerHome() {
>>>>>>> 09b2941 (Books updated)
  const stats = [
    { label: 'Total eBooks', value: 24, icon: <BookIcon color="primary" fontSize="large" /> },
    { label: 'Total Sales', value: 120, icon: <MonetizationOnIcon color="success" fontSize="large" /> },
    { label: 'Earnings', value: '$1,250', icon: <BarChartIcon color="warning" fontSize="large" /> },
  ];

  return (
<<<<<<< HEAD
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'linear-gradient(120deg, #e0e7ff 0%, #f0fdfa 100%)',
        p: { xs: 2, sm: 4 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          width: '100%',
          maxWidth: 1100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 4,
          mt: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={800}
          sx={{
            color: '#0ea5e9',
            letterSpacing: 2,
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          EBook Seller Dashboard
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddCircleOutlineIcon />}
          sx={{
            borderRadius: 3,
            px: 4,
            fontWeight: 700,
            boxShadow: 1,
            fontSize: 18,
            bgcolor: '#0ea5e9',
            '&:hover': { bgcolor: '#0369a1' },
          }}
=======
    <Box className="sellerhome-root">
      {/* Header */}
      <Box className="sellerhome-header">
        <Box className="sellerhome-profile">
          <Avatar
            src="https://randomuser.me/api/portraits/men/32.jpg"
            className="sellerhome-avatar"
          />
          <span className="sellerhome-greeting">Welcome back, Seller!</span>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddCircleOutlineIcon />}
          className="sellerhome-add-btn"
>>>>>>> 09b2941 (Books updated)
        >
          Add New Collection
        </Button>
      </Box>

      {/* Stats Cards */}
<<<<<<< HEAD
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ width: '100%', maxWidth: 1100, mb: 4 }}
      >
        {stats.map((stat) => (
          <Grid item xs={12} sm={4} key={stat.label}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: '#fff',
                borderRadius: 4,
                border: '1.5px solid #e0e7ff',
                minHeight: 180,
                gap: 1,
              }}
            >
              <Box sx={{ mb: 1 }}>{stat.icon}</Box>
              <Typography
                variant="h4"
                fontWeight={800}
                sx={{ color: '#0ea5e9', fontFamily: 'Montserrat, sans-serif' }}
              >
                {stat.value}
              </Typography>
              <Typography
                color="text.secondary"
                sx={{
                  fontWeight: 600,
                  fontSize: 18,
                  letterSpacing: 1,
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
=======
      <Grid container spacing={4} justifyContent="center" className="sellerhome-stats-grid">
        {stats.map((stat) => (
          <Grid item xs={12} sm={4} key={stat.label}>
            <Paper elevation={0} className="sellerhome-stats-card">
              <Box sx={{ mb: 1 }}>{stat.icon}</Box>
              <Typography variant="h4" fontWeight={800} sx={{ color: '#0ea5e9' }}>
                {stat.value}
              </Typography>
              <Typography color="text.secondary" sx={{ fontWeight: 600, fontSize: 18, letterSpacing: 1 }}>
>>>>>>> 09b2941 (Books updated)
                {stat.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Main Actions */}
<<<<<<< HEAD
      <Box
        sx={{
          display: 'flex',
          gap: 3,
          mb: 5,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          size="large"
          startIcon={<BookIcon />}
          sx={{
            borderRadius: 3,
            px: 4,
            fontWeight: 700,
            fontSize: 17,
            borderColor: '#0ea5e9',
            color: '#0ea5e9',
            '&:hover': { bgcolor: '#e0f2fe', borderColor: '#0369a1', color: '#0369a1' },
          }}
=======
      <Box className="sellerhome-actions">
        <Button
          variant="outlined"
          startIcon={<BookIcon />}
          className="sellerhome-action-btn"
>>>>>>> 09b2941 (Books updated)
        >
          Manage eBooks
        </Button>
        <Button
          variant="outlined"
<<<<<<< HEAD
          color="secondary"
          size="large"
          startIcon={<MonetizationOnIcon />}
          sx={{
            borderRadius: 3,
            px: 4,
            fontWeight: 700,
            fontSize: 17,
            borderColor: '#f59e42',
            color: '#f59e42',
            '&:hover': { bgcolor: '#fff7ed', borderColor: '#ea580c', color: '#ea580c' },
          }}
=======
          startIcon={<MonetizationOnIcon />}
          className="sellerhome-action-btn secondary"
>>>>>>> 09b2941 (Books updated)
        >
          View Sales
        </Button>
      </Box>

      {/* Recent Activity */}
<<<<<<< HEAD
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          maxWidth: 600,
          p: { xs: 2, sm: 4 },
          mb: 4,
          bgcolor: '#f8fafc',
          borderRadius: 4,
          border: '1.5px solid #e0e7ff',
        }}
      >
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{
            mb: 2,
            color: '#0ea5e9',
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: 1,
          }}
        >
          Recent Activity
        </Typography>
=======
      <Box className="sellerhome-activity-list">
        <div className="sellerhome-activity-title">Recent Activity</div>
>>>>>>> 09b2941 (Books updated)
        {recentActivities.length === 0 ? (
          <Typography color="text.secondary" sx={{ fontStyle: 'italic' }}>
            No recent activity.
          </Typography>
        ) : (
          recentActivities.map((activity, idx) => (
<<<<<<< HEAD
            <Box
              key={idx}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 1.5,
                borderBottom: idx < recentActivities.length - 1 ? '1px solid #e0e7ff' : 'none',
              }}
            >
              <Typography sx={{ fontWeight: 500 }}>{activity.action}</Typography>
              <Typography variant="caption" color="text.secondary">
                {activity.time}
              </Typography>
            </Box>
          ))
        )}
      </Paper>

=======
            <div className="sellerhome-activity-row" key={idx}>
              <span>
                <span className={`sellerhome-activity-dot ${activity.type}`}></span>
                {activity.action}
              </span>
              <Typography variant="caption" color="text.secondary">
                {activity.time}
              </Typography>
            </div>
          ))
        )}
      </Box>
>>>>>>> 09b2941 (Books updated)
    </Box>
  );
}

export default SellerHome;
