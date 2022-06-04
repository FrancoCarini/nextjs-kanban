import { useState } from 'react'
import { CardHeader, Grid, Card, Divider } from '@mui/material'

import Layout from '@/components/Layout'
import TaskList from '@/components/TaskList'
import PopUp from '@/components/PopUp'

export default function Home() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen((prevState) => !prevState)
  }

  return (
    <Layout title="NextJS-Kanban" handleOpen={handleOpen}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px )' }}>
            <CardHeader title="Pending" />
            <Divider light />
            <TaskList status="pending" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px )' }}>
            <CardHeader title="In Progress" />
            <Divider light />
            <TaskList status="in-progress" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px )' }}>
            <CardHeader title="Finished" />
            <Divider light />
            <TaskList status="finished" />
          </Card>
        </Grid>
      </Grid>

      <PopUp isOpen={open} handleOpen={handleOpen} mode="new" />
    </Layout>
  )
}
