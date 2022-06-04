import { useState, useContext } from 'react'
import {
  Dialog,
  TextField,
  Divider,
  Grid,
  DialogTitle,
  DialogContent,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Button,
} from '@mui/material'

import TaskContext from '@/context/task/TaskContext'

const PopUp = ({ isOpen, handleOpen, mode = 'new' }) => {
  const { areas, addTask } = useContext(TaskContext)

  const [title, setTitle] = useState('')
  const [area, setArea] = useState(areas[0])

  const handleAddTask = async (e) => {
    e.preventDefault()
    await addTask(title, area)
  }

  return (
    <Dialog open={isOpen} onClose={() => handleOpen()} maxWidth="sm" fullWidth>
      <DialogTitle>{mode === 'new' ? 'New' : 'Edit'} Task</DialogTitle>
      <Divider />
      <DialogContent>
        <form onSubmit={handleAddTask}>
          <Grid container rowSpacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                label="Description"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Area</InputLabel>
                <Select
                  defaultValue={areas[0]}
                  value={area}
                  label="Age"
                  onChange={(e) => setArea(e.target.value)}
                >
                  {areas.map((area) => (
                    <MenuItem key={area} value={area}>
                      {area}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained">
                Add Task
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default PopUp
