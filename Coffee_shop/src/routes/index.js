const menuRouter = require('./menu')
const siteRouter = require('./site')
const detailRouter = require('./detail')
const aboutRouter = require('./about')
const registerRouter = require('./register')
const loginRouter  = require('./login')
const commentRouter = require('./comment')
const cartRouter = require('./cart')
const billRouter = require('./bill')
const purchaseRouter = require('./purchase')
const logoutRouter = require('./logout')
const blogRouter = require('./blog')

function route(app) {
    app.use('/logout', logoutRouter)
    app.use('/purchase', purchaseRouter)
    app.use('/bill', billRouter)
    app.use('/cart', cartRouter)
    app.use('/comment', commentRouter)
    app.use('/login', loginRouter)
    app.use('/register', registerRouter)
    app.use('/menu', menuRouter)
    app.use('/about', aboutRouter)
    app.use('/detail', detailRouter)
    app.use('/blog', blogRouter)
    app.use('/', siteRouter)
}

module.exports = route;