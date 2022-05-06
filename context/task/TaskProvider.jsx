import { useReducer } from 'react'

import TaskContext from './TaskContext'
import TaskReducer from './TaskReducer'

const TaskProvider = ({ children }) => {
  const initialState = {
    tasks: [],
  }

  const [state, dispatch] = useReducer(TaskReducer, initialState)

  return (
    <TaskContext.Provider value={{ ...state }}>{children}</TaskContext.Provider>
  )
}

export default TaskProvider
