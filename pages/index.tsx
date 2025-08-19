import { useState } from 'react'
import { Box, Container, Typography, Button, Grid, Card, CardContent, AppBar, Toolbar } from '@mui/material'
import Head from 'next/head'
import AuraTheme from '../components/themes/aura/AuraTheme'
import TechTheme from '../components/themes/tech/TechTheme'
import ModernTheme from '../components/themes/modern/ModernTheme'
import PersonaTheme from '../components/themes/persona/PersonaTheme'

// Mock portfolio data
const mockPortfolio = {
  _id: '1',
  firstName: 'Alex',
  lastName: 'Johnson',
  imgUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  userName: 'alexjohnson',
  themeId: 1,
  about: 'Building digital experiences with modern web technologies. Focused on clean code and great user experiences.',
  role: 'Full-Stack Developer',
  city: 'San Francisco',
  country: 'CA',
  email: 'alex@example.com',
  skills: [
    { title: 'React', description: 'Frontend Framework' },
    { title: 'TypeScript', description: 'Type Safety' },
    { title: 'Node.js', description: 'Backend Runtime' },
    { title: 'Python', description: 'Programming Language' },
    { title: 'PostgreSQL', description: 'Database' },
    { title: 'AWS', description: 'Cloud Platform' }
  ],
  experiences: [
    {
      title: 'Senior Developer',
      description: 'Led development of multiple web applications using React and Node.js',
      date: '2022 - Present'
    },
    {
      title: 'Full-Stack Developer',
      description: 'Built and maintained e-commerce platforms with modern technologies',
      date: '2020 - 2022'
    }
  ],
  socialMedias: [
    { icon: 'github', link: 'https://github.com' },
    { icon: 'linkedin', link: 'https://linkedin.com' },
    { icon: 'email', link: 'mailto:alex@example.com' }
  ],
  activeTheme: 1,
  availableThemes: [1, 2, 3, 4],
  blogs: [
    {
      _id: '1',
      title: 'Building Modern Web Apps',
      description: 'A comprehensive guide to building scalable web applications with React and Node.js',
      createdAt: '2024-01-15'
    }
  ]
}

const themes = [
  { id: 'aura', name: 'Aura', description: 'Minimalist black & white design' },
  { id: 'modern', name: 'Modern', description: 'Clean and contemporary layout' },
  { id: 'persona', name: 'Persona', description: 'Personal and creative style' },
  { id: 'tech', name: 'Tech', description: 'Technology-focused theme' }
]

export default function Home() {
  const [selectedTheme, setSelectedTheme] = useState('aura')

  const ThemeComponent = () => {
    switch (selectedTheme) {
      case 'aura':
        return <AuraTheme portfolio={mockPortfolio} />
      case 'modern':
        return <ModernTheme portfolio={mockPortfolio} />
      case 'persona':
        return <PersonaTheme portfolio={mockPortfolio} />
      case 'tech':
        return <TechTheme portfolio={mockPortfolio} />
      default:
        return <AuraTheme portfolio={mockPortfolio} />
    }
  }

  return (
    <>
      <Head>
        <title>Portfolio Themes Demo</title>
        <meta name="description" content="Portfolio Themes Demo - Aura, Modern, Persona, Tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Portfolio Themes Demo
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Portfolio Themes
        </Typography>
        <Typography variant="h6" component="p" gutterBottom align="center" color="text.secondary" sx={{ mb: 4 }}>
          Choose a theme to see how your portfolio would look
        </Typography>

        {/* Theme Selection */}
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {themes.map((theme) => (
            <Grid item xs={12} sm={6} md={3} key={theme.id}>
              <Card 
                sx={{ 
                  cursor: 'pointer',
                  border: selectedTheme === theme.id ? '2px solid #1976d2' : '1px solid #e0e0e0',
                  '&:hover': {
                    borderColor: '#1976d2',
                    transform: 'translateY(-2px)',
                    transition: 'all 0.2s ease-in-out'
                  }
                }}
                onClick={() => setSelectedTheme(theme.id)}
              >
                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {theme.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {theme.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Theme Preview */}
        <Box sx={{ 
          border: '1px solid #e0e0e0', 
          borderRadius: 2, 
          overflow: 'hidden',
          bgcolor: '#fafafa'
        }}>
          <Box sx={{ 
            p: 2, 
            bgcolor: '#f5f5f5', 
            borderBottom: '1px solid #e0e0e0'
          }}>
            <Typography variant="h5" gutterBottom>
              {themes.find(t => t.id === selectedTheme)?.name} Theme Preview
            </Typography>
          </Box>
          <Box sx={{ minHeight: '600px' }}>
            <ThemeComponent />
          </Box>
        </Box>

        {/* Deploy Instructions */}
        <Box sx={{ mt: 4, p: 3, bgcolor: '#f5f5f5', borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            🚀 Deploy This Demo
          </Typography>
          <Typography variant="body2" paragraph>
            This demo showcases the portfolio themes. To deploy your own portfolio with these themes:
          </Typography>
          <Box component="ol" sx={{ pl: 2 }}>
            <Typography component="li" variant="body2" sx={{ mb: 1 }}>
              Clone this repository
            </Typography>
            <Typography component="li" variant="body2" sx={{ mb: 1 }}>
              Replace mock data with your portfolio information
            </Typography>
            <Typography component="li" variant="body2" sx={{ mb: 1 }}>
              Deploy to Vercel, Netlify, or GitHub Pages
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  )
}

