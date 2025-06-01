import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import bgImg from '../assets/bg.jpg';

function About() {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', width: '100vw', bgcolor: '#fcfaef', overflow: 'hidden', p: { xs: 1, sm: 2, md: 0 } }}>
      {/* Navbar */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: { xs: 'center', sm: 'flex-start' }, alignItems: 'center', px: { xs: 2, sm: 6 }, py: { xs: 2, sm: 3 }, gap: 4, fontSize: { xs: 16, sm: 18 }, color: '#888', fontWeight: 500, letterSpacing: 1 }}>
        <span style={{ cursor: 'pointer', color: '#888' }}>HOME</span>
        <span style={{ cursor: 'pointer', color: '#888' }}>ABOUT</span>
        <span style={{ cursor: 'pointer', color: '#888' }}>PRODUCT</span>
        <span style={{ cursor: 'pointer', color: '#888' }}>CONTACT</span>
      </Box>
      {/* Main Content */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, height: { xs: 'auto', md: 'calc(100vh - 80px)' }, alignItems: 'stretch', justifyContent: 'center', position: 'relative' }}>
        {/* Left: Text & Button */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', pl: { xs: 1, sm: 2, md: 10 }, zIndex: 2, py: { xs: 2, md: 0 } }}>
          <Typography variant="h2" sx={{ color: '#25605a', fontWeight: 600, mb: 3, fontSize: { xs: 28, sm: 36, md: 56 } }}>
            E-Book Library
          </Typography>
          <Typography sx={{ color: '#6b6b6b', fontSize: { xs: 16, sm: 18, md: 22 }, maxWidth: 500, mb: 4 }}>
            Turn Every Screen Into a Bookshelf — Explore Thousands of eBooks Across Every Genre, Download Instantly, and Start Reading Wherever You Are, Whenever You Want!
          </Typography>
          <Button
            variant="contained"
            sx={{ background: '#d18a1d', color: '#fff', borderRadius: 6, px: { xs: 2, sm: 5 }, py: { xs: 1, sm: 1.5 }, fontSize: { xs: 16, sm: 22 }, fontWeight: 500, width: { xs: '100%', sm: 200 }, textTransform: 'none', boxShadow: '0 2px 8px #d18a1d33', mb: 6 }}
            onClick={() => navigate('/auth')}
          >
            Learn more
          </Button>
          <Box sx={{ mt: 6, ml: 2, display: { xs: 'none', sm: 'block' } }}>
            <ArrowForwardIcon sx={{ fontSize: 40, color: '#888' }} />
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1.2,
            position: 'relative',
            display: 'flex',
            alignItems: 'stretch',
            minWidth: 0,
            height: { xs: 200, sm: 300, md: '100%' },
            mt: { xs: 2, md: 0 },
          }}
        >
          <svg
            viewBox="0 0 500 900"
            width="0"
            height="0"
            style={{ position: 'absolute' }}
          >
            <defs>
              <clipPath id="waveClip" clipPathUnits="objectBoundingBox">
                <path d="M0,0 Q0.1,0.1 0.2,0.25 Q0.3,0.4 0.2,0.5 Q0.1,0.6 0.2,0.75 Q0.3,0.9 0,1 L1,1 L1,0 Z" />
              </clipPath>
            </defs>
          </svg>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              background: `url(${bgImg}) center/cover no-repeat`,
              clipPath: {
                xs: 'ellipse(80% 100% at 100% 50%)',
                md: 'polygon(20% 0%, 100% 0%, 100% 100%, 20% 100%, 0% 80%, 10% 50%, 0% 20%)',
              },
              transition: 'clip-path 0.3s',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default About; 