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
      main: '#ec4899',
      dark: '#be185d',
    },
    secondary: {
      main: '#8b5cf6',
      dark: '#7c3aed',
    },
    background: {
      default: mode === 'light' ? '#fdf2f8' : '#1f1f2e',
      paper: mode === 'light' ? '#ffffff' : '#2d2d44',
    },
    text: {
      primary: mode === 'light' ? '#1f2937' : '#f3f4f6',
      secondary: mode === 'light' ? '#6b7280' : '#d1d5db',
    },
  },
});

const PersonaTheme: React.FC<{ portfolio: Portfolio }> = ({ portfolio }) => {
  const theme = getTheme('light');

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        p: { xs: 2, sm: 3, md: 4 }, 
        bgcolor: 'background.default', 
        color: 'text.primary', 
        minHeight: '100vh'
      }}>
        {/* Creative Header */}
        <Box sx={{
          position: 'relative',
          mb: 6,
          py: 8,
          background: 'linear-gradient(45deg, #ec4899 0%, #8b5cf6 50%, #3b82f6 100%)',
          borderRadius: 4,
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            zIndex: 1,
          }
        }}>
          <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center', color: 'white' }}>
            <Avatar
              src={portfolio.imgUrl}
              alt={`${portfolio.firstName} ${portfolio.lastName}`}
              sx={{
                width: 140,
                height: 140,
                mx: 'auto',
                mb: 3,
                border: '4px solid rgba(255,255,255,0.3)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                animation: 'float 3s ease-in-out infinite',
                '@keyframes float': {
                  '0%, 100%': { transform: 'translateY(0px)' },
                  '50%': { transform: 'translateY(-10px)' },
                }
              }}
            />
            <Typography variant="h1" sx={{ 
              fontWeight: 800, 
              mb: 2,
              background: 'linear-gradient(45deg, #ffffff, #f0f9ff)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}>
              {portfolio.firstName} {portfolio.lastName}
            </Typography>
            <Typography variant="h4" sx={{ opacity: 0.9, mb: 3, fontWeight: 300 }}>
              {portfolio.role}
            </Typography>
            <Typography variant="body1" sx={{ 
              opacity: 0.8, 
              maxWidth: 700, 
              mx: 'auto', 
              lineHeight: 1.8,
              fontSize: '1.1rem'
            }}>
              {portfolio.about}
            </Typography>
          </Box>
        </Box>

        {/* Skills with Creative Layout */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h3" sx={{ 
            fontWeight: 700, 
            mb: 4, 
            textAlign: 'center',
            background: 'linear-gradient(45deg, #ec4899, #8b5cf6)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Creative Skills
          </Typography>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 2
          }}>
            {portfolio.skills.map((skill, index) => (
              <Card key={index} sx={{
                bgcolor: 'background.paper',
                borderRadius: 3,
                p: 2,
                textAlign: 'center',
                transition: 'all 0.3s ease-in-out',
                transform: `rotate(${Math.random() * 4 - 2}deg)`,
                '&:hover': {
                  transform: 'rotate(0deg) scale(1.05)',
                  boxShadow: '0 20px 40px rgba(236, 72, 153, 0.2)',
                }
              }}>
                <Typography variant="h6" sx={{ 
                  fontWeight: 600,
                  background: 'linear-gradient(45deg, #ec4899, #8b5cf6)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {skill.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                  {skill.description}
                </Typography>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Experience Timeline */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h3" sx={{ 
            fontWeight: 700, 
            mb: 4, 
            textAlign: 'center',
            background: 'linear-gradient(45deg, #ec4899, #8b5cf6)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Journey
          </Typography>
          <Box sx={{ position: 'relative' }}>
            {portfolio.experiences.map((exp, index) => (
              <Box key={index} sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 4,
                flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }
              }}>
                <Card sx={{
                  flex: 1,
                  bgcolor: 'background.paper',
                  borderRadius: 3,
                  p: 3,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 20px 40px rgba(236, 72, 153, 0.2)',
                  }
                }}>
                  <CardContent>
                    <Typography variant="h5" sx={{ 
                      fontWeight: 600, 
                      mb: 1,
                      background: 'linear-gradient(45deg, #ec4899, #8b5cf6)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
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
                <Box sx={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  mx: { xs: 0, md: 3 },
                  my: { xs: 2, md: 0 },
                  boxShadow: '0 0 20px rgba(236, 72, 153, 0.5)'
                }} />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Creative Blog Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h3" sx={{ 
            fontWeight: 700, 
            mb: 4, 
            textAlign: 'center',
            background: 'linear-gradient(45deg, #ec4899, #8b5cf6)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Creative Thoughts
          </Typography>
          <Grid container spacing={3}>
            {portfolio.blogs.map((blog, index) => (
              <Grid item xs={12} md={6} key={blog._id}>
                <Card sx={{
                  height: '100%',
                  bgcolor: 'background.paper',
                  borderRadius: 3,
                  p: 3,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease-in-out',
                  transform: `rotate(${Math.random() * 2 - 1}deg)`,
                  '&:hover': {
                    transform: 'rotate(0deg) scale(1.02)',
                    boxShadow: '0 20px 40px rgba(236, 72, 153, 0.2)',
                  }
                }}>
                  <CardContent>
                    <Typography variant="h5" sx={{ 
                      fontWeight: 600, 
                      mb: 1,
                      background: 'linear-gradient(45deg, #ec4899, #8b5cf6)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
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

        {/* Creative Contact Section */}
        <Box sx={{
          bgcolor: 'background.paper',
          borderRadius: 4,
          p: 4,
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(236, 72, 153, 0.05), rgba(139, 92, 246, 0.05))',
            zIndex: 1,
          }
        }}>
          <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Typography variant="h3" sx={{ 
              fontWeight: 700, 
              mb: 3, 
              textAlign: 'center',
              background: 'linear-gradient(45deg, #ec4899, #8b5cf6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Let's Create Together
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', mb: 4, color: 'text.secondary' }}>
              Ready to bring your ideas to life? Let's start a creative journey together.
            </Typography>
            
            <Box component="form" sx={{ maxWidth: 600, mx: 'auto' }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
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
                        borderRadius: 3,
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
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
                        borderRadius: 3,
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
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
                      borderRadius: 3,
                      py: 2,
                      fontWeight: 600,
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      background: 'linear-gradient(45deg, #ec4899, #8b5cf6)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #be185d, #7c3aed)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 10px 20px rgba(236, 72, 153, 0.3)',
                      }
                    }}
                  >
                    Start Creative Journey
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PersonaTheme;
