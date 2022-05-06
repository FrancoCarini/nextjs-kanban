import { AppBar, Toolbar, Typography } from '@mui/material'
import TodayIcon from '@mui/icons-material/Today'

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#3f51b5' }}>
      <Toolbar>
        <TodayIcon />
        <Typography variant="h6">NextJS Kanban</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
