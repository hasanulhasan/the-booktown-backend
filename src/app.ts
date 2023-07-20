import express, { Application, Request, Response } from 'express';
import cors from "cors"
import bookRoutes from '../app/modules/book/book.route'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/v1', bookRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Booktown backend started')
})

export default app;