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
import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Slide from '@mui/material/Slide';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Grow from '@mui/material/Grow';
import './sellerhome.css';

const recentActivities = [
  { action: 'Sold "React for Beginners"', time: '2 hours ago', type: 'sale' },
  { action: 'Added new eBook "Node.js Mastery"', time: 'Yesterday', type: 'add' },
  { action: 'Updated price for "Python Essentials"', time: '2 days ago', type: 'update' },
];

function SellerHome() {
  const stats = [
    { label: 'Total eBooks', value: 24, icon: <BookIcon color="primary" fontSize="large" /> },
    { label: 'Total Sales', value: 120, icon: <MonetizationOnIcon color="success" fontSize="large" /> },
    { label: 'Earnings', value: '$1,250', icon: <BarChartIcon color="warning" fontSize="large" /> },
  ];

  // Add New Book Modal State
  const [open, setOpen] = React.useState(false);
  const [newBook, setNewBook] = React.useState({
    title: '',
    author: '',
    price: '',
    description: '',
    cover: '',
  });
  const [books, setBooks] = React.useState([]);
  const [coverPreview, setCoverPreview] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setCoverPreview('');
  };
  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
    if (e.target.name === 'cover') {
      setCoverPreview(e.target.value);
    }
  };
  const handleAddBook = (e) => {
    e.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '', price: '', description: '', cover: '' });
    setCoverPreview('');
    handleClose();
  };

  // Modern color palette
  const accentGradient = 'linear-gradient(90deg, #7c3aed 0%, #0ea5e9 100%)';
  const glassBg = 'rgba(255,255,255,0.7)';
  const glassBorder = '1.5px solid #e0e7ff';

  return (
    <Box className="sellerhome-root">
      {/* Header */}
      <Box className="sellerhome-header-glass">
        <Box className="sellerhome-profile">
          <Avatar
            src="https://randomuser.me/api/portraits/men/32.jpg"
            className="sellerhome-avatar-glass"
          />
          <Box>
            <Typography variant="h4" className="sellerhome-greeting-glass">
              Welcome back, Seller!
            </Typography>
            <Typography variant="subtitle1" className="sellerhome-subgreeting-glass">
              Manage your eBooks and sales with ease.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={4} justifyContent="center" className="sellerhome-stats-grid-glass">
        {stats.map((stat, i) => (
          <Grid item xs={12} sm={4} key={stat.label}>
            <Card className="sellerhome-stats-card-glass">
              <Box className="sellerhome-stats-icon-glass">{stat.icon}</Box>
              <Typography variant="h3" className="sellerhome-stats-value-glass">
                {stat.value}
              </Typography>
              <Typography className="sellerhome-stats-label-glass">
                {stat.label}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Main Actions */}
      <Box className="sellerhome-actions-glass">
        <Button
          variant="outlined"
          startIcon={<BookIcon />}
          className="sellerhome-action-btn-glass"
        >
          Manage eBooks
        </Button>
        <Button
          variant="outlined"
          startIcon={<MonetizationOnIcon />}
          className="sellerhome-action-btn-glass secondary"
        >
          View Sales
        </Button>
      </Box>

      {/* Floating Action Button for Add Book */}
      <Tooltip title="Add New Book" placement="left">
        <Fab
          color="primary"
          onClick={handleOpen}
          className="sellerhome-fab"
        >
          <AddCircleOutlineIcon fontSize="large" />
        </Fab>
      </Tooltip>

      {/* Add New Book Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth TransitionComponent={Slide} keepMounted>
        <DialogTitle className="sellerhome-modal-title">
          Add New Book
          <IconButton
            aria-label="close"
            onClick={handleClose}
            className="sellerhome-modal-close"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <form onSubmit={handleAddBook}>
          <DialogContent dividers className="sellerhome-modal-content">
            <TextField
              label="Title"
              name="title"
              value={newBook.title}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
              className="sellerhome-modal-input"
            />
            <TextField
              label="Author"
              name="author"
              value={newBook.author}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
              className="sellerhome-modal-input"
            />
            <TextField
              label="Price"
              name="price"
              value={newBook.price}
              onChange={handleChange}
              required
              fullWidth
              type="number"
              inputProps={{ min: 0 }}
              variant="outlined"
              className="sellerhome-modal-input"
            />
            <TextField
              label="Description"
              name="description"
              value={newBook.description}
              onChange={handleChange}
              multiline
              rows={3}
              fullWidth
              variant="outlined"
              className="sellerhome-modal-input"
            />
            <TextField
              label="Cover Image URL"
              name="cover"
              value={newBook.cover}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              className="sellerhome-modal-input"
            />
            {coverPreview && (
              <Box className="sellerhome-modal-cover-preview">
                <CardMedia
                  component="img"
                  image={coverPreview}
                  alt="Book Cover Preview"
                  className="sellerhome-modal-cover-img"
                />
              </Box>
            )}
          </DialogContent>
          <DialogActions className="sellerhome-modal-actions">
            <Button onClick={handleClose} className="sellerhome-modal-cancel">Cancel</Button>
            <Button type="submit" variant="contained" className="sellerhome-modal-submit">Add Book</Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* Books Grid */}
      {books.length > 0 && (
        <Box className="sellerhome-books-section">
          <Typography variant="h5" className="sellerhome-books-title">
            Your Books
          </Typography>
          <Grid container spacing={4}>
            {books.map((book, idx) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                <Card className="sellerhome-book-card">
                  <CardMedia
                    component="img"
                    image={book.cover || 'https://via.placeholder.com/120x160?text=No+Cover'}
                    alt={book.title}
                    className="sellerhome-book-cover"
                  />
                  <CardContent className="sellerhome-book-content">
                    <Typography variant="h6" className="sellerhome-book-title">
                      {book.title}
                    </Typography>
                    <Typography variant="subtitle2" className="sellerhome-book-author">
                      {book.author}
                    </Typography>
                    <Typography variant="body2" className="sellerhome-book-description">
                      {book.description}
                    </Typography>
                    <Typography variant="subtitle1" className="sellerhome-book-price">
                      ${book.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Recent Activity Timeline */}
      <Box className="sellerhome-activity-timeline">
        <Typography variant="h6" className="sellerhome-activity-title-timeline">
          Recent Activity
        </Typography>
        {recentActivities.length === 0 ? (
          <Typography color="text.secondary" className="sellerhome-activity-none">
            No recent activity.
          </Typography>
        ) : (
          <Timeline position="right" className="sellerhome-timeline">
            {recentActivities.map((activity, idx) => (
              <TimelineItem key={idx} className="sellerhome-timeline-item">
                <TimelineSeparator>
                  <TimelineDot
                    className={`sellerhome-timeline-dot sellerhome-timeline-dot-${activity.type}`}
                  />
                  {idx < recentActivities.length - 1 && <TimelineConnector className="sellerhome-timeline-connector" />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography className="sellerhome-timeline-action">{activity.action}</Typography>
                  <Typography variant="caption" color="text.secondary" className="sellerhome-timeline-time">
                    {activity.time}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        )}
      </Box>
    </Box>
  );
}

export default SellerHome;
