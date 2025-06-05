import React, { useState } from 'react';
import './buyerhome.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StarIcon from '@mui/icons-material/Star';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CategoryIcon from '@mui/icons-material/Category';
import books from '../data/books';

const categories = [
  { label: 'All', icon: <MenuBookIcon /> },
  { label: 'eBooks', icon: <AutoStoriesIcon /> },
  { label: 'New', icon: <StarIcon /> },
  { label: 'Bestsellers', icon: <FavoriteIcon /> },
  { label: 'Audiobooks', icon: <HeadphonesIcon /> },
  { label: 'Fiction', icon: <CategoryIcon /> },
  { label: 'Manga', icon: <CategoryIcon /> },
  { label: 'Crime', icon: <CategoryIcon /> },
];

function BuyerHome() {
  const [category, setCategory] = useState(0);
  const [search, setSearch] = useState('');

  const filteredBooks = books.filter(book => {
    const matchesCategory =
      category === 0 || book.category === categories[category].label;
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Box className="buyerhome-root">
      {/* Sidebar */}
      <Box className="buyerhome-sidebar">
        <Avatar
          sx={{ mb: 2, bgcolor: '#f5ede6', width: 48, height: 48 }}
          src="https://randomuser.me/api/portraits/lego/1.jpg"
        />
        <IconButton color="primary"><MenuBookIcon /></IconButton>
        <IconButton color="primary"><StarIcon /></IconButton>
        <IconButton color="primary"><FavoriteIcon /></IconButton>
        <IconButton color="primary"><HeadphonesIcon /></IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          variant="contained"
          sx={{
            borderRadius: 8,
            bgcolor: '#7c3aed',
            color: '#fff',
            px: 2,
            py: 1,
            mb: 1,
            fontWeight: 600,
            textTransform: 'none',
            boxShadow: '0 2px 8px #7c3aed22',
          }}
        >
          Subscribe
        </Button>
      </Box>

      {/* Main Content */}
      <Box className="buyerhome-main">
        {/* Search Bar */}
        <Box className="buyerhome-searchbar">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for books"
            value={search}
            onChange={e => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: { borderRadius: 8, bgcolor: '#fff' },
            }}
            className="buyerhome-searchfield"
          />
          <Button variant="contained" className="buyerhome-searchbutton">
            Search
          </Button>
        </Box>

        {/* Categories */}
        <Box className="buyerhome-tabs-container">
          <Tabs
            value={category}
            onChange={(_, v) => setCategory(v)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '.MuiTabs-flexContainer': { gap: 2 },
              '.MuiTabs-indicator': {
                height: 4,
                borderRadius: 2,
                background: 'linear-gradient(90deg, #7c3aed 0%, #0ea5e9 100%)',
                transition: 'all 0.4s cubic-bezier(.4,2,.3,1)',
              },
            }}
            TabIndicatorProps={{
              style: { transition: 'all 0.4s cubic-bezier(.4,2,.3,1)' }
            }}
          >
            {categories.map((cat, i) => (
              <Tab
                key={cat.label}
                icon={cat.icon}
                label={cat.label}
                sx={{
                  minWidth: 100,
                  borderRadius: 4,
                  bgcolor: category === i ? '#fff' : '#f7f3ef',
                  color: category === i ? '#7c3aed' : '#888',
                  fontWeight: 600,
                  fontSize: 16,
                  px: 2,
                  py: 1,
                  boxShadow: category === i ? '0 2px 8px #7c3aed22' : 'none',
                  transition:
                    'background 0.4s cubic-bezier(.4,2,.3,1), color 0.4s cubic-bezier(.4,2,.3,1), box-shadow 0.4s cubic-bezier(.4,2,.3,1)',
                  '&:hover': {
                    bgcolor: '#ede9fe',
                    color: '#7c3aed',
                  },
                }}
              />
            ))}
          </Tabs>
        </Box>

        {/* Popular Books */}
        <Typography variant="h6" fontWeight={700} color="#222" mb={2}>
          Popular
        </Typography>
        <Box className="buyerhome-booksgrid">
          {filteredBooks.map((book, idx) => {
            // Responsive expand direction for hover card
            let columns = 2;
            if (window.innerWidth >= 900) columns = 5;
            else if (window.innerWidth >= 600) columns = 3;
            const isRightmost = (idx + 1) % columns === 0;
            return (
              <Paper
                key={book.title}
                className={`book-card${isRightmost ? ' expand-left' : ''}`}
                sx={{
                  p: 2,
                  borderRadius: 4,
                  bgcolor: '#fff',
                  boxShadow: '0 2px 8px #0001',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                  minWidth: 0,
                  transition: 'none',
                }}
                elevation={0}
              >
                <img
                  src={book.img}
                  alt={book.title}
                  style={{
                    width: '70%',
                    maxWidth: 90,
                    height: 130,
                    objectFit: 'cover',
                    borderRadius: 8,
                    marginBottom: 12,
                    boxShadow: '0 4px 16px #7c3aed11',
                    transition: 'box-shadow 0.3s',
                  }}
                />
                <Typography
                  fontWeight={700}
                  fontSize={16}
                  color="#222"
                  sx={{ mb: 0.5, textAlign: 'center' }}
                >
                  {book.title}
                </Typography>
                <Typography
                  fontSize={14}
                  color="#7c3aed"
                  sx={{ textAlign: 'center' }}
                >
                  {book.author}
                </Typography>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 8,
                    right: 8,
                    bgcolor: '#f5ede6',
                    borderRadius: 2,
                    px: 1,
                    fontSize: 12,
                    color: '#7c3aed',
                    fontWeight: 600,
                  }}
                >
                  ★
                </Box>
                {/* Expanded details on hover */}
                <Box className="book-details">
                  <Typography fontWeight={600} fontSize={15} color="#7c3aed" sx={{ mb: 1 }}>
                    {book.title}
                  </Typography>
                  <Typography fontSize={14} color="#222" sx={{ mb: 0.5 }}>
                    Author: <b>{book.author}</b>
                  </Typography>
                  <Typography fontSize={14} color="#666" sx={{ mb: 0.5 }}>
                    Category: <b>{book.category}</b>
                  </Typography>
                  <Typography fontSize={14} color="#0ea5e9" sx={{ mb: 0.5 }}>
                    Price: <b>₹{book.price}</b>
                  </Typography>
                  <Typography fontSize={14} color="#f59e42" sx={{ mb: 0.5 }}>
                    Rating: <b>{book.rating} ★</b>
                  </Typography>
                  {book.description && (
                    <Typography fontSize={12} color="#888" sx={{ mt: 1 }}>
                      {book.description}
                    </Typography>
                  )}
                </Box>
              </Paper>
            );
          })}
        </Box>

        {/* Bestsellers Section */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mt: 4 }}>
          <Paper
            sx={{
              flex: 1.2,
              p: 3,
              borderRadius: 4,
              bgcolor: '#fff',
              boxShadow: '0 2px 8px #0001',
              display: 'flex',
              alignItems: 'center',
              gap: 3,
              mb: { xs: 2, md: 0 },
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
              alt="bestsellers"
              style={{ width: 70, height: 70, marginRight: 16 }}
            />
            <Box>
              <Typography fontWeight={700} fontSize={20} color="#222" mb={1}>
                2022 year 50 most popular Bestsellers
              </Typography>
              <Typography fontSize={15} color="#888" mb={2}>
                List of the most interesting books of the year based on customers and critics reviews
              </Typography>
              <Button
                variant="contained"
                sx={{
                  borderRadius: 8,
                  px: 3,
                  py: 1,
                  fontWeight: 600,
                  background: 'linear-gradient(90deg, #7c3aed 0%, #0ea5e9 100%)',
                  fontSize: 15,
                }}
              >
                View All
              </Button>
            </Box>
          </Paper>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Paper
              sx={{
                p: 2,
                borderRadius: 4,
                bgcolor: '#fff',
                boxShadow: '0 2px 8px #0001',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
                alt="kids"
                style={{ width: 40, height: 40 }}
              />
              <Typography fontWeight={600} fontSize={16} color="#222">
                Top 50 books for kids
              </Typography>
            </Paper>
            <Paper
              sx={{
                p: 2,
                borderRadius: 4,
                bgcolor: '#fff',
                boxShadow: '0 2px 8px #0001',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
                alt="classic"
                style={{ width: 40, height: 40 }}
              />
              <Typography fontWeight={600} fontSize={16} color="#222">
                Top 50 Classic books
              </Typography>
            </Paper>
            <Paper
              sx={{
                p: 2,
                borderRadius: 4,
                bgcolor: '#fff',
                boxShadow: '0 2px 8px #0001',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
                alt="scifi"
                style={{ width: 40, height: 40 }}
              />
              <Typography fontWeight={600} fontSize={16} color="#222">
                Top 50 Sci-fi books
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BuyerHome;
