import { Paper, List } from '@mui/material'

import TaskListCard from './TaskListCard'

function TaskList() {
  return (
    <div>
      <Paper
        sx={{
          height: 'calc(100vh - 20px)',
          overflow: 'auto',
          backgroundColor: 'transparent',
          padding: '3px 5px',
        }}
      >
        <List>
          <TaskListCard />
        </List>
      </Paper>
    </div>
  )
}

export default TaskList
