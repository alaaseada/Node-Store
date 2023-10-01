const express = require('express')
const Router = express.Router()
const {addNewProduct, getAddProductAdminPage, getProductListAdminPage, deleteProduct, getSingleProduct, updateProduct} = require('../controllers/admin')

Router.route('/add-product').get(getAddProductAdminPage).post(addNewProduct)
Router.get('/products', getProductListAdminPage)
Router.get('/edit-product', getProductListAdminPage)
Router.route('/products/:id').delete(deleteProduct)
Router.route('/edit-product/:id').get(getSingleProduct).post(updateProduct)


module.exports = Router