import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LockIcon from '@mui/icons-material/Lock';
import authBg from '../assets/auth bg.jpg';

function AuthForm() {
  const [tab, setTab] = useState(1); // 1 for signup, 0 for login
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerName, setRegisterName] = useState('');

  const handleTabChange = (val) => setTab(val);

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Login: ${loginEmail}`);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Register: ${registerName}, ${registerEmail}`);
  };

  return (
    <Box sx={{ minHeight: '100vh', width: '100vw', bgcolor: '#f5f6fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper elevation={8} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, borderRadius: 6, overflow: 'hidden', minWidth: { xs: 340, md: 900 }, maxWidth: '98vw', position: 'relative', boxShadow: '0 8px 32px #0002' }}>
        {/* Tab-like top center */}
        <Box sx={{ position: 'absolute', top: -24, left: '50%', transform: 'translateX(-50%)', bgcolor: '#fff', borderRadius: '0 0 16px 16px', width: 60, height: 32, zIndex: 2, boxShadow: '0 2px 8px #0001', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <LockIcon sx={{ color: '#7c3aed' }} />
        </Box>
        {/* Left: Image */}
        <Box sx={{ flex: 1, minWidth: 260, display: { xs: 'none', md: 'block' }, position: 'relative', background: `url(${authBg}) center/cover no-repeat` }}>
          <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg, #7c3aedcc 0%, #0ea5e9cc 100%)', zIndex: 1, borderTopLeftRadius: 24, borderBottomLeftRadius: 24 }} />
          <Box sx={{ position: 'absolute', inset: 0, zIndex: 2 }} />
        </Box>
        {/* Right: Form */}
        <Box sx={{ flex: 1.1, p: { xs: 3, md: 6 }, background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 320, position: 'relative', zIndex: 3 }}>
          <Typography variant="h5" fontWeight={700} mb={2} sx={{ textAlign: 'center', color: '#222', mt: 2 }}>
            {tab === 1 ? 'Create an account' : 'Sign in to your account'}
          </Typography>
          <Button
            variant="outlined"
            startIcon={<GoogleIcon sx={{ color: '#ea4335' }} />}
            sx={{ mb: 2, borderRadius: 2, textTransform: 'none', fontWeight: 500, fontSize: 16, bgcolor: '#fff', borderColor: '#eee', color: '#222', boxShadow: 'none', '&:hover': { borderColor: '#bbb', bgcolor: '#f9f9f9' }, width: '100%' }}
            fullWidth
          >
            Create account with Google
          </Button>
          <Divider sx={{ my: 2 }}>Or</Divider>
          {tab === 1 ? (
            <Box component="form" onSubmit={handleRegister} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Email Address"
                type="email"
                value={registerEmail}
                onChange={e => setRegisterEmail(e.target.value)}
                required
                fullWidth
                variant="outlined"
                sx={{ borderRadius: 2 }}
              />
              <TextField
                label="Full Name"
                type="text"
                value={registerName}
                onChange={e => setRegisterName(e.target.value)}
                required
                fullWidth
                variant="outlined"
                sx={{ borderRadius: 2 }}
              />
              <TextField
                label="Password"
                type="password"
                value={registerPassword}
                onChange={e => setRegisterPassword(e.target.value)}
                required
                fullWidth
                variant="outlined"
                sx={{ borderRadius: 2 }}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ borderRadius: 8, py: 1.2, fontWeight: 600, fontSize: '1.1rem', background: 'linear-gradient(90deg, #7c3aed 0%, #0ea5e9 100%)', mt: 2, mb: 1 }}
              >
                Create an account
              </Button>
              <Typography mt={1} fontSize={15} sx={{ textAlign: 'center', color: '#888' }}>
                Already have an account?{' '}
                <Link component="button" onClick={() => handleTabChange(0)} color="primary" fontWeight={500} fontSize={15} underline="hover">
                  Login
                </Link>
              </Typography>
            </Box>
          ) : (
            <Box component="form" onSubmit={handleLogin} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Email Address"
                type="email"
                value={loginEmail}
                onChange={e => setLoginEmail(e.target.value)}
                required
                fullWidth
                variant="outlined"
                sx={{ borderRadius: 2 }}
              />
              <TextField
                label="Password"
                type="password"
                value={loginPassword}
                onChange={e => setLoginPassword(e.target.value)}
                required
                fullWidth
                variant="outlined"
                sx={{ borderRadius: 2 }}
              />
              <Box sx={{ textAlign: 'right', mb: 1 }}>
                <Link href="#" underline="hover" color="primary" fontSize={14}>
                  Forgot password?
                </Link>
              </Box>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ borderRadius: 8, py: 1.2, fontWeight: 600, fontSize: '1.1rem', background: 'linear-gradient(90deg, #7c3aed 0%, #0ea5e9 100%)', mt: 2, mb: 1 }}
              >
                Login
              </Button>
              <Typography mt={1} fontSize={15} sx={{ textAlign: 'center', color: '#888' }}>
                Don&apos;t have an account?{' '}
                <Link component="button" onClick={() => handleTabChange(1)} color="primary" fontWeight={500} fontSize={15} underline="hover">
                  Create one
                </Link>
              </Typography>
            </Box>
          )}
          {/* Social icons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
            <Link href="#" color="#222" sx={{ mx: 0.5 }}><FacebookIcon fontSize="medium" /></Link>
            <Link href="#" color="#222" sx={{ mx: 0.5 }}><TwitterIcon fontSize="medium" /></Link>
            <Link href="#" color="#222" sx={{ mx: 0.5 }}><InstagramIcon fontSize="medium" /></Link>
            <Link href="#" color="#222" sx={{ mx: 0.5 }}><LinkedInIcon fontSize="medium" /></Link>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default AuthForm; 
