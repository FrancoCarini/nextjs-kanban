import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import TodayIcon from '@mui/icons-material/Today'

const Navbar = ({ handleOpen }) => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#3f51b5' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box component="div" sx={{ display: 'flex', alignItems: 'center' }}>
          <TodayIcon />
          <Typography variant="h6">NextJS Kanban</Typography>
        </Box>
        <Button onClick={() => handleOpen()} variant="contained">
          Add Task
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
