import express from 'express'

const app = express()

app.get('/', (_, res) => {
  res.status(200).send()
})

app.listen(2001, () => console.log(`Running on port ${2001}`))