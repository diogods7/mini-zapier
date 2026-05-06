import { Redis } from 'ioredis'
import { Queue } from 'bullmq'

export const connection = new Redis({
  host: 'localhost',
  port: 6379
})

export const automationQueue = new Queue('automation', { connection })