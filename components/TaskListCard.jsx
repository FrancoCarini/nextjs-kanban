import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
} from '@mui/material'

function TaskListCard() {
  return (
    <Card
      sx={{
        marginBottom: 1,
        border: '1px solid rgba(0, 0, 0, 0.12)',
        borderLeft: '5px solid rgb(255, 0, 102)',
      }}
      draggable
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            Hacer las compras
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'end',
            paddingRight: 2,
          }}
        >
          <Typography variant="body2">Creada hace 10 minuto</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

export default TaskListCard
