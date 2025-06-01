import React, { useState } from 'react';
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
import Stack from '@mui/material/Stack';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StarIcon from '@mui/icons-material/Star';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CategoryIcon from '@mui/icons-material/Category';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Drawer from '@mui/material/Drawer';

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

const books = [
  { title: 'Fairy Tale', author: 'Stephen King', img: 'https://covers.openlibrary.org/b/id/10521213-L.jpg' },
  { title: 'Never After', author: 'Stephanie Garber', img: 'https://covers.openlibrary.org/b/id/10958339-L.jpg' },
  { title: 'Klara and the Sun', author: 'Kazuo Ishiguro', img: 'https://covers.openlibrary.org/b/id/10521214-L.jpg' },
  { title: 'Mist and Fury', author: 'Sarah J. Maas', img: 'https://covers.openlibrary.org/b/id/10521215-L.jpg' },
  { title: 'Hamnet', author: 'Maggie O\'Farrell', img: 'https://covers.openlibrary.org/b/id/10521216-L.jpg' },
];

function BuyerHome() {
  const [category, setCategory] = useState(0);
  const [search, setSearch] = useState('');

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'linear-gradient(135deg, #f5ede6 0%, #e0e7ff 100%)', p: 0, m: 0, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100vw', boxSizing: 'border-box' }}>
      {/* Sidebar */}
      <Box sx={{ width: { xs: 0, md: 70 }, minWidth: { xs: 0, md: 70 }, bgcolor: '#fff', display: { xs: 'none', md: 'flex' }, flexDirection: 'column', alignItems: 'center', py: 2, borderTopLeftRadius: { md: 24 }, borderBottomLeftRadius: { md: 24 }, boxShadow: { md: '2px 0 8px #0001' } }}>
        <Avatar sx={{ mb: 2, bgcolor: '#f5ede6', width: 48, height: 48 }} src="https://randomuser.me/api/portraits/lego/1.jpg" />
        <IconButton color="primary"><MenuBookIcon /></IconButton>
        <IconButton color="primary"><StarIcon /></IconButton>
        <IconButton color="primary"><FavoriteIcon /></IconButton>
        <IconButton color="primary"><HeadphonesIcon /></IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Button variant="contained" sx={{ borderRadius: 8, bgcolor: '#7c3aed', color: '#fff', px: 2, py: 1, mb: 1, fontWeight: 600, textTransform: 'none', boxShadow: '0 2px 8px #7c3aed22' }}>Subscribe</Button>
      </Box>
      {/* Main Content */}
      <Box sx={{ flex: 1, p: { xs: 1, sm: 2, md: 4 }, width: '100%', maxWidth: 1400, mx: 'auto' }}>
        {/* Search Bar */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
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
            sx={{ borderRadius: 8, bgcolor: '#fff', mr: { xs: 0, sm: 2 } }}
          />
          <Button variant="contained" sx={{ borderRadius: 8, px: 4, py: 1.5, fontWeight: 600, background: 'linear-gradient(90deg, #7c3aed 0%, #0ea5e9 100%)', fontSize: 18, width: { xs: '100%', sm: 'auto' } }}>Search</Button>
        </Box>
        {/* Categories */}
        <Tabs
          value={category}
          onChange={(_, v) => setCategory(v)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ mb: 3, '.MuiTabs-flexContainer': { gap: 2 } }}
        >
          {categories.map((cat, i) => (
            <Tab key={cat.label} icon={cat.icon} label={cat.label} sx={{ minWidth: 100, borderRadius: 4, bgcolor: category === i ? '#fff' : '#f7f3ef', color: category === i ? '#7c3aed' : '#888', fontWeight: 600, fontSize: 16, px: 2, py: 1, boxShadow: category === i ? '0 2px 8px #7c3aed22' : 'none' }} />
          ))}
        </Tabs>
        {/* Popular Books */}
        <Typography variant="h6" fontWeight={700} color="#222" mb={2}>Popular</Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(3, 1fr)', md: 'repeat(5, 1fr)' }, gap: 3, pb: 2 }}>
          {books.map(book => (
            <Paper key={book.title} sx={{ p: 2, borderRadius: 4, bgcolor: '#fff', boxShadow: '0 2px 8px #0001', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', minWidth: 0 }}>
              <img src={book.img} alt={book.title} style={{ width: '70%', maxWidth: 90, height: 130, objectFit: 'cover', borderRadius: 8, marginBottom: 12 }} />
              <Typography fontWeight={700} fontSize={16} color="#222" sx={{ mb: 0.5, textAlign: 'center' }}>{book.title}</Typography>
              <Typography fontSize={14} color="#7c3aed" sx={{ textAlign: 'center' }}>{book.author}</Typography>
              <Box sx={{ position: 'absolute', bottom: 8, right: 8, bgcolor: '#f5ede6', borderRadius: 2, px: 1, fontSize: 12, color: '#7c3aed', fontWeight: 600 }}>★</Box>
            </Paper>
          ))}
        </Box>
        {/* Bestsellers Section */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mt: 4 }}>
          <Paper sx={{ flex: 1.2, p: 3, borderRadius: 4, bgcolor: '#fff', boxShadow: '0 2px 8px #0001', display: 'flex', alignItems: 'center', gap: 3, mb: { xs: 2, md: 0 } }}>
            <img src="https://cdn-icons-png.flaticon.com/512/29/29302.png" alt="bestsellers" style={{ width: 70, height: 70, marginRight: 16 }} />
            <Box>
              <Typography fontWeight={700} fontSize={20} color="#222" mb={1}>2022 year 50 most popular Bestsellers</Typography>
              <Typography fontSize={15} color="#888" mb={2}>List of the most interesting books of the year based on customers and critics reviews</Typography>
              <Button variant="contained" sx={{ borderRadius: 8, px: 3, py: 1, fontWeight: 600, background: 'linear-gradient(90deg, #7c3aed 0%, #0ea5e9 100%)', fontSize: 15 }}>View All</Button>
            </Box>
          </Paper>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Paper sx={{ p: 2, borderRadius: 4, bgcolor: '#fff', boxShadow: '0 2px 8px #0001', display: 'flex', alignItems: 'center', gap: 2 }}>
              <img src="https://cdn-icons-png.flaticon.com/512/29/29302.png" alt="kids" style={{ width: 40, height: 40 }} />
              <Typography fontWeight={600} fontSize={16} color="#222">Top 50 books for kids</Typography>
            </Paper>
            <Paper sx={{ p: 2, borderRadius: 4, bgcolor: '#fff', boxShadow: '0 2px 8px #0001', display: 'flex', alignItems: 'center', gap: 2 }}>
              <img src="https://cdn-icons-png.flaticon.com/512/29/29302.png" alt="classic" style={{ width: 40, height: 40 }} />
              <Typography fontWeight={600} fontSize={16} color="#222">Top 50 Classic books</Typography>
            </Paper>
            <Paper sx={{ p: 2, borderRadius: 4, bgcolor: '#fff', boxShadow: '0 2px 8px #0001', display: 'flex', alignItems: 'center', gap: 2 }}>
              <img src="https://cdn-icons-png.flaticon.com/512/29/29302.png" alt="scifi" style={{ width: 40, height: 40 }} />
              <Typography fontWeight={600} fontSize={16} color="#222">Top 50 Sci-fi books</Typography>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BuyerHome;
