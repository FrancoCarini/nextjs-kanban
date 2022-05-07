import { useContext, useMemo } from 'react'
import { Paper, List } from '@mui/material'

import TaskListCard from './TaskListCard'
import TaskContext from '@/context/task/TaskContext'

function TaskList({ status }) {
  const { tasks, colors, updateTask } = useContext(TaskContext)

  const tasksByStatus = useMemo(
    () => tasks.filter((task) => task.status === status),
    [tasks]
  )

  const onDropEntry = (e) => {
    const _id = e.dataTransfer.getData('text')
    const task = tasks.find((task) => task._id === _id)
    task.status = status
    updateTask(task)
  }

  const allowDrop = (e) => {
    e.preventDefault()
  }

  return (
    <div onDrop={onDropEntry} onDragOver={allowDrop}>
      <Paper
        sx={{
          height: 'calc(100vh - 20px)',
          overflow: 'auto',
          backgroundColor: 'transparent',
          padding: '3px 5px',
        }}
      >
        <List>
          {tasksByStatus.map((task) => (
            <TaskListCard
              key={task._id}
              task={task}
              taskColor={colors[task.area]}
            />
          ))}
        </List>
      </Paper>
    </div>
  )
}

export default TaskList
