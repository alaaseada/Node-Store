
const Product = require('../models/product')


const addNewProduct = async (req, res) => {
 const {id, title,imageUrl, price, description} = req.body
 const new_product = new Product(title, imageUrl, price, description)
 await new_product.save()
 res.redirect('/admin/products')
}

const getAddProductAdminPage = (req, res) => {
 res.status(200).render('admin/add-product', {pageTitle: 'Add product', path: '/admin/add-product'})
}

const getProductListAdminPage = async (req, res) => {
 const products = await Product.fetchAll()
 res.status(200).render('admin/product-list', {pageTitle: 'Admin products', path: '/admin/products', products})
}

const deleteProduct = async (req, res) => {
 await Product.delete(req.params.id)
 const products = await Product.fetchAll()
 res.status(200).json({products})
}

const getSingleProduct = async (req, res) => {
 const product = await Product.fetchSingleProduct(req.params.id)
 res.status(200).render('admin/edit-product', {pageTitle: 'Edit product', path: '/admin/edit-product', product})
}

const updateProduct = async (req, res) => {
 await Product.update(req.params.id, req.body)
  const products = await Product.fetchAll()
 res.status(200).render('admin/product-list', {pageTitle: 'Admin products', path: '/admin/products', products})
}

module.exports = {
 addNewProduct,
 getAddProductAdminPage,
 getProductListAdminPage,
 deleteProduct,
 getSingleProduct,
 updateProduct
}