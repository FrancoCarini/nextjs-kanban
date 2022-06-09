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

const PopUp = ({ isOpen, task, handleClose }) => {
  const { areas, addTask, updateTask } = useContext(TaskContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const title = e.target.elements.title.value
    const area = e.target.elements.area.value

    if (!task) {
      await addTask(title, area)
    } else {
      await updateTask({
        ...task,
        title,
        area,
      })
    }

    e.target.elements.title.value = ''
    e.target.elements.area.value = ''
    handleClose()
  }

  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>{task ? 'Edit' : 'New'} Task</DialogTitle>
      <Divider />
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Grid container rowSpacing={2}>
            <Grid item xs={12}>
              <TextField
                name="title"
                variant="outlined"
                label="Description"
                fullWidth
                defaultValue={task ? task.title : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Area</InputLabel>
                <Select
                  name="area"
                  defaultValue={task ? task.area : areas[0]}
                  label="Area"
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
                {task ? 'Edit' : 'New'} Task
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default PopUp
