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
      main: '#2563eb',
      dark: '#1e40af',
    },
    background: {
      default: mode === 'light' ? '#f8fafc' : '#0f172a',
      paper: mode === 'light' ? '#ffffff' : '#1e293b',
    },
    text: {
      primary: mode === 'light' ? '#1e293b' : '#f1f5f9',
      secondary: mode === 'light' ? '#64748b' : '#94a3b8',
    },
  },
});

const TechTheme: React.FC<{ portfolio: Portfolio }> = ({ portfolio }) => {
  const theme = getTheme('light');

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        p: { xs: 2, sm: 3, md: 4 }, 
        bgcolor: 'background.default', 
        color: 'text.primary', 
        minHeight: '100vh'
      }}>
        {/* Header Card - Large Blue Card */}
        <Box sx={{
          bgcolor: '#2563eb',
          borderRadius: 3,
          p: 4,
          mb: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          }
        }}>
          <Box sx={{ color: 'white', flex: 1, mr: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
              {portfolio.firstName} {portfolio.lastName}
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, mb: 2 }}>
              {portfolio.role}
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.8, lineHeight: 1.6 }}>
              {portfolio.about}
            </Typography>
          </Box>
          <Avatar
            src={portfolio.imgUrl}
            alt={`${portfolio.firstName} ${portfolio.lastName}`}
            sx={{
              width: { xs: 80, sm: 100, md: 120, lg: 150 },
              height: { xs: 80, sm: 100, md: 120, lg: 150 },
              border: '4px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              bgcolor: 'rgba(255, 255, 255, 0.1)'
            }}
          />
        </Box>

        {/* Two Column Layout */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr',
            lg: '1fr 1fr'
          },
          gap: { xs: 3, sm: 4, md: 4 },
          mb: 4
        }}>
          {/* Left Column - Experience Cards */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3
          }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Experience
            </Typography>
            {portfolio.experiences.map((exp, index) => (
              <Card key={index} sx={{
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.2s ease-in-out'
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

          {/* Right Column - Skills Card */}
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Skills
            </Typography>
            <Box sx={{
              bgcolor: 'background.paper',
              borderRadius: 2,
              p: 3,
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                transition: 'all 0.2s ease-in-out'
              }
            }}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                {portfolio.skills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill.title}
                    sx={{
                      bgcolor: '#2563eb',
                      color: 'white',
                      '&:hover': {
                        bgcolor: '#1e40af',
                      }
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Bottom Section - Blogs and Job Request */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: '2fr 1fr',
            lg: '2fr 1fr'
          },
          gap: { xs: 3, sm: 4, md: 4 }
        }}>
          {/* Blogs Section */}
          <Box sx={{
            bgcolor: '#1e40af',
            borderRadius: 3,
            p: 3,
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
            }
          }}>
            <Typography variant="h6" gutterBottom sx={{ color: 'white', mb: 2 }}>
              Latest Posts
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {portfolio.blogs.map((blog) => (
                <Card key={blog._id} sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                    transition: 'background-color 0.2s ease-in-out'
                  }
                }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {blog.title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.9 }}>
                      {blog.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>

          {/* Job Request Section */}
          <Box sx={{
            bgcolor: '#2563eb',
            borderRadius: 3,
            p: 3,
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
            }
          }}>
            <Typography variant="h6" gutterBottom sx={{ color: 'white', mb: 2 }}>
              Get In Touch with {portfolio.firstName}
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, color: 'white', opacity: 0.8 }}>
              Interested in working together? Send me a message and I'll get back to you as soon as possible.
            </Typography>
            
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Name"
                variant="outlined"
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&.Mui-focused': {
                      color: 'white',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: 'white',
                  },
                }}
              />
              <TextField
                label="Email"
                variant="outlined"
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&.Mui-focused': {
                      color: 'white',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: 'white',
                  },
                }}
              />
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={3}
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&.Mui-focused': {
                      color: 'white',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: 'white',
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                size="small"
                sx={{
                  borderRadius: '8px',
                  py: 1,
                  fontWeight: 600,
                  textTransform: 'none',
                  bgcolor: 'white',
                  color: '#2563eb',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default TechTheme;
