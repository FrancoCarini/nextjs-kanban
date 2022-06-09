import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Chip,
} from '@mui/material'

import { getTimeAgo } from '@/utils/time'

function TaskListCard({ task, taskColor, openEditModal }) {
  const onDragStart = (e) => {
    e.dataTransfer.setData('text', task._id)
  }

  const onDragEnd = () => {
    console.log('Termino el drag')
  }

  return (
    <Card
      sx={{
        marginBottom: 1,
        border: '1px solid rgba(0, 0, 0, 0.12)',
        borderLeft: `5px solid ${taskColor}`,
      }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onClick={openEditModal}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{task.title}</Typography>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingRight: 2,
          }}
        >
          <Chip
            label={task.area}
            sx={{
              backgroundColor: taskColor,
              color: 'white',
            }}
          />
          <Typography variant="body2">
            Created {getTimeAgo(new Date(task.createdAt).valueOf())}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

export default TaskListCard
