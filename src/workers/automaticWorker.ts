import { Worker } from 'bullmq'
import { connection } from '../config/redis.js'
import { processLLM } from '../services/llmservice.js'

new Worker(
  'automation',
  async job => {
    const { text } = job.data
    const result = await processLLM(text)
    return result
  },
  { connection }
)