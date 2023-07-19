import express from 'express';
const app = express()
import cors from "cors"

app.use(cors())
app.get('/', (req, res) => {
  res.send('Booktown backend started')
})

export default app;