//const user = require("../../../src/v2/models/users")

const home = (req, res) => {
    res.render('home', {
        layout: 'home'
     })
}

const signup = (req, res) => {
    res.render('signup');
}

const login = (req, res) => {
    res.render('login');
}

const dashboard = async (req, res) => {
    try {
            res.render('dashboard', {
              
            })
        } catch (error) {
            console.log(error)
            res.render('error/500')
        }
}

const usersdashboard = async (req, res) => {
    try {
        const users = await user.find().lean()
        res.render('users', {
            users
        })
    } catch (error) {
        console.log(error)
        res.render('error/500')
    }
}


module.exports = {
    home,
    signup,
    login,
    dashboard,
    usersdashboard
}