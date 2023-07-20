const authorize = (req,res,next) => {
    const {user} = req.query;
    if(user === 'mike') {
        next()
    } else {
        res.status(404).send('not authorized')
    }
    console.log(req.query)
}

module.exports = authorize