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
    background: {
      default: mode === 'light' ? '#ffffff' : '#000000',
      paper: mode === 'light' ? '#fafafa' : '#111111',
    },
    text: {
      primary: mode === 'light' ? '#000000' : '#ffffff',
      secondary: mode === 'light' ? '#666666' : '#cccccc',
    },
  },
});

const AuraTheme: React.FC<{ portfolio: Portfolio }> = ({ portfolio }) => {
  const theme = getTheme('light');

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        p: { xs: 2, sm: 3, md: 4 }, 
        bgcolor: 'background.default', 
        color: 'text.primary', 
        minHeight: '100vh',
        fontFamily: 'Inter, sans-serif'
      }}>
        {/* Header Section */}
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: 4,
          mb: 6,
          p: 4,
          border: '1px solid',
          borderColor: 'text.primary',
          borderRadius: 2,
          bgcolor: 'background.paper'
        }}>
          <Avatar
            src={portfolio.imgUrl}
            alt={`${portfolio.firstName} ${portfolio.lastName}`}
            sx={{
              width: { xs: 120, md: 150 },
              height: { xs: 120, md: 150 },
              border: '3px solid',
              borderColor: 'text.primary',
              bgcolor: 'background.default'
            }}
          />
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
              {portfolio.firstName} {portfolio.lastName}
            </Typography>
            <Typography variant="h5" sx={{ color: 'text.secondary', mb: 2 }}>
              {portfolio.role}
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, maxWidth: 600 }}>
              {portfolio.about}
            </Typography>
          </Box>
        </Box>

        {/* Two Column Layout */}
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* Left Column - Experience */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
              Experience
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {portfolio.experiences.map((exp, index) => (
                <Card key={index} sx={{
                  border: '1px solid',
                  borderColor: 'text.primary',
                  bgcolor: 'background.paper',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    transition: 'transform 0.2s ease-in-out'
                  }
                }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {exp.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                      {exp.date}
                    </Typography>
                    <Typography variant="body1">
                      {exp.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid>

          {/* Right Column - Skills */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
              Skills
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {portfolio.skills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill.title}
                  sx={{
                    border: '1px solid',
                    borderColor: 'text.primary',
                    bgcolor: 'background.paper',
                    color: 'text.primary',
                    '&:hover': {
                      bgcolor: 'text.primary',
                      color: 'background.paper'
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
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
              Latest Posts
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {portfolio.blogs.map((blog) => (
                <Card key={blog._id} sx={{
                  border: '1px solid',
                  borderColor: 'text.primary',
                  bgcolor: 'background.paper',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    transition: 'transform 0.2s ease-in-out'
                  }
                }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {blog.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </Typography>
                    <Typography variant="body1">
                      {blog.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={4}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
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
                      borderColor: 'text.primary',
                    },
                    '&:hover fieldset': {
                      borderColor: 'text.primary',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'text.primary',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'text.secondary',
                    '&.Mui-focused': {
                      color: 'text.primary',
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
                      borderColor: 'text.primary',
                    },
                    '&:hover fieldset': {
                      borderColor: 'text.primary',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'text.primary',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'text.secondary',
                    '&.Mui-focused': {
                      color: 'text.primary',
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
                      borderColor: 'text.primary',
                    },
                    '&:hover fieldset': {
                      borderColor: 'text.primary',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'text.primary',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'text.secondary',
                    '&.Mui-focused': {
                      color: 'text.primary',
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: 'text.primary',
                  color: 'background.default',
                  border: '1px solid',
                  borderColor: 'text.primary',
                  '&:hover': {
                    bgcolor: 'background.default',
                    color: 'text.primary',
                  },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default AuraTheme;
