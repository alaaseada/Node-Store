const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')

const { get404ErrorPage } = require('./controllers/errors')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use('/admin', adminRouter)
app.use(shopRouter)

app.use(get404ErrorPage)

app.listen(3000, () => console.log('Server is running on port 3000'))
