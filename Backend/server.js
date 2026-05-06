import 'dotenv/config'
import app from './src/app.js'
import connectToDB from "./src/config/database.js"

const port = process.env.PORT || 5000;
connectToDB()


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})