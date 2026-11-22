const cl = console.log;

const app = require('./app')

const port = 3000

app.listen(port, ()=>{
    cl('server is running on port 3000')
})