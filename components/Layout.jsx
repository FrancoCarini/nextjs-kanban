import Head from 'next/head'
import { Box } from '@mui/material'

import Navbar from './Navbar'

const Layout = ({ title = 'OpenJira', handleOpen, children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar handleOpen={handleOpen} />
      <Box sx={{ padding: '10px 20px' }}>{children}</Box>
    </Box>
  )
}

export default Layout
