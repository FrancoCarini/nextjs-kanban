const TaskReducer = (state, action) => {
  switch (action.type) {
    case 'GET_TASKS':
      return {
        ...state,
        tasks: action.payload,
      }
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task._id === action.payload._id) {
            task.status = action.payload.status
            task.title = action.payload.title
            task.area = action.payload.area
          }
          return task
        }),
      }
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      }
    default:
      return {
        ...state,
      }
  }
}

export default TaskReducer
