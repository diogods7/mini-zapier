import { Router } from 'express'
import { createAutomation } from '../controllers/automationController'
import { getJob } from '../controllers/jobController'

const router = Router()

router.post('/automation', createAutomation)
router.get('/job/:id', getJob)

export default router
