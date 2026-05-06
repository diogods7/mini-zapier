import { Request, Response } from 'express'
import { automationQueue } from '../config/redis.js'

export async function getJob(req: Request, res: Response) {
  const job = await automationQueue.getJob(String(req.params.id))

  if (!job) return res.status(404).json({ error: 'Not found' })

  const state = await job.getState()
  const result = job.returnvalue

  res.json({ state, result })
}