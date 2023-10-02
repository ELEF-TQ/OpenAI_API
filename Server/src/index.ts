import express from 'express'
const app = express()
const port = 3000
app.use(express.json());


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

//___Route configuration :
import youtubeRoute from './routes/youtube';

app.use('/',youtubeRoute)