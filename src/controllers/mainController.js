const path = require('path');

const controller = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'views', 'home.html'))
    },
    about: (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'views', 'about.html'))
    }
}

module.exports = controller;