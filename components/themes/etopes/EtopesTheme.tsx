import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
      default: '#0A0F1E',
      paper: '#1A1F2E',
    },
    text: {
      primary: '#E4E8F7',
      secondary: '#A0A8C0',
    },
  },
});

const EtopesTheme: React.FC<{ portfolio: Portfolio }> = ({ portfolio }) => {
  const theme = getTheme('dark');

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        minHeight: '100vh',
        bgcolor: '#0A0F1E',
        color: '#E4E8F7',
        pb: 8,
        paddingTop: 4
      }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {/* Sol Kolon - Avatar ve Skills */}
            <Grid item xs={12} lg={4}>
              <Box sx={{ position: 'sticky', top: 24 }}>
                {/* Avatar Card */}
                <Box sx={{
                  bgcolor: '#1A1F2E',
                  borderRadius: 3,
                  p: 3,
                  mb: 3,
                  border: '1px solid rgba(228, 232, 247, 0.1)',
                  textAlign: 'center'
                }}>
                  <Box
                    component="img"
                    src={portfolio.imgUrl}
                    alt={`${portfolio.firstName} ${portfolio.lastName}`}
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: '50%',
                      mb: 2,
                      border: '3px solid #4F46E5'
                    }}
                  />
                  <Box sx={{ fontSize: '1.5rem', fontWeight: 600, mb: 1 }}>
                    {portfolio.firstName} {portfolio.lastName}
                  </Box>
                  <Box sx={{ color: '#A0A8C0', mb: 2 }}>
                    {portfolio.role}
                  </Box>
                  <Box sx={{ color: '#A0A8C0', mb: 2 }}>
                    {portfolio.city} / {portfolio.country}
                  </Box>
                  <Box sx={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {portfolio.about}
                  </Box>
                </Box>

                {/* Skills Section */}
                <Box sx={{
                  bgcolor: '#1A1F2E',
                  borderRadius: 3,
                  p: 3,
                  border: '1px solid rgba(228, 232, 247, 0.1)'
                }}>
                  <Box sx={{ fontSize: '1.2rem', fontWeight: 600, mb: 2 }}>
                    Skills
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {portfolio.skills.map((skill, index) => (
                      <Box
                        key={index}
                        sx={{
                          bgcolor: '#4F46E5',
                          color: 'white',
                          px: 2,
                          py: 0.5,
                          borderRadius: 2,
                          fontSize: '0.8rem'
                        }}
                      >
                        {skill.title}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Sağ Kolon - Deneyim, Blog ve İletişim */}
            <Grid item xs={12} lg={8}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {/* Experience Section */}
                <Box sx={{
                  bgcolor: '#1A1F2E',
                  borderRadius: 3,
                  p: 3,
                  border: '1px solid rgba(228, 232, 247, 0.1)'
                }}>
                  <Box sx={{ fontSize: '1.2rem', fontWeight: 600, mb: 3 }}>
                    Experience
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {portfolio.experiences.map((exp, index) => (
                      <Box key={index} sx={{ borderLeft: '3px solid #4F46E5', pl: 2 }}>
                        <Box sx={{ fontSize: '1rem', fontWeight: 600, mb: 1 }}>
                          {exp.title}
                        </Box>
                        <Box sx={{ color: '#A0A8C0', fontSize: '0.9rem', mb: 1 }}>
                          {exp.date}
                        </Box>
                        <Box sx={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                          {exp.description}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* Blog Section */}
                <Box sx={{
                  bgcolor: '#1A1F2E',
                  borderRadius: 3,
                  p: 3,
                  border: '1px solid rgba(228, 232, 247, 0.1)'
                }}>
                  <Box sx={{ fontSize: '1.2rem', fontWeight: 600, mb: 3 }}>
                    Latest Posts
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {portfolio.blogs.map((blog) => (
                      <Box key={blog._id} sx={{ 
                        p: 2, 
                        bgcolor: 'rgba(79, 70, 229, 0.1)', 
                        borderRadius: 2,
                        border: '1px solid rgba(79, 70, 229, 0.2)'
                      }}>
                        <Box sx={{ fontSize: '1rem', fontWeight: 600, mb: 1 }}>
                          {blog.title}
                        </Box>
                        <Box sx={{ color: '#A0A8C0', fontSize: '0.8rem', mb: 1 }}>
                          {new Date(blog.createdAt).toLocaleDateString()}
                        </Box>
                        <Box sx={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                          {blog.description}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* Job Request Section */}
                <Box sx={{
                  bgcolor: '#1A1F2E',
                  borderRadius: 3,
                  p: 3,
                  border: '1px solid rgba(228, 232, 247, 0.1)'
                }}>
                  <Box sx={{ fontSize: '1.2rem', fontWeight: 600, mb: 2 }}>
                    Get In Touch with {portfolio.firstName}
                  </Box>
                  <Box sx={{ color: '#A0A8C0', mb: 3, fontSize: '0.9rem' }}>
                    Interested in working together? Send me a message and I'll get back to you as soon as possible.
                  </Box>
                  
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box sx={{
                      bgcolor: 'rgba(228, 232, 247, 0.05)',
                      border: '1px solid rgba(228, 232, 247, 0.2)',
                      borderRadius: 2,
                      p: 2
                    }}>
                      <Box sx={{ fontSize: '0.8rem', color: '#A0A8C0', mb: 0.5 }}>
                        Name
                      </Box>
                      <Box sx={{ fontSize: '0.9rem' }}>
                        [Your Name]
                      </Box>
                    </Box>
                    <Box sx={{
                      bgcolor: 'rgba(228, 232, 247, 0.05)',
                      border: '1px solid rgba(228, 232, 247, 0.2)',
                      borderRadius: 2,
                      p: 2
                    }}>
                      <Box sx={{ fontSize: '0.8rem', color: '#A0A8C0', mb: 0.5 }}>
                        Email
                      </Box>
                      <Box sx={{ fontSize: '0.9rem' }}>
                        [your.email@example.com]
                      </Box>
                    </Box>
                    <Box sx={{
                      bgcolor: 'rgba(228, 232, 247, 0.05)',
                      border: '1px solid rgba(228, 232, 247, 0.2)',
                      borderRadius: 2,
                      p: 2,
                      minHeight: 100
                    }}>
                      <Box sx={{ fontSize: '0.8rem', color: '#A0A8C0', mb: 0.5 }}>
                        Message
                      </Box>
                      <Box sx={{ fontSize: '0.9rem' }}>
                        [Your message here...]
                      </Box>
                    </Box>
                    <Box sx={{
                      bgcolor: '#4F46E5',
                      color: 'white',
                      textAlign: 'center',
                      py: 1.5,
                      borderRadius: 2,
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      '&:hover': {
                        bgcolor: '#4338CA'
                      }
                    }}>
                      Send Message
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default EtopesTheme;


