const jsappserver = require('@launchpad.hu/jsappserver/adapters/express')
const hostname = require('@launchpad.hu/jsappserver/routers/hostname')
const gitCommit = require('@launchpad.hu/jsappserver/loaders/gitCommit')
const express = require('express')

const app = express()

app.use(
  jsappserver({
    require,
    routers: [subdomain('localhost', (d) => gitCommit(d))],
  }),
)

app.get('/', (req, res) => {
  res.send('hello')
})

const port = +(process.env.PORT || 3456)
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
