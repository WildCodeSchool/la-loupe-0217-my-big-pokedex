import express from 'express';
import User from '../models/user.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    app.get('/token_status', Auth.hasAuthorization, (req, res, next) => {
        res.sendStatus(200);
    });

    var user = new User();

    app.post('/login', user.connect);

    router.get('/', user.findAll);

    router.get('/:id', user.findById);

    router.post('/', user.create);

    router.put('/:id', Auth.hasAuthorization, user.update);

    router.put('/', Auth.hasAuthorization, user.updateAll);

    router.delete('/:id', Auth.isAdministrator, user.delete);

    app.use('/users', router);

};
