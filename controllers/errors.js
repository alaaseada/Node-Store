const get404ErrorPage = (req, res) => {
 res.status(404).render('404', {pageTitle: 'Page Not Found', path: '/page-not-found'})
}


module.exports = {get404ErrorPage}