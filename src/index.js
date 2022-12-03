import http from 'http'

const PORT = process.env.PORT || 3000

http
  .createServer((_req, res) => {
    res.writeHead(200)
    res.end('Hello world!')
  })
  .listen(PORT, () => {
    console.log('Server has been started on port ' + PORT)
  })
