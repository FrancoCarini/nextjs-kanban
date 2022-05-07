import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Chip,
} from '@mui/material'

function TaskListCard({ task, taskColor }) {
  const onDragStart = (e) => {
    e.dataTransfer.setData('text', task._id)
  }

  const onDragEnd = () => {
    console.log('Termino el drag')
  }

  const onClick = () => {
    console.log('Se hizo Click')
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
      onClick={onClick}
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
          <Typography variant="body2">Creada hace 10 minuto</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

export default TaskListCard
