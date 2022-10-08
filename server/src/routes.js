const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./authen/isAuthenController')

module.exports = (app) => {
    

    app.post('/user',
    UserController.create
    )

    app.put('/user/:userId',
    UserController.put
    )

    app.delete('/user/:userId',
    UserController.remove
    )

    app.get('/users',
    authen,
    UserController.index
    )

    app.get('/user/:userId',
    UserController.show
    )

    app.post('/login',
    UserAuthenController.login
    )
}