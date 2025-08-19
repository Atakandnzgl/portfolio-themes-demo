import React from 'react';
import { Box, Typography, Avatar, Card, CardContent, Chip, Grid, Button, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface Portfolio {
  firstName: string;
  lastName: string;
  imgUrl: string;
  about: string;
  role: string;
  city: string;
  skills: Array<{ title: string; description: string }>;
  experiences: Array<{ title: string; description: string; date: string }>;
  blogs: Array<{ _id: string; title: string; description: string; createdAt: string }>;
}

const getTheme = (mode: 'light' | 'dark') => createTheme({
  palette: {
    mode,
    primary: {
      main: '#6366f1',
      dark: '#4f46e5',
    },
    background: {
      default: mode === 'light' ? '#ffffff' : '#0f0f23',
      paper: mode === 'light' ? '#f8fafc' : '#1a1a2e',
    },
    text: {
      primary: mode === 'light' ? '#1e293b' : '#e2e8f0',
      secondary: mode === 'light' ? '#64748b' : '#94a3b8',
    },
  },
});

const ModernTheme: React.FC<{ portfolio: Portfolio }> = ({ portfolio }) => {
  const theme = getTheme('light');

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        p: { xs: 2, sm: 3, md: 4 }, 
        bgcolor: 'background.default', 
        color: 'text.primary', 
        minHeight: '100vh'
      }}>
        {/* Hero Section */}
        <Box sx={{
          textAlign: 'center',
          mb: 6,
          py: 6,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: 4,
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.1)',
            zIndex: 1,
          }
        }}>
          <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Avatar
              src={portfolio.imgUrl}
              alt={`${portfolio.firstName} ${portfolio.lastName}`}
              sx={{
                width: 120,
                height: 120,
                mx: 'auto',
                mb: 3,
                border: '4px solid rgba(255,255,255,0.3)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}
            />
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
              {portfolio.firstName} {portfolio.lastName}
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.9, mb: 3 }}>
              {portfolio.role}
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.8, maxWidth: 600, mx: 'auto', lineHeight: 1.8 }}>
              {portfolio.about}
            </Typography>
          </Box>
        </Box>

        {/* Skills Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, textAlign: 'center' }}>
            Skills & Expertise
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
            {portfolio.skills.map((skill, index) => (
              <Chip
                key={index}
                label={skill.title}
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  px: 2,
                  py: 1,
                  fontSize: '1rem',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                    transform: 'translateY(-2px)',
                    transition: 'all 0.2s ease-in-out'
                  }
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Experience Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, textAlign: 'center' }}>
            Professional Experience
          </Typography>
          <Grid container spacing={3}>
            {portfolio.experiences.map((exp, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{
                  height: '100%',
                  bgcolor: 'background.paper',
                  borderRadius: 3,
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                  }
                }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: 'primary.main' }}>
                      {exp.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                      {exp.date}
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                      {exp.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Blog Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, textAlign: 'center' }}>
            Latest Articles
          </Typography>
          <Grid container spacing={3}>
            {portfolio.blogs.map((blog) => (
              <Grid item xs={12} md={6} key={blog._id}>
                <Card sx={{
                  height: '100%',
                  bgcolor: 'background.paper',
                  borderRadius: 3,
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                  }
                }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {blog.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                      {blog.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Contact Section */}
        <Box sx={{
          bgcolor: 'background.paper',
          borderRadius: 4,
          p: 4,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, textAlign: 'center' }}>
            Let's Work Together
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', mb: 4, color: 'text.secondary' }}>
            Interested in collaborating? I'd love to hear from you.
          </Typography>
          
          <Box component="form" sx={{ maxWidth: 500, mx: 'auto' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: 2,
                    py: 1.5,
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: '1.1rem'
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ModernTheme;
