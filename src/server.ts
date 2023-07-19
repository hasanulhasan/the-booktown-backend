import mongoose from 'mongoose';
import app from './app';
const port = 9000


async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log('Database connection successful')
    app.listen(port, () => {
      console.log(`Booktown server is listening on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}
main()

