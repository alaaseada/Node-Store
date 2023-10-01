const Product = require('../models/product')
const Cart = require('../models/cart')

const getHomePage = async (req, res) => {
 const products = await Product.fetchAll()
 res.status(200).render('shop/index', {pageTitle: 'Home Page', path: '/', products})
}
const getProductListPage = async (req, res) => {
 const products = await Product.fetchAll()
 res.status(200).render('shop/product-list', {pageTitle: 'Product list', path: '/products', products})
}
const getProductDetailsPage = async (req, res) => {
 let product = await Product.fetchSingleProduct(req.params.id)
 res.status(200).render('shop/product-details', {pageTitle: 'Product details', path: "/product-details", product})
}
const getCartPage = async (req, res) => {
 let items = await Cart.fetchAll()
 res.status(200).render('shop/cart', {pageTitle: 'Cart', path: '/cart', items})
}
const getCheckoutPage = (req, res) => {
 res.status(200).render('shop/checkout', {pageTitle: 'Checkout', path: '/checkout'})
}
const getOrdersPage = (req, res) => {
 res.status(200).render('shop/orders', {pageTitle: 'Orders', path: '/orders'})
}
const addProductToCart = (req, res) => {

}
module.exports = {
 getHomePage,
 getProductListPage,
 getProductDetailsPage,
 getCheckoutPage,
 getCartPage,
 getOrdersPage
}