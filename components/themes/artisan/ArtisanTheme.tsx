import React from 'react';
import { Box, Container, Typography, Avatar, Card, CardContent, Chip, Grid, Button, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { motion } from 'framer-motion';

interface Portfolio {
  firstName: string;
  lastName: string;
  imgUrl: string;
  about: string;
  role: string;
  city: string;
  country: string;
  skills: Array<{ title: string; description: string }>;
  experiences: Array<{ title: string; description: string; date: string }>;
  blogs: Array<{ _id: string; title: string; description: string; createdAt: string }>;
}

const getTheme = (mode: 'light' | 'dark') => createTheme({
  palette: {
    mode,
    background: {
      default: '#0F1117',
      paper: '#1A1D26',
    },
    text: {
      primary: '#ffffff',
      secondary: '#a0a0a0',
    },
    primary: {
      main: '#FF5E5B',
    },
  },
});

const ArtisanTheme: React.FC<{ portfolio: Portfolio }> = ({ portfolio }) => {
  const theme = getTheme('dark');

  return (
    <ThemeProvider theme={theme}>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        sx={{
          minHeight: '100vh',
          bgcolor: '#0F1117',
          color: '#ffffff',
          transition: 'background-color 0.3s ease',
          pb: 8,
          pt: 4,
          '& *::selection': {
            backgroundColor: '#FF5E5B',
            color: '#0F1117'
          }
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: '1600px',
            px: { xs: 2, sm: 4, md: 6 }
          }}
        >
          {/* Hero Section with Avatar */}
          <Card sx={{
            bgcolor: '#1A1D26',
            border: '2px solid #2A2D36',
            color: 'white',
            mb: 6
          }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                gap: 4
              }}>
                <Avatar
                  src={portfolio.imgUrl}
                  alt={`${portfolio.firstName} ${portfolio.lastName}`}
                  sx={{
                    width: 128,
                    height: 128,
                    border: '4px solid #FF5E5B',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    bgcolor: '#FF5E5B'
                  }}
                >
                  {portfolio.firstName[0]}{portfolio.lastName[0]}
                </Avatar>
                <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                  <Typography variant="h2" sx={{ 
                    fontWeight: 700, 
                    mb: 2,
                    fontSize: { xs: '2.5rem', md: '3.75rem' }
                  }}>
                    {portfolio.firstName} {portfolio.lastName}
                  </Typography>
                  <Typography variant="h5" sx={{ 
                    color: '#FF5E5B', 
                    mb: 2, 
                    fontWeight: 600 
                  }}>
                    {portfolio.role}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#a0a0a0', mb: 2 }}>
                    📍 {portfolio.city}, {portfolio.country}
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    lineHeight: 1.8, 
                    maxWidth: 600,
                    fontSize: '1.125rem'
                  }}>
                    {portfolio.about}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Two Column Layout */}
          <Grid container spacing={4} sx={{ mb: 4 }}>
            {/* Left Column - Experience */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#ffffff' }}>
                Experience
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {portfolio.experiences.map((exp, index) => (
                  <Card key={index} sx={{
                    bgcolor: '#1A1D26',
                    border: '1px solid #2A2D36',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      transition: 'transform 0.2s ease-in-out'
                    }
                  }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#ffffff' }}>
                        {exp.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#a0a0a0', mb: 1 }}>
                        {exp.date}
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#ffffff' }}>
                        {exp.description}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Grid>

            {/* Right Column - Skills */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#ffffff' }}>
                Skills
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {portfolio.skills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill.title}
                    sx={{
                      bgcolor: '#1A1D26',
                      border: '1px solid #2A2D36',
                      color: '#ffffff',
                      '&:hover': {
                        bgcolor: '#FF5E5B',
                        color: '#0F1117'
                      }
                    }}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>

          {/* Bottom Section - Blogs and Contact */}
          <Grid container spacing={4}>
            {/* Blogs */}
            <Grid item xs={12} md={8}>
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#ffffff' }}>
                Latest Posts
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {portfolio.blogs.map((blog) => (
                  <Card key={blog._id} sx={{
                    bgcolor: '#1A1D26',
                    border: '1px solid #2A2D36',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      transition: 'transform 0.2s ease-in-out'
                    }
                  }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#ffffff' }}>
                        {blog.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#a0a0a0', mb: 2 }}>
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#ffffff' }}>
                        {blog.description}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={4}>
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#ffffff' }}>
                Get In Touch
              </Typography>
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  label="Name"
                  variant="outlined"
                  size="small"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#2A2D36',
                      },
                      '&:hover fieldset': {
                        borderColor: '#FF5E5B',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#FF5E5B',
                      },
                      bgcolor: '#1A1D26',
                      color: '#ffffff',
                    },
                    '& .MuiInputLabel-root': {
                      color: '#a0a0a0',
                      '&.Mui-focused': {
                        color: '#FF5E5B',
                      },
                    },
                  }}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  size="small"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#2A2D36',
                      },
                      '&:hover fieldset': {
                        borderColor: '#FF5E5B',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#FF5E5B',
                      },
                      bgcolor: '#1A1D26',
                      color: '#ffffff',
                    },
                    '& .MuiInputLabel-root': {
                      color: '#a0a0a0',
                      '&.Mui-focused': {
                        color: '#FF5E5B',
                      },
                    },
                  }}
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  size="small"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#2A2D36',
                      },
                      '&:hover fieldset': {
                        borderColor: '#FF5E5B',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#FF5E5B',
                      },
                      bgcolor: '#1A1D26',
                      color: '#ffffff',
                    },
                    '& .MuiInputLabel-root': {
                      color: '#a0a0a0',
                      '&.Mui-focused': {
                        color: '#FF5E5B',
                      },
                    },
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#FF5E5B',
                    color: '#0F1117',
                    border: '1px solid #FF5E5B',
                    '&:hover': {
                      bgcolor: '#0F1117',
                      color: '#FF5E5B',
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default ArtisanTheme;
