import { Request, Response } from 'express'
import { automationQueue } from '../config/redis.js'

export async function createAutomation(req: Request, res: Response) {
  const { text } = req.body

  const job = await automationQueue.add('llm-job', { text })

  res.json({ jobId: job.id })
}