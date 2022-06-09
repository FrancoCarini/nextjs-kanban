import { connect, disconnect } from '@/database/db'
import Task from '@/models/Task'

export default async function handler(req, res) {
  switch (req.method) {
    case 'PUT':
      return updateTask(req, res)
    case 'GET':
      return getTask(req, res)
    default:
      return res
        .status(400)
        .json({ message: `Method does not exists ${req.method}` })
  }
}

const updateTask = async (req, res) => {
  await connect()

  const { id } = req.query
  const { status, title, area } = req.body

  const task = await Task.findById(id)

  if (!task) {
    await disconnect()
    return res.status(400).json({ message: `No Task with id ${id}` })
  }

  try {
    task.title = title
    task.status = status
    task.area = area
    task.save()
    await disconnect()
    res.status(200).json(task)
  } catch (err) {
    await disconnect()
    res.status(500).json({ message: 'Error updating' })
  }
}

const getTask = async (req, res) => {
  const { id } = req.query

  await connect()
  const task = await Entry.findById(id)
  await disconnect()

  if (!task) {
    return res.status(400).json({ message: `No Entry with id ${id}` })
  }

  return res.status(200).json(task)
}
