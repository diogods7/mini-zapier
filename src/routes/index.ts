import { Router } from 'express'
import { createAutomation } from '../controllers/automationController.js'
import { getJob } from '../controllers/jobController.js'

const router = Router()

router.post('/automation', createAutomation)
router.get('/job/:id', getJob)

export default router
