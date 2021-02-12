module.exports = {
    SignIn: async (req, res) => {
        res.render('accountView/signin',{
            req
        })
    }
}