import { useReducer, useEffect } from 'react'
import axios from 'axios'

import TaskContext from './TaskContext'
import TaskReducer from './TaskReducer'

const TaskProvider = ({ children }) => {
  const initialState = {
    tasks: [],
    colors: {
      development: '#0B8E1D',
      marketing: '#FF00EC',
      finance: '#0087FF',
      stragegy: '#FFFB00',
    },
  }

  const [state, dispatch] = useReducer(TaskReducer, initialState)

  const getAllTasks = async () => {
    const res = await axios.get('/api/tasks')
    dispatch({
      type: 'GET_TASKS',
      payload: res.data,
    })
  }

  useEffect(() => {
    getAllTasks()
  }, [])

  const updateTask = async (task, showNotification = false) => {
    const { _id, status, title } = task

    try {
      await axios.put(
        `/api/tasks/${_id}`,
        {
          title,
          status,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      dispatch({
        type: 'UPDATE_TASK',
        payload: task,
      })
    } catch (err) {}
  }

  return (
    <TaskContext.Provider value={{ ...state, getAllTasks, updateTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider
