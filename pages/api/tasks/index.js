import { connect, disconnect } from '@/database/db'
import Task from '@/models/Task'

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return getTasks(res)
    case 'POST':
      return createTask(req, res)
    default:
      res.setHeader('Allow', ['POST', 'GET'])
      res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}

const getTasks = async (res) => {
  await connect()
  const tasks = await Task.find().sort({ createdAt: 'ascending' })
  await disconnect()
  return res.status(200).json(tasks)
}

const createTask = async (req, res) => {
  const { title, area } = req.body

  try {
    await connect()
    const newTask = await Task.create({ title, area })
    await disconnect()
    return res.status(201).json(newTask)
  } catch (error) {
    await disconnect()
    return res.status(500).json({ message: 'Error creating Task' })
  }
}
