// require("dotenv").config()

const Express = require('express')
const bodyParser = require('body-parser')
const userRoute = require('./routes/userRoutes')

var cors = require('cors')
const app = Express()
app.use(cors())


// const host = process.env.DB_HOST
// const DBport = process.env.DB_PORT 
// const name = process.env.DB_NAME 
// const user = process.env.DB_USER 
// const password = process.env.DB_PASSWORD


// const database = `postgres://${user}:${password}@${host}:${DBport}/${name}`
// module.exports = database

const port = process.env.PORT || 5000

app.set('json spaces', 2)
app.use(bodyParser.urlencoded({ extended: false }))

    

userRoute(app)

app.get('/', (req, res) => res.send('Conexão pelo Express bem sucedida'))


app.listen(port, () => console.log('------>Api rodando na porta 5000<--------'))



