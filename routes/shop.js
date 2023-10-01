const express = require('express')
const Router = express.Router()
const {getHomePage,
 getProductListPage,
 getProductDetailsPage,
 getCheckoutPage,
 getCartPage,
getOrdersPage} = require('../controllers/shop')

Router.route('/').get(getHomePage)
Router.get('/product-details/:id', getProductDetailsPage)
Router.get('/products', getProductListPage)
Router.get('/cart', getCartPage)
Router.get('/checkout', getCheckoutPage)
Router.get('/orders', getOrdersPage)
Router.post('/add-to-cart/:id')


module.exports = Router