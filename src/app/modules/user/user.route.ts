import express from 'express'
import { createUser, getSingleUser } from './user.controller';

const router = express.Router();

router.get('/:id', getSingleUser)
router.post('/create-user', createUser)

export const userRoutes = router;