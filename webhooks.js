const http = require('http')

const createHandler = require('github-webhook-handler')
const { ESRCH } = require('constants')

const handler = createHandler({
  path: 'docker_deploy',
  secret: 'niumkiki',
})

http.createServer((req,res) => {
  handler(rea,res, err => {
    res.statusCode = 404
    res.end('no such location')
  })
}).listen(7777, () => {
  console.log('webhook listen at 7777')
})

handler.on('err', err => {
  console.error('err',err.message)
})

handler.on('*', event => {
  console.log('Receive', event.payLoad)
})
