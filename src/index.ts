import express from 'express'
import dotenv from 'dotenv'
import router from './routes'
import './workers/automationWorker.js'

dotenv.config()

const app = express()
app.use(express.json())

app.use(router)

app.listen(3001, () => {
  console.log('Server running on 3001')
})